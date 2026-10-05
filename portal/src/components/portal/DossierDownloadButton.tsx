'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

interface DossierDownloadButtonProps {
  orderId: string;
  jobNumber: string;
}

export function DossierDownloadButton({ orderId, jobNumber }: DossierDownloadButtonProps) {
  const { t, locale } = useI18n();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleDownload() {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/orders/${orderId}/dossier?lang=${locale}`);
      if (!res.ok) {
        setError(t('dossier.error'));
        setLoading(false);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${jobNumber}_dossier.zip`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch {
      setError(t('dossier.error'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn-secondary flex items-center gap-2"
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('dossier.downloading')}
          </>
        ) : (
          <>
            <Download size={16} />
            {t('dossier.download')}
          </>
        )}
      </button>
      {error && <p className="text-sm text-danger mt-2">{error}</p>}
    </div>
  );
}
