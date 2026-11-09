'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import type { EventItem } from '@/content/events';
import type { Messages } from '@/i18n/messages';

export function EventLedger({ events, t }: { events: EventItem[]; t: Messages }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const visible = useMemo(() => events.filter((event) => {
    const matchesQuery = !query.trim() || event.search.includes(query.trim().toLowerCase());
    return matchesQuery && (category === 'all' || event.category === category);
  }), [category, events, query]);
  return (
    <>
      <div className="ledger-controls">
        <label className="search-line"><span>{t.allEvents.searchLabel}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.allEvents.searchPlaceholder} /></label>
        <div className="category-tabs" aria-label={t.ui.filterLabel}>
          {['all', 'theater', 'workshop', 'movement'].map((value) => <button key={value} className={category === value ? 'active' : ''} type="button" onClick={() => setCategory(value)}>{value === 'all' ? t.ui.allCategories : t.allEvents.categories[value as keyof typeof t.allEvents.categories]}</button>)}
        </div>
      </div>
      <p className="ledger-count" aria-live="polite">{visible.length === 1 ? t.allEvents.countOne : t.allEvents.count.replace('{n}', String(visible.length))}</p>
      <div className="event-ledger">
        {visible.map((event, index) => <article className="ledger-entry reveal" key={event.id} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
          <div className="ledger-date"><span>{event.when.split(' ')[0]}</span><small>{event.when.split(' ').slice(1).join(' ')}</small></div>
          <div className="ledger-image">{event.image && <Image src={event.image.src} alt="" width={event.image.width} height={event.image.height} />}</div>
          <div className="ledger-info"><span className="eyebrow">{event.categoryLabel}</span><h2>{event.title}</h2>{event.subtitle && <p className="ledger-subtitle">{event.subtitle}</p>}<p>{event.text}</p><div className="ledger-actions"><Link className="arrow-link" href={event.secondary.href}>{event.secondary.label} <span aria-hidden="true">↗</span></Link><Link className="solid-link" href={event.primary.href}>{event.primary.label}</Link></div></div>
          <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
        </article>)}
      </div>
      {visible.length === 0 && <p className="empty-state">{t.allEvents.noResults.replace('{q}', query)}</p>}
    </>
  );
}
