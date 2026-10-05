'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { differenceInCalendarDays, format } from 'date-fns';
import { StatusBadge } from '@/components/StatusBadge';
import { useI18n } from '@/lib/i18n/context';
import { getOrderStatusLabel } from '@/lib/i18n/helpers';
import { isOrderOverdue } from '@/lib/portal/order-list-filters';
import type { OrderStatus } from '@/lib/stages';
import type { Order } from '@/lib/types';

type AdminOrderRow = Order & { customers?: { company_name: string } | null };

const STATUS_ORDER: OrderStatus[] = ['active', 'on_hold', 'draft', 'completed', 'shipped', 'cancelled'];

function normalize(value: string) {
  return value.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function AdminOrdersTable({
  orders,
  showDelayColumn,
}: {
  orders: AdminOrderRow[];
  showDelayColumn: boolean;
}) {
  const { t, dateLocale } = useI18n();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<OrderStatus | 'all'>('all');

  const counts = useMemo(() => {
    const map = new Map<OrderStatus, number>();
    for (const o of orders) map.set(o.status, (map.get(o.status) ?? 0) + 1);
    return map;
  }, [orders]);

  const rows = useMemo(() => {
    const q = normalize(query.trim());
    return orders.filter((o) => {
      if (status !== 'all' && o.status !== status) return false;
      if (!q) return true;
      const haystack = normalize(
        [o.job_number, o.title, o.customers?.company_name, o.material, o.serial_number]
          .filter(Boolean)
          .join(' ')
      );
      return haystack.includes(q);
    });
  }, [orders, query, status]);

  const today = new Date();
  const colSpan = showDelayColumn ? 8 : 7;

  const deliveryCell = (order: AdminOrderRow) => {
    if (!order.expected_delivery) return <span className="text-steel-1">—</span>;
    const date = new Date(order.expected_delivery);
    const label = format(date, 'd MMM yyyy', { locale: dateLocale });
    const open = order.status === 'active' || order.status === 'on_hold';
    if (!open) return <span className="text-steel-2">{label}</span>;
    const days = differenceInCalendarDays(date, today);
    const hint =
      days < 0
        ? t('admin.list.overdueDays', { days: Math.abs(days) })
        : days === 0
          ? t('admin.list.dueToday')
          : t('admin.list.dueInDays', { days });
    const tone = days < 0 ? 'text-danger' : days <= 7 ? 'text-warning' : 'text-steel-2';
    return (
      <div className="leading-tight">
        <div className="text-steel-3">{label}</div>
        <div className={`text-xs ${tone}`}>{hint}</div>
      </div>
    );
  };

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={t('common.status')}>
          {(['all', ...STATUS_ORDER] as const).map((key) => {
            const count = key === 'all' ? orders.length : counts.get(key) ?? 0;
            if (key !== 'all' && count === 0) return null;
            const selected = status === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setStatus(key)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  selected
                    ? 'border-arc-2 bg-arc-2/15 text-bone'
                    : 'border-ink-4 bg-ink-2 text-steel-2 hover:text-bone'
                }`}
              >
                {key === 'all' ? t('admin.list.all') : getOrderStatusLabel(t, key)}
                <span className="font-mono text-[11px] text-steel-2">{count}</span>
              </button>
            );
          })}
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">{t('admin.list.searchOrders')}</span>
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel-2"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('admin.list.searchOrders')}
            className="input w-full pl-9 pr-9 text-sm"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-steel-2 hover:text-bone"
              aria-label={t('admin.list.clear')}
            >
              <X size={14} />
            </button>
          )}
        </label>
      </div>

      {(query || status !== 'all') && (
        <p className="mb-3 text-xs text-steel-2">
          {t('admin.list.resultCount', { count: rows.length, total: orders.length })}
        </p>
      )}

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse admin-orders-table">
            <thead>
              <tr className="border-b border-ink-4 bg-ink-3">
                <th className="text-left p-4 table-head">{t('admin.jobNumber')}</th>
                <th className="text-left p-4 table-head">{t('admin.title')}</th>
                <th className="text-left p-4 table-head">{t('admin.customer')}</th>
                {showDelayColumn && (
                  <th className="text-left p-4 table-head">{t('admin.delayReason.column')}</th>
                )}
                <th className="text-left p-4 table-head">{t('admin.list.delivery')}</th>
                <th className="text-left p-4 table-head">{t('admin.list.progress')}</th>
                <th className="text-left p-4 table-head">{t('common.status')}</th>
                <th className="text-left p-4 table-head"></th>
              </tr>
            </thead>
            <tbody>
              {!rows.length ? (
                <tr>
                  <td colSpan={colSpan} className="p-8 text-center text-steel-2">
                    {orders.length ? t('admin.list.noMatch') : t('admin.noOrders')}
                  </td>
                </tr>
              ) : (
                rows.map((order) => {
                  const href = `/admin/orders/${order.id}`;
                  const finished = order.status === 'completed' || order.status === 'shipped';
                  const progress = finished ? 100 : Math.round((order.current_stage / 7) * 100);
                  return (
                    <tr
                      key={order.id}
                      onClick={(e) => {
                        if ((e.target as HTMLElement).closest('a,button')) return;
                        router.push(href);
                      }}
                      className="cursor-pointer border-b border-ink-4 hover:bg-ink-3/30 transition-colors"
                    >
                      <td className="p-4 font-mono text-arc-2 whitespace-nowrap">{order.job_number}</td>
                      <td className="p-4">
                        <div className="text-bone font-medium">{order.title}</div>
                        {order.material && (
                          <div className="text-xs text-steel-2 mt-0.5">{order.material}</div>
                        )}
                      </td>
                      <td className="p-4 text-steel-3">{order.customers?.company_name}</td>
                      {showDelayColumn && (
                        <td className="p-4 text-steel-2 text-xs max-w-xs">
                          {isOrderOverdue(order) ? (
                            order.delay_reason?.trim() ? (
                              <span className="line-clamp-3">{order.delay_reason}</span>
                            ) : (
                              <span className="text-danger">{t('admin.delayReason.missing')}</span>
                            )
                          ) : (
                            '—'
                          )}
                        </td>
                      )}
                      <td className="p-4 whitespace-nowrap">{deliveryCell(order)}</td>
                      <td className="p-4 min-w-40">
                        <div className="text-xs text-steel-3 mb-1 whitespace-nowrap">
                          {finished
                            ? t('admin.list.allStagesDone')
                            : `${order.current_stage}/7 · ${t(`stages.${order.current_stage}.title`)}`}
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-ink-4" aria-hidden>
                          <div
                            className={`h-1.5 rounded-full ${finished ? 'bg-success' : 'bg-arc-2'}`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <Link href={href} className="text-arc-2 hover:underline text-sm">
                          {t('admin.manage')}
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
