'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Download, FileUp, Save, Send, Upload } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { ActivityStatusBadge } from '@/components/portal/ActivityStatusBadge';
import { normalizeRfqStatus } from '@/lib/portal/activity-status';
import {
  AttachmentList,
  FileAttachmentPicker,
  uploadRfqAttachments,
} from '@/components/portal/FileAttachments';
import type { RfqRequest } from '@/lib/portal/types-ext';
import type { RfqStatus } from '@/lib/stages';

interface AdminRfqPageClientProps {
  requests: RfqRequest[];
}

const RFQ_STATUSES: RfqStatus[] = [
  'submitted',
  'reviewing',
  'quoted',
  'approved',
  'rejected',
  'converted',
];

function statusVariant(status: RfqStatus) {
  if (status === 'quoted' || status === 'approved' || status === 'converted') return 'success';
  if (status === 'rejected') return 'danger';
  if (status === 'reviewing') return 'awaiting';
  return 'pending';
}

export function AdminRfqPageClient({ requests }: AdminRfqPageClientProps) {
  const { t, dateLocale, locale } = useI18n();
  const router = useRouter();

  const [notesById, setNotesById] = useState<Record<string, string>>(() =>
    Object.fromEntries(requests.map((r) => [r.id, r.admin_notes ?? '']))
  );
  const [statusById, setStatusById] = useState<Record<string, RfqStatus>>(() =>
    Object.fromEntries(requests.map((r) => [r.id, normalizeRfqStatus(r)]))
  );
  const [quoteFileById, setQuoteFileById] = useState<Record<string, File | null>>({});
  const [extraFilesById, setExtraFilesById] = useState<Record<string, File[]>>({});

  const [savingNotesId, setSavingNotesId] = useState<string | null>(null);
  const [savingStatusId, setSavingStatusId] = useState<string | null>(null);
  const [uploadingQuoteId, setUploadingQuoteId] = useState<string | null>(null);
  const [uploadingExtraId, setUploadingExtraId] = useState<string | null>(null);
  const [convertingId, setConvertingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ id: string; message: string; tone: 'success' | 'error' } | null>(null);

  useEffect(() => {
    setNotesById(Object.fromEntries(requests.map((r) => [r.id, r.admin_notes ?? ''])));
    setStatusById(Object.fromEntries(requests.map((r) => [r.id, normalizeRfqStatus(r)])));
  }, [requests]);

  function showFeedback(id: string, message: string, tone: 'success' | 'error') {
    setFeedback({ id, message, tone });
    window.setTimeout(() => {
      setFeedback((current) => (current?.id === id ? null : current));
    }, 5000);
  }

  async function saveNotes(id: string) {
    setSavingNotesId(id);
    setFeedback(null);

    const res = await fetch(`/api/admin/rfq/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ admin_notes: notesById[id]?.trim() || null }),
    });
    const data = await res.json();
    setSavingNotesId(null);

    if (!res.ok) {
      showFeedback(id, t('adminRfqPage.saveError', { message: data.error ?? 'Unknown error' }), 'error');
      return;
    }

    showFeedback(id, t('adminRfqPage.notesSaved'), 'success');
    router.refresh();
  }

  async function saveStatus(id: string) {
    setSavingStatusId(id);
    setFeedback(null);

    const res = await fetch(`/api/admin/rfq/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: statusById[id] }),
    });
    const data = await res.json();
    setSavingStatusId(null);

    if (!res.ok) {
      showFeedback(id, t('adminRfqPage.saveError', { message: data.error ?? 'Unknown error' }), 'error');
      return;
    }

    showFeedback(id, t('adminRfqPage.statusSaved'), 'success');
    router.refresh();
  }

  async function sendQuote(id: string) {
    const file = quoteFileById[id];
    if (!file) {
      showFeedback(id, t('adminRfqPage.quoteFileRequired'), 'error');
      return;
    }

    setUploadingQuoteId(id);
    setFeedback(null);

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`/api/admin/rfq/${id}/quote`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setUploadingQuoteId(null);

    if (!res.ok) {
      showFeedback(id, t('adminRfqPage.saveError', { message: data.error ?? 'Unknown error' }), 'error');
      return;
    }

    setQuoteFileById((prev) => ({ ...prev, [id]: null }));
    setStatusById((prev) => ({ ...prev, [id]: 'quoted' }));
    showFeedback(id, t('adminRfqPage.quoteSent'), 'success');
    router.refresh();
  }

  async function convertToOrder(id: string) {
    setConvertingId(id);
    setFeedback(null);

    const res = await fetch(`/api/admin/rfq/${id}/convert`, { method: 'POST' });
    const data = await res.json();
    setConvertingId(null);

    if (!res.ok) {
      showFeedback(
        id,
        t('adminRfqPage.convertError', { message: data.error ?? 'Unknown error' }),
        'error'
      );
      return;
    }

    setStatusById((prev) => ({ ...prev, [id]: 'converted' }));
    showFeedback(id, t('adminRfqPage.convertedSuccess', { jobNumber: data.jobNumber }), 'success');
    router.refresh();
  }

  async function uploadExtraFiles(id: string) {
    const files = extraFilesById[id] ?? [];
    if (files.length === 0) {
      showFeedback(id, t('adminRfqPage.extraFilesRequired'), 'error');
      return;
    }

    setUploadingExtraId(id);
    setFeedback(null);

    try {
      await uploadRfqAttachments(id, files);
      setExtraFilesById((prev) => ({ ...prev, [id]: [] }));
      showFeedback(id, t('adminRfqPage.extraFilesUploaded'), 'success');
      router.refresh();
    } catch (uploadErr) {
      showFeedback(
        id,
        t('adminRfqPage.saveError', {
          message: uploadErr instanceof Error ? uploadErr.message : 'Upload failed',
        }),
        'error'
      );
    }

    setUploadingExtraId(null);
  }

  async function downloadQuote(rfq: RfqRequest) {
    if (!rfq.quote_file_path) return;

    const res = await fetch(`/api/rfq/${rfq.id}/quote?lang=${locale}`);
    if (!res.ok) return;

    const data = await res.json();
    const response = await fetch(data.url);
    if (!response.ok) return;

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = rfq.quote_file_name ?? rfq.title;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(blobUrl);
  }

  if (requests.length === 0) {
    return <div className="portal-empty-state">{t('adminRfqPage.empty')}</div>;
  }

  return (
    <div className="space-y-4">
      {requests.map((rfq) => {
        const customer = rfq.customers;
        const displayStatus = normalizeRfqStatus(rfq);
        const notesDirty = (notesById[rfq.id] ?? '') !== (rfq.admin_notes ?? '');
        const statusDirty = statusById[rfq.id] !== displayStatus;
        const selectedQuoteFile = quoteFileById[rfq.id] ?? null;
        const extraFiles = extraFilesById[rfq.id] ?? [];
        const cardFeedback = feedback?.id === rfq.id ? feedback : null;

        return (
          <article key={rfq.id} className="card admin-rfq-card">
            <div className="admin-rfq-card-header">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="font-bold text-bone text-lg">{rfq.title}</h2>
                  <ActivityStatusBadge
                    label={t(`adminRfqPage.status.${displayStatus}`)}
                    variant={statusVariant(displayStatus)}
                  />
                </div>
                <p className="text-sm text-steel-2">{rfq.description}</p>
                <div className="admin-rfq-meta">
                  <span>
                    {t('adminRfqPage.customer')}:{' '}
                    <strong className="text-bone">{customer?.company_name ?? '—'}</strong>
                  </span>
                  <span>
                    {t('adminRfqPage.submittedAt')}:{' '}
                    {format(new Date(rfq.created_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}
                  </span>
                  {rfq.material && (
                    <span>
                      {t('common.material')}: {rfq.material}
                    </span>
                  )}
                  {rfq.standard && (
                    <span>
                      {t('common.standard')}: {rfq.standard}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {cardFeedback && (
              <div
                className={`admin-rfq-feedback ${cardFeedback.tone === 'success' ? 'admin-rfq-feedback--success' : 'admin-rfq-feedback--error'}`}
              >
                {cardFeedback.message}
              </div>
            )}

            <div className="admin-rfq-section">
              <label className="label">{t('adminRfqPage.statusLabel')}</label>
              <div className="admin-rfq-action-row">
                <select
                  className="input admin-rfq-status-select"
                  value={statusById[rfq.id]}
                  disabled={savingStatusId === rfq.id}
                  onChange={(e) =>
                    setStatusById((prev) => ({ ...prev, [rfq.id]: e.target.value as RfqStatus }))
                  }
                >
                  {RFQ_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {t(`adminRfqPage.status.${status}`)}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn-primary admin-rfq-action-btn"
                  disabled={!statusDirty || savingStatusId === rfq.id}
                  onClick={() => void saveStatus(rfq.id)}
                >
                  <Save size={16} />
                  {savingStatusId === rfq.id ? t('adminRfqPage.saving') : t('adminRfqPage.saveStatus')}
                </button>
              </div>
            </div>

            <div className="admin-rfq-section">
              <label className="label">{t('adminRfqPage.adminNotes')}</label>
              <textarea
                className="input min-h-[96px] resize-y"
                value={notesById[rfq.id] ?? ''}
                placeholder={t('adminRfqPage.adminNotesPlaceholder')}
                onChange={(e) =>
                  setNotesById((prev) => ({ ...prev, [rfq.id]: e.target.value }))
                }
              />
              <div className="admin-rfq-action-row admin-rfq-action-row--end">
                <button
                  type="button"
                  className="btn-primary admin-rfq-action-btn"
                  disabled={!notesDirty || savingNotesId === rfq.id}
                  onClick={() => void saveNotes(rfq.id)}
                >
                  <Save size={16} />
                  {savingNotesId === rfq.id ? t('adminRfqPage.saving') : t('adminRfqPage.saveNotes')}
                </button>
              </div>
            </div>

            {rfq.attachments && rfq.attachments.length > 0 && (
              <div className="admin-rfq-section">
                <label className="label">{t('attachments.submittedFiles')}</label>
                <AttachmentList attachments={rfq.attachments} />
              </div>
            )}

            <div className="admin-rfq-quote-box">
              <div>
                <h3 className="font-bold text-bone">{t('adminRfqPage.quoteSectionTitle')}</h3>
                <p className="text-sm text-steel-2 mt-1">{t('adminRfqPage.quoteSectionDesc')}</p>
              </div>

              {rfq.quote_file_path && (
                <button
                  type="button"
                  className="btn-secondary admin-rfq-action-btn"
                  onClick={() => void downloadQuote(rfq)}
                >
                  <Download size={16} />
                  {t('adminRfqPage.downloadQuote')}
                  {rfq.quote_file_name ? ` — ${rfq.quote_file_name}` : ''}
                </button>
              )}

              <div className="admin-rfq-action-row">
                <label className="btn-secondary admin-rfq-action-btn cursor-pointer">
                  <FileUp size={16} />
                  {selectedQuoteFile ? selectedQuoteFile.name : t('adminRfqPage.selectQuoteFile')}
                  <input
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp"
                    disabled={uploadingQuoteId === rfq.id}
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      setQuoteFileById((prev) => ({ ...prev, [rfq.id]: file }));
                      e.target.value = '';
                    }}
                  />
                </label>
                <button
                  type="button"
                  className="btn-primary admin-rfq-action-btn admin-rfq-action-btn--send"
                  disabled={!selectedQuoteFile || uploadingQuoteId === rfq.id}
                  onClick={() => void sendQuote(rfq.id)}
                >
                  <Send size={16} />
                  {uploadingQuoteId === rfq.id ? t('adminRfqPage.sending') : t('adminRfqPage.sendQuote')}
                </button>
              </div>
            </div>

            {displayStatus === 'approved' && !rfq.converted_order_id && (
              <div className="admin-rfq-action-row">
                <button
                  type="button"
                  className="btn-primary admin-rfq-action-btn"
                  disabled={convertingId === rfq.id}
                  onClick={() => void convertToOrder(rfq.id)}
                >
                  {convertingId === rfq.id
                    ? t('adminRfqPage.converting')
                    : t('adminRfqPage.convertToOrder')}
                </button>
              </div>
            )}

            <div className="admin-rfq-section">
              <label className="label">{t('attachments.addSupplementary')}</label>
              <FileAttachmentPicker
                files={extraFiles}
                onChange={(files) => setExtraFilesById((prev) => ({ ...prev, [rfq.id]: files }))}
                disabled={uploadingExtraId === rfq.id}
              />
              <div className="admin-rfq-action-row admin-rfq-action-row--end">
                <button
                  type="button"
                  className="btn-secondary admin-rfq-action-btn"
                  disabled={extraFiles.length === 0 || uploadingExtraId === rfq.id}
                  onClick={() => void uploadExtraFiles(rfq.id)}
                >
                  <Upload size={16} />
                  {uploadingExtraId === rfq.id
                    ? t('adminRfqPage.uploading')
                    : t('attachments.uploadFiles')}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
