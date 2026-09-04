# Outreach runbook — TrovaVeg (M34)

Procedura **interna**. Nessun invio automatico o massivo. **Nessun outreach in M33.**

## Ambito e finestra

| Fase | Azione |
|------|--------|
| **M33** | **CHIUSA / PASS / FROZEN**. Package press privato/versionato. Attribution/CTA/funnel e privacy logging PASS live. Dry run M33-J PASS. **Nessun contatto** a media, community, locali o concorrenti — **nessun outreach svolto**. |
| **M33-Z** | Freeze finale **PASS** — M33 chiusa/frozen. |
| **M34** | **Mercoledì 2 settembre 2026, ore 17:30 CEST**. Outreach solo dopo decisione umana e gate sotto. |

**Focus lancio M34 (storico):** Bologna e provincia; Firenze era indicata come beta.
**Stato claim post-M35-FIR-GA:** TrovaVeg è disponibile nelle province di Bologna e Firenze.
**Milano:** non disponibile, fuori scope, **non annunciabile**.
**Limiti obbligatori in ogni pitch:** selezione non esaustiva, nessuna certificazione, informazioni non necessariamente in tempo reale, nessuna nuova città.

## Gate go / no-go (prima del primo invio)

Tutti obbligatori:

1. **M33-Z freeze finale** completato (**PASS** — M33 FROZEN).
2. Attribution / funnel end-to-end ancora in stato PASS.
3. Nessun P0 / P1 confermato aperto.
4. Retention `acquisition_events` entro soglia (vedi sotto); nessuna retention automatizzata attiva.
5. Nessun export individuale e nessuna correlazione Cloudflare ↔ Telegram.
6. Approvazione umana scritta per il primo (e ogni) invio.

Se un gate fallisce: **no-go** — nessun invio.

## Reperibilità e monitoraggio (primi giorni M34)

- **Finestra M34:** mercoledì **2 settembre 2026**, ore **17:30 CEST**.
- **Nico** reperibile **17:30–22:00** nei **primi 3 giorni** della finestra di lancio.
- Monitoraggio intensivo della comunicazione e delle risposte:
  - prime **2 ore**;
  - prime **24 ore**;
  - fino a **72 ore**.

Non implica metriche automatiche “24h” implementate sul prodotto: è un ritmo operativo umano.

## Controllo operativo privacy (pre-lancio)

Verificare, senza esportare analytics individuali né correlare siti ↔ Telegram:

- attribution / funnel PASS;
- nessun P0 / P1;
- routine retention manuale rispettata (record non oltre soglia di retention);
- nessun export di identificatori individuali;
- nessuna correlazione Cloudflare Web Analytics ↔ eventi Telegram.

## Retention `acquisition_events` (operativo)

- Retention target: **≤ 90 giorni**.
- Procedura **manuale** settimanale dell’operatore Supabase: **ogni lunedì, 17:30–22:00**.
- Nella routine: purge dei record più vecchi di **83 giorni** (margine rispetto ai 90).
- **Nessuna automazione** di retention attiva.

### Incidente privacy operativo (retention)

Se la routine viene saltata e un record rischia di superare i **90 giorni**:

1. trattarlo come **incidente privacy operativo**;
2. **registrare** l’incidente internamente;
3. eseguire la **purge** appena possibile (senza attendere il lunedì successivo, se il rischio soglia è concreto);
4. non esportare né condividere payload, identificatori o log raw.

Non inserire qui SQL eseguibile, token o dettagli tecnici sensibili.

## Prima di ogni contatto (obbligatorio)

1. **Approvazione umana** scritta (chi approva, destinatario, canale, bozza).
2. **Adattare il pitch** (Bologna/provincia, Firenze/provincia o tematico), senza claim di completezza.
3. **Verificare i claim** contro `factsheet-it.md` e `faq-it.md`. Nessun numero utenti non verificato, nessun primato, nessuna copertura nazionale, nessuna certificazione, nessun Milano disponibile, nessun confronto nominativo.
4. Per Firenze: indicare **disponibile** (città e provincia) e i limiti (selezione non esaustiva, non real-time, nessuna certificazione). Non usare più «Firenze è in beta».
5. Solo contatti pubblici o canali legittimi; non usare dati personali non pubblici da questo repo.

## Invio

- Un destinatario (o piccolo gruppo omogeneo) per volta, non blast.
- Solo materiali approvati (comunicato breve/lungo, factsheet, asset in `press/assets/`).
- Traccia interna minima (data, target organizzativo, esito) **senza** log di chat utente o dati bot.

## Dopo l’invio

- Monitorare risposte secondo la finestra 2h / 24h / 72h.
- Rispondere a giornalisti e locali con le stesse guardrail (factsheet/FAQ).
- Aggiornare lo **Stato** in `media-list.md` solo in M34.

## Kill switch comunicazione

Sospendere subito outreach e bozze pubbliche se:

- errore fattuale sui claim (città, disponibilità, limiti, funzioni);
- richiesta di dati non verificabili o pressioni a gonfiare numeri;
- incidente privacy (incluso retention oltre soglia) o leak di materiale non pubblico;
- decisione del fondatore / maintainer.

In caso di kill switch: non pubblicare correzioni affrettate senza approvazione; documentare internamente causa e ripresa.

## Classificazione problemi

| Classe | Esempio | Azione |
|--------|---------|--------|
| **P0** | Claim falso già inviato; leak dati; retention oltre 90 giorni non sanata; crisi reputazionale acuta | Stop immediato; correzione approvata; escalation umana |
| **P1** | Ambiguo su Firenze disponibile / Milano; claim di completezza; tono non allineato; routine retention in ritardo ma sotto soglia critica | Sospendere quel thread o l’invio; riallineare; riprendere solo dopo ok |

## Vietato

- Invii in M33 (nessun outreach avvenuto; M33 è FROZEN)
- Invii massivi o automatici
- Dichiarare outreach già avviato senza approvazione umana M34
- Contatto a concorrenti con fini denigratori o confronti nominativi
- Annunciare Milano, copertura nazionale, catalogo completo o nuove città oltre Bologna/Firenze
- Dichiarare Firenze ancora in beta (stato superato da M35-FIR-GA)
- Promettere retention automatizzata, metriche 24h di prodotto o pagina `/press` pubblica
- Modifica live del sito/bot “per la stampa” fuori processo
