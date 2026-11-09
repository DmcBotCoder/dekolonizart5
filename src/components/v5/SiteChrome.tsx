import Link from 'next/link';
import Image from 'next/image';
import { localizePath, localeInfo, type Locale } from '@/i18n/config';
import { resolveNav } from '@/content/navigation';
import { site, socials } from '@/content/site';
import type { Messages } from '@/i18n/messages';
import { MenuSheet } from './MenuSheet';
import { NewsletterForm } from './NewsletterForm';

export function SiteChrome({ locale, t }: { locale: Locale; t: Messages }) {
  const nav = resolveNav(t);
  return (
    <>
      <a className="skip-link" href="#main-content">{t.common.skip}</a>
      <header className="command-bar">
        <Link className="wordmark" href={localizePath('/', locale)} aria-label={t.common.homeLink}>
          <Image className="wordmark-logo" src="/img/logo.png" alt="" width={40} height={40} priority />
          <span>{site.name}</span>
        </Link>
        <div className="command-context" aria-hidden="true">
          <span className="signal-dot" />
          <span>ARCHIVE / SIGNAL</span>
          <span className="command-rule" />
          <span>BERLIN · 2025—</span>
        </div>
        <div className="command-actions">
          <div className="language-cluster" aria-label={t.common.language}>
            {(Object.keys(localeInfo) as Locale[]).map((code) => (
              <Link key={code} className={code === locale ? 'language-chip active' : 'language-chip'} href={localizePath('/', code)} hrefLang={code}>
                {localeInfo[code].short}
              </Link>
            ))}
          </div>
          <MenuSheet locale={locale} t={t} nav={nav} />
        </div>
      </header>
      <aside className="desktop-index" aria-label={t.common.mainNav}>
        <span className="index-label">INDEX</span>
        <span className="index-line" />
        <span className="index-scroll">00—07</span>
      </aside>
    </>
  );
}

export function SiteFooter({ locale, t }: { locale: Locale; t: Messages }) {
  const footer = t.footer;
  return (
    <footer className="closing-credits">
      <div className="footer-signal" aria-hidden="true">END / BEGIN AGAIN</div>
      <div className="footer-main">
        <div className="footer-claim">
          <span className="eyebrow">{site.name}</span>
          <p>{footer.claim[0]}<br />{footer.claim[1]}<br /><em>{footer.claim[2]}</em></p>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">{t.contact.title}</span>
          <a className="footer-email" href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.name} · Berlin, Germany</span>
          <NewsletterForm labels={{ emailLabel: footer.emailLabel, send: footer.send, sending: footer.sending, thanks: footer.thanks, errEmpty: footer.errEmpty, errInvalid: footer.errInvalid, errConsent: footer.errConsent, errUnavailable: footer.errUnavailable, errProvider: footer.errProvider, consent: footer.consent }} />
        </div>
        <nav className="footer-nav" aria-label={footer.navigate}>
          <span className="eyebrow">{footer.navigate}</span>
          {[
            ['about', footer.about],
            ['services', footer.offers],
            ['events', t.nav.events.label],
            ['community', t.nav.community.label],
            ['support', t.nav.support.label],
            ['references', t.meta.titles.references],
            ['contact', footer.contact],
            ['accessibility', footer.accessibility],
          ].map(([path, label]) => <Link key={path} href={localizePath(`/${path}`, locale)}>{label}</Link>)}
        </nav>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} {site.name}. {footer.rights}</span>
        <span className="footer-socials">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</span>
        <span><Link href={localizePath('/impressum', locale)}>{footer.impressum}</Link> · <Link href={localizePath('/datenschutz', locale)}>{footer.datenschutz}</Link></span>
      </div>
    </footer>
  );
}
