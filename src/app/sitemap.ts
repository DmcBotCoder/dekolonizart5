import type { MetadataRoute } from 'next';
import { locales, localizePath } from '@/i18n/config';
import { productions } from '@/content/productions';

const pages = ['/', '/about', '/history', '/services', '/theater', '/artistic', '/movement-dance', '/artists', '/the-team', '/events', '/support', '/community', '/references', '/terms-of-sale', '/refund-policy', '/contact', '/glossary', '/easy-read', '/accessibility'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dekolonizart.com').replace(/\/$/, '');
  const urls = locales.flatMap((locale) => [
    ...pages.map((page) => `${base}${localizePath(page, locale)}`),
    ...productions.map((production) => `${base}${localizePath(`/events/${production.slug}`, locale)}`),
  ]);
  return urls.map((url) => ({ url, changeFrequency: 'monthly', priority: url.endsWith('.com/') ? 1 : .6 }));
}
