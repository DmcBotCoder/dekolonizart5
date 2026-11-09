'use client';

import Link from 'next/link';
import { useState } from 'react';
import { localizePath, type Locale } from '@/i18n/config';
import type { Messages } from '@/i18n/messages';
import type { ResolvedNavItem } from '@/content/navigation';

export function MenuSheet({ locale, t, nav }: { locale: Locale; t: Messages; nav: ResolvedNavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="index-trigger" type="button" aria-expanded={open} aria-controls="index-sheet" onClick={() => setOpen((value) => !value)}>
        <span>{open ? t.common.close : t.common.menu}</span><span className="trigger-glyph" aria-hidden="true">{open ? '×' : '↗'}</span>
      </button>
      {open && <div className="index-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
      <div id="index-sheet" className={open ? 'index-sheet is-open' : 'index-sheet'} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="sheet-top"><span className="eyebrow">{t.common.mainNav}</span><button className="sheet-close" type="button" onClick={() => setOpen(false)} aria-label={t.common.close}>{t.common.close} <span aria-hidden="true">×</span></button></div>
        <nav aria-label={t.common.mobileNav}>
          {nav.map((item, index) => (
            <div className="sheet-item" key={item.href}>
              <span className="sheet-number">0{index + 1}</span>
              <div>
                <Link href={localizePath(item.href, locale)} onClick={() => setOpen(false)}>{item.label}</Link>
                {item.children && <div className="sheet-children">{item.children.map((child) => <Link key={child.href} href={localizePath(child.href, locale)} onClick={() => setOpen(false)}>{child.label}</Link>)}</div>}
              </div>
            </div>
          ))}
        </nav>
        <div className="sheet-bottom"><span>{t.nav.about.feature?.text}</span><Link href={localizePath('/contact', locale)} onClick={() => setOpen(false)}>→ {t.contact.title}</Link></div>
      </div>
    </>
  );
}
