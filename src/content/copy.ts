/**
 * Copy M32 — guida tascabile.
 * Messaggio guida: «Meno liste infinite, più risposte utili.»
 * Nessuna garanzia assoluta; Firenze in beta; solo Bologna/provincia e Firenze.
 */
export const site = {
  name: 'TrovaVeg',
  tagline: 'La tua guida tascabile veg',
  description:
    'TrovaVeg è una guida su Telegram per locali vegani, vegetariani e vegan-friendly a Bologna e Firenze. Meno liste infinite, più risposte utili.',
  url: 'https://trovaveg.com',
  locale: 'it_IT',
  telegramBot: 'https://t.me/TrovaVegBot',
  telegramGroup: 'https://t.me/TrovaVegGruppo',
  email: 'info@trovaveg.com',
  instagram: 'https://www.instagram.com/trovaveg/',
  instagramHandle: '@trovaveg',
  facebook: 'https://www.facebook.com/TrovaVeg',
  facebookLabel: 'TrovaVeg',
  cloudflareAnalyticsToken: '702a37a5d4c84af593a46d379ab3ca8f',
  ogImage: '/og-default.png',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/bologna', label: 'Bologna' },
  { href: '/firenze', label: 'Firenze' },
  { href: '/privacy', label: 'Privacy' },
] as const;

export const home = {
  headline: 'Trova locali vegan, vegetariani e vegan-friendly',
  guideMessage: 'Meno liste infinite, più risposte utili.',
  lead: 'TrovaVeg è una guida su Telegram per cercare locali, piatti, categorie, zone e comuni quando sei in viaggio, in una zona nuova o vuoi decidere rapidamente dove andare.',
  ctaPrimary: 'Apri su Telegram',
  ctaSecondary: 'Come funziona',
  heroImage: {
    src: '/screenshot-hero.png',
    alt: 'Schermata Telegram di TrovaVeg con il messaggio di benvenuto del bot',
  },

  howTitle: 'Come funziona',
  howLead: 'Niente app da scaricare, niente account sul sito. Apri Telegram e parti.',
  howSteps: [
    {
      title: 'Apri il bot',
      text: 'Scrivi a @TrovaVegBot in chat privata. È la tua guida tascabile, sempre a portata di mano.',
    },
    {
      title: 'Chiedi cosa ti serve',
      text: 'Categoria, città, zona, tipo veg: digita liberamente o usa i pulsanti guidati.',
    },
    {
      title: 'Ricevi una selezione essenziale',
      text: 'Pochi risultati curati, non migliaia di link dubbi. Qualità prima della quantità.',
    },
  ],

  searchTitle: 'Cosa puoi cercare',
  searchLead: 'Dalla colazione al ristorante, con filtri utili — non un catalogo infinito.',
  searchItems: [
    {
      title: 'Categorie',
      text: 'Ristorante, bar, panificio, gelateria e altre tipologie presenti in guida.',
      image: '/screenshot-categorie.png',
      alt: 'Schermata TrovaVeg con la scelta delle categorie di locali',
    },
    {
      title: 'Città e zone',
      text: 'Bologna (città e provincia) e Firenze in beta. Zone e comuni dove disponibili.',
      image: '/screenshot-citta.png',
      alt: 'Schermata TrovaVeg con la selezione di città e zone',
    },
    {
      title: 'Tipo veg',
      text: 'Vegano, vegetariano o vegan-friendly: filtra in base a ciò che ti serve davvero.',
      image: '/screenshot-vegstatus.png',
      alt: 'Schermata TrovaVeg con i filtri vegano, vegetariano e vegan-friendly',
    },
  ],

  citiesTitle: 'Dove siamo oggi',
  citiesLead:
    'Oggi TrovaVeg è disponibile a Bologna e provincia, e a Firenze in beta.',
  cities: [
    {
      href: '/bologna',
      name: 'Bologna',
      status: 'Disponibile',
      text: 'Città e provincia: soft launch con selezione essenziale di locali veg.',
    },
    {
      href: '/firenze',
      name: 'Firenze',
      status: 'Beta',
      text: 'Beta attiva: stesse funzioni di Bologna, copertura in crescita con la community.',
    },
  ],
  citiesNote: 'Altre città arriveranno nel tempo. Puoi segnalare locali dal bot per aiutarci a crescere.',

  whyTitle: 'Perché TrovaVeg',
  whyLead:
    'Cercare dove mangiare veg può essere frustrante: risultati generici, posti chiusi, recensioni poco chiare. TrovaVeg sceglie un’altra strada.',
  whyPoints: [
    {
      title: 'Qualità, non quantità',
      text: 'Preferiamo meno locali e più risposte utili — posti selezionati con cura — piuttosto che liste infinite di dubbia utilità.',
    },
    {
      title: 'Meno rumore',
      text: 'Niente aggregazione selvaggia. Una guida tascabile che punta all’utile, non al “tutto”.',
    },
    {
      title: 'Sempre su Telegram',
      text: 'La trovi dove scrivi già agli amici. Nessuna nuova app, nessun account da creare sul sito.',
    },
  ],

  communityTitle: 'Community e segnalazioni',
  communityLead:
    'TrovaVeg cresce con chi lo usa. Se manca un locale, puoi segnalarlo dal bot: lo controlliamo prima di valutare l’inserimento.',
  communityCta: 'Segnala un locale sul bot',
  communityImage: {
    src: '/screenshot-segnala.png',
    alt: 'Schermata TrovaVeg del comando /segnala per proporre un nuovo locale',
  },

  limitsTitle: 'Limiti chiari',
  limits: [
    'Oggi solo Bologna (città/provincia) e Firenze (beta).',
    'Orari e dettagli in scheda sono indicativi, non in tempo reale. Nessuna prenotazione automatica.',
    'Non usiamo etichette di garanzia formale: puntiamo a selezione curata e trasparenza sui limiti.',
    'Il sito non ha account, database utente né CMS: l’esperienza viva è sul bot Telegram.',
  ],
} as const;

export const bologna = {
  title: 'Bologna',
  headline: 'Bologna, in tasca.',
  lead: 'Soft launch attivo su città e provincia. Una selezione essenziale di locali vegani, vegetariani e vegan-friendly — meno rumore, più chiarezza.',
  body: [
    'A Bologna TrovaVeg funziona come guida tascabile: chiedi un ristorante, una colazione, un bar in centro o un posto vegan-friendly, e ricevi una selezione essenziale.',
    'Puoi filtrare per categoria, zona o comune, e per tipo veg. Non promettiamo copertura totale: puntiamo a meno liste infinite e più risposte utili.',
    'Apri il bot in chat privata su Telegram — nessun account sul sito — e inizia da Bologna.',
  ],
  examplesTitle: 'Esempi di ricerca',
  examples: [
    'ristorante Bologna',
    'colazione in centro',
    'bar vegan-friendly',
    'solo locali 100% vegani',
  ],
  cta: 'Cerca a Bologna su Telegram',
  image: {
    src: '/screenshot-citta.png',
    alt: 'Schermata TrovaVeg con le opzioni di città e zone per Bologna',
  },
} as const;

export const firenze = {
  title: 'Firenze',
  headline: 'Firenze, in beta.',
  lead: 'Stessa filosofia di Bologna: meno quantità, più qualità. Firenze è in beta attiva — la copertura cresce insieme alle segnalazioni.',
  body: [
    'A Firenze trovi le stesse funzioni del bot: ricerca libera, categorie, filtri veg e flusso guidato. La selezione è in costruzione, con lo stesso standard di cura.',
    'Non è ancora una copertura completa. È una beta onesta: meno liste infinite, più risposte utili — e spazio per migliorare con il tuo feedback.',
    'Prova Firenze sul bot e, se manca un posto che conosci, segnalalo: ogni contributo aiuta la guida.',
  ],
  featuresTitle: 'Cosa puoi fare in beta',
  features: [
    'Ricerca per categoria e tipo veg',
    'Selezione città / zone dove disponibili',
    'Segnalazione locali mancanti dal comando dedicato',
  ],
  cta: 'Prova Firenze su Telegram',
  signalCta: 'Segnala un locale',
  image: {
    src: '/screenshot-segnala.png',
    alt: 'Schermata TrovaVeg per segnalare un locale mancante a Firenze',
  },
} as const;

export const privacy = {
  title: 'Privacy',
  headline: 'Privacy',
  lead: 'Trasparenza su sito, analytics, bot Telegram e segnalazioni. Nessun account sul sito.',
  sections: [
    {
      title: 'Sito web',
      text: 'trovaveg.com è un sito statico: niente database, CMS né account utente. Non memorizziamo form né profili qui.',
    },
    {
      title: 'Analytics',
      text: 'Il sito utilizza Cloudflare Web Analytics per comprendere in forma aggregata come viene usato il sito e migliorarne prestazioni e contenuti. Non utilizziamo cookie pubblicitari, pixel di profilazione o strumenti di remarketing. Il sito utilizza anche Google Fonts per la visualizzazione dei caratteri. Il caricamento dei font può comportare una connessione ai server di Google.',
    },
    {
      title: 'Bot Telegram',
      text: 'L’uso del bot avviene su Telegram, secondo i termini di Telegram. Per la ricerca usiamo ciò che scrivi in chat. Non chiediamo un account sul sito per usare TrovaVeg.',
    },
    {
      title: 'Segnalazioni',
      text: 'Se segnali un locale dal bot, raccogliamo le informazioni necessarie a valutare la proposta (es. nome e città). Non inseriamo automaticamente nulla in catalogo: c’è un controllo umano prima di ogni eventuale aggiunta.',
    },
    {
      title: 'Accuratezza dei dati',
      text: 'Orari, indirizzi e dettagli possono cambiare. Le informazioni in guida sono indicative e aggiornate con cura, ma non in tempo reale. Non usiamo etichette di garanzia formale: puntiamo a selezione e trasparenza.',
    },
    {
      title: 'Contatti',
      introPrefix: 'Per richieste relative alla privacy puoi scrivere a ',
      email: site.email,
      items: [
        {
          label: 'Bot Telegram',
          linkText: 'Apri TrovaVeg su Telegram',
          href: site.telegramBot,
        },
        {
          label: 'Instagram',
          linkText: site.instagramHandle,
          href: site.instagram,
        },
        {
          label: 'Facebook',
          linkText: site.facebookLabel,
          href: site.facebook,
        },
      ],
      note: 'Quando selezioni un link verso Telegram, Instagram, Facebook o altri servizi esterni, si applicano le informative del servizio di destinazione.',
    },
  ],
} as const;

export const notFound = {
  title: 'Pagina non trovata',
  headline: 'Questa pagina non c’è.',
  lead: 'Torna alla home oppure apri direttamente la guida su Telegram.',
  ctaHome: 'Torna alla home',
  ctaBot: 'Apri su Telegram',
} as const;
