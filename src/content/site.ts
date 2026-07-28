/**
 * Shared site invariants — language-agnostic URLs and assets.
 * Do not duplicate Telegram/email/social URLs in locale copy files.
 */
export const site = {
  name: 'TrovaVeg',
  url: 'https://trovaveg.com',
  telegramBot: 'https://t.me/TrovaVegBot',
  email: 'info@trovaveg.com',
  instagram: 'https://www.instagram.com/trovaveg/',
  instagramHandle: '@trovaveg',
  facebook: 'https://www.facebook.com/TrovaVeg',
  facebookLabel: 'TrovaVeg',
  cloudflareAnalyticsToken: '702a37a5d4c84af593a46d379ab3ca8f',
  ogImage: '/og-default.png',
} as const;

export type Site = typeof site;

/** Allowlisted web CTA attribution payloads (compile-time only). */
export const WEB_TELEGRAM_SOURCES = [
  'web_home_it',
  'web_city_it',
  'web_home_en',
  'web_city_en',
] as const;

export type WebTelegramSource = (typeof WEB_TELEGRAM_SOURCES)[number];

/**
 * Telegram bot href. Without source → plain bot URL (Privacy, 404, contacts).
 * With allowlisted source → static ?start= payload (no runtime URL/path/query).
 */
export function telegramBotHref(source?: WebTelegramSource): string {
  if (!source) return site.telegramBot;
  return `${site.telegramBot}?start=${source}`;
}
