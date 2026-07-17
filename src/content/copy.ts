/**
 * Copy approvato M32-C — guida tascabile, meno locali ma certi, meno quantità più qualità.
 * Contatti email: forward da configurare dopo.
 */
export const site = {
  name: 'TrovaVeg',
  tagline: 'La guida tascabile veg',
  description:
    'TrovaVeg è la guida tascabile per locali vegani, vegetariani e vegan-friendly. Meno locali, ma certi. Meno quantità, più qualità.',
  url: 'https://trovaveg.it',
  locale: 'it_IT',
  telegramBot: 'https://t.me/TrovaVegBot',
  telegramGroup: 'https://t.me/TrovaVegGruppo',
  /** Placeholder — sostituire dopo configurazione forward email */
  email: 'info@trovaveg.com',
  /** Placeholder Cloudflare Web Analytics — inserire token reale dopo */
  cloudflareAnalyticsToken: '702a37a5d4c84af593a46d379ab3ca8f',
  ogImage: '/og-default.svg',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/bologna', label: 'Bologna' },
  { href: '/firenze', label: 'Firenze' },
  { href: '/privacy', label: 'Privacy' },
] as const;

export const home = {
  headline: 'Meno locali. Ma certi.',
  lead: 'La guida tascabile per mangiare veg a Bologna e Firenze — senza liste infinite, senza rumore.',
  ctaPrimary: 'Apri su Telegram',
  ctaSecondary: 'Scopri Bologna',
  pillarsTitle: 'Come funziona TrovaVeg',
  pillars: [
    {
      title: 'Guida tascabile',
      text: 'Apri Telegram, chiedi cosa ti serve, ottieni una selezione essenziale. Niente account, niente app da scaricare.',
    },
    {
      title: 'Meno locali, ma certi',
      text: 'Preferiamo pochi posti verificati a migliaia di risultati dubbi. Ogni scheda conta.',
    },
    {
      title: 'Meno quantità, più qualità',
      text: 'Selezione curata, non aggregazione automatica. Qualità prima della copertura a tutti i costi.',
    },
  ],
  citiesTitle: 'Dove siamo',
  citiesLead: 'Due città, stesso standard: copertura utile, non infinita.',
  cities: [
    {
      href: '/bologna',
      name: 'Bologna',
      status: 'Soft launch',
      text: 'Città e provincia: locali vegani, vegetariani e vegan-friendly già in guida.',
    },
    {
      href: '/firenze',
      name: 'Firenze',
      status: 'Beta',
      text: 'In beta attiva: stiamo affinando la selezione con la stessa cura di Bologna.',
    },
  ],
} as const;

export const bologna = {
  title: 'Bologna',
  headline: 'Bologna, in tasca.',
  lead: 'Soft launch attivo su città e provincia. Una selezione essenziale di locali veg — meno rumore, più certezza.',
  body: [
    'TrovaVeg a Bologna non è una mappa infinita: è una guida tascabile. Chiedi al bot un ristorante, una colazione, un bar in centro — e ricevi posti che abbiamo selezionato con cura.',
    'Meno locali, ma certi. Preferiamo segnalare un posto affidabile piuttosto che riempire liste con risultati generici.',
    'Disponibile in chat privata su Telegram. Nessun account da creare sul sito: apri il bot e inizia.',
  ],
  cta: 'Cerca a Bologna su Telegram',
} as const;

export const firenze = {
  title: 'Firenze',
  headline: 'Firenze, in beta.',
  lead: 'Stessa filosofia di Bologna: meno quantità, più qualità. La guida tascabile veg è in beta attiva a Firenze.',
  body: [
    'Firenze è in beta: stiamo costruendo una selezione essenziale di locali vegani, vegetariani e vegan-friendly, con lo stesso standard di verifica.',
    'Non promettiamo copertura totale. Promettiamo meno locali, ma certi — e feedback che ci aiutano a migliorare la qualità.',
    'Prova il bot in chat privata e segnala ciò che manca: ogni contributo rafforza la guida.',
  ],
  cta: 'Prova Firenze su Telegram',
} as const;

export const privacy = {
  title: 'Privacy',
  headline: 'Privacy',
  lead: 'Trasparenza su cosa raccogliamo sul sito e come usiamo TrovaVeg.',
  sections: [
    {
      title: 'Chi siamo',
      text: 'TrovaVeg è un servizio informativo per trovare locali vegani, vegetariani e vegan-friendly. Questo sito è statico: non ha database, CMS né account utente.',
    },
    {
      title: 'Sito web',
      text: 'Le pagine di trovaveg.it non richiedono registrazione. Non memorizziamo form né profili sul sito. Eventuali contatti via email (forward da configurare) vengono usati solo per rispondere alle richieste.',
    },
    {
      title: 'Analytics',
      text: 'Possiamo usare Cloudflare Web Analytics, uno strumento privacy-oriented senza cookie di tracciamento pubblicitario. I dati aggregati servono a capire il traffico del sito, non a profilare le persone.',
    },
    {
      title: 'Bot Telegram',
      text: 'L’uso del bot avviene su Telegram secondo i termini di Telegram. Per la ricerca usiamo le informazioni che invii in chat. Non chiediamo account sul sito per usare il bot.',
    },
    {
      title: 'Contatti',
      text: 'Per domande sulla privacy: info@trovaveg.com (inoltro email da configurare).',
    },
  ],
} as const;

export const notFound = {
  title: 'Pagina non trovata',
  headline: 'Questa pagina non c’è.',
  lead: 'Torna alla guida tascabile: home, Bologna o Firenze.',
  cta: 'Torna alla home',
} as const;
