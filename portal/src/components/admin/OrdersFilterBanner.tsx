import Link from 'next/link';
import { X } from 'lucide-react';
import { getServerI18n } from '@/lib/i18n/server';

interface OrdersFilterBannerProps {
  labelKey?: string;
  /** Already-translated label; used instead of labelKey when set. */
  label?: string;
  count: number;
  total: number;
  clearHref?: string;
}

export async function OrdersFilterBanner({
  labelKey,
  label,
  count,
  total,
  clearHref = '/admin/orders',
}: OrdersFilterBannerProps) {
  const { t } = await getServerI18n();

  return (
    <div className="orders-filter-banner mb-4">
      <div className="orders-filter-banner-main">
        <span className="orders-filter-banner-label">{t('orders.filterActive', { label: label ?? (labelKey ? t(labelKey) : '') })}</span>
        <span className="orders-filter-banner-count">
          {t('orders.filterCount', { count, total })}
        </span>
      </div>
      <Link href={clearHref} className="orders-filter-banner-clear">
        <X size={14} />
        {t('orders.filterClear')}
      </Link>
    </div>
  );
}
