'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { ChevronDown, ChevronUp, Download, FileText, Plus } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useI18n } from '@/lib/i18n/context';
import {
  AttachmentList,
  FileAttachmentPicker,
  uploadRfqAttachments,
} from '@/components/portal/FileAttachments';
import { ActivityStatusBadge } from '@/components/portal/ActivityStatusBadge';
import { RfqQuoteActions } from '@/components/portal/RfqQuoteActions';
import {
  getCustomerRfqListStatus,
  rfqMatchesFilter,
} from '@/lib/portal/activity-status';
import type { RfqRequest } from '@/lib/portal/types-ext';
import type { RfqStatus } from '@/lib/stages';

interface RfqPageClientProps {
  customerId: string;
  requests: RfqRequest[];
  responderName: string;
}

type RfqFilter = 'all' | 'pending' | 'answered' | 'closed';

export function RfqPageClient({ customerId, requests, responderName }: RfqPageClientProps) {
  const { t, dateLocale, locale } = useI18n();
  const router = useRouter();
  const supabase = createClient();

  const [showForm, setShowForm] = useState(requests.length === 0);
  const [filter, setFilter] = useState<RfqFilter>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('');
  const [standard, setStandard] = useState('');
  const [deadline, setDeadline] = useState('');
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const filteredRequests = useMemo(
    () => requests.filter((rfq) => rfqMatchesFilter(rfq.status, filter)),
    [filter, requests]
  );

  const filterTabs: RfqFilter[] = ['all', 'pending', 'answered', 'closed'];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setSubmitting(true);
    setError('');
    setSuccess(false);

    const { data: inserted, error: insertError } = await supabase
      .from('rfq_requests')
      .insert({
        customer_id: customerId,
        title: title.trim(),
        description: description.trim(),
        material: material.trim() || null,
        quantity: quantity.trim() || null,
        standard: standard.trim() || null,
        deadline: deadline || null,
        status: 'submitted',
      })
      .select('id, title')
      .single();

    if (insertError || !inserted) {
      setSubmitting(false);
      setError(t('rfqPage.submitError', { message: insertError?.message ?? 'Unknown error' }));
      return;
    }

    try {
      if (pendingFiles.length > 0) {
        await uploadRfqAttachments(inserted.id, pendingFiles);
      }
    } catch (uploadErr) {
      setSubmitting(false);
      setError(
        t('rfqPage.submitError', {
          message: uploadErr instanceof Error ? uploadErr.message : 'Upload failed',
        })
      );
      return;
    }

    try {
      await fetch('/api/rfq/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rfqId: inserted.id, title: inserted.title }),
      });
    } catch {
      // RFQ saved; notification is best-effort
    }

    setSubmitting(false);
    setSuccess(true);
    setTitle('');
    setDescription('');
    setMaterial('');
    setQuantity('');
    setStandard('');
    setDeadline('');
    setPendingFiles([]);
    setShowForm(false);
    router.refresh();
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

  function getRfqStatusLabel(status: RfqStatus) {
    return t(`rfqPage.status.${status}`);
  }

  function getRfqBadge(status: RfqStatus) {
    const listStatus = getCustomerRfqListStatus(status);
    if (listStatus === 'action_required') {
      return { label: t('rfqPage.statusQuoted'), variant: 'action' as const, dot: true };
    }
    if (listStatus === 'pending') {
      return { label: t('rfqPage.statusPending'), variant: 'pending' as const, dot: false };
    }
    if (listStatus === 'rejected') {
      return { label: getRfqStatusLabel(status), variant: 'danger' as const, dot: false };
    }
    return { label: getRfqStatusLabel(status), variant: 'success' as const, dot: false };
  }

  return (
    <div className="rfq-page-layout">
      <section className="card rfq-list-section">
        <div className="rfq-list-header">
          <div>
            <h2 className="font-bold text-bone">{t('rfqPage.myRequests')}</h2>
            <p className="text-sm text-steel-2 mt-1">{t('rfqPage.listDesc')}</p>
          </div>
          <button
            type="button"
            className="btn-primary text-sm flex items-center gap-1.5 shrink-0"
            onClick={() => setShowForm((value) => !value)}
          >
            <Plus size={16} />
            {t('rfqPage.newRfq')}
            {showForm ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        <div className="activity-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`activity-filter-tab ${filter === tab ? 'activity-filter-tab--active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {t(`rfqPage.filter.${tab}`)}
            </button>
          ))}
        </div>

        {filteredRequests.length === 0 ? (
          <div className="portal-empty-state">{t('rfqPage.emptyFiltered')}</div>
        ) : (
          <ul className="activity-list">
            {filteredRequests.map((rfq) => {
              const badge = getRfqBadge(rfq.status);
              const isExpanded = expandedId === rfq.id;
              const needsAction = rfq.status === 'quoted' && !!rfq.quote_file_path;

              return (
                <li
                  key={rfq.id}
                  className={`activity-list-item ${needsAction ? 'activity-list-item--action' : ''}`}
                >
                  <button
                    type="button"
                    className="activity-list-item-main"
                    onClick={() => setExpandedId(isExpanded ? null : rfq.id)}
                  >
                    <div className="activity-list-item-icon">
                      <FileText size={18} />
                    </div>
                    <div className="activity-list-item-content min-w-0">
                      <div className="activity-list-item-top">
                        <span className="activity-list-item-title">{rfq.title}</span>
                        <ActivityStatusBadge
                          label={badge.label}
                          variant={badge.variant}
                          dot={badge.dot}
                        />
                      </div>
                      <p className="activity-list-item-preview">{rfq.description}</p>
                      <div className="activity-list-item-meta">
                        <span>
                          {t('rfqPage.submittedAt')}:{' '}
                          {format(new Date(rfq.created_at), 'd MMM yyyy', { locale: dateLocale })}
                        </span>
                        {rfq.deadline && (
                          <span>
                            {t('rfqPage.deadline')}:{' '}
                            {format(new Date(rfq.deadline), 'd MMM yyyy', { locale: dateLocale })}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="activity-list-item-chevron" aria-hidden>
                      {isExpanded ? '▲' : '▼'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="activity-list-item-details">
                      <div className="activity-list-item-detail-grid">
                        {rfq.material && (
                          <div>
                            <span className="activity-list-item-detail-label">{t('rfqPage.material')}</span>
                            <span>{rfq.material}</span>
                          </div>
                        )}
                        {rfq.quantity && (
                          <div>
                            <span className="activity-list-item-detail-label">{t('rfqPage.quantity')}</span>
                            <span>{rfq.quantity}</span>
                          </div>
                        )}
                        {rfq.standard && (
                          <div>
                            <span className="activity-list-item-detail-label">{t('rfqPage.standard')}</span>
                            <span>{rfq.standard}</span>
                          </div>
                        )}
                        <div>
                          <span className="activity-list-item-detail-label">{t('rfqPage.updatedAt')}</span>
                          <span>
                            {format(new Date(rfq.updated_at), 'd MMM yyyy HH:mm', { locale: dateLocale })}
                          </span>
                        </div>
                      </div>

                      {rfq.attachments && rfq.attachments.length > 0 && (
                        <div className="mt-3">
                          <p className="text-xs text-steel-2 mb-1">{t('attachments.submittedFiles')}</p>
                          <AttachmentList attachments={rfq.attachments} compact />
                        </div>
                      )}

                      {needsAction && (
                        <div className="activity-list-item-action-banner">
                          {t('rfqPage.actionRequired')}
                        </div>
                      )}

                      {rfq.quote_file_path && (
                        <button
                          type="button"
                          className="btn-secondary text-xs mt-3 flex items-center gap-1.5"
                          onClick={() => void downloadQuote(rfq)}
                        >
                          <Download size={14} />
                          {t('rfqPage.downloadQuote')}
                          {rfq.quote_file_name ? ` — ${rfq.quote_file_name}` : ''}
                        </button>
                      )}

                      {needsAction && (
                        <div className="mt-4">
                          <RfqQuoteActions rfq={rfq} responderName={responderName} />
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-6 space-y-4 rfq-form-section">
          <h2 className="font-bold text-bone">{t('rfqPage.newRfq')}</h2>

          <div>
            <label className="label">{t('rfqPage.projectTitle')}</label>
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">{t('rfqPage.description')}</label>
            <textarea
              className="input min-h-[120px] resize-y"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">{t('rfqPage.material')}</label>
              <input className="input" value={material} onChange={(e) => setMaterial(e.target.value)} />
            </div>
            <div>
              <label className="label">{t('rfqPage.quantity')}</label>
              <input className="input" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">{t('rfqPage.standard')}</label>
              <input className="input" value={standard} onChange={(e) => setStandard(e.target.value)} />
            </div>
            <div>
              <label className="label">{t('rfqPage.deadline')}</label>
              <input
                type="date"
                className="input"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="label">{t('attachments.title')}</label>
            <FileAttachmentPicker
              files={pendingFiles}
              onChange={setPendingFiles}
              disabled={submitting}
            />
          </div>

          {error && <p className="text-sm text-danger">{error}</p>}
          {success && <p className="text-sm text-success">{t('rfqPage.submitSuccess')}</p>}

          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? t('rfqPage.submitting') : t('rfqPage.submit')}
          </button>
        </form>
      )}
    </div>
  );
}
