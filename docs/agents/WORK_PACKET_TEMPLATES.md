# Template minimi dei pacchetti agenti

Usare `docs/agents/work/<cycle-id>/`. Creare soltanto i file necessari
al task; non aprire cicli paralleli senza incarico.

## Brief ciclo — `00_CYCLE_BRIEF.md`

- cycle_id e obiettivo;
- fonti autorizzate;
- perimetro e limiti;
- output attesi.

## Stato ciclo — `01_STATE_MACHINE_STATUS.md`

- cycle_id
- stato corrente
- articolo/slug
- owner del ramo
- gate acquisiti con fonte
- azioni autorizzate
- blocchi
- prossimo passo

## Articolo — `02_ARTICLE_GATE_PACKET.md`

- brief e pubblico
- titolo, slug e intento
- bozza o percorso della bozza
- metadata SEO
- immagine proposta e fonte/licenza
- note per video, newsletter e LinkedIn
- esito review
- approvazione Fabio con prova

Il ramo editoriale può usare, nello stesso ciclo,
`01_EDITORIAL_BRIEF.md`, `02_ARTICLE_DRAFT.md` e
`03_ARTICLE_APPROVAL_PACKET.md`.

## Pubblicazione sito — `08_WEBSITE_QA_PACKET.md`

- workspace, branch, HEAD e stato Git
- file interessati
- visual/SEO gate
- lint/build
- diff sintetico
- autorizzazioni commit/push/deploy
- QA live e URL, solo se autorizzato ed eseguito

## Video — `03_VIDEO_GATE_PACKET.md`

- articolo madre e URL verificato
- workspace tecnico esplicitamente autorizzato
- script, audio e sottotitoli
- brand, intro/outro, timing e QA
- asset/fonti/licenze
- render e checksum
- esito pre-upload
- decisione Fabio
- nessun upload da parte dell'agente

## Newsletter — `04_NEWSLETTER_GATE_PACKET.md`

- articolo/video sorgente
- subject e preheader
- bozza
- CTA e UTM
- controlli link
- stato `READY_FOR_FABIO_REVIEW`
- autorizzazione invio/scheduling separata

Il ramo newsletter può usare `01_NEWSLETTER_DRAFT.md` e
`02_SUBJECT_PREHEADER_OPTIONS.md` nella cartella del ciclo.

## LinkedIn — `05_LINKEDIN_GATE_PACKET.md`

- sorgente e obiettivo
- copy finale
- visual reale e licenza
- CTA, URL e UTM
- preview
- data/ora proposta
- autorizzazione programmazione/pubblicazione separata

## Handoff e chiusura

`06_AGENT_HANDOFF_LOG.md` registra data, agente, input, output, prova e
destinatario. `07_CYCLE_CLOSEOUT_REPORT.md` riporta stato finale,
verifiche, azioni esterne realmente eseguite, warning e prossimo passo.
