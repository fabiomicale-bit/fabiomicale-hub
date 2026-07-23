# Governance dei sei agenti del sito

## 1. Fonti correnti e gerarchia

La memoria generale canonica è:

`G:\Il mio Drive\FABIO_MICALE_AI_BRAIN_2030`

Il Master Context corrente è
`00_FABIO_MICALE_MASTER_CONTEXT`; il registro ufficiale è
`01_REGISTRO_PROTOCOLLO_UNICO`. Non modificarli senza incarico
esplicito. Il repository:

`C:\Users\fabio\source\fabiomicale-hub`

è la fonte tecnica corrente di `fabiomicale.com`. Per articoli, slug,
metadata, embed e codice prevalgono i file del repository e, quando il
task lo richiede, il sito live. Report, tracker e fonti legacy sono
affermazioni da verificare, non prove definitive.

Ordine di precedenza:

1. istruzione esplicita di Fabio per il task corrente;
2. fonte live e repository corrente;
3. Master Context e decisioni FM2030 correnti;
4. documenti in `docs/agents/`;
5. fonti legacy, soltanto come archivio dichiarato.

In caso di conflitto usare `DA_VERIFICARE` o fermarsi al gate; non
inventare una riconciliazione.

## 2. Ruoli

- Fabio decide direzione, priorità e approvazione finale.
- Gippi coordina metodologia, incarichi, memoria e verifiche.
- Codex e Claude Code eseguono sui file e sugli strumenti tecnici entro
  il perimetro ricevuto.
- Gli agenti specialistici non ampliano autonomamente il task e non
  delegano la decisione finale.

## 3. Gate non derogabili

- Nessun autopublish.
- Nessun invio o scheduling newsletter senza approvazione esplicita di
  Fabio.
- Nessuna programmazione o pubblicazione LinkedIn senza approvazione
  esplicita di Fabio.
- Nessun upload YouTube da parte degli agenti.
- Nessun deploy senza autorizzazione esplicita.
- Commit e push richiedono autorizzazione esplicita distinta; la sola
  approvazione editoriale non li autorizza.
- Nessuna modifica di account, credenziali, API key, `.env`, servizi
  esterni o dati reali.
- Non usare un generico “ciclo autorizzato” per dedurre azioni esterne:
  ogni autorizzazione deve indicare azione e perimetro.

## 4. Flusso editoriale

La sequenza standard è:

`ARTICOLO → APPROVAZIONE FABIO → PREPARAZIONE/QA SITO → AUTORIZZAZIONE
TECNICA → STATO LIVE VERIFICATO → VIDEO / NEWSLETTER / LINKEDIN`

L'Orchestrator può coordinare rami in parallelo solo dopo che il gate
necessario è documentato. Lo stato di ogni ramo è registrato in
`docs/agents/CONTENT_PIPELINE_TRACKER.md`.

Stati minimi:

- `DA_VERIFICARE`
- `IN_PREPARAZIONE`
- `READY_FOR_FABIO_REVIEW`
- `APPROVATO_DA_FABIO`
- `READY_FOR_TECHNICAL_ACTION`
- `LIVE_VERIFICATO`
- `RIMANDATO_CON_DECISIONE`
- `BLOCCATO`

“Completo” è ammesso solo quando tutte le prove richieste sono
disponibili. Un report precedente non sostituisce build, diff, fonte
live o dato grezzo.

## 5. Sito e Git

Per il sito:

- verificare sempre workspace, branch, HEAD e stato Git prima di
  modificare;
- se compaiono modifiche estranee, fermarsi e segnalarle;
- usare `src/lib/posts.ts` come fonte corrente degli articoli finché il
  repository mantiene questa architettura;
- usare `public/blog/` per gli asset editoriali e
  `public/blog/IMAGE_SOURCES.md` per fonti/licenze;
- eseguire lint/build in proporzione alla modifica e registrare i
  risultati;
- non fare commit, push o deploy senza l'autorizzazione specifica.

## 6. Immagini editoriali

Quando il workflow richiede fotografie editoriali:

- usare fotografie stock reali, non immagini generate con AI;
- verificare qualità, pertinenza, leggibilità e resa Open Graph;
- registrare autore, fonte, licenza e trasformazioni in
  `public/blog/IMAGE_SOURCES.md`;
- verificare `ogImage`, alt text naturale e presenza dell'asset;
- non riutilizzare un'immagine non tracciata o un vecchio asset
  artificioso come scorciatoia.

## 7. Video

Il ramo video resta separato dal repository finché un incarico non
indica un workspace tecnico corrente. Un percorso legacy, compreso
`C:\remotion-ytb022`, non diventa automaticamente workspace attivo.

Il video-agent può analizzare e preparare pacchetti; render finale,
modifica sito, upload, commit, push e deploy richiedono ciascuno il
relativo incarico/gate. Per “Dal Blog al Video” verificare sempre
articolo madre, brand, intro/outro, audio, timing, sottotitoli separati,
QA visiva e pacchetto pre-upload. L'upload YouTube resta manuale.

## 8. Newsletter e LinkedIn

- I testi devono usare tono adulto, sobrio, umano e concreto.
- I link verso il sito seguono
  `docs/MEASUREMENT_UTM_STANDARD.md`.
- Credenziali e piattaforme non fanno parte del repository.
- Preparare copy, metadati e checklist è distinto da inviare,
  programmare o pubblicare.
- La preview finale e l'approvazione di Fabio restano gate obbligatori.

## 9. Output e memoria

I file di lavoro di un ciclo vanno in
`docs/agents/work/<cycle-id>/` secondo
`docs/agents/WORK_PACKET_TEMPLATES.md`. La cartella viene creata solo
quando serve un ciclo reale.

Per un incarico FM2030 importante, il report ufficiale va nella memoria
canonica con il nome indicato dal prompt. Gli agenti non aggiornano
autonomamente Master Context o Registro. Il vecchio `GIPPI_SYNC`, i
tracker sotto `Il mio cervello` e i documenti OMNIA26 non sono memoria
operativa corrente.

## 10. Uso delle fonti legacy

Le fonti legacy possono essere lette selettivamente quando il task le
indica o quando sono indispensabili per recuperare un fatto. Ogni dato
recuperato deve essere confrontato con la fonte corrente. Non scrivere
nuovi output in OMNIA26 o in “Il mio cervello”; non spostare, rinominare
o cancellare file legacy senza autorizzazione.
