import Image from 'next/image';
import Link from 'next/link';
import { localizePath, type Locale } from '@/i18n/config';
import type { Messages } from '@/i18n/messages';
import { format } from '@/i18n/messages';
import { artists, getArtist } from '@/content/artists';
import { getProduction, resolveBooking, vibetixEventListEmbed, type Production } from '@/content/productions';
import { resolveEvents } from '@/content/events';
import { closingPortrait, heroImages, partners, posters, workshops } from '@/content/media';
import { offerImages, offers } from '@/content/offers';
import { site, socials, venue } from '@/content/site';
import { team } from '@/content/team';
import { easyRead } from '@/content/easy-read';
import { ReadMore } from './ReadMore';
import { SiteFooter } from './SiteChrome';
import { VibetixEmbed } from './VibetixEmbed';
import { WhyDonateWidget } from './WhyDonateWidget';
import { CommunitySignupForm } from './CommunitySignupForm';
import { supportConfig } from '@/content/support';
import { youTubeId } from '@/lib/youtube';

type PageProps = { locale: Locale; t: Messages };

const path = (value: string, locale: Locale) => localizePath(value, locale);

function Frame({ children, locale, t, tone = '' }: PageProps & { children: React.ReactNode; tone?: string }) {
  return <main id="main-content" className={`v5-page ${tone}`}><div className="page-wrap">{children}</div><SiteFooter locale={locale} t={t} /></main>;
}

function PageMast({ eyebrow, title, intro, index }: { eyebrow: string; title: string; intro?: string; index: string }) {
  return <header className="page-mast"><div className="mast-index">{index} / DK—05</div><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{intro && <p>{intro}</p>}</div><span className="mast-arrow" aria-hidden="true">↓</span></header>;
}

export function HomePage({ locale, t }: PageProps) {
  return (
    <Frame locale={locale} t={t} tone="home-page">
      {/* Legacy hero kept here for a quick rollback if the artistic direction is not selected:
      <section className="hero-field" aria-labelledby="hero-title">
        <div className="hero-image-wrap"><Image src={heroImages.doualaMangaBell.src} alt="" fill priority sizes="(max-width: 700px) 100vw, 70vw" className="hero-image" /></div>
        <div className="hero-stamp"><span>DK—05</span><span>LIVE / BERLIN</span><span>13.12.26</span></div>
        <div className="hero-vertical">THE ART OF REMEMBRANCE</div>
        <div className="hero-copy"><span className="eyebrow">{t.home.eyebrow}</span><h1 id="hero-title"><span>{t.home.h1a}</span><span className="hero-offset">{t.home.h1b}</span></h1><div className="hero-foot"><p>{t.home.lead}</p><Link className="circle-link" href={path('/about', locale)} aria-label={t.home.ctaAbout}>↘</Link></div></div>
        <div className="hero-scroll"><span>{t.home.scroll}</span><span className="scroll-line" /></div>
      </section>
      */}
      {/* Previous artistic experiment retained for reference; the editorial direction below is the active hero. */}
      {/*
      <section className="hero-field hero-field--artistic" aria-labelledby="hero-title">
        <div className="hero-art-backdrop" aria-hidden="true">
          <span className="hero-art-word">REMEMBRANCE</span>
          <span className="hero-art-ring hero-art-ring--one" />
          <span className="hero-art-ring hero-art-ring--two" />
        </div>
        <div className="hero-art-copy">
          <div className="hero-art-kicker"><span className="eyebrow">{t.home.eyebrow}</span><span className="hero-art-serial">DK—05 / LIVE / BERLIN / 13.12.26</span></div>
          <h1 id="hero-title"><span>{t.home.h1a}</span><span className="hero-art-offset">{t.home.h1b}</span></h1>
          <div className="hero-art-foot"><p>{t.home.lead}</p><Link className="hero-art-link" href={path('/about', locale)} aria-label={t.home.ctaAbout}>↘</Link></div>
        </div>
        <div className="hero-art-gallery" aria-label={t.featured.title}>
          <figure className="hero-art-portrait"><Image src={heroImages.doualaMangaBell.src} alt={t.posters.doualaMangaBell} fill priority sizes="(max-width: 700px) 86vw, 42vw" style={{ objectPosition: heroImages.doualaMangaBell.position }} /></figure>
          <figure className="hero-art-poster"><Image src={posters.doualaMangaBell.src} alt={t.posters.doualaMangaBell} fill sizes="(max-width: 700px) 42vw, 16vw" /></figure>
          <span className="hero-art-caption">{t.featured.title}</span>
        </div>
        <div className="hero-art-scroll"><span>{t.home.scroll}</span><span /></div>
      </section>
      */}
      <section className="hero-field hero-field--editorial" aria-labelledby="hero-title">
        <span className="hero-editorial-watermark" aria-hidden="true">REMEMBRANCE</span>
        <div className="hero-editorial-copy">
          <div className="hero-editorial-kicker"><span className="eyebrow">{t.home.eyebrow}</span><span>DK—05 / LIVE / BERLIN / 13.12.26</span></div>
          <h1 id="hero-title"><span>{t.home.h1a}</span><span className="hero-editorial-accent">{t.home.h1b}</span></h1>
          <div className="hero-editorial-foot"><p>{t.home.lead}</p><Link className="hero-editorial-link" href={path('/about', locale)}>{t.home.ctaAbout} <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="hero-editorial-stage" aria-label={t.featured.title}>
          <span className="hero-editorial-halo" aria-hidden="true" />
          <div className="hero-editorial-logo"><Image src={site.logo} alt="" fill priority sizes="(max-width: 700px) 70vw, 30vw" /></div>
          <figure className="hero-editorial-photo"><Image src={heroImages.doualaMangaBell.src} alt={t.posters.doualaMangaBell} fill sizes="(max-width: 700px) 35vw, 16vw" style={{ objectPosition: heroImages.doualaMangaBell.position }} /></figure>
          <figure className="hero-editorial-ticket"><Image src={posters.doualaMangaBell.src} alt={t.posters.doualaMangaBell} fill sizes="(max-width: 700px) 32vw, 12vw" /></figure>
          <span className="hero-editorial-caption">{t.featured.title}</span>
        </div>
        <div className="hero-editorial-scroll"><span>{t.home.scroll}</span><span /></div>
      </section>

      <section className="signal-intro section-light">
        <div className="section-index">01 <span>POSITION</span></div>
        <div className="signal-copy"><span className="eyebrow">{t.home.introH}</span><h2>We make <em>memory</em> move.</h2><p className="lead-copy">{t.home.lead}</p><p>{t.home.p1a}{t.home.p1term}{t.home.p1b}</p><Link className="underlined-link" href={path('/about', locale)}>{t.home.history} <span>↗</span></Link></div>
        <div className="signal-notation" aria-hidden="true"><span>01</span><span>1—1</span><span>REMEMBER</span></div>
      </section>

      <section className="featured-sheet">
        <div className="sheet-tape"><span>{t.home.ticker}</span><span>{t.home.stamp.join(' · ')}</span><span>VIBETIX / 001</span></div>
        <div className="featured-poster"><Image src={posters.doualaMangaBell.src} alt={t.posters.doualaMangaBell} width={posters.doualaMangaBell.width} height={posters.doualaMangaBell.height} /></div>
        <div className="featured-copy"><span className="eyebrow">{t.home.whatsOn} · {t.featured.note}</span><h2>{t.featured.title}</h2><p className="featured-subtitle">{t.featured.subtitleTranslation}</p><p>{t.featured.description}</p><dl className="fact-strip"><div><dt>{t.featured.labels.date}</dt><dd>{t.featured.dateLong}</dd></div><div><dt>{t.featured.labels.time}</dt><dd>{t.featured.time}</dd></div><div><dt>{t.featured.labels.venue}</dt><dd>{t.featured.venue[0]}<br />{t.featured.venue[1]}</dd></div></dl><div className="featured-actions"><Link className="solid-link" href={path('/events/douala-manga-bell/booking', locale)}>{t.home.book} ↗</Link><Link className="arrow-link" href={path('/events/douala-manga-bell', locale)}>{t.common.knowMore} →</Link></div></div>
      </section>

      <section className="practice-field">
        <div className="section-index">02 <span>WAYS OF WORKING</span></div>
        <div className="practice-intro"><span className="eyebrow">{t.home.offersEyebrow}</span><h2>{t.home.offersH}</h2><p>{t.about.intro}</p></div>
        <div className="practice-list">{offers.map((offer, index) => { const copy = t.offers[offer.id]; return <Link className={`practice-chapter chapter-${index + 1}`} href={path(offer.href, locale)} key={offer.id}><div className="chapter-image"><Image src={offer.image.src} alt="" fill sizes="(max-width: 700px) 100vw, 46vw" /></div><span className="chapter-number">0{index + 1}</span><div className="chapter-copy"><span className="eyebrow">{copy.title}</span><h3>{index === 0 ? 'Make the stage a place to question.' : index === 1 ? 'Learn through the body.' : 'Let rhythm carry the archive.'}</h3><span className="chapter-arrow" aria-hidden="true">↗</span></div></Link> })}</div>
      </section>

      <section className="people-signal section-light">
        <div className="section-index">03 <span>THE COLLECTIVE</span></div><div className="people-copy"><span className="eyebrow">{t.artists.eyebrow}</span><h2>Many hands.<br /><em>One living archive.</em></h2><p>{t.about.strong}</p><Link className="underlined-link" href={path('/artists', locale)}>{t.artists.title} <span>↗</span></Link></div>
        <div className="people-image"><Image src={closingPortrait.src} alt="" fill sizes="(max-width: 700px) 100vw, 48vw" /></div><div className="people-caption">Ngako Keuni<br /><span>{t.artists.roles.ngako}</span></div>
      </section>

      <section className="partners-band"><span className="eyebrow">{t.home.partners}</span>{partners.map((partner) => <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer"><Image src={partner.logo.src} alt={partner.name} width={partner.logo.width} height={partner.logo.height} /></a>)}</section>
    </Frame>
  );
}

export function EventsPage({ locale, t }: PageProps) {
  return <Frame locale={locale} t={t} tone="events-page"><PageMast eyebrow={t.allEvents.eyebrow} title={t.allEvents.title} intro={t.home.lead} index="04" /><section className="v5-events-provider"><h2>{t.allEvents.vibetixH}</h2><p>{t.allEvents.vibetixP}</p><VibetixEmbed embedId={vibetixEventListEmbed.embedId} checkoutUrl={vibetixEventListEmbed.checkoutUrl} labels={{ loading: t.booking.embedLoading, error: t.booking.embedError, fallback: t.booking.embedFallback }} /></section></Frame>;
}

function PosterBand({ production, locale, t }: { production: Production; locale: Locale; t: Messages }) {
  const poster = production.image ? posters[production.image.key] : posters.doualaMangaBell;
  const show = t.shows[production.slug];
  return <div className="poster-band"><Image src={poster.src} alt={t.posters[production.image?.key ?? 'doualaMangaBell']} width={poster.width} height={poster.height} /><div className="poster-band-copy"><span className="eyebrow">{show.when}</span><h2>{show.title}</h2><p>{show.text}</p><Link className="solid-link" href={path(`/events/${production.slug}/booking`, locale)}>{t.booking.title} ↗</Link></div></div>;
}

export function EventDetailPage({ locale, t, slug }: PageProps & { slug: string }) {
  const production = getProduction(slug);
  if (!production) return <NotFoundPage locale={locale} t={t} />;
  const show = t.shows[production.slug];
  const plot = production.plotTranslations?.[locale] ? { lang: locale, blocks: production.plotTranslations[locale] } : production.plot;
  const cast = production.cast.map((item) => ({ ...item, artist: getArtist(item.artist) })).filter((item) => item.artist);
  const subtitleTranslation = production.slug === 'douala-manga-bell' ? t.shows['douala-manga-bell'].subtitleTranslation : undefined;
  return <Frame locale={locale} t={t} tone="detail-page"><div className="detail-intro"><div className="detail-spine"><span>{t.production.introH}</span><span>DK / {production.slug}</span></div><div className="detail-title"><span className="eyebrow">{show.when} · {t.allEvents.categories[production.category]}</span><h1>{show.title}</h1>{production.subtitle && <p className="detail-subtitle">{production.subtitle} {subtitleTranslation && <span>{subtitleTranslation}</span>}</p>}</div><div className="detail-poster">{production.image && <Image src={posters[production.image.key].src} alt={t.posters[production.image.key]} width={posters[production.image.key].width} height={posters[production.image.key].height} />}</div></div><div className="detail-body"><div className="detail-aside"><span className="eyebrow">{t.production.datesH}</span><p>{show.when}</p><p>{t.featured.venue.join(' ')}</p><Link className="solid-link" href={path(`/events/${production.slug}/booking`, locale)}>{t.booking.title} ↗</Link></div><div className="detail-story"><span className="eyebrow">{t.production.plotH}</span>{plot?.blocks.map((block, index) => block.kind === 'h3' ? <h2 key={index}>{block.text}</h2> : <p key={index}><ReadMore text={block.text.split('<!--more-->')[0]} more={block.text.split('<!--more-->')[1]} labels={{ more: t.common.readMore, less: t.common.readLess }} /></p>)}{production.introVideo && <div className="video-score"><div className="video-label"><span>{t.production.introH}</span><span>{t.production.introVideo.replace('{title}', show.title)}</span></div><div className="video-frame"><iframe title={t.production.introVideo.replace('{title}', show.title)} src={`https://www.youtube-nocookie.com/embed/${youTubeId(production.introVideo.url)}?rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div></div>}{cast.length > 0 && <div className="cast-ledger"><span className="eyebrow">{t.production.castH}</span>{cast.map(({ artist, credit }) => artist && <div className="cast-line" key={artist.slug}><span>{credit === 'author' ? t.featured.labels.author : credit === 'composer' ? t.featured.labels.composer : t.production.castH}</span><strong>{artist.name}</strong><Link href={path(`/artists#${artist.slug}`, locale)}>{t.production.castLink} ↗</Link></div>)}</div>}</div></div></Frame>;
}

export function BookingPage({ locale, t, slug }: PageProps & { slug: string }) {
  const production = getProduction(slug);
  if (!production) return <NotFoundPage locale={locale} t={t} />;
  const booking = resolveBooking(production);
  const embed = production.booking.enabled ? production.booking.embed : undefined;
  const show = t.shows[production.slug];
  return <Frame locale={locale} t={t} tone="booking-page"><div className="booking-sheet"><span className="eyebrow">{t.booking.eyebrow} / {show.when}</span><h1>{format(t.booking.pageTitle, { title: show.title })}</h1><div className="booking-grid"><div><p className="booking-big">{t.booking.title}</p><p>{format(t.booking.provider, { provider: 'Vibetix' })}</p></div><div className="booking-action">{embed ? <p>{format(t.booking.provider, { provider: 'Vibetix' })}</p> : booking ? <a className="solid-link" href={booking.url} target="_blank" rel="noreferrer">{t.booking.continue} ↗</a> : <><p>{t.booking.unavailable}</p><p>{format(t.booking.byEmail, { email: site.email })}</p><a className="solid-link" href={`mailto:${site.email}?subject=${encodeURIComponent(format(t.booking.emailSubject, { title: show.title }))}`}>{t.booking.emailCta} ↗</a></>}</div></div>{embed && <VibetixEmbed embedId={embed.embedId} checkoutUrl={embed.checkoutUrl} fallbackUrl={embed.fallbackUrl} labels={{ loading: t.booking.embedLoading, error: t.booking.embedError, fallback: t.booking.embedFallback }} />}</div></Frame>;
}

export function AboutPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t}><PageMast eyebrow={t.about.eyebrow} title={t.about.h2.join(' ')} intro={t.about.intro} index="05" /><section className="essay-grid"><div className="essay-lead"><span className="eyebrow">01 / {t.about.valuesH}</span><p>{t.about.leadA}<em>{t.about.leadTerm}</em>{t.about.leadB}</p></div><div><p>{t.about.p1}</p><p>{t.about.p2}</p><p className="pull-quote">{t.about.strong}</p></div></section><section className="values-ledger" id="values">{t.about.cards.map((card, index) => <article key={card.h}><span>0{index + 1}</span><h2>{card.h}</h2><div>{card.p.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>)}</section></Frame>; }

export function HistoryPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t} tone="history-page"><PageMast eyebrow={t.history.eyebrow} title={t.history.title} intro={t.history.intro} index="06" /><section className="v5-draft"><span className="eyebrow">{t.history.draftLabel}</span><h2>{t.history.draftTitle}</h2><div className="v5-draft-text">{t.history.draftParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="v5-draft-note">{t.history.draftNotice}</p></section><section className="timeline-field"><div className="eyebrow">{t.history.timelineH}</div>{t.history.items.map((item) => <article className="timeline-row" key={item.year}><strong>{item.year}</strong><div><h2>{item.title}</h2><p>{item.text}</p></div><span>↗</span></article>)}</section></Frame>; }

export function SupportPage({ locale, t }: PageProps) { const s = t.support; return <Frame locale={locale} t={t} tone="support-page"><PageMast eyebrow={s.eyebrow} title={s.title} intro={s.intro} index="17" /><section className="v5-support-grid"><div className="v5-support-panel"><h2>{s.impactH}</h2><p>{s.impactP}</p><ul className="v5-impact-list">{s.impactItems.map((item) => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul></div><div className="v5-support-panel"><h2>{s.widgetH}</h2><p>{s.widgetP}</p><WhyDonateWidget lang={locale} {...supportConfig.donationWidget} /></div></section><p className="v5-support-note">{s.contact} <a className="underlined-link" href={`mailto:${site.email}`}>{site.email} ↗</a></p></Frame>; }

export function CommunityPage({ locale, t }: PageProps) { const c = t.community; return <Frame locale={locale} t={t} tone="community-page"><PageMast eyebrow={c.eyebrow} title={c.title} intro={c.intro} index="18" /><section className="v5-community-intro"><h2>{c.presentationH}</h2><p>{c.presentationP}</p></section><section className="v5-community-grid v5-community-grid--single"><div className="v5-community-panel"><h2>{c.form.heading}</h2><CommunitySignupForm labels={c.form} whatsappUrl={supportConfig.community.whatsappUrl} /></div></section></Frame>; }

export function ReferencesPage({ locale, t }: PageProps) { const r = t.references; return <Frame locale={locale} t={t} tone="references-page"><PageMast eyebrow={r.eyebrow} title={r.title} intro={r.intro} index="19" /><section className="v5-community-grid"><div className="v5-community-panel"><h2>{r.partnersH}</h2><div className="v5-reference-list">{partners.map((partner) => <article key={partner.name}><Image src={partner.logo.src} alt={partner.name} width={partner.logo.width} height={partner.logo.height} /><h3>{partner.name}</h3><p>{r.noDescription}</p><a className="underlined-link" href={partner.href} target="_blank" rel="noopener noreferrer">{r.website} ↗</a></article>)}</div></div><div className="v5-community-panel"><h2>{r.coachesH}</h2><p>{r.noCoaches}</p></div></section></Frame>; }

export function SalesPage({ locale, t, kind }: PageProps & { kind: 'terms' | 'refund' }) { const isTerms = kind === 'terms'; return <Frame locale={locale} t={t} tone="legal-page"><PageMast eyebrow={isTerms ? t.sales.termsEyebrow : t.sales.refundEyebrow} title={isTerms ? t.sales.termsTitle : t.sales.refundTitle} intro={t.sales.pending} index="20" /><section className="v5-draft"><p className="v5-draft-note">{t.sales.pending}</p></section></Frame>; }

export function ServicesPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t} tone="services-page"><PageMast eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} index="07" /><section className="service-chapters">{offers.map((offer, index) => { const copy = t.offers[offer.id]; return <article className="service-chapter" key={offer.id}><div className="service-image"><Image src={offer.image.src} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="service-number">0{index + 1}</div><div className="service-copy"><span className="eyebrow">{copy.title}</span><h2>{copy.title}</h2><p>{copy.text}</p><Link className="arrow-link" href={path(offer.href, locale)}>{t.services.visit} ↗</Link></div></article>; })}</section><section className="closing-cta"><span className="eyebrow">{t.services.ctaH}</span><h2>{t.services.ctaH}</h2><Link className="solid-link" href={path('/contact', locale)}>{t.services.ctaBtn} ↗</Link></section></Frame>; }

export function ArtisticPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t} tone="artistic-page"><PageMast eyebrow={t.artistic.eyebrow} title={t.artistic.h2} intro={t.artistic.intro} index="08" /><section className="artistic-intro"><div><p className="lead-copy">{t.artistic.leadA}<em>{t.artistic.leadTerm}</em>{t.artistic.leadB}</p><p>{t.artistic.p1}</p><p>{t.artistic.p2a}<strong>Douala Manga Bell</strong>{t.artistic.p2b}{t.artistic.p2c}</p></div><div className="workshop-band"><Image src={workshops[1].image.src} alt={t.artistic.bandAlt} fill sizes="(max-width: 700px) 100vw, 45vw" /><span>{t.artistic.bandPlace}</span></div></section><section className="chapter-notes">{t.artistic.cards.map((card, index) => <article key={card.h}><span>0{index + 1}</span><h2>{card.h}</h2><p>{card.p}</p></article>)}</section><section className="youth-sheet"><span className="eyebrow">{t.artistic.youth.eyebrow}</span><h2>{t.artistic.youth.h2}</h2><p>{t.artistic.youth.lead}</p><div className="youth-facts">{t.artistic.youth.facts.map((fact) => <div key={fact.strong}><strong>{fact.strong}</strong><span>{fact.span}</span></div>)}</div><Link className="solid-link" href={path('/contact', locale)}>{t.artistic.youth.cta} ↗</Link></section></Frame>; }

export function TheaterPage({ locale, t }: PageProps) { const featured = getProduction('douala-manga-bell')!; const theaterEvents = resolveEvents(t, locale).filter((event) => event.category === 'theater'); return <Frame locale={locale} t={t} tone="theater-page"><PageMast eyebrow={t.theater.eyebrow} title={t.theater.title} intro={t.home.lead} index="08" /><PosterBand production={featured} locale={locale} t={t} /><section className="theater-list"><div className="eyebrow">{t.theater.upcomingH}</div>{theaterEvents.map((event, index) => <Link className="theater-line" href={path(event.secondary.href, locale)} key={event.id}><span>0{index + 1}</span><strong>{event.when}</strong><h2>{event.title}</h2><em>↗</em></Link>)}</section><section className="booking-note"><span className="eyebrow">{t.theater.bookEyebrow}</span><h2>{t.theater.bookH}</h2>{t.bookingFaq.slice(0, 2).map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</section></Frame>; }

export function MovementPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t}><PageMast eyebrow={t.movement.eyebrow} title={t.movement.title} intro={t.movement.intro} index="09" /><section className="movement-feature"><Image src={offerImages.movement.src} alt="" fill sizes="100vw" /><div><span className="eyebrow">{t.movement.upcomingH}</span><h2>{t.home.offersH}</h2><Link className="solid-link" href={path('/events', locale)}>{t.common.knowMore} ↗</Link></div></section><section className="faq-ledger"><span className="eyebrow">{t.movement.faqH}</span>{t.faq.slice(0, 3).map((item, index) => <details key={item.q}><summary><span>0{index + 1}</span>{item.q}</summary><p>{item.a}</p></details>)}</section></Frame>; }

export function ArtistsPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t} tone="artists-page"><PageMast eyebrow={t.artists.eyebrow} title={t.artists.title} intro={t.about.intro} index="10" /><section className="artist-index">{artists.map((artist, index) => <article className="artist-entry" id={artist.slug} key={artist.slug}><div className="artist-marker">0{index + 1}</div><div className="artist-portrait">{artist.photo ? <Image src={artist.photo.src} alt={artist.photo.alt ?? artist.name} width={artist.photo.width} height={artist.photo.height} /> : <span>{artist.name.split(' ').map((part) => part[0]).join('')}</span>}</div><div className="artist-writing"><span className="eyebrow">{artist.location ?? t.artists.eyebrow}</span><h2>{artist.name}</h2><p className="artist-role">{t.artists.roles[artist.role]}</p>{artist.bio && <p><ReadMore text={artist.bio.paragraphs[0]} more={artist.bio.paragraphs.slice(1).join(' ')} labels={{ more: t.common.readMore, less: t.common.readLess }} /></p>}{artist.website && <a className="underlined-link" href={artist.website} target="_blank" rel="noreferrer">{format(t.artists.website, { name: artist.name })} ↗</a>}</div></article>)}</section></Frame>; }

export function TeamPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t} tone="team-page"><PageMast eyebrow={t.team.eyebrow} title={t.team.title} intro={t.team.intro} index="11" /><section className="team-roll">{team.map((member, index) => <article key={member.name} className={index % 2 ? 'team-member reverse' : 'team-member'}><span className="team-index">0{index + 1}</span><div className="team-photo">{member.photo ? <Image src={member.photo.src} alt={member.name} width={member.photo.width} height={member.photo.height} style={{ objectPosition: member.photo.position }} /> : <span>{member.name.slice(0, 2).toUpperCase()}</span>}</div><div><span className="eyebrow">{t.team.roles[member.role]}</span><h2>{member.name}</h2></div></article>)}</section></Frame>; }

export function ContactPage({ locale, t }: PageProps) { return <Frame locale={locale} t={t} tone="contact-page"><PageMast eyebrow={t.contact.eyebrow} title={t.contact.title} index="12" /><section className="contact-coordinates"><div className="coordinate-email"><span className="eyebrow">01 / {t.contact.artistic}</span><a href={`mailto:${site.email}`}>{site.email}</a><p>{t.home.support1}</p></div><div className="coordinate-address"><span className="eyebrow">02 / {t.ui.venueH}</span><h2>{venue.name}</h2><p>{venue.street}<br />{venue.city}<br />{venue.place}</p><a className="arrow-link" href={venue.mapUrl} target="_blank" rel="noreferrer">{t.common.showOnMap} ↗</a></div><div className="coordinate-social"><span className="eyebrow">03 / {t.footer.follow}</span>{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div></section><section className="no-form-note"><span className="eyebrow">{t.contact.production}</span><p>There is no contact form here. Write to us directly and tell us what you want to make, remember or renew.</p><a className="solid-link" href={`mailto:${site.email}`}>Write an e-mail ↗</a></section></Frame>; }

function TextPage({ locale, t, eyebrow, title, intro, children, index }: PageProps & { eyebrow: string; title: string; intro?: string; children: React.ReactNode; index: string }) { return <Frame locale={locale} t={t} tone="text-page"><PageMast eyebrow={eyebrow} title={title} intro={intro} index={index} /><article className="long-reading">{children}</article></Frame>; }

export function GlossaryPage({ locale, t }: PageProps) { return <TextPage locale={locale} t={t} eyebrow={t.glossary.eyebrow} title={t.glossary.title} intro={t.glossary.intro} index="13"><div className="glossary-list">{t.glossary.items.map((item) => <details key={item.id}><summary>{item.term}<span>+</span></summary><p>{item.text}</p></details>)}</div></TextPage>; }

export function AccessibilityPage({ locale, t }: PageProps) { return <TextPage locale={locale} t={t} eyebrow={t.accessibility.eyebrow} title={t.accessibility.title} intro={t.accessibility.intro} index="14"><h2>{t.accessibility.standardH}</h2><p>{t.accessibility.standard}</p><h2>{t.accessibility.statusH}</h2><p>{t.accessibility.status}</p><h2>{t.accessibility.doneH}</h2><ul>{t.accessibility.done.map((item) => <li key={item}>{item}</li>)}</ul><h2>{t.accessibility.notYetH}</h2><ul>{t.accessibility.notYet.map((item) => <li key={item.strong}><strong>{item.strong}</strong> {item.text}</li>)}</ul><h2>{t.accessibility.feedbackH}</h2><p>{t.accessibility.feedback}</p><a className="underlined-link" href={`mailto:${t.accessibility.email}`}>{t.accessibility.email} ↗</a></TextPage>; }

export function LegalPage({ locale, t, kind }: PageProps & { kind: 'impressum' | 'datenschutz' }) { return <TextPage locale={locale} t={t} eyebrow={kind === 'impressum' ? t.legal.impressumEyebrow : t.legal.datenschutzEyebrow} title={kind === 'impressum' ? t.meta.titles.impressum : t.meta.titles.datenschutz} intro={t.common.legalGermanOnly} index="15"><div lang="de"><p className="legal-warning">Vorlage – noch nicht veröffentlichungsreif. Die Platzhalter müssen vor Veröffentlichung ergänzt und juristisch geprüft werden.</p><h2>{kind === 'impressum' ? 'Angaben gemäß § 5 DDG' : 'Verantwortliche Stelle'}</h2><p>{site.name}<br />{venue.street}<br />{venue.city}<br />E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a></p>{kind === 'datenschutz' ? <><h2>Kontakt per E-Mail</h2><p>Diese Website hat kein Kontaktformular. Wenn Sie uns eine E-Mail schreiben, erhalten wir Ihre E-Mail-Adresse und die Angaben, die Sie uns mitteilen.</p><h2>Lokale Speicherung</h2><p>Die Website speichert nur Ihre Sprach- und Barrierefreiheitseinstellungen im Browser.</p><h2>Ihre Rechte</h2><p>Sie haben die Rechte auf Auskunft, Berichtigung, Löschung und Widerspruch nach der DSGVO.</p></> : <><h2>Kontakt</h2><p>Vertreten durch: <span className="legal-placeholder">TODO: Verantwortliche Person</span><br />Telefon: <span className="legal-placeholder">TODO: Telefonnummer</span></p><h2>Haftung und Urheberrecht</h2><p>Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht. Bitte beachten Sie die gesetzlichen Hinweise vor einer Veröffentlichung.</p></>}</div></TextPage>; }

export function EasyReadPage({ locale, t }: PageProps) { const page = easyRead[locale]; return <TextPage locale={locale} t={t} eyebrow={page.eyebrow} title={page.title} intro={page.intro} index="16"><p className="easy-lead">{page.draft}</p>{page.blocks.map((block, index) => { if ('h2' in block) return <h2 key={index}>{block.h2}</h2>; if ('list' in block) return <ul key={index}>{block.list.map((item) => <li key={item}>{item}</li>)}</ul>; if ('box' in block) return <div className="easy-box" key={index}>{block.box.map((line) => <p key={line}>{line}</p>)}</div>; if ('big' in block) return <p className="easy-lead" key={index}><a className="underlined-link" href={block.big.includes('mailto:') ? `mailto:${site.email}` : undefined}>{block.big}</a></p>; return <p key={index}>{'p' in block ? block.p : block.explain}</p>; })}</TextPage>; }

export function NotFoundPage({ locale, t }: PageProps) { return <TextPage locale={locale} t={t} eyebrow="404" title={t.notFound.title} intro={t.notFound.text} index="—"><Link className="solid-link" href={path('/', locale)}>{t.notFound.home} ↗</Link></TextPage>; }
