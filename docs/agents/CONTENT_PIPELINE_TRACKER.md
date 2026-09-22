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

**Stato canonico Blog → Video aggiornato il 2026-09-22** (dopo la pubblicazione ed embed di `3sf1i_xIvfg` su `sistemi-che-lavorano-per-te`; report `01_REPORTS_AGENTI\REPORT_CLAUDE_FMHUB26_SISTEMI_CHE_LAVORANO_FINAL_CLOSEOUT_2026-09-22.md`; fonte `src/lib/posts.ts`, verificato con `grep -c "slug:"` = 16 e `grep -c "youtube-nocookie.com/embed"` = 16): **16 articoli canonici attivi · 16 `VIDEO_PRESENTE_EMBED_OK` · 0 `VIDEO_ESISTENTE_NON_EMBEDDATO` · 0 `VIDEO_DA_PRODURRE` · 0 `VIDEO_NON_PRIORITARIO_O_REDONDANTE`**. Stato precedente (2026-09-21): 15/0/0/1 con `sistemi-che-lavorano-per-te` in `VIDEO_NON_PRIORITARIO_O_REDONDANTE`, superato da una decisione esplicita di Fabio che ha richiesto comunque il video con un angolo distinto (continuità, non duplicazione — vedi riga sotto e report del 2026-09-22). Slug rediretti rimossi dallo stato operativo (301 in `next.config.ts`): `manifesto-reinvenzione-over40` → `reinventarsi-dopo-i-40-metodo`; `ai-esperienza-professionale-vantaggio`, `manifesto-ai-esperienza-vince`, `ai-over-40-opportunita-non-minaccia` → `over-40-ai-esperienza`. Le note storiche sopra (18/18, 8 video) sono superate da questo stato.

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
| `10-task-delegare-ai-lavoro` | LIVE | **CHIUSO — video live, embed live, LinkedIn 3/3 schedulato** — layout template canonico fisso (`00_PORTABLE_CORE\VIDEO_TEMPLATES\FMHUB26_CANONICAL_BLACKBOARD_TEMPLATE\`). Il primo upload aveva un refuso segnalato via screenshot (mai riprodotto nel file locale su 3 indagini indipendenti — diagnosi: sottotitolo automatico YouTube); Fabio ha ricaricato comunque una versione pulita con URL reale definitivo. | **SI — https://youtu.be/1X9r1BGJkWs** | **SI (embed + schema VideoObject, DEPLOYATO su origin/main, verificato live)** | `DA_VERIFICARE` | **SCHEDULED — 3/3 programmati manualmente da Fabio per venerdì 21 agosto 2026** (Post 1 articolo 08:15, Post 2 video 13:15, Post 3 standalone 20:00) | 2026-08-21 | **Ciclo tecnico ed editoriale chiuso.** Pubblicato su YouTube, verificato reale/pubblico via yt-dlp (306s, coerente col render approvato). Embed e `videoMetadata.ts` committati (`0ff5c9b`), pushati su `origin/main`, confermati live via curl (HTTP 200, embed×3, VideoObject×2). LinkedIn 3/3 schedulato (confermato da Fabio). Unico elemento aperto: eventuale newsletter, non richiesta per questo ciclo. |
| `non-serve-essere-nativi-digitali` | LIVE | **SI — https://youtu.be/kInS-3P0dUM** | **SI (embed + schema VideoObject, in produzione dal 2026-09-21)** | `NEWSLETTER_PACKET_READY` — `READY_IN_NEWSLETTER_WAREHOUSE — NO SEND`, pacchetto in `docs/agents/work/video-non-serve-essere-nativi-digitali/NEWSLETTER_READY_NO_SEND/` | `LINKEDIN_READY_FOR_FABIO — NO SCHEDULE` (3 post in `docs/agents/work/video-non-serve-essere-nativi-digitali/LINKEDIN_READY_NO_SCHEDULE/`) | 2026-09-21 | **VIDEO_PRESENTE_EMBED_OK.** Pubblicato manualmente da Fabio il 2026-09-21 (verificato pubblico via yt-dlp/oEmbed, 4:37 = 277 s). Embed e voce `videoMetadata.ts` committati. Master corretto per l'outro (residuo "dall'inizio" rimosso dall'asset canonico, vedi report `REPORT_CLAUDE_FMHUB26_OUTRO_CANONICAL_FIX_NATIVI_RERENDER_2026-09-21.md`). Pacchetto in `docs/agents/work/video-non-serve-essere-nativi-digitali/`. Invio newsletter e pubblicazione LinkedIn in attesa di Fabio. |
| `sistemi-che-lavorano-per-te` | LIVE | **SI — https://youtu.be/3sf1i_xIvfg** (pubblicato e approvato da Fabio, 2026-09-22) | **SI (embed + schema VideoObject, in `src/lib/posts.ts` e `src/lib/videoMetadata.ts`)** | `NEWSLETTER_PACKET_READY` — `READY_IN_NEWSLETTER_WAREHOUSE — NO SEND`, pacchetto in `docs/agents/work/video-sistemi-che-lavorano-per-te/NEWSLETTER_READY_NO_SEND/` | `LINKEDIN_READY_FOR_FABIO — NO SCHEDULE` (3 post in `docs/agents/work/video-sistemi-che-lavorano-per-te/LINKEDIN_READY_NO_SCHEDULE/`) | 2026-09-22 | **VIDEO_PRESENTE_EMBED_OK.** Video prodotto su richiesta esplicita di Fabio del 2026-09-22, che ha superato la precedente valutazione `VIDEO_NON_PRIORITARIO_O_REDONDANTE` del 2026-09-21 con un angolo deliberatamente distinto dai contenuti simili (`manifesto-sistemi-autonomi`, `recuperare-tempo-delegare-ai-sistema`, `10-task-delegare-ai-lavoro`): focus stretto sulla continuità ("un sistema che regge anche quando non sei presente"), non manifesto, non racconto di ore recuperate, non listicle. Caricato e approvato da Fabio; dati reali del video (titolo, durata 288s=4:48, upload date) recuperati via yt-dlp e inseriti in `videoMetadata.ts`, nessun dato inventato. Embed integrato nell'articolo con lo stesso pattern canonico degli altri articoli, testo dell'articolo non modificato. Build/QA locale/commit/push/deploy/QA live eseguiti in questo ciclo (dettaglio nel report). Invio newsletter e pubblicazione LinkedIn in attesa di Fabio. |
| `cambiare-lavoro-40-anni-guida-pratica` | LIVE (pubblicato 12/09/2026, cover foto reale Unsplash tracciata in `IMAGE_SOURCES.md`, REAL_STOCK_PHOTO_GATE rispettato) | SI — https://youtu.be/xZ9zaDIbwaM (pubblicato 19/09/2026) | SI — embed verificato in `src/lib/posts.ts` | `NEWSLETTER_PACKET_READY` — bozza pronta in `docs/agents/work/video-cambiare-lavoro-40-anni-guida-pratica/NEWSLETTER_READY_NO_SEND/` (subject "Cambiare lavoro a 40 anni non è ricominciare da zero"), in attesa di approvazione/invio Fabio | `TESTO_APPROVATO` sui 3 post (Post 1 articolo, Post 2 video, Post 3 standalone) in `docs/agents/work/video-cambiare-lavoro-40-anni-guida-pratica/LINKEDIN_READY_NO_SCHEDULE/`, in attesa gate pubblicazione/schedulazione Fabio | 2026-09-19 | **Ramo articolo+video chiuso.** Newsletter e LinkedIn pronti per approvazione (nessun invio/pubblicazione eseguiti). Warning aperto: nessuna conferma registrata di `agente-funnel-website-qa` sul "Blog Publication Mandatory Visual & SEO Gate"/Visual Attraction Gate per questo articolo — da assegnare prima di dichiarare il ramo articolo pienamente `COMPLETO_VIDEO_EMBEDDED` (vedi sezione I del file orchestrator). |

## Cicli

| Cycle ID | Stato | Articolo | Gate Fabio | Azione tecnica autorizzata | Blocchi | Ultimo aggiornamento |
|---|---|---|---|---|---|---|
| _Nessun ciclo aperto al consolidamento_ | — | — | — | — | — | 2026-07-23 |

## Newsletter bank

> **Regola permanente FMHUB26:** nessuna newsletter va inviata o schedulata finché Fabio non conferma l'esistenza del primo iscritto reale esterno.

| ID | Articolo sorgente | Stato bozza | Gate invio | URL/UTM | Note |
|---|---|---|---|---|---|
| NL-non-serve-essere-nativi-digitali | `non-serve-essere-nativi-digitali` (articolo + video live) | `READY_IN_NEWSLETTER_WAREHOUSE — NO SEND` | Invio/schedulazione bloccati: regola FMHUB26, nessuna newsletter inviata o schedulata finché Fabio non conferma il primo iscritto reale esterno | UTM beehiiv/email/`non-serve-essere-nativi-digitali` (solo testo) | Pacchetto in `docs/agents/work/video-non-serve-essere-nativi-digitali/NEWSLETTER_READY_NO_SEND/`. |
| NL-cambiare-lavoro-40 | `cambiare-lavoro-40-anni-guida-pratica` (articolo + video live) | `READY_IN_NEWSLETTER_WAREHOUSE — NO SEND` | Invio/schedulazione bloccati: regola FMHUB26, nessuna newsletter inviata o schedulata finché Fabio non conferma il primo iscritto reale esterno | UTM beehiiv/email/`cambiare-lavoro-40` (solo testo) | Subject/Preheader Opzione 1. Pacchetto in `docs/agents/work/video-cambiare-lavoro-40-anni-guida-pratica/NEWSLETTER_READY_NO_SEND/`. |
| _Nessuna voce importata dal legacy_ | — | — | — | — | Verificare prima di aggiungere |

## Regole di aggiornamento

- L'Orchestrator aggiorna coordinamento, priorità e stato complessivo.
- Ogni specialista aggiorna solo le colonne del proprio ramo.
- Funnel & Website QA registra prove repo/build/live.
- Nessun ramo passa a `LIVE_VERIFICATO` senza una fonte primaria.
- Una decisione di rinvio deve essere esplicita e registrata come
  `RIMANDATO_CON_DECISIONE`.
