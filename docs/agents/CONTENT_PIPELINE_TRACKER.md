# Content Pipeline Tracker

Questo è il tracker repo-locale dei sei agenti del sito. Non sostituisce
la fonte tecnica: ogni dato su articoli, immagini ed embed deve essere
verificato in `src/lib/posts.ts`, `public/blog/` e, quando richiesto, sul
sito live.

I dati non ancora verificati devono restare `DA_VERIFICARE`. Non
importare automaticamente stati dai vecchi tracker di “Il mio cervello”
o OMNIA26.

## Registro articoli e derivati

Popolato in FM2030-P000035 (2026-08-01, inventario completo 18/18
articoli, 8 video). Riconciliato in FM2030-P000039 → 2026-08-12 audit
stato reale (report `01_REPORTS_AGENTI\REPORT_CLAUDE_BLOG_VIDEO_REAL_STATE_AND_AGENT_RECOVERY_2026-08-12.md`):
`origin/main` aveva 5 commit non ancora presenti in locale, tra cui
l'embed del 9° video (`recuperare-tempo-delegare-ai-sistema`,
`sdUsFPwEpn0`) e lo schema `VideoObject`. Repo locale riallineato con
merge `origin/main` → `main` il 2026-08-12 (vedi commit di merge),
`.claude/agents/*` e questo tracker preservati. Fonti: `src/lib/posts.ts`
(repo, post-merge), sitemap live, oEmbed YouTube pubblico. Dettaglio
completo in
`G:\Il mio Drive\FABIO_MICALE_AI_BRAIN_2030\FM2030_ARTICOLI_VIDEO_INVENTORY_AND_NEXT_SELECTION_REPORT.md`
(01/08, storico) e nel report del 12/08 sopra citato (corrente).
Newsletter e LinkedIn restano `DA_VERIFICARE` per tutti i rami.

| Slug/articolo | Articolo repo | Video | Embed nel sito | Newsletter | LinkedIn | Ultima prova | Prossimo passo |
|---|---|---|---|---|---|---|---|
| `piano-continuita-minima-energia-bassa` | LIVE | SI — https://youtu.be/yg4O24YaoVQ | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `sistema-minimo-giorni-storti-controllo-energia-bassa` | LIVE | SI — https://youtu.be/HWKiXJH6lCM | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `ricaduta-non-fallimento-tornare-in-carreggiata` | LIVE | SI — https://youtu.be/kKWakV8c94Q | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `over-40-ai-esperienza` (manifesto Passo 1) | LIVE | SI — https://youtu.be/ZgZf4VnhhHE | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `ferma-il-caos-primo-passo-ripartire-dopo-i-40-anni` | LIVE | SI — https://youtu.be/l26we6XGF5g | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `mantieni-il-controllo-revisione-settimanale` (manifesto Passo 3) | LIVE | SI — https://youtu.be/cGGXDRJ-Q94 | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `manifesto-sistemi-autonomi` (manifesto Passo 2) | LIVE | SI — https://youtu.be/wW4gJhcpTYo | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `reinventarsi-dopo-i-40-metodo` | LIVE | SI — https://youtu.be/Yl20TDaoXI8 (progetto storico "B09") | SI | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Nessuno (ramo articolo+video chiuso) |
| `recuperare-tempo-delegare-ai-sistema` | LIVE | **SI — https://youtu.be/sdUsFPwEpn0** | **SI (+ schema VideoObject)** | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-12 | Nessuno (ramo articolo+video chiuso). Pubblicato 2026-08-02, embed 2026-08-03, schema VideoObject 2026-08-10. Pacchetto pre-produzione originale conservato in `docs/agents/work/video-recuperare-tempo-delegare-ai-sistema/` come archivio storico. Gap noto: nessun report trovato per lo sblocco voce/render/upload finale — vedi report 12/08. |
| `claude-ai-come-usarlo-al-lavoro` | LIVE | **SI — https://youtu.be/hXotjVQVVuU** (unlisted) | **SI (embed + schema VideoObject, DEPLOYATO su origin/main)** | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-16 | Pubblicato 2026-08-13 su YouTube (upload manuale di Fabio). Embed e voce `videoMetadata.ts` committati (`0e87ffa`) e **confermati presenti su `origin/main`** (verificato via `git log origin/main` il 2026-08-16 — correzione disallineamento: la riga precedente diceva erroneamente "non pushati/deployati"). Eccezione nota: sigla intro senza audio, accettata solo per questo video. Sottotitoli: YouTube Automatic Captions (Italiano), SRT tecnico non caricato. Pacchetto completo in `docs/agents/work/video-claude-ai-come-usarlo-al-lavoro/`. |
| `paura-obsolescenza-professionale-ai` | LIVE | **SI — https://youtu.be/88gr8j15BBk** | **SI (embed + schema VideoObject, DEPLOYATO su origin/main)** | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-16 | Pubblicato 2026-08-16 su YouTube (upload manuale di Fabio), verificato reale/pubblico via yt-dlp (durata 5:43 = 343s, coerente col render approvato). Embed e voce `videoMetadata.ts` committati (`40e612b`) e **confermati presenti su `origin/main`** (verificato via `git log origin/main` il 2026-08-16 — correzione disallineamento: la riga precedente diceva erroneamente "non committati/pushati/deployati"). Appunto non bloccante di Fabio: pronuncia TTS di "ce la farò" migliorabile, regola QA pronuncia permanente registrata in `agente-video-mesarender-production.md`. Sottotitoli: SRT tecnico non caricato (policy vigente), lingua video da impostare Italiano per i sottotitoli automatici. Pacchetto completo in `docs/agents/work/video-paura-obsolescenza-professionale-ai/`. |
| `motivazione-o-struttura` (CW-2026-03, Batch 3) | LIVE | **SI — https://youtu.be/HCHi7zXCO9Y** | **SI (embed + schema VideoObject, DEPLOYATO su origin/main, verificato live)** | `NON_INVIATA` (materializzata, in `READY_NO_SEND` deliberato — parcheggiata in attesa di decisione futura di Fabio, nessuna scadenza) | **SCHEDULED — Fabio ha confermato il 2026-08-20 che tutti e 3 i post sono stati programmati manualmente via Buffer** (nessun agente ha avuto accesso a Buffer/LinkedIn, nessuna data/ora specifica comunicata) | 2026-08-20 | **Ciclo tecnico ed editoriale chiuso.** Pubblicato 2026-08-20 su YouTube (upload manuale di Fabio), verificato reale/pubblico via yt-dlp (durata 2:59 = 179s, coerente col render approvato; titolo YouTube reale "Il problema non è la motivazione. È la struttura", usato al posto della bozza pianificata). Embed e voce `videoMetadata.ts` committati (`15b5e31`), pushati su `origin/main` e confermati live (deploy Vercel `dpl_2XGknCwFemw52P5kRKibhXpjETgk` READY, HTTP 200 riverificato via curl). LinkedIn 3/3 schedulato (confermato da Fabio). Unico elemento aperto, deliberato: invio newsletter, in attesa di Fabio. Report di chiusura: `01_REPORTS_AGENTI\REPORT_CLAUDE_CW2026_03_SPOT_WORK_FINAL_CLOSEOUT_2026-08-20.md`. |
| `10-task-delegare-ai-lavoro` | LIVE | **IN PRODUZIONE** — script scritto e audio TTS reale generato (11/11 chunk, voce clonata Fabio via ElevenLabs), timing reale misurato, capitoli bozza pronti. Render Remotion non ancora eseguito. Pacchetto in `docs/agents/work/video-10-task-delegare-ai-lavoro/PRODUCTION_DRAFT1/` | NO (in attesa del render + embed) | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-20 | Nessuna sovrapposizione trovata con contenuto live (confermato in due audit separati, 20/08). Prossimo passo tecnico: render Remotion → QA → **GATE 1** (preview a Fabio) → upload manuale Fabio → URL reale → embed automatico (regola permanente). |
| `non-serve-essere-nativi-digitali` | LIVE | NO | NO | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | Candidato video (rank 5) |
| `ai-esperienza-professionale-vantaggio` | LIVE | NO | NO | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | In attesa — overlap medio con `manifesto-ai-esperienza-vince` |
| `manifesto-ai-esperienza-vince` | LIVE | NO | NO | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | In attesa — overlap medio-alto con pilastro `over-40-ai-esperienza` |
| `ai-over-40-opportunita-non-minaccia` | LIVE | NO | NO | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | In attesa — overlap alto con pilastro `over-40-ai-esperienza` |
| `sistemi-che-lavorano-per-te` | LIVE | NO | NO | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | In attesa — overlap alto con pilastro `manifesto-sistemi-autonomi` |
| `manifesto-reinvenzione-over40` | LIVE | NO | NO — pacchetto storico "B09" esiste ma pubblicato su `reinventarsi-dopo-i-40-metodo` | `DA_VERIFICARE` | `DA_VERIFICARE` | 2026-08-01 | **DECISIONE FABIO RICHIESTA** — overlap molto alto con `reinventarsi-dopo-i-40-metodo` (già video) |

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
