import { notFound } from 'next/navigation';
import { getMessages } from '@/i18n/messages';
import { isLocale, type Locale } from '@/i18n/config';
import { AboutPage, AccessibilityPage, ArtisticPage, ArtistsPage, BookingPage, CommunityPage, ContactPage, EasyReadPage, EventDetailPage, EventsPage, GlossaryPage, HistoryPage, HomePage, LegalPage, MovementPage, NotFoundPage, ReferencesPage, SalesPage, ServicesPage, SupportPage, TeamPage, TheaterPage } from '@/components/v5/SitePages';

type RouteProps = { params: Promise<{ locale: string; rest?: string[] }> };

export async function generateMetadata({ params }: RouteProps) {
  const { locale: value, rest } = await params;
  if (!isLocale(value)) return {};
  const t = getMessages(value);
  const route = rest?.[0];
  const slug = rest?.[1];
  const detail = route === 'events' && slug ? t.shows[slug as keyof typeof t.shows]?.title : undefined;
  const title = detail ?? (route === 'events' ? t.meta.titles.events : route === 'contact' ? t.meta.titles.contact : route === 'about' ? t.meta.titles.about : route === 'support' ? t.meta.titles.support : route === 'community' ? t.meta.titles.community : route === 'references' ? t.meta.titles.references : route === 'terms-of-sale' ? t.meta.titles.terms : route === 'refund-policy' ? t.meta.titles.refund : t.meta.homeTitle);
  return { title: `${title} — DekolonizArt`, description: t.meta.description };
}

export default async function LocalizedRoute({ params }: RouteProps) {
  const { locale: value, rest = [] } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const t = getMessages(locale);
  const [first, second, third] = rest;
  if (!first) return <HomePage locale={locale} t={t} />;
  if (first === 'about') return <AboutPage locale={locale} t={t} />;
  if (first === 'history') return <HistoryPage locale={locale} t={t} />;
  if (first === 'support') return <SupportPage locale={locale} t={t} />;
  if (first === 'community') return <CommunityPage locale={locale} t={t} />;
  if (first === 'references') return <ReferencesPage locale={locale} t={t} />;
  if (first === 'terms-of-sale') return <SalesPage locale={locale} t={t} kind="terms" />;
  if (first === 'refund-policy') return <SalesPage locale={locale} t={t} kind="refund" />;
  if (first === 'services') return <ServicesPage locale={locale} t={t} />;
  if (first === 'theater') return <TheaterPage locale={locale} t={t} />;
  if (first === 'artistic') return <ArtisticPage locale={locale} t={t} />;
  if (first === 'movement-dance') return <MovementPage locale={locale} t={t} />;
  if (first === 'artists') return <ArtistsPage locale={locale} t={t} />;
  if (first === 'the-team') return <TeamPage locale={locale} t={t} />;
  if (first === 'contact') return <ContactPage locale={locale} t={t} />;
  if (first === 'events' && !second) return <EventsPage locale={locale} t={t} />;
  if (first === 'events' && second && third === 'booking') return <BookingPage locale={locale} t={t} slug={second} />;
  if (first === 'events' && second) return <EventDetailPage locale={locale} t={t} slug={second} />;
  if (first === 'glossary') return <GlossaryPage locale={locale} t={t} />;
  if (first === 'easy-read') return <EasyReadPage locale={locale} t={t} />;
  if (first === 'accessibility') return <AccessibilityPage locale={locale} t={t} />;
  if (first === 'impressum') return <LegalPage locale={locale} t={t} kind="impressum" />;
  if (first === 'datenschutz') return <LegalPage locale={locale} t={t} kind="datenschutz" />;
  return <NotFoundPage locale={locale} t={t} />;
}
