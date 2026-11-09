import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/i18n/config';
import { SiteChrome } from '@/components/v5/SiteChrome';
import { getMessages } from '@/i18n/messages';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  return (
    <body>
      <SiteChrome locale={locale} t={getMessages(locale)} />
      {children}
    </body>
  );
}
