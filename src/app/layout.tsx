import type { Metadata } from 'next';
import './styles.css';
import '../styles/v5-overrides.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dekolonizart.com'),
  title: 'DekolonizArt — the Art of Remembrance, the Power of Renewal',
  description: 'Independent multidisciplinary performing arts company in Berlin.',
  icons: {
    icon: '/img/logo.png',
    apple: '/img/logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html suppressHydrationWarning>{children}</html>;
}
