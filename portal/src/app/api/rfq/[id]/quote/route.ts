import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { mimeFromFileName } from '@/lib/documents';
import { downloadLocalized, requestLocale, signLocalized } from '@/lib/localized-files';

interface RouteProps {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteProps) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: rfq } = await supabase
    .from('rfq_requests')
    .select('id, customer_id, quote_file_path, quote_file_name')
    .eq('id', id)
    .single();

  if (!rfq?.quote_file_path) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const { data: staff } = await supabase
    .from('staff_profiles')
    .select('is_admin')
    .eq('auth_user_id', user.id)
    .maybeSingle();

  const { data: customerId } = await supabase.rpc('get_customer_id');
  const isStaff = !!staff?.is_admin;
  const isOwner = customerId === rfq.customer_id;

  if (!isStaff && !isOwner) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const inline = new URL(request.url).searchParams.get('inline') === '1';
  const locale = await requestLocale(request);
  const storageClient = process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createAdminClient()
    : await createClient();

  if (inline) {
    const { data: fileData, error } = await downloadLocalized(
      storageClient.storage.from('order-documents'),
      rfq.quote_file_path,
      locale
    );

    if (error || !fileData) {
      return NextResponse.json({ error: error?.message ?? 'Dosya alınamadı' }, { status: 500 });
    }

    const fileName = rfq.quote_file_name ?? 'quote.pdf';
    const mime = mimeFromFileName(fileName);
    const buffer = await fileData.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': mime,
        'Content-Disposition': `inline; filename="${encodeURIComponent(fileName)}"`,
        'Cache-Control': 'private, no-store',
      },
    });
  }

  const { data, error } = await signLocalized(
    storageClient.storage.from('order-documents'),
    rfq.quote_file_path,
    locale,
    3600
  );

  if (error || !data?.signedUrl) {
    return NextResponse.json({ error: error?.message ?? 'URL oluşturulamadı' }, { status: 500 });
  }

  return NextResponse.json({
    url: data.signedUrl,
    name: rfq.quote_file_name ?? 'quote.pdf',
  });
}
