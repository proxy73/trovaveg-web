import { en } from './en';
import { it } from './it';
import { site } from '../site';

export type Locale = 'it' | 'en';

export { site };
export type { Site } from '../site';

const copies = { it, en } as const;

export type AppCopy = (typeof copies)[Locale];

export function getCopy(locale: Locale): AppCopy {
  return copies[locale];
}

/** Path pairs for language switcher and hreflang (trailingSlash: never). */
export const alternates: Record<string, { it: string; en: string }> = {
  home: { it: '/', en: '/en' },
  bologna: { it: '/bologna', en: '/en/bologna' },
  florence: { it: '/firenze', en: '/en/florence' },
  privacy: { it: '/privacy', en: '/en/privacy' },
  notFound: { it: '/404', en: '/en/404' },
};

export type AlternateKey = keyof typeof alternates;

export function getAlternatePath(key: AlternateKey, locale: Locale): string {
  return alternates[key][locale];
}

/**
 * Language switch targets.
 * Soft EN 404 → Italian home (/). Italian soft 404 → /en/404.
 */
export function getLanguageSwitchHref(
  key: AlternateKey,
  targetLocale: Locale,
): string {
  if (key === 'notFound' && targetLocale === 'it') return '/';
  return alternates[key][targetLocale];
}

export function absoluteUrl(path: string): string {
  if (path === '/') return `${site.url}/`;
  return new URL(path, site.url).toString();
}
