import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { mimeFromFileName } from '@/lib/documents';
import { downloadLocalized, requestLocale, signLocalized } from '@/lib/localized-files';

interface RouteProps {
  params: Promise<{ id: string }>;
}

async function authorizeDocument(id: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };
  }

  const { data: doc } = await supabase
    .from('order_documents')
    .select('*, orders!inner(customer_id)')
    .eq('id', id)
    .single();

  if (!doc) {
    return { error: NextResponse.json({ error: 'Not found' }, { status: 404 }) };
  }

  const { data: staff } = await supabase
    .from('staff_profiles')
    .select('is_admin')
    .eq('auth_user_id', user.id)
    .single();

  const { data: customer } = await supabase
    .from('customers')
    .select('id')
    .eq('auth_user_id', user.id)
    .single();

  const order = doc.orders as { customer_id: string };
  const isOwner = customer?.id === order.customer_id;
  const isStaff = !!staff?.is_admin;

  if (!isStaff && (!isOwner || !doc.is_visible_to_customer)) {
    return { error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) };
  }

  return { doc };
}

export async function GET(request: Request, { params }: RouteProps) {
  const { id } = await params;
  const auth = await authorizeDocument(id);
  if ('error' in auth && auth.error) return auth.error;

  const doc = auth.doc!;
  const inline = new URL(request.url).searchParams.get('inline') === '1';
  const locale = await requestLocale(request);

  const storageClient = process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createAdminClient()
    : await createClient();

  if (inline) {
    const { data: fileData, error } = await downloadLocalized(
      storageClient.storage.from('order-documents'),
      doc.file_path,
      locale
    );

    if (error || !fileData) {
      return NextResponse.json({ error: error?.message ?? 'Dosya alınamadı' }, { status: 500 });
    }

    const mime = doc.mime_type || mimeFromFileName(doc.name);
    const buffer = await fileData.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': mime,
        'Content-Disposition': `inline; filename="${encodeURIComponent(doc.name)}"`,
        'Cache-Control': 'private, no-store',
      },
    });
  }

  const { data, error } = await signLocalized(
    storageClient.storage.from('order-documents'),
    doc.file_path,
    locale,
    3600
  );

  if (error || !data?.signedUrl) {
    return NextResponse.json({ error: error?.message ?? 'URL oluşturulamadı' }, { status: 500 });
  }

  return NextResponse.json({
    url: data.signedUrl,
    name: doc.name,
    mime_type: doc.mime_type || mimeFromFileName(doc.name),
  });
}
