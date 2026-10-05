import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { downloadLocalized, requestLocale } from '@/lib/localized-files';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id: orderId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: order } = await supabase
    .from('orders')
    .select('*, customers(auth_user_id, email)')
    .eq('id', orderId)
    .single();

  if (!order) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const { data: staff } = await supabase
    .from('staff_profiles')
    .select('is_admin')
    .eq('auth_user_id', user.id)
    .single();

  const customerId = await supabase.rpc('get_customer_id');
  const isOwner =
    staff?.is_admin ||
    order.customer_id === customerId.data ||
    order.customers?.auth_user_id === user.id;

  if (!isOwner) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { data: documents } = await supabase
    .from('order_documents')
    .select('*')
    .eq('order_id', orderId)
    .eq('is_visible_to_customer', true);

  if (!documents?.length) {
    return NextResponse.json({ error: 'No documents' }, { status: 404 });
  }

  const admin = createAdminClient();
  const locale = await requestLocale(request);
  const zip = new JSZip();

  for (const doc of documents) {
    const { data: fileData, error } = await downloadLocalized(
      admin.storage.from('order-documents'),
      doc.file_path,
      locale
    );

    if (error || !fileData) continue;

    const buffer = Buffer.from(await fileData.arrayBuffer());
    const safeName = doc.name.replace(/[/\\?%*:|"<>]/g, '-');
    zip.file(safeName, buffer);
  }

  const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
  const filename = `${order.job_number}_dossier.zip`;

  return new NextResponse(new Uint8Array(zipBuffer), {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'private, no-store',
    },
  });
}
