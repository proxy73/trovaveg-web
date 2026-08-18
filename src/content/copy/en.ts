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
    independentNote:
      'TrovaVeg is an independent project that is growing with the support of its community.',
    footerCta: 'Open TrovaVeg on Telegram',
  },
  nav: [
    { href: '/en/', label: 'Home' },
    { href: '/en/bologna/', label: 'Bologna' },
    { href: '/en/florence/', label: 'Florence' },
    { href: '/en/faq/', label: 'FAQ' },
    { href: '/en/privacy/', label: 'Privacy' },
  ],
  home: {
    metaTitle: 'TrovaVeg | Find vegan, vegetarian and vegan-friendly places',
    metaDescription:
      'Find vegan, vegetarian and vegan-friendly places in Bologna and its province with TrovaVeg on Telegram. Florence is currently in beta.',
    eyebrow: 'TrovaVeg on Telegram',
    headline: 'Find vegan, vegetarian and vegan-friendly places',
    guideMessage: 'Fewer endless lists, more useful answers.',
    lead: 'TrovaVeg is a Telegram bot for finding vegan, vegetarian and vegan-friendly places. This website explains how it works: searches happen directly in the bot.',
    ctaPrimary: 'Open the bot on Telegram',
    ctaNote:
      'You need Telegram to use the bot. You do not need to download a TrovaVeg app or create an account on this website.',
    ctaSecondary: 'How it works',
    heroImage: {
      src: '/screenshot-hero.webp',
      alt: 'Telegram screen of TrovaVeg with the bot welcome message',
    },
    howTitle: 'How it works',
    howLead:
      'You do not need a TrovaVeg app or an account on this website. To search for places, you need Telegram: open the bot and get started.',
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
        href: '/en/bologna/',
        name: 'Bologna and its province',
        status: 'Available',
        text: 'Search places across Bologna and nearby municipalities.',
        cta: 'Explore Bologna',
      },
      {
        href: '/en/florence/',
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
      'To suggest a new venue, open TrovaVeg on Telegram and send the /segnala command. To correct or update information about a venue already listed, email us at info@trovaveg.com.',
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
    faqTeaser: {
      title: 'Have questions?',
      paragraphs: [
        'TrovaVeg is easy to use, but it is not a general-purpose chatbot. Ask for a dish, a venue category, an area or the kind of plant-based options you are looking for.',
        'Read the FAQ for practical examples, current limitations and answers to common questions.',
      ],
      cta: 'Read the FAQ',
      href: '/en/faq/',
    },
  },
  bologna: {
    metaTitle: 'Vegan, vegetarian and vegan-friendly places in Bologna | TrovaVeg',
    metaDescription:
      'Find vegan, vegetarian and vegan-friendly places in Bologna and its province with TrovaVeg, the focused Telegram guide.',
    status: 'Available',
    headline: 'Bologna, made easier.',
    lead: 'TrovaVeg is available in Bologna and its province. Search for vegan, vegetarian and vegan-friendly places by dish, category, area, town or preference.',
    cta: 'Search Bologna',
    ctaAriaLabel: 'Search Bologna in the Telegram bot',
    ctaSecondary: null as string | null,
    telegramSource: 'web_city_en' as const,
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
        cta: 'Search Bologna',
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
    cta: 'Search Florence',
    ctaAriaLabel: 'Search Florence in the Telegram bot',
    ctaSecondary: 'Help improve Florence',
    telegramSource: 'web_city_en' as const,
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
          'Found a missing venue? Open TrovaVeg on Telegram and send the /segnala command. To correct or update information about a venue already listed, email us at info@trovaveg.com.',
        ],
        cta: 'Open TrovaVeg on Telegram',
      },
      {
        type: 'text' as const,
        title: 'A transparent beta',
        paragraphs: [
          'Florence is in beta. Information may be incomplete or change over time, and opening hours are not checked in real time. For allergies, coeliac disease and cross-contamination, always contact the venue directly.',
        ],
        cta: 'Search Florence',
      },
    ],
  },
  faq: {
    metaTitle: 'FAQ | TrovaVeg',
    metaDescription:
      'How to use TrovaVeg on Telegram, where it is available, current limits, suggestions and privacy. Searches happen in the bot, not on this website.',
    headline: 'Frequently asked questions',
    lead: 'TrovaVeg is a Telegram bot for finding vegan, vegetarian and vegan-friendly places. This page explains how to use it, where it is available and what its limits are.',
    ctaPrimary: 'Open the bot on Telegram',
    ctaSecondary: 'Privacy and transparency',
    privacyHref: '/en/privacy/',
    finalCta: {
      title: 'Ready to find your next place?',
      text: 'Open TrovaVeg on Telegram. You need Telegram to use the bot. You do not need to download a TrovaVeg app or create an account on this website.',
      cta: 'Open the bot on Telegram',
    },
    items: [
      {
        question: 'What is TrovaVeg?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'TrovaVeg is an independent Telegram bot that helps you find vegan, vegetarian and vegan-friendly places. This website explains the project; searches happen in the bot.',
          },
          {
            type: 'paragraph' as const,
            text: 'It is not a national web map and not an endless catalogue. It focuses on a curated selection and useful answers.',
          },
        ],
      },
      {
        question: 'How do I use TrovaVeg?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Open @TrovaVegBot in a private Telegram chat. Ask for a dish, a venue category, an area or the kind of plant-based options you are looking for, or use the guided buttons.',
          },
          {
            type: 'paragraph' as const,
            text: 'You get a focused selection of places, not thousands of unclear links. Here are some search examples verified in the bot:',
          },
          {
            type: 'example' as const,
            items: [
              'colazione in centro a Bologna',
              'ristorante vegan-friendly a Bologna',
              'ristorante con opzioni vegane a Bologna',
              'solo locali 100% vegani a Firenze',
              'agriturismo in provincia di Bologna',
              'gelateria a Funo',
            ],
          },
        ],
      },
      {
        question: 'Do I need a TrovaVeg app or a website account?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. You need Telegram to use the bot. You do not need to download a TrovaVeg app or create an account on this website.',
          },
        ],
      },
      {
        question: 'Where is TrovaVeg available today?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'TrovaVeg is available in Bologna and its province. Florence is currently in beta. More cities will follow over time.',
          },
        ],
      },
      {
        question: 'Is Bologna available?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Yes. TrovaVeg is available in Bologna and its province, with a focused selection of vegan, vegetarian and vegan-friendly places.',
          },
        ],
      },
      {
        question: 'Is Florence available?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Yes, in beta. You can already use it, but information and coverage may be less complete than in Bologna and its province.',
          },
        ],
      },
      {
        question: 'Is Milan available?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. Milan is not available and is out of scope.',
          },
        ],
      },
      {
        question: 'What can I search for?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Free and guided search: categories, dishes, area and preferences, with venue details where available.',
          },
          {
            type: 'list' as const,
            items: [
              'Dishes and categories, such as breakfast, pizza, burgers or desserts',
              'Neighbourhoods, areas, cities and municipalities where available',
              'Vegan, vegetarian and vegan-friendly options',
            ],
          },
        ],
      },
      {
        question: 'Does TrovaVeg support geolocation?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Yes. Tap 📍 Near me and share your location through Telegram.',
          },
          {
            type: 'paragraph' as const,
            text: 'Your location is used temporarily in the session, for up to 30 minutes, to search for and sort results by distance. It is not added to the venue catalogue.',
          },
          {
            type: 'paragraph' as const,
            text: 'To use this feature, share your location using the button: typing “near me” alone does not start a GPS search.',
          },
        ],
      },
      {
        question: 'Is TrovaVeg a general-purpose chatbot?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. It is a pocket guide for vegan, vegetarian and vegan-friendly places. It works best if you ask for a dish, a venue category, an area or the kind of plant-based options you are looking for.',
          },
        ],
      },
      {
        question: 'Why is TrovaVeg on Telegram?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'To offer a quick, accessible tool in a chat many people already use, without downloading a TrovaVeg app or creating an account on this website.',
          },
        ],
      },
      {
        question: 'What is /segnala?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'It is a command to suggest a missing venue. Open TrovaVeg on Telegram and send:',
          },
          { type: 'command' as const, value: '/segnala' },
          {
            type: 'paragraph' as const,
            text: 'Suggestions are private and reviewed. Nothing is published automatically: there is a human check before any possible addition.',
          },
        ],
      },
      {
        question: 'How do I correct a venue that is already listed?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'If you notice out-of-date information in a listing, email info@trovaveg.com. A report is not treated as an automatic update: information is reviewed before any changes are made.',
          },
        ],
      },
      {
        question: 'How are venues selected?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'TrovaVeg offers a curated selection of vegan, vegetarian and vegan-friendly places through careful online research using official venue websites and direct on-site experience.',
          },
          {
            type: 'paragraph' as const,
            text: 'Listings show what is available in the guide: to confirm menus, opening hours or availability, check with the venue.',
          },
        ],
      },
      {
        question: 'Is the information always up to date?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Information is curated and updated progressively. Some details may change or be incomplete, so we recommend checking important information directly with the venue before you visit.',
          },
        ],
      },
      {
        question: 'Can I book with TrovaVeg?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. TrovaVeg does not make automatic bookings. When you need to confirm something, contact the venue directly. You can use the phone number from the full venue details provided by the bot.',
          },
        ],
      },
      {
        question: 'Is it a map or a national guide?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. It is not a national web map and does not claim national coverage. It is available in Bologna and its province, with Florence currently in beta.',
          },
        ],
      },
      {
        question: 'What about allergies, coeliac disease and cross-contamination?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'For allergies, coeliac disease and cross-contamination, always contact the venue directly.',
          },
        ],
      },
      {
        question: 'How do you handle privacy?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'trovaveg.com is a static website: no database, CMS or user accounts. The website uses Cloudflare Web Analytics in aggregated form, without advertising cookies, profiling pixels or remarketing tools.',
          },
          {
            type: 'paragraph' as const,
            text: 'The bot is used on Telegram, according to Telegram’s terms. Full details are on the Privacy and transparency page.',
          },
        ],
      },
      {
        question: 'How can I contact you?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'For any information, email info@trovaveg.com.',
          },
        ],
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
        text: 'TrovaVeg works through Telegram. Interactions with the bot take place within Telegram and are subject to Telegram’s own terms and privacy information. The website does not expose the bot’s backend, database or internal data sources. Some website CTAs open the bot with a fixed, allowlisted technical parameter that only indicates page provenance (home or city, IT or EN). It does not include cookies, browser identifiers, URLs, referrers, or any correlation with Cloudflare Analytics.',
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
    homeHref: '/en/',
    ctaBot: 'Open TrovaVeg on Telegram',
  },
} as const;

export type EnCopy = typeof en;
