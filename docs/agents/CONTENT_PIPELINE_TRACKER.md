# Content Pipeline Tracker

Questo è il tracker repo-locale dei sei agenti del sito. Non sostituisce
la fonte tecnica: ogni dato su articoli, immagini ed embed deve essere
verificato in `src/lib/posts.ts`, `public/blog/` e, quando richiesto, sul
sito live.

I dati non ancora verificati devono restare `DA_VERIFICARE`. Non
importare automaticamente stati dai vecchi tracker di “Il mio cervello”
o OMNIA26.

## Registro articoli e derivati

| Slug/articolo | Articolo repo | Visual/SEO gate | Video | Newsletter | LinkedIn | Ultima prova | Prossimo passo |
|---|---|---|---|---|---|---|---|
| _Compilare o aggiornare durante un incarico reale_ | `DA_VERIFICARE` | `DA_VERIFICARE` | `DA_VERIFICARE` | `DA_VERIFICARE` | `DA_VERIFICARE` | — | Verificare la fonte corrente |

## Cicli

| Cycle ID | Stato | Articolo | Gate Fabio | Azione tecnica autorizzata | Blocchi | Ultimo aggiornamento |
|---|---|---|---|---|---|---|
| _Nessun ciclo aperto al consolidamento_ | — | — | — | — | — | 2026-07-23 |

## Newsletter bank

| ID | Articolo sorgente | Stato bozza | Gate invio | URL/UTM | Note |
|---|---|---|---|---|---|
| _Nessuna voce importata dal legacy_ | — | — | — | — | Verificare prima di aggiungere |

## Regole di aggiornamento

- L'Orchestrator aggiorna coordinamento, priorità e stato complessivo.
- Ogni specialista aggiorna solo le colonne del proprio ramo.
- Funnel & Website QA registra prove repo/build/live.
- Nessun ramo passa a `LIVE_VERIFICATO` senza una fonte primaria.
- Una decisione di rinvio deve essere esplicita e registrata come
  `RIMANDATO_CON_DECISIONE`.
