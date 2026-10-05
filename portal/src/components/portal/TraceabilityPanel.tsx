'use client';

import { useState } from 'react';
import { CheckCircle2, Circle, Download, FileText, Loader2 } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { getDocTypeLabel } from '@/lib/i18n/helpers';
import type { TraceabilityNode } from '@/lib/portal/traceability';

interface TraceabilityPanelProps {
  nodes: TraceabilityNode[];
}

function ndtTone(result: string) {
  const r = result.toLowerCase();
  if (r === 'pass' || r === 'accepted' || r === 'ok') return 'bg-success/10 text-success';
  if (r === 'fail' || r === 'rejected') return 'bg-danger/10 text-danger';
  return 'bg-warning/10 text-warning';
}

export function TraceabilityPanel({ nodes }: TraceabilityPanelProps) {
  const { t, locale } = useI18n();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function downloadDoc(docId: string, directUrl?: string | null) {
    if (directUrl) {
      window.open(directUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setLoadingId(docId);
    try {
      const res = await fetch(`/api/documents/${docId}?lang=${locale}`);
      if (!res.ok) return;
      const data = await res.json();
      if (data.url) window.open(data.url, '_blank', 'noopener,noreferrer');
    } finally {
      setLoadingId(null);
    }
  }

  const filledNodes = nodes.filter(
    (n) =>
      n.documents.length > 0 ||
      n.heatNumber ||
      n.wpsRef ||
      n.batchRef ||
      n.ndtResult ||
      n.stageStatus === 'completed'
  );

  return (
    <section className="overflow-hidden rounded-lg border border-ink-4 bg-ink-0 shadow-sm">
      <div className="border-b border-ink-4 bg-ink-2/50 p-5">
        <h2 className="text-lg font-bold text-bone">{t('traceability.title')}</h2>
        <p className="mt-1 text-sm text-steel-2">{t('traceability.desc')}</p>
      </div>

      <div className="p-5">
        {filledNodes.length === 0 ? (
          <p className="py-8 text-center text-sm text-steel-2">{t('traceability.empty')}</p>
        ) : (
          <ol className="relative m-0 list-none space-y-0 p-0">
            {filledNodes.map((node, index) => {
              const isComplete = node.stageStatus === 'completed' || node.documents.length > 0;
              const isLast = index === filledNodes.length - 1;

              return (
                <li key={node.stage} className="relative flex gap-4 pb-8 last:pb-0">
                  {!isLast && (
                    <span
                      className="absolute left-4 top-9 bottom-0 w-0.5 -translate-x-1/2 bg-ink-4"
                      aria-hidden
                    />
                  )}

                  <div
                    className={[
                      'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                      isComplete ? 'bg-arc-2 text-white' : 'border-2 border-ink-4 bg-ink-0 text-steel-2',
                    ].join(' ')}
                  >
                    {node.stage}
                  </div>

                  <div className="min-w-0 flex-1 rounded-lg border border-ink-4 bg-ink-2/40 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-bone">{node.label}</h3>
                      {node.stageStatus && (
                        <span
                          className={[
                            'inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-bold',
                            node.stageStatus === 'completed'
                              ? 'bg-success/10 text-success'
                              : 'bg-ink-3 text-steel-2',
                          ].join(' ')}
                        >
                          {node.stageStatus === 'completed' ? (
                            <CheckCircle2 size={12} aria-hidden />
                          ) : (
                            <Circle size={12} aria-hidden />
                          )}
                          {t(`stageStatus.${node.stageStatus}`)}
                        </span>
                      )}
                    </div>

                    {(node.heatNumber || node.wpsRef || node.batchRef || node.ndtResult) && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {node.heatNumber && (
                          <span className="inline-flex rounded-md border border-ink-4 bg-ink-0 px-2.5 py-1 text-xs text-bone">
                            <span className="mr-1.5 font-semibold text-steel-2">{t('common.heatNumber')}:</span>
                            {node.heatNumber}
                          </span>
                        )}
                        {node.wpsRef && (
                          <span className="inline-flex rounded-md border border-ink-4 bg-ink-0 px-2.5 py-1 text-xs text-bone">
                            <span className="mr-1.5 font-semibold text-steel-2">WPS:</span>
                            {node.wpsRef}
                          </span>
                        )}
                        {node.batchRef && (
                          <span className="inline-flex rounded-md border border-ink-4 bg-ink-0 px-2.5 py-1 text-xs text-bone">
                            <span className="mr-1.5 font-semibold text-steel-2">{t('traceability.batch')}:</span>
                            {node.batchRef}
                          </span>
                        )}
                        {node.ndtResult && (
                          <span
                            className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${ndtTone(node.ndtResult)}`}
                          >
                            {t('traceability.ndt')}: {node.ndtResult.toUpperCase()}
                          </span>
                        )}
                      </div>
                    )}

                    {node.documents.length > 0 && (
                      <ul className="mt-4 m-0 list-none space-y-2 p-0">
                        {node.documents.map((doc) => (
                          <li key={doc.id}>
                            <button
                              type="button"
                              disabled={loadingId === doc.id}
                              onClick={() => downloadDoc(doc.id, doc.downloadUrl)}
                              className="flex w-full items-center gap-3 rounded-lg border border-ink-4 bg-ink-0 px-3 py-2.5 text-left transition-colors hover:border-arc-2/40 hover:bg-ink-2 disabled:opacity-60"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-arc-2/10 text-arc-2">
                                {loadingId === doc.id ? (
                                  <Loader2 size={16} className="animate-spin" aria-hidden />
                                ) : (
                                  <FileText size={16} aria-hidden />
                                )}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-medium text-bone">{doc.name}</span>
                                <span className="mt-0.5 block text-xs text-steel-2">
                                  {getDocTypeLabel(t, doc.document_type as never)}
                                  {doc.is_official ? ` · ${t('traceability.official')}` : ''}
                                </span>
                              </span>
                              <Download size={16} className="shrink-0 text-steel-2" aria-hidden />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}
