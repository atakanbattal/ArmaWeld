import { redirect } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { PortalShell } from '@/components/portal/PortalShell';
import { getServerI18n } from '@/lib/i18n/server';
import {
  resolveCustomerContext,
  getUnreadMessageCount,
  getUnreadNotificationCount,
} from '@/lib/portal/customer-context';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = await getServerI18n();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const [{ data: staff }, ctx] = await Promise.all([
    supabase
      .from('staff_profiles')
      .select('is_admin')
      .eq('auth_user_id', user.id)
      .maybeSingle(),
    resolveCustomerContext(user.id),
  ]);

  if (staff?.is_admin) redirect('/admin');

  if (!ctx) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-bone mb-2">{t('dashboard.pendingAccount')}</h1>
          <p className="text-steel-2">{t('dashboard.pendingAccountDesc')}</p>
          <p className="mt-4 text-xs text-steel-2 break-all">{user.email}</p>
          <form action="/auth/signout" method="POST" className="mt-6">
            <button type="submit" className="btn-secondary inline-flex items-center gap-2 text-sm">
              <LogOut size={16} /> {t('nav.logoutTitle')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const [unreadMessages, unreadNotifications] = await Promise.all([
    getUnreadMessageCount(ctx.customerId),
    getUnreadNotificationCount('customer', ctx.customerId),
  ]);

  return (
    <PortalShell
      customerId={ctx.customerId}
      userName={ctx.contactName}
      companyName={ctx.companyName}
      unreadMessages={unreadMessages}
      unreadNotifications={unreadNotifications}
    >
      {children}
    </PortalShell>
  );
}
