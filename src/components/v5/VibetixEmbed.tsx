'use client';

import { useEffect, useRef, useState } from 'react';

interface VibetixEmbedProps {
  embedId: string;
  checkoutUrl: `https://${string}`;
  fallbackUrl?: `https://${string}`;
  labels: { loading: string; error: string; fallback: string };
}

interface VibetixMessage { id?: unknown; type?: unknown; height?: unknown }

export function VibetixEmbed({ embedId, checkoutUrl, fallbackUrl, labels }: VibetixEmbedProps) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>(checkoutUrl);
  const [height, setHeight] = useState(1000);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const url = new URL(checkoutUrl);
    url.searchParams.set('return_url', window.location.href);
    const timer = window.setTimeout(() => setSrc(url.toString()), 0);
    return () => window.clearTimeout(timer);
  }, [checkoutUrl]);

  useEffect(() => {
    const onMessage = (event: MessageEvent<VibetixMessage>) => {
      if (!frame.current || event.source !== frame.current.contentWindow) return;
      try {
        const hostname = new URL(event.origin).hostname;
        if (hostname !== 'vibetix.io' && !hostname.endsWith('.vibetix.io')) return;
      } catch { return; }
      const data = event.data ?? {};
      if (String(data.id ?? '') !== embedId) return;
      if (data.type === 'vibetix:ready') { setLoading(false); setFailed(false); }
      if (data.type === 'vibetix:error') { setLoading(false); setFailed(true); }
      if (data.type === 'vibetix:height' || data.type === 'vibetix:resize') {
        const nextHeight = Number.parseInt(String(data.height ?? ''), 10);
        if (Number.isFinite(nextHeight)) setHeight(Math.max(300, Math.min(8000, nextHeight)));
      }
    };
    window.addEventListener('message', onMessage);
    const timeout = window.setTimeout(() => { if (loading) { setLoading(false); setFailed(true); } }, 15000);
    return () => { window.removeEventListener('message', onMessage); window.clearTimeout(timeout); };
  }, [embedId, loading]);

  return <div className="v5-vibetix" style={{ minHeight: `${height}px` }}>
    {loading && !failed && <div className="v5-vibetix-loading">{labels.loading}</div>}
    {failed && <div className="v5-vibetix-error" role="alert"><strong>{labels.error}</strong><a href={fallbackUrl ?? src} target="_blank" rel="noopener noreferrer">{labels.fallback}</a></div>}
    <iframe ref={frame} id={embedId} src={src} title="VibeTix ticket shop" style={{ height: `${height}px` }} loading="eager" scrolling="auto" referrerPolicy="origin-when-cross-origin" allow="payment; clipboard-write; fullscreen" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" onError={() => { setLoading(false); setFailed(true); }} />
  </div>;
}
