# VIDEO_BRIEF — "Dal Blog al Video" — recuperare-tempo-delegare-ai-sistema

**Protocollo FM2030:** FM2030-P000036 (verificato libero — vedi report canonico)
**Cycle ID repo:** `video-recuperare-tempo-delegare-ai-sistema`
**Agente:** agente-video-mesarender-production
**Data:** 2026-08-01
**Stato video:** `SCRIPT_APPROVATO` in preparazione — pacchetto DRAFT1, in attesa di review Fabio
**Fase:** Pre-produzione soltanto. Nessun render, nessun audio/TTS, nessun asset scaricato o applicato, nessun upload.

## 1. Articolo madre (fonte tecnica verificata)

- Titolo: "Come ho recuperato 3 ore a settimana delegando all'AI quello che non richiede la mia testa."
- Slug: `recuperare-tempo-delegare-ai-sistema`
- URL live: https://www.fabiomicale.com/blog/recuperare-tempo-delegare-ai-sistema
- Fonte tecnica: `src/lib/posts.ts`, righe 867-993 (letto integralmente)
- Categoria: Passo 2 — Rimetti Struttura
- Data pubblicazione: 2026-04-07
- Stato articolo: LIVE, confermato in `src/lib/posts.ts` e nel tracker
- Video/embed esistenti sull'articolo: NESSUNO (confermato — nessuna occorrenza `youtube-nocookie`/`youtu.be` nel blocco dell'articolo)
- Link interni presenti nell'articolo, da preservare nel video: `/il-metodo`, `/chi-sono` (x1), `/estratto` (x2)
- Cover articolo attuale: `/blog/cover_tempo_ai.png`

## 2. Perché questo articolo (selezione già motivata a monte)

Selezione confermata dal report precedente
`FM2030_ARTICOLI_VIDEO_INVENTORY_AND_NEXT_SELECTION_REPORT.md` (protocollo proposto
FM2030-P000035, **non ancora registrato ufficialmente** — vedi report canonico di
questa task, sezione protocollo): rank 1 su 5 candidati senza video, zero
sovrapposizione con gli 8 video già pubblicati, framework a tre categorie già
pronto per una struttura da lavagna, forte collegamento al funnel (`/il-metodo`,
`/chi-sono`, `/estratto`).

## 3. Posizionamento

Professionisti over 40, AI pratica e non tecnica, metodo, controllo, uso
dell'esperienza/giudizio umano. Il video deve mostrare che delegare all'AI
significa delegare **esecuzione**, non **giudizio** — mai il contrario.

Il video NON deve diventare: tutorial tecnico su un singolo software, lista
generica di tool AI, motivazione astratta, promessa di produttività facile,
contenuto da "guru", elogio indiscriminato dell'automazione.

## 4. Vincolo di fedeltà all'articolo — nota critica

Il corpo dell'articolo **non somma esplicitamente** i tre risparmi di tempo
citati (scrittura dimezzata; ricerca "trenta minuti invece di tre ore";
email ridotte di due terzi) in un totale di "3 ore a settimana". La cifra
"3 ore a settimana" compare **solo nel titolo** dell'articolo, non come
calcolo esplicito nel corpo. Il video userà quindi la cifra esattamente come
la usa l'articolo — come titolo/headline del caso personale — senza costruire
un'aritmetica non presente nel testo e senza presentarla come risultato
universale o garantito (vedi anche `VIDEO_PREPRODUCTION_QA.md`, punto di
cautela #1, e `VIDEO_APPROVAL_PACKET_FOR_FABIO.md`, decisione richiesta #1).

Gli esempi "workflow di content", "sistema di follow-up", "pipeline di
onboarding" citati nella sezione finale dell'articolo sono formulati in modo
generico ("Un workflow che...", "Un sistema che...") e non sono presentati
nell'articolo come sistemi che Fabio ha personalmente costruito e documentato
con risultati. Nello script questi restano esempi rappresentativi del
"livello successivo", non fatti biografici specifici — marcati come tali.

## 5. Continuità con i video già pubblicati

Template video-lezione consolidato (lavagna centrale, foto Fabio in alto a
destra, blocco logo+"FABIO MICALE"+"autore & formatore" fisso in alto a
sinistra, waveform sottile e centrata, nessun secondo logo/watermark), regola
lavagna-mai-vuota, sincronizzazione semantica, sottotitoli non burned-in di
default, apertura con identità/posizionamento/libro nei primi 10-15 secondi —
tutte da `.claude/agents/agente-video-mesarender-production.md` (regole
correnti, sostituiscono qualunque nota legacy OMNIA26 in conflitto).

## 6. Durata target

6-9 minuti totali. Stima di questo draft: **~7:45** (vedi
`VIDEO_SCRIPT_DRAFT1.md` per la scomposizione per sezione).

## 7. Cosa NON è stato fatto in questo task (vincoli duri rispettati)

Nessun render, nessuna generazione audio/TTS, nessun avatar, nessuna musica
scaricata o applicata, nessuna thumbnail definitiva creata, nessun upload
YouTube, nessuna pubblicazione, nessuna modifica all'articolo, nessun embed,
nessun commit/push/deploy, nessuna newsletter, nessun LinkedIn.

## 8. Output di questo ciclo

1. `03_VIDEO_PACKET/VIDEO_BRIEF.md` (questo file)
2. `03_VIDEO_PACKET/VIDEO_SCRIPT_DRAFT1.md`
3. `03_VIDEO_PACKET/VIDEO_STORYBOARD_DRAFT1.md`
4. `03_VIDEO_PACKET/VIDEO_VISUAL_PLAN.md`
5. `03_VIDEO_PACKET/VIDEO_MUSIC_BRIEF.md`
6. `03_VIDEO_PACKET/VIDEO_THUMBNAIL_CONCEPTS.md`
7. `03_VIDEO_PACKET/VIDEO_PREPRODUCTION_QA.md`
8. `00_APPROVAL_PACKET/VIDEO_APPROVAL_PACKET_FOR_FABIO.md`

Report canonico:
`G:\Il mio Drive\FABIO_MICALE_AI_BRAIN_2030\FM2030_RECUPERARE_TEMPO_AI_VIDEO_PREPRODUCTION_REPORT.md`

## 9. Prossimo passo

Attendere review/approvazione di Fabio sul pacchetto. Nessuna produzione
autorizzata da questo ciclo.
