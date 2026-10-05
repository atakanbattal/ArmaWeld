'use client';

import { useState } from 'react';
import {
  Download,
  Eye,
  FileText,
  Image as ImageIcon,
  FileSpreadsheet,
  FileType,
  CheckCircle2,
  Circle,
  Loader2,
} from 'lucide-react';
import { format } from 'date-fns';
import type { OrderDocument } from '@/lib/types';
import type { DocumentType } from '@/lib/stages';
import { STAGE_OPTIONAL_DOC_TYPES } from '@/lib/stages';
import { useI18n } from '@/lib/i18n/context';
import { getDocTypeLabel } from '@/lib/i18n/helpers';
import { canPreviewMime, mimeFromFileName } from '@/lib/documents';
import { DocumentPreviewModal } from './DocumentPreviewModal';

interface DocumentListProps {
  documents: OrderDocument[];
  showHidden?: boolean;
  compact?: boolean;
  emptyMessage?: string;
  groupByType?: boolean;
  groupTypeOrder?: DocumentType[];
}

function formatFileSize(bytes: number | null) {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function docIcon(doc: OrderDocument) {
  const mime = doc.mime_type ?? '';
  const name = doc.name.toLowerCase();
  if (mime.startsWith('image/')) return ImageIcon;
  if (mime.includes('spreadsheet') || name.endsWith('.xls') || name.endsWith('.xlsx')) {
    return FileSpreadsheet;
  }
  if (mime.includes('word') || name.endsWith('.doc') || name.endsWith('.docx')) {
    return FileType;
  }
  return FileText;
}

function DocRow({
  doc,
  compact,
  showHidden,
  loading,
  onPreview,
  onDownload,
  t,
  dateLocale,
}: {
  doc: OrderDocument;
  compact: boolean;
  showHidden: boolean;
  loading: string | null;
  onPreview: (doc: OrderDocument) => void;
  onDownload: (doc: OrderDocument) => void;
  t: ReturnType<typeof useI18n>['t'];
  dateLocale: ReturnType<typeof useI18n>['dateLocale'];
}) {
  const Icon = docIcon(doc);
  const canPreview = canPreviewMime(doc.mime_type, doc.name);

  return (
    <div
      className={`flex items-center justify-between gap-3 hover:bg-ink-2/80 transition-colors rounded ${
        compact ? 'py-2 px-0.5' : 'py-3 px-1'
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        <div
          className={`rounded bg-ink-2 flex items-center justify-center shrink-0 border border-ink-4 ${
            compact ? 'w-7 h-7' : 'w-9 h-9'
          }`}
        >
          <Icon size={compact ? 14 : 18} className="text-arc-2" />
        </div>
        <div className="min-w-0">
          <div className={`font-medium text-bone truncate ${compact ? 'text-xs' : 'text-sm'}`}>
            {doc.name}
          </div>
          {doc.description && (
            <p className={`text-steel-2 mt-0.5 ${compact ? 'text-[10px] line-clamp-2' : 'text-xs'}`}>
              {doc.description}
            </p>
          )}
          {!compact && !showHidden && (
            <div className="flex flex-wrap items-center gap-2 text-xs text-steel-2">
              {doc.file_size && <span>{formatFileSize(doc.file_size)}</span>}
              {doc.file_size && <span>·</span>}
              <span>{format(new Date(doc.created_at), 'd MMM yyyy', { locale: dateLocale })}</span>
            </div>
          )}
          {!compact && showHidden && (
            <div className="flex flex-wrap items-center gap-2 text-xs text-steel-2">
              <span>{getDocTypeLabel(t, doc.document_type)}</span>
              {doc.file_size && <span>· {formatFileSize(doc.file_size)}</span>}
              <span>· {format(new Date(doc.created_at), 'd MMM yyyy', { locale: dateLocale })}</span>
              {!doc.is_visible_to_customer && (
                <span className="text-warning">· {t('documents.hidden')}</span>
              )}
            </div>
          )}
          {compact && showHidden && (
            <div className="text-[10px] text-steel-2 truncate">
              {getDocTypeLabel(t, doc.document_type)}
              {!doc.is_visible_to_customer && ` · ${t('documents.hidden')}`}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        {canPreview && (
          <button
            type="button"
            onClick={() => onPreview(doc)}
            disabled={loading === doc.id}
            className={`btn-secondary flex items-center gap-1 ${
              compact ? 'text-xs py-1 px-2' : 'text-sm py-2 px-3 gap-1.5'
            }`}
            title={t('documents.preview')}
          >
            {loading === doc.id ? (
              <Loader2 size={compact ? 14 : 16} className="animate-spin" />
            ) : (
              <Eye size={compact ? 14 : 16} />
            )}
            {!compact && <span className="hidden sm:inline">{t('documents.preview')}</span>}
          </button>
        )}
        <button
          type="button"
          onClick={() => onDownload(doc)}
          disabled={loading === doc.id}
          className={`btn-primary flex items-center gap-1 ${
            compact ? 'text-xs py-1 px-2' : 'text-sm py-2 px-3 gap-1.5'
          }`}
        >
          <Download size={compact ? 14 : 16} />
          {!compact && <span className="hidden sm:inline">{t('documents.download')}</span>}
        </button>
      </div>
    </div>
  );
}

export function DocumentList({
  documents,
  showHidden = false,
  compact = false,
  emptyMessage,
  groupByType = false,
  groupTypeOrder,
}: DocumentListProps) {
  const { t, dateLocale, locale } = useI18n();
  const [preview, setPreview] = useState<{ url: string; name: string; mime: string } | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const visible = showHidden
    ? documents
    : documents.filter((d) => d.is_visible_to_customer);

  async function getDocUrl(docId: string) {
    const res = await fetch(`/api/documents/${docId}?lang=${locale}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? t('documents.fetchError'));
    return data as { url: string; name: string; mime_type: string };
  }

  async function handleDownload(doc: OrderDocument) {
    setLoading(doc.id);
    try {
      const data = await getDocUrl(doc.id);
      const response = await fetch(data.url);
      if (!response.ok) throw new Error(t('documents.downloadError'));
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = doc.name;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      alert(err instanceof Error ? err.message : t('documents.downloadFailed'));
    } finally {
      setLoading(null);
    }
  }

  async function handlePreview(doc: OrderDocument) {
    setLoading(doc.id);
    try {
      const res = await fetch(`/api/documents/${doc.id}?inline=1&lang=${locale}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? t('documents.previewFailed'));
      }
      const mime = doc.mime_type || mimeFromFileName(doc.name);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      setPreview({ url: blobUrl, name: doc.name, mime });
    } catch (err) {
      alert(err instanceof Error ? err.message : t('documents.previewFailed'));
    } finally {
      setLoading(null);
    }
  }

  function closePreview() {
    if (preview?.url.startsWith('blob:')) {
      URL.revokeObjectURL(preview.url);
    }
    setPreview(null);
  }

  if (visible.length === 0) {
    return (
      <div className={`text-steel-2 text-sm ${compact ? 'py-2 text-xs' : 'text-center py-8'}`}>
        {emptyMessage ?? t('documents.empty')}
      </div>
    );
  }

  const rowProps = {
    compact,
    showHidden,
    loading,
    onPreview: handlePreview,
    onDownload: handleDownload,
    t,
    dateLocale,
  };

  if (groupByType) {
    const typeOrder =
      groupTypeOrder ??
      ([...new Set(visible.map((d) => d.document_type))] as DocumentType[]);

    const grouped = typeOrder
      .map((type) => ({
        type,
        docs: visible.filter((d) => d.document_type === type),
      }))
      .filter((g) => g.docs.length > 0);

    return (
      <>
        <div className="space-y-4">
          {grouped.map(({ type, docs }) => (
            <div key={type}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-arc-2 mb-2 pb-1 border-b border-ink-4">
                {getDocTypeLabel(t, type)}
              </h4>
              <div className="divide-y divide-ink-4">
                {docs.map((doc) => (
                  <DocRow key={doc.id} doc={doc} {...rowProps} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {preview && <DocumentPreviewModal preview={preview} onClose={closePreview} />}
      </>
    );
  }

  return (
    <>
      <div className="divide-y divide-ink-4">
        {visible.map((doc) => (
          <DocRow key={doc.id} doc={doc} {...rowProps} />
        ))}
      </div>
      {preview && <DocumentPreviewModal preview={preview} onClose={closePreview} />}
    </>
  );
}

interface StageDocTypeChecklistProps {
  allowedTypes: DocumentType[];
  documents: OrderDocument[];
}

export function StageDocTypeChecklist({ allowedTypes, documents }: StageDocTypeChecklistProps) {
  const { t } = useI18n();
  const uploadedTypes = new Set(documents.map((d) => d.document_type));

  return (
    <div className="rounded border border-ink-4 bg-ink-2/40 p-2.5 space-y-2">
      <div className="text-xs font-medium text-steel-2">{t('documents.docTypeStatus')}</div>
      <div className="flex flex-wrap gap-1.5">
        {allowedTypes.map((type) => {
          const uploaded = uploadedTypes.has(type);
          const optional = STAGE_OPTIONAL_DOC_TYPES.includes(type);
          return (
            <span
              key={type}
              className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded border ${
                uploaded
                  ? 'border-success/40 bg-success/10 text-success'
                  : optional
                    ? 'border-ink-4 bg-ink-1 text-steel-2'
                    : 'border-warning/40 bg-warning/10 text-warning'
              }`}
            >
              {uploaded ? (
                <CheckCircle2 size={12} className="shrink-0" />
              ) : (
                <Circle size={12} className="shrink-0 opacity-60" />
              )}
              {getDocTypeLabel(t, type)}
              {optional && !uploaded && (
                <span className="opacity-70">({t('documents.docTypeOptional')})</span>
              )}
              {!uploaded && !optional && (
                <span className="opacity-80">— {t('documents.docTypeMissing')}</span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
