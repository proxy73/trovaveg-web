/**
 * Italian UI and page copy — preserve existing meaning, CTAs and URLs.
 */
export const it = {
  locale: 'it' as const,
  htmlLang: 'it',
  ogLocale: 'it_IT',
  ui: {
    skipToContent: 'Vai al contenuto',
    languageLabel: 'Lingua',
    langIt: 'IT',
    langEn: 'EN',
    navAriaLabel: 'Principale',
    menuLabel: 'Menu',
    footerBot: 'Bot Telegram',
    footerNote:
      'Guida tascabile su Telegram · Nessun account sul sito · Nessun CMS · Nessun database',
  },
  siteChrome: {
    tagline: 'La tua guida tascabile veg',
    description:
      'TrovaVeg è una guida su Telegram per locali vegani, vegetariani e vegan-friendly a Bologna e Firenze. Meno liste infinite, più risposte utili.',
    independentNote:
      'TrovaVeg è un progetto indipendente in crescita, costruito con il supporto della community.',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/bologna/', label: 'Bologna' },
    { href: '/firenze/', label: 'Firenze' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/privacy/', label: 'Privacy' },
  ],
  home: {
    metaTitle: 'TrovaVeg — Locali vegan, vegetariani e vegan-friendly',
    metaDescription:
      'TrovaVeg è una guida su Telegram per locali vegani, vegetariani e vegan-friendly a Bologna e Firenze. Meno liste infinite, più risposte utili.',
    eyebrow: 'TrovaVeg',
    headline: 'Trova locali vegan, vegetariani e vegan-friendly',
    guideMessage: 'Meno liste infinite, più risposte utili.',
    lead: 'TrovaVeg è un bot Telegram per trovare locali vegan, vegetariani e vegan-friendly. Questo sito spiega come funziona: la ricerca avviene direttamente nel bot.',
    ctaPrimary: 'Apri il bot su Telegram',
    ctaNote:
      'Per usare il bot serve Telegram. Non devi scaricare un’app TrovaVeg né creare un account sul sito.',
    ctaSecondary: 'Come funziona',
    heroImage: {
      src: '/screenshot-hero.webp',
      alt: 'Schermata Telegram di TrovaVeg con il messaggio di benvenuto del bot',
    },
    howTitle: 'Come funziona',
    howLead:
      'Non devi scaricare un’app TrovaVeg né creare un account sul sito. Per cercare i locali serve Telegram: apri il bot e parti.',
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
        image: '/screenshot-categorie.webp',
        alt: 'Schermata TrovaVeg con la scelta delle categorie di locali',
      },
      {
        title: 'Città e zone',
        text: 'Province di Bologna e Firenze. Zone e comuni dove disponibili.',
        image: '/screenshot-citta.webp',
        alt: 'Schermata TrovaVeg con la selezione di città e zone',
      },
      {
        title: 'Tipo veg',
        text: 'Vegano, vegetariano o vegan-friendly: filtra in base a ciò che ti serve davvero.',
        image: '/screenshot-vegstatus.webp',
        alt: 'Schermata TrovaVeg con i filtri vegano, vegetariano e vegan-friendly',
      },
    ],
    citiesTitle: 'Dove siamo oggi',
    citiesLead:
      'TrovaVeg è disponibile nelle province di Bologna e Firenze.',
    cities: [
      {
        href: '/bologna/',
        name: 'Bologna',
        status: 'Disponibile',
        text: 'Bologna e provincia — disponibile. Selezione essenziale di locali veg.',
      },
      {
        href: '/firenze/',
        name: 'Firenze',
        status: 'Disponibile',
        text: 'Disponibile a Firenze e in provincia di Firenze. Selezione essenziale di locali veg.',
      },
    ],
    citiesNote:
      'Altre città arriveranno nel tempo. Puoi segnalare locali dal bot per aiutarci a crescere.',
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
      'Per suggerire un nuovo locale, apri TrovaVeg su Telegram e invia il comando /segnala. Se invece vuoi correggere o aggiornare le informazioni di un locale già presente, scrivici a info@trovaveg.com.',
    communityCta: 'Segnala un locale sul bot',
    communityImage: {
      src: '/screenshot-segnala.webp',
      alt: 'Schermata TrovaVeg del comando /segnala per proporre un nuovo locale',
    },
    limitsTitle: 'Limiti chiari',
    limits: [
      'Oggi TrovaVeg è disponibile nelle province di Bologna e Firenze.',
      'Orari e dettagli in scheda sono indicativi, non in tempo reale. Nessuna prenotazione automatica.',
      'Non usiamo etichette di garanzia formale: puntiamo a selezione curata e trasparenza sui limiti.',
      'Per allergie, celiachia e contaminazioni, verifica sempre direttamente con il locale.',
      'Il sito non ha account, database utente né CMS: l’esperienza viva è sul bot Telegram.',
    ],
    faqTeaser: {
      title: 'Hai qualche dubbio?',
      paragraphs: [
        'TrovaVeg è semplice da usare, ma non è un chatbot generalista. Scrivi cosa vuoi mangiare, una categoria, una zona o il tipo di offerta veg che cerchi.',
        'Nelle FAQ trovi esempi pratici, limiti attuali e risposte alle domande più comuni.',
      ],
      cta: 'Leggi le FAQ',
      href: '/faq/',
    },
  },
  bologna: {
    metaTitle: 'Bologna',
    metaDescription:
      'Disponibile a Bologna e provincia. Una selezione essenziale di locali vegani, vegetariani e vegan-friendly — meno rumore, più chiarezza.',
    status: 'Attiva',
    headline: 'Bologna, in tasca.',
    lead: 'Bologna e provincia sono disponibili. Una selezione essenziale di locali vegani, vegetariani e vegan-friendly — meno rumore, più chiarezza.',
    cta: 'Cerca Bologna',
    ctaAriaLabel: 'Cerca Bologna nel bot Telegram',
    ctaSecondary: null as string | null,
    telegramSource: 'web_city_it' as const,
    image: {
      src: '/screenshot-citta.webp',
      alt: 'Schermata TrovaVeg con le opzioni di città e zone per Bologna',
    },
    body: [
      'A Bologna TrovaVeg funziona come guida tascabile: chiedi un ristorante, una colazione, un bar in centro o un posto vegan-friendly, e ricevi una selezione essenziale.',
      'Puoi filtrare per categoria, zona o comune, e per tipo veg. Non promettiamo copertura totale: puntiamo a meno liste infinite e più risposte utili.',
      'Apri il bot in chat privata su Telegram — nessun account sul sito — e inizia da Bologna.',
    ],
    sections: [
      {
        type: 'examples' as const,
        title: 'Esempi di ricerca',
        items: [
          'ristorante Bologna',
          'colazione in centro',
          'bar vegan-friendly',
          'solo locali 100% vegani',
        ],
      },
    ],
  },
  firenze: {
    metaTitle: 'Firenze',
    metaDescription:
      'Disponibile a Firenze e in provincia di Firenze. Una selezione essenziale di locali vegani, vegetariani e vegan-friendly — meno rumore, più chiarezza.',
    status: 'Disponibile',
    headline: 'Firenze, in tasca.',
    lead: 'Disponibile a Firenze e in provincia di Firenze. Una selezione essenziale di locali vegani, vegetariani e vegan-friendly — meno rumore, più chiarezza.',
    cta: 'Cerca Firenze',
    ctaAriaLabel: 'Cerca Firenze nel bot Telegram',
    ctaSecondary: 'Segnala un locale',
    telegramSource: 'web_city_it' as const,
    image: {
      src: '/screenshot-segnala.webp',
      alt: 'Schermata TrovaVeg per segnalare un locale mancante a Firenze',
    },
    body: [
      'A Firenze e in provincia di Firenze trovi le stesse funzioni del bot: ricerca libera, categorie, filtri veg e flusso guidato, con lo stesso standard di cura.',
      'È una selezione essenziale, non esaustiva: meno liste infinite, più risposte utili — e spazio per migliorare con le segnalazioni della community.',
      'Hai trovato un locale mancante? Apri TrovaVeg su Telegram e invia il comando /segnala. Per correggere o aggiornare le informazioni di un locale già presente, scrivici a info@trovaveg.com.',
    ],
    sections: [
      {
        type: 'list' as const,
        title: 'Note sulla copertura',
        items: [
          'Ricerca per categoria e tipo veg',
          'Selezione città / zone dove disponibili',
          'Segnalazione locali mancanti con il comando /segnala',
        ],
      },
    ],
  },
  faq: {
    metaTitle: 'FAQ — Domande frequenti su TrovaVeg',
    metaDescription:
      'Come usare TrovaVeg su Telegram, dove è disponibile, limiti, segnalazioni e privacy. La ricerca avviene nel bot, non sul sito.',
    headline: 'Domande frequenti',
    lead: 'TrovaVeg è un bot Telegram per trovare locali vegan, vegetariani e vegan-friendly. Qui trovi come usarlo, dove è disponibile e quali sono i limiti.',
    ctaPrimary: 'Apri il bot su Telegram',
    ctaSecondary: 'Privacy e trasparenza',
    privacyHref: '/privacy/',
    finalCta: {
      title: 'Pronto a cercare un locale?',
      text: 'Apri TrovaVeg su Telegram. Per usare il bot serve Telegram: non devi scaricare un’app TrovaVeg né creare un account sul sito.',
      cta: 'Apri il bot su Telegram',
    },
    items: [
      {
        question: 'Cos’è TrovaVeg?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'TrovaVeg è un bot Telegram indipendente che aiuta a trovare locali vegan, vegetariani e vegan-friendly. Il sito spiega il progetto; la ricerca avviene nel bot.',
          },
          {
            type: 'paragraph' as const,
            text: 'Non è una mappa web nazionale e non è un catalogo infinito. Puntiamo a una selezione essenziale e a risposte utili.',
          },
        ],
      },
      {
        question: 'TrovaVeg è gratuito?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Sì. TrovaVeg è attualmente gratuito.',
          },
          {
            type: 'paragraph' as const,
            text: 'Per usarlo ti serve soltanto Telegram: non devi creare un account sul sito e non esiste un’app TrovaVeg separata da installare.',
          },
        ],
      },
      {
        question: 'Come si usa TrovaVeg?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Apri @TrovaVegBot in chat privata su Telegram. Scrivi cosa vuoi mangiare, una categoria, una zona o il tipo di offerta veg che cerchi, oppure usa i pulsanti guidati.',
          },
          {
            type: 'paragraph' as const,
            text: 'Ricevi una selezione essenziale di locali, non migliaia di link dubbi. Ecco alcuni esempi di ricerche verificate nel bot:',
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
        question: 'Serve un’app TrovaVeg o un account sul sito?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. Per usare il bot serve Telegram. Non devi scaricare un’app TrovaVeg né creare un account sul sito.',
          },
        ],
      },
      {
        question: 'Dove è disponibile TrovaVeg oggi?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'TrovaVeg è disponibile nelle province di Bologna e Firenze. Altre città arriveranno nel tempo.',
          },
        ],
      },
      {
        question: 'Bologna è disponibile?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Sì. Bologna e provincia sono disponibili: una selezione essenziale di locali vegani, vegetariani e vegan-friendly.',
          },
        ],
      },
      {
        question: 'Firenze è disponibile?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Sì. Disponibile a Firenze e in provincia di Firenze: una selezione essenziale di locali vegani, vegetariani e vegan-friendly.',
          },
        ],
      },
      {
        question: 'Milano è disponibile?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. Milano non è disponibile ed è fuori scope.',
          },
        ],
      },
      {
        question: 'Cosa posso cercare?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Ricerca libera e guidata: categorie, piatti, zona e preferenze, con i dettagli dei locali dove disponibili.',
          },
          {
            type: 'list' as const,
            items: [
              'Categorie, come ristorante, bar, panificio o gelateria',
              'Città, zone e comuni dove disponibili',
              'Tipo veg: vegano, vegetariano o vegan-friendly',
            ],
          },
        ],
      },
      {
        question: 'C’è la geolocalizzazione?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Sì. Tocca il pulsante 📍 Vicino a me e condividi la posizione tramite Telegram.',
          },
          {
            type: 'paragraph' as const,
            text: 'La posizione viene usata temporaneamente nella sessione, per un massimo di 30 minuti, per cercare e ordinare i risultati in base alla distanza. Non viene aggiunta al catalogo dei locali.',
          },
          {
            type: 'paragraph' as const,
            text: 'Per usare questa funzione, condividi la posizione dal pulsante: scrivere soltanto “vicino a me” non avvia la ricerca GPS.',
          },
        ],
      },
      {
        question: 'TrovaVeg è un chatbot generalista?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. È una guida tascabile per locali veg. Funziona meglio se scrivi cosa vuoi mangiare, una categoria, una zona o il tipo di offerta veg che cerchi.',
          },
        ],
      },
      {
        question: 'Perché TrovaVeg è su Telegram?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Per offrire uno strumento rapido e accessibile nella chat che molte persone usano già, senza scaricare un’app TrovaVeg né creare un account sul sito.',
          },
        ],
      },
      {
        question: 'Come posso suggerire un nuovo locale?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Apri TrovaVeg in una chat privata su Telegram e invia:',
          },
          { type: 'command' as const, value: '/segnala' },
          {
            type: 'paragraph' as const,
            text: 'Dopo la tua conferma, il nome del locale e la città o il comune vengono inviati al nostro spazio di moderazione. I tuoi dati Telegram non vengono pubblicati.',
          },
          {
            type: 'paragraph' as const,
            text: 'La segnalazione viene controllata da una persona e non aggiunge automaticamente il locale al catalogo.',
          },
        ],
      },
      {
        question: 'Come correggo le informazioni di un locale già in guida?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Se noti un’informazione non aggiornata in una scheda, scrivi a info@trovaveg.com. Una segnalazione non viene trattata come aggiornamento automatico: le informazioni vengono verificate prima di eventuali modifiche.',
          },
        ],
      },
      {
        question: 'Come vengono scelti i locali?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Le informazioni vengono raccolte e curate manualmente, dando priorità ai siti ufficiali, ai menu e ai canali dei locali. Quando disponibile, l’esperienza diretta può integrare la ricerca online.',
          },
          {
            type: 'paragraph' as const,
            text: 'Le schede riportano ciò che è disponibile in guida: per confermare menu, orari o disponibilità, verifica con il locale.',
          },
        ],
      },
      {
        question: 'Le informazioni sono sempre aggiornate?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Le informazioni vengono curate e aggiornate progressivamente. Alcuni dettagli possono cambiare o risultare incompleti, quindi ti consigliamo di verificare direttamente con il locale le informazioni più importanti prima di raggiungerlo.',
          },
        ],
      },
      {
        question: 'Posso prenotare con TrovaVeg?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. TrovaVeg non fa prenotazioni automatiche. Quando serve confermare qualcosa, contatta il locale direttamente. Puoi usare il numero di telefono direttamente dalla scheda completa del locale che ti fornisce il bot.',
          },
        ],
      },
      {
        question: 'È una mappa o una guida nazionale?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'No. Non è una mappa web nazionale e non dichiara copertura nazionale. TrovaVeg è disponibile nelle province di Bologna e Firenze.',
          },
        ],
      },
      {
        question: 'Come mi comporto per allergie, celiachia e contaminazioni?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Per allergie, celiachia e contaminazioni, verifica sempre direttamente con il locale.',
          },
        ],
      },
      {
        question: 'Come gestite la privacy?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'trovaveg.com è un sito statico: niente database, CMS né account utente. Usiamo Cloudflare Web Analytics in forma aggregata, senza cookie pubblicitari, pixel di profilazione o strumenti di remarketing.',
          },
          {
            type: 'paragraph' as const,
            text: 'L’uso del bot avviene su Telegram, secondo i termini di Telegram. I dettagli sono nella pagina Privacy e trasparenza.',
          },
        ],
      },
      {
        question: 'Come vi contatto?',
        answer: [
          {
            type: 'paragraph' as const,
            text: 'Per qualsiasi tipo di informazione, scrivi a info@trovaveg.com.',
          },
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Privacy',
    metaDescription:
      'Trasparenza su sito, analytics, bot Telegram e segnalazioni. Nessun account sul sito.',
    headline: 'Privacy',
    lead: 'Trasparenza su sito, analytics, bot Telegram e segnalazioni. Nessun account sul sito.',
    sections: [
      {
        type: 'text' as const,
        title: 'Sito web',
        text: 'trovaveg.com è un sito statico: niente database, CMS né account utente. Non memorizziamo form né profili qui.',
      },
      {
        type: 'text' as const,
        title: 'Analytics',
        text: 'Il sito utilizza Cloudflare Web Analytics per comprendere in forma aggregata come viene usato il sito e migliorarne prestazioni e contenuti. Non utilizziamo cookie pubblicitari, pixel di profilazione o strumenti di remarketing. Il sito utilizza anche Google Fonts per la visualizzazione dei caratteri. Il caricamento dei font può comportare una connessione ai server di Google.',
      },
      {
        type: 'text' as const,
        title: 'Bot Telegram',
        text: 'L’uso del bot avviene su Telegram, secondo i termini di Telegram. Per la ricerca usiamo ciò che scrivi in chat. Non chiediamo un account sul sito per usare TrovaVeg. Alcune CTA del sito aprono il bot con un parametro tecnico fisso e allowlisted che indica solo la provenienza della pagina (home o città, IT o EN): non include cookie, identificatori del browser, URL, referrer né correlazione con Cloudflare Analytics.',
      },
      {
        type: 'text' as const,
        title: 'Segnalazioni',
        text: 'Se segnali un locale dal bot, raccogliamo le informazioni necessarie a valutare la proposta (es. nome e città). Non inseriamo automaticamente nulla in catalogo: c’è un controllo umano prima di ogni eventuale aggiunta.',
      },
      {
        type: 'text' as const,
        title: 'Accuratezza dei dati',
        text: 'Orari, indirizzi e dettagli possono cambiare. Le informazioni in guida sono indicative e aggiornate con cura, ma non in tempo reale. Non usiamo etichette di garanzia formale: puntiamo a selezione e trasparenza. Per allergie, celiachia e contaminazioni, verifica sempre direttamente con il locale.',
      },
      {
        type: 'contacts' as const,
        title: 'Contatti',
        introPrefix: 'Per richieste relative alla privacy puoi scrivere a ',
        note: 'Quando selezioni un link verso Telegram, Instagram, Facebook o altri servizi esterni, si applicano le informative del servizio di destinazione.',
        items: [
          {
            label: 'Bot Telegram',
            linkText: 'Apri TrovaVeg su Telegram',
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
    metaTitle: 'Pagina non trovata',
    metaDescription: 'Torna alla home oppure apri direttamente la guida su Telegram.',
    headline: 'Questa pagina non c’è.',
    lead: 'Torna alla home oppure apri direttamente la guida su Telegram.',
    ctaHome: 'Torna alla home',
    homeHref: '/',

    ctaBot: 'Apri su Telegram',
  },
} as const;

export type ItCopy = typeof it;
