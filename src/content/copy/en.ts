/**
 * English UI and page copy — tourist-facing, approved editorial source.
 */
export const en = {
  locale: 'en' as const,
  htmlLang: 'en',
  ogLocale: 'en_US',
  ui: {
    skipToContent: 'Skip to content',
    languageLabel: 'Language',
    langIt: 'IT',
    langEn: 'EN',
    navAriaLabel: 'Main',
    menuLabel: 'Menu',
    footerBot: 'Telegram bot',
    footerNote:
      'A pocket guide on Telegram · No website account · No CMS · No database',
  },
  siteChrome: {
    tagline: 'Your pocket veg guide',
    description:
      'A pocket guide on Telegram for finding vegan, vegetarian and vegan-friendly places.',
    availability:
      'Available in Bologna and its province. Florence is currently in beta.',
    footerCta: 'Open TrovaVeg on Telegram',
  },
  nav: [
    { href: '/en', label: 'Home' },
    { href: '/en/bologna', label: 'Bologna' },
    { href: '/en/florence', label: 'Florence' },
    { href: '/en/privacy', label: 'Privacy' },
  ],
  home: {
    metaTitle: 'TrovaVeg | Find vegan, vegetarian and vegan-friendly places',
    metaDescription:
      'Find vegan, vegetarian and vegan-friendly places in Bologna and its province with TrovaVeg on Telegram. Florence is currently in beta.',
    eyebrow: 'TrovaVeg on Telegram',
    headline: 'Find vegan, vegetarian and vegan-friendly places',
    guideMessage: 'Fewer endless lists, more useful answers.',
    lead: 'TrovaVeg is a Telegram guide for finding places, dishes, categories, areas and towns when you are travelling, exploring somewhere new or simply deciding where to go.',
    ctaPrimary: 'Open on Telegram',
    ctaSecondary: 'How it works',
    heroImage: {
      src: '/screenshot-hero.webp',
      alt: 'Telegram screen of TrovaVeg with the bot welcome message',
    },
    howTitle: 'How it works',
    howLead: 'Ask TrovaVeg what you are looking for and get started directly in Telegram.',
    howSteps: [
      {
        title: 'Tell TrovaVeg what you need',
        text: 'Search by dish, category, area, town or preference.',
      },
      {
        title: 'Explore the results',
        text: 'Find useful details such as location, map, phone number and other available information.',
      },
      {
        title: 'Choose where to go',
        text: 'Open the place details and contact the venue directly when you need to confirm something.',
      },
    ],
    searchTitle: 'Search your way',
    searchLead:
      'TrovaVeg is designed for focused searches, whether you know exactly what you want or just need a useful starting point.',
    searchItems: [
      {
        title: 'Dishes and categories',
        text: 'Looking for breakfast, pizza, burgers, desserts or something else? Start from what you feel like eating.',
        image: '/screenshot-categorie.webp',
        alt: 'TrovaVeg screen with place category choices',
      },
      {
        title: 'Areas and towns',
        text: 'Search by neighbourhood, area, city or municipality.',
        image: '/screenshot-citta.webp',
        alt: 'TrovaVeg screen with city and area selection',
      },
      {
        title: 'Your preferences',
        text: 'Look for vegan, vegetarian and vegan-friendly options.',
        image: '/screenshot-vegstatus.webp',
        alt: 'TrovaVeg screen with vegan, vegetarian and vegan-friendly filters',
      },
    ],
    citiesTitle: 'Where to find TrovaVeg',
    citiesLead: '',
    cities: [
      {
        href: '/en/bologna',
        name: 'Bologna and its province',
        status: 'Available',
        text: 'Search places across Bologna and nearby municipalities.',
        cta: 'Explore Bologna',
      },
      {
        href: '/en/florence',
        name: 'Florence',
        status: 'Beta',
        text: 'TrovaVeg is available in beta while coverage continues to grow.',
        cta: 'Explore Florence',
      },
    ],
    citiesNote: '',
    whyTitle: 'A more focused way to search',
    whyLead:
      'Generic searches can be time-consuming, scattered and difficult to trust when you are in a new place. TrovaVeg focuses on the vegan world and helps you get to useful information faster.',
    whyPoints: [
      {
        title: 'Focused on vegan, vegetarian and vegan-friendly places',
        text: '',
      },
      {
        title: 'Useful for visitors, locals and mixed groups',
        text: '',
      },
      {
        title: 'Search by dishes, categories, areas and towns',
        text: '',
      },
      {
        title: 'Available directly in Telegram',
        text: '',
      },
      {
        title: 'Information curated and improved over time',
        text: '',
      },
    ],
    communityTitle: 'Know a place worth adding?',
    communityLead:
      'TrovaVeg grows with the community. You can suggest new places or report information that needs updating directly through the bot.',
    communityCta: 'Open TrovaVeg on Telegram',
    communityImage: {
      src: '/screenshot-segnala.webp',
      alt: 'TrovaVeg screen for suggesting a new place',
    },
    limitsTitle: 'Clear limits, no surprises',
    limitsIntro:
      'TrovaVeg is a focused guide, not a general-purpose chatbot or a booking service.',
    limits: [
      'TrovaVeg does not formally certify venues.',
      'Opening hours are indicative and may change.',
      'The bot does not check real-time opening status.',
      'TrovaVeg does not make bookings.',
      'Some information may be incomplete or change over time.',
      'For allergies, coeliac disease and cross-contamination, always contact the venue directly.',
      'Florence is currently in beta.',
    ],
    finalCta: {
      title: 'Ready to find your next place?',
      text: 'Open TrovaVeg on Telegram and start searching.',
      cta: 'Open on Telegram',
    },
  },
  bologna: {
    metaTitle: 'Vegan, vegetarian and vegan-friendly places in Bologna | TrovaVeg',
    metaDescription:
      'Find vegan, vegetarian and vegan-friendly places in Bologna and its province with TrovaVeg, the focused Telegram guide.',
    status: 'Available',
    headline: 'Bologna, made easier.',
    lead: 'TrovaVeg is available in Bologna and its province. Search for vegan, vegetarian and vegan-friendly places by dish, category, area, town or preference.',
    cta: 'Search Bologna on Telegram',
    ctaSecondary: null as string | null,
    image: {
      src: '/screenshot-citta.webp',
      alt: 'TrovaVeg screen with city and area options for Bologna',
    },
    body: [] as string[],
    sections: [
      {
        type: 'text' as const,
        title: 'Search Bologna your way',
        paragraphs: [
          'Whether you are staying in the city centre, exploring a neighbourhood or travelling around the province, TrovaVeg helps you start from what matters to you.',
        ],
      },
      {
        type: 'examples' as const,
        title: 'Examples',
        items: [
          'Vegan breakfast in the city centre',
          'Vegetarian options near me',
          'Vegan pizza in Bologna',
          'A vegan-friendly place for a mixed group',
          'Desserts, burgers, aperitivo or lunch',
        ],
      },
      {
        type: 'text' as const,
        title: 'Bologna and its province',
        paragraphs: [
          'TrovaVeg is not limited to the historic centre. You can also search by town, municipality and area across Bologna and its province.',
        ],
      },
      {
        type: 'list' as const,
        title: 'Useful when you need to decide quickly',
        items: [
          'You are visiting Bologna for the first time',
          'You are in a new neighbourhood',
          'You are travelling with friends with different preferences',
          'You know what you want to eat, but not where to go',
          'You want a more focused alternative to a generic search',
        ],
      },
      {
        type: 'text' as const,
        title: 'Before you go',
        paragraphs: [
          'Information is curated and improved over time, but details can change. Check directly with the venue for opening hours, availability, allergens, coeliac disease and cross-contamination.',
        ],
        cta: 'Search Bologna on Telegram',
      },
    ],
  },
  florence: {
    metaTitle: 'Vegan, vegetarian and vegan-friendly places in Florence | TrovaVeg Beta',
    metaDescription:
      'Explore vegan, vegetarian and vegan-friendly places in Florence with TrovaVeg on Telegram. Florence is currently in beta.',
    status: 'Beta',
    headline: 'Florence, in beta.',
    lead: 'TrovaVeg is available in Florence in beta. You can already use it to search for vegan, vegetarian and vegan-friendly places while coverage continues to grow.',
    cta: 'Search Florence on Telegram',
    ctaSecondary: 'Help improve Florence',
    image: {
      src: '/screenshot-segnala.webp',
      alt: 'TrovaVeg screen for suggesting a missing place in Florence',
    },
    body: [] as string[],
    sections: [
      {
        type: 'text' as const,
        title: 'What beta means',
        paragraphs: [
          'TrovaVeg is expanding its coverage in Florence. The service is already usable, but information and coverage may be less complete than in Bologna and its province.',
        ],
      },
      {
        type: 'list' as const,
        title: 'What you can search for',
        items: [
          'Vegan, vegetarian and vegan-friendly places',
          'Dishes and categories',
          'Areas and neighbourhoods',
          'Useful available details for each place',
        ],
      },
      {
        type: 'text' as const,
        title: 'Help improve Florence',
        paragraphs: [
          'Found a missing place or information that should be updated? Let TrovaVeg know through the bot. Community feedback helps improve the guide over time.',
        ],
        cta: 'Open TrovaVeg on Telegram',
      },
      {
        type: 'text' as const,
        title: 'A transparent beta',
        paragraphs: [
          'Florence is in beta. Information may be incomplete or change over time, and opening hours are not checked in real time. For allergies, coeliac disease and cross-contamination, always contact the venue directly.',
        ],
        cta: 'Search Florence on Telegram',
      },
    ],
  },
  privacy: {
    metaTitle: 'Privacy and transparency | TrovaVeg',
    metaDescription:
      'Learn how TrovaVeg handles website analytics, external services, Telegram links and information transparency.',
    headline: 'Privacy and transparency',
    lead: 'This page explains how the TrovaVeg website works, which external services it uses and the limits of the information provided by the project.',
    sections: [
      {
        type: 'text' as const,
        title: 'The website',
        text: 'TrovaVeg is a static website designed to explain the project and help people open the TrovaVeg bot on Telegram. The website does not offer user accounts, login areas, web bookings or a public database of venues.',
      },
      {
        type: 'text' as const,
        title: 'Website analytics',
        text: 'The website uses Cloudflare Web Analytics to understand, in aggregated form, how the website is used and to improve its performance and content. We do not use advertising cookies, profiling pixels or remarketing tools on this website. The website also uses Google Fonts to display typefaces. Loading these fonts may involve a connection to Google’s servers.',
      },
      {
        type: 'text' as const,
        title: 'External services',
        text: 'When you select a link to Telegram, Instagram, Facebook or another external service, that service’s own privacy information and terms apply.',
      },
      {
        type: 'text' as const,
        title: 'The Telegram bot',
        text: 'TrovaVeg works through Telegram. Interactions with the bot take place within Telegram and are subject to Telegram’s own terms and privacy information. The website does not expose the bot’s backend, database or internal data sources.',
      },
      {
        type: 'text' as const,
        title: 'Suggestions and updates',
        text: 'You can suggest a place or report information through the TrovaVeg bot. Suggestions are reviewed before any possible publication. Information sent through the bot is not automatically published on the website.',
      },
      {
        type: 'list' as const,
        title: 'Information accuracy',
        intro:
          'TrovaVeg aims to provide useful, curated information, but details can be incomplete or change over time.',
        items: [
          'TrovaVeg does not formally certify venues.',
          'Opening hours are indicative and may change.',
          'The bot does not verify real-time opening status.',
          'TrovaVeg does not make bookings.',
          'For allergies, coeliac disease and cross-contamination, always contact the venue directly.',
          'Florence is currently in beta.',
        ],
      },
      {
        type: 'contacts' as const,
        title: 'Contact',
        introPrefix: 'For privacy-related requests, you can write to ',
        note: 'When you select a link to Telegram, Instagram, Facebook or other external services, the privacy information of the destination service applies.',
        items: [
          {
            label: 'Telegram bot',
            linkText: 'Open TrovaVeg on Telegram',
            hrefKey: 'telegramBot' as const,
          },
          {
            label: 'Instagram',
            linkTextKey: 'instagramHandle' as const,
            hrefKey: 'instagram' as const,
          },
          {
            label: 'Facebook',
            linkTextKey: 'facebookLabel' as const,
            hrefKey: 'facebook' as const,
          },
        ],
      },
    ],
  },
  notFound: {
    metaTitle: 'Page not found | TrovaVeg',
    metaDescription:
      'The page you were looking for is not available. Return to TrovaVeg or open the bot on Telegram.',
    headline: 'This page is not here.',
    lead: 'The link may be outdated or the page may have moved. You can return to the English home page or open TrovaVeg on Telegram.',
    ctaHome: 'Go to the English home page',
    homeHref: '/en',
    ctaBot: 'Open TrovaVeg on Telegram',
  },
} as const;

export type EnCopy = typeof en;
