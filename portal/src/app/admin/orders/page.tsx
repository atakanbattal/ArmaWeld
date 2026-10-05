import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { AdminOrdersTable } from '@/components/admin/AdminOrdersTable';
import { OrdersFilterBanner } from '@/components/admin/OrdersFilterBanner';
import { getServerI18n } from '@/lib/i18n/server';
import {
  filterOrdersByPreset,
  filterOrdersByStatus,
  isOrderOverdue,
  orderListFilterLabelKey,
  parseOrderListQuery,
} from '@/lib/portal/order-list-filters';
import type { Order } from '@/lib/types';

interface AdminOrdersPageProps {
  searchParams: Promise<{ filter?: string; status?: string; customer?: string }>;
}

export default async function AdminOrdersPage({ searchParams }: AdminOrdersPageProps) {
  const { t } = await getServerI18n();
  const { filter, status, customer } = await searchParams;
  const parsed = parseOrderListQuery({ filter, status });
  const filterLabelKey = orderListFilterLabelKey(parsed);

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

  const { data: orders } = await supabase
    .from('orders')
    .select('*, customers(company_name, contact_name)')
    .order('job_number', { ascending: false });

  const allOrders = (orders ?? []) as (Order & { customers: { company_name: string } })[];
  const customerOrders = customer ? allOrders.filter((o) => o.customer_id === customer) : allOrders;
  const customerName = customer ? customerOrders[0]?.customers?.company_name : undefined;
  const visibleOrders = parsed.preset
    ? filterOrdersByPreset(customerOrders, parsed.preset)
    : parsed.status
      ? filterOrdersByStatus(customerOrders, parsed.status)
      : customerOrders;
  const showDelayColumn =
    parsed.preset === 'overdue' || visibleOrders.some((o) => isOrderOverdue(o));

  return (
    <div className="portal-page">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="eyebrow mb-2">{t('common.admin')}</div>
          <h1 className="text-2xl font-black text-bone">{t('admin.ordersTitle')}</h1>
        </div>
        <Link href="/admin/orders/new" className="btn-primary flex items-center gap-2">
          <Plus size={18} /> {t('admin.newOrder')}
        </Link>
      </div>

      {(filterLabelKey || customer) && (
        <OrdersFilterBanner
          labelKey={filterLabelKey ?? undefined}
          label={
            customer
              ? [customerName ?? t('admin.customer'), filterLabelKey ? t(filterLabelKey) : null]
                  .filter(Boolean)
                  .join(' · ')
              : undefined
          }
          count={visibleOrders.length}
          total={allOrders.length}
        />
      )}

      <AdminOrdersTable orders={visibleOrders} showDelayColumn={showDelayColumn} />
    </div>
  );
}
