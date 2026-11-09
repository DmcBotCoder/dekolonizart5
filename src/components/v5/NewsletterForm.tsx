'use client';

import { useState } from 'react';

interface NewsletterLabels {
  emailLabel: string;
  send: string;
  sending: string;
  thanks: string;
  errEmpty: string;
  errInvalid: string;
  errConsent: string;
  errUnavailable: string;
  errProvider: string;
  consent: string;
}

export function NewsletterForm({ labels }: { labels: NewsletterLabels }) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setError(labels.errEmpty);
      setState('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(labels.errInvalid);
      setState('error');
      return;
    }
    if (!consent) {
      setError(labels.errConsent);
      setState('error');
      return;
    }
    setState('sending');
    setError('');
    try {
      const response = await fetch('/api/newsletter', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: value, consent }) });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error === 'newsletter_not_configured' ? 'unavailable' : 'provider');
      }
      setState('success');
      setEmail('');
      setConsent(false);
    } catch (cause) {
      setState('error');
      setError(cause instanceof Error && cause.message === 'unavailable' ? labels.errUnavailable : labels.errProvider);
    }
  }

  return (
    <form className="v5-newsletter" onSubmit={submit} noValidate>
      <label htmlFor="v5-newsletter-email">{labels.emailLabel}</label>
      <input id="v5-newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
      <label className="v5-consent"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} /> <span>{labels.consent}</span></label>
      <button className="solid-link" type="submit" disabled={state === 'sending'}>{state === 'sending' ? labels.sending : labels.send}</button>
      {state === 'success' && <p role="status">{labels.thanks}</p>}
      {state === 'error' && <p role="alert">{error}</p>}
    </form>
  );
}
