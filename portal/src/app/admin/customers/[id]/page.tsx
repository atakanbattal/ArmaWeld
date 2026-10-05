import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { EditCustomerForm } from '@/components/admin/EditCustomerForm';
import { getServerI18n } from '@/lib/i18n/server';
import type { Customer } from '@/lib/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCustomerPage({ params }: PageProps) {
  const { id } = await params;
  const { t } = await getServerI18n();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: staff } = await supabase
    .from('staff_profiles')
    .select('is_admin, full_name')
    .eq('auth_user_id', user.id)
    .single();

  if (!staff?.is_admin) redirect('/dashboard');

  const { data: customer } = await supabase.from('customers').select('*').eq('id', id).single();
  if (!customer) notFound();

  const { count: orderCount } = await supabase
    .from('orders')
    .select('*', { count: 'exact', head: true })
    .eq('customer_id', id);

  return (
    <div className="portal-page">
        <Link href="/admin/customers" className="inline-flex items-center gap-2 text-sm text-steel-2 hover:text-arc-2 mb-6">
          <ArrowLeft size={16} /> {t('admin.backToCustomers')}
        </Link>
        <div className="mb-6">
          <div className="eyebrow mb-2">{t('admin.editCustomerPage')}</div>
          <h1 className="text-2xl font-black text-bone">{customer.company_name}</h1>
          <p className="text-sm text-steel-2 mt-1">
            {orderCount ? (
              <Link href={`/admin/orders?customer=${id}`} className="text-arc-2 hover:underline">
                {t('admin.orderCountRegistered', { count: orderCount })} →
              </Link>
            ) : (
              t('admin.orderCountRegistered', { count: 0 })
            )}
          </p>
        </div>
        <EditCustomerForm customer={customer as Customer} />
    </div>
  );
}
