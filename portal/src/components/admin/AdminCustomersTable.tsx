'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Search, X } from 'lucide-react';
import { format } from 'date-fns';
import { useI18n } from '@/lib/i18n/context';
import type { Customer } from '@/lib/types';

export interface CustomerOrderStats {
  total: number;
  open: number;
  lastOrderAt: string | null;
}

function normalize(value: string) {
  return value.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function AdminCustomersTable({
  customers,
  stats,
}: {
  customers: Customer[];
  stats: Record<string, CustomerOrderStats>;
}) {
  const { t, dateLocale } = useI18n();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return customers;
    return customers.filter((c) =>
      normalize([c.company_name, c.contact_name, c.email, c.phone].filter(Boolean).join(' ')).includes(q)
    );
  }, [customers, query]);

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-steel-2">
          {query
            ? t('admin.list.resultCount', { count: rows.length, total: customers.length })
            : t('admin.list.customerCount', { count: customers.length })}
        </p>
        <label className="relative block w-full sm:w-80">
          <span className="sr-only">{t('admin.list.searchCustomers')}</span>
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel-2"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('admin.list.searchCustomers')}
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

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-ink-4 bg-ink-3">
                <th className="text-left p-4 table-head">{t('admin.company')}</th>
                <th className="text-left p-4 table-head">{t('admin.contactPerson')}</th>
                <th className="text-left p-4 table-head">{t('admin.list.contact')}</th>
                <th className="text-left p-4 table-head">{t('admin.list.orders')}</th>
                <th className="text-left p-4 table-head">{t('common.status')}</th>
                <th className="text-right p-4 table-head">{t('admin.action')}</th>
              </tr>
            </thead>
            <tbody>
              {!rows.length ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-steel-2">
                    {customers.length ? t('admin.list.noMatch') : t('admin.noCustomers')}
                  </td>
                </tr>
              ) : (
                rows.map((c) => {
                  const href = `/admin/customers/${c.id}`;
                  const s = stats[c.id];
                  return (
                    <tr
                      key={c.id}
                      onClick={(e) => {
                        if ((e.target as HTMLElement).closest('a,button')) return;
                        router.push(href);
                      }}
                      className="cursor-pointer border-b border-ink-4 hover:bg-ink-3/30 transition-colors"
                    >
                      <td className="p-4 font-medium text-bone">{c.company_name}</td>
                      <td className="p-4 text-steel-3">{c.contact_name ?? '—'}</td>
                      <td className="p-4 text-steel-3">
                        <div className="break-all">{c.email}</div>
                        {c.phone && <div className="text-xs text-steel-2 mt-0.5">{c.phone}</div>}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        {s?.total ? (
                          <Link
                            href={`/admin/orders?customer=${c.id}`}
                            className="leading-tight block hover:underline"
                          >
                            <span className="text-bone font-semibold">{s.total}</span>{' '}
                            <span className="text-steel-2 text-xs">
                              {t('admin.list.openOrders', { count: s.open })}
                            </span>
                            {s.lastOrderAt && (
                              <span className="block text-xs text-steel-2">
                                {t('admin.list.lastOrder', {
                                  date: format(new Date(s.lastOrderAt), 'd MMM yyyy', { locale: dateLocale }),
                                })}
                              </span>
                            )}
                          </Link>
                        ) : (
                          <span className="text-steel-1">—</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span
                          className={`text-xs font-mono uppercase ${
                            c.is_active ? 'text-success' : 'text-steel-2'
                          }`}
                        >
                          {c.is_active ? t('common.active') : t('common.inactive')}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Link
                          href={href}
                          className="inline-flex items-center gap-1.5 text-sm text-arc-2 hover:text-arc-1 transition-colors"
                        >
                          <Pencil size={14} /> {t('common.edit')}
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
