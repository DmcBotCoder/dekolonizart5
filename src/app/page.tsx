import { HomePage } from '@/components/v5/SitePages';
import { SiteChrome } from '@/components/v5/SiteChrome';
import { getMessages } from '@/i18n/messages';

export default function RootPage() {
  const t = getMessages('en');
  return <body><SiteChrome locale="en" t={t} /><HomePage locale="en" t={t} /></body>;
}
