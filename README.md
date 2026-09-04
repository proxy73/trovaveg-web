# TrovaVeg Web

Landing statica bilingue (IT/EN) di [TrovaVeg](https://t.me/TrovaVegBot).

Il sito spiega il progetto e indirizza al bot Telegram. La ricerca dei locali
avviene nel bot, non sul sito; per usarla serve Telegram. Non esiste un’app
TrovaVeg separata e non serve un account sul sito.

**Copertura attuale:** TrovaVeg è disponibile nelle province di Bologna e Firenze.
La disponibilità non implica catalogo completo, dati in tempo reale o certificazione.

**Stack:** Astro (`output: 'static'`) · CSS nativo con design token · nessun
database, CMS, account o backend web · hosting su Cloudflare Pages · Cloudflare
Web Analytics (privacy-safe). Nessuna dipendenza diretta dal runtime Railway del
bot.

Repository: [proxy73/trovaveg-web](https://github.com/proxy73/trovaveg-web)

## Pagine

| Percorso | Contenuto |
|----------|-----------|
| `/` | Home italiana |
| `/bologna` | Bologna e provincia |
| `/firenze` | Firenze e provincia |
| `/privacy` | Privacy (IT) |
| `/en` | Home inglese |
| `/en/bologna` | Bologna (EN) |
| `/en/florence` | Florence and province |
| `/en/privacy` | Privacy (EN) |
| `404` | Pagina non trovata (IT, risposta 404 reale) |
| `/en/404` | Pagina informativa 404 (EN) |

## Sviluppo

```bash
npm install
npm run dev
```

Build statico in `dist/`:

```bash
npm run build
```

## Contenuti e asset

- Invarianti di sito (URL bot, social, email pubblica): `src/content/site.ts`
- Copy localizzato: `src/content/copy/it.ts`, `src/content/copy/en.ts`
- Screenshot pubblici ottimizzati in WebP sotto `/public`

Contatto pubblico: `info@trovaveg.com`.

Il sito usa Cloudflare Web Analytics e Google Fonts; dettagli nella pagina
Privacy.

## Licenza

Privato / all rights reserved salvo diversa indicazione del maintainer.
