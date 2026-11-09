'use client';

import { useState } from 'react';

export function ReadMore({ text, more, labels }: { text: string; more?: string; labels: { more: string; less: string } }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <span>{text}</span>
      {more && <span className={expanded ? 'read-more-extra is-visible' : 'read-more-extra'}> {more}</span>}
      {more && <button className="text-toggle" type="button" onClick={() => setExpanded((value) => !value)}>{expanded ? labels.less : labels.more} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button>}
    </>
  );
}
