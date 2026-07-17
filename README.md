# TrovaVeg Web

Sito statico di [TrovaVeg](https://t.me/TrovaVegBot) — guida tascabile per locali vegani, vegetariani e vegan-friendly a Bologna e Firenze.

**Stack:** Astro (`output: 'static'`) · CSS nativo con design token · nessun database, CMS o account.

Repository: [proxy73/trovaveg-web](https://github.com/proxy73/trovaveg-web)

## Pagine

| Percorso | Contenuto |
|----------|-----------|
| `/` | Home |
| `/bologna` | Soft launch Bologna |
| `/firenze` | Beta Firenze |
| `/privacy` | Privacy |
| `404` | Pagina non trovata |

## Sviluppo

```bash
npm install
npm run dev
```

Build statico in `dist/`:

```bash
npm run build
npm run preview
```

## Configurazione post-deploy

1. **Cloudflare Web Analytics** — token già impostato in `src/content/copy.ts` (`site.cloudflareAnalyticsToken`).
2. **Email forward** — `info@trovaveg.com`; configurare l’inoltro sul DNS/email provider.
3. **Asset** — sostituire i placeholder in `/public` (`logo.svg`, `images/*`, `og-default.svg`) con logo e screenshot definitivi.
4. **Dominio** — `site` in `astro.config.mjs` e `src/content/copy.ts` punta a `https://trovaveg.it`.

## Copy

Testi allineati al posizionamento M32-C: *guida tascabile*, *meno locali ma certi*, *meno quantità più qualità* — centralizzati in `src/content/copy.ts`.

## Licenza

Privato / all rights reserved salvo diversa indicazione del maintainer.
