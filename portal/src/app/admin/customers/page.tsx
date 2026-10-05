import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { getServerI18n } from '@/lib/i18n/server';
import type { Customer } from '@/lib/types';
import {
  AdminCustomersTable,
  type CustomerOrderStats,
} from '@/components/admin/AdminCustomersTable';

export default async function AdminCustomersPage() {
  const { t } = await getServerI18n();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: staff } = await supabase
    .from('staff_profiles')
    .select('is_admin, full_name')
    .eq('auth_user_id', user.id)
    .single();

  if (!staff?.is_admin) redirect('/dashboard');

  const [{ data: customers }, { data: orders }] = await Promise.all([
    supabase.from('customers').select('*').order('company_name'),
    supabase.from('orders').select('customer_id, status, created_at'),
  ]);

  const stats: Record<string, CustomerOrderStats> = {};
  for (const o of orders ?? []) {
    const s = (stats[o.customer_id] ??= { total: 0, open: 0, lastOrderAt: null });
    s.total += 1;
    if (o.status === 'active' || o.status === 'on_hold' || o.status === 'draft') s.open += 1;
    if (!s.lastOrderAt || o.created_at > s.lastOrderAt) s.lastOrderAt = o.created_at;
  }

  return (
    <div className="portal-page">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="eyebrow mb-2">{t('common.admin')}</div>
            <h1 className="text-2xl font-black text-bone">{t('admin.customersTitle')}</h1>
          </div>
          <Link href="/admin/customers/new" className="btn-primary flex items-center gap-2">
            <Plus size={18} /> {t('admin.newCustomer')}
          </Link>
        </div>

        <AdminCustomersTable customers={(customers ?? []) as Customer[]} stats={stats} />
    </div>
  );
}
