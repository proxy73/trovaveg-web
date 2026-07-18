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
