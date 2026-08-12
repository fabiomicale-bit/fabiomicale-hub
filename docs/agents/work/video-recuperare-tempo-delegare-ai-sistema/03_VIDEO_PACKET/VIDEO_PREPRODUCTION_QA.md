# VIDEO_PREPRODUCTION_QA — recuperare-tempo-delegare-ai-sistema

**Stato:** QA di pre-produzione (nessun render esiste ancora — questa QA
verifica script/storyboard/piano, non un file video).

## 1. Fedeltà all'articolo

**PASS con una cautela.** Ogni affermazione, esempio e numero nello script
proviene direttamente da `src/lib/posts.ts` (righe 867-993), letto per
intero. Nessuno strumento, attività delegata, risultato o procedura è stato
inventato. Cautela registrata:

- La cifra "3 ore a settimana" compare nell'articolo **solo nel titolo**,
  non come somma esplicita dei tre risparmi citati nel corpo (scrittura
  -50%, ricerca 3h→30min, email -2/3). Il video la usa esattamente come la
  usa l'articolo — come headline del caso personale — senza costruire
  un'aritmetica che il testo non fa esplicitamente. **Decisione richiesta a
  Fabio**: confermare che questo uso è accettabile o richiedere una
  formulazione più cauta (es. "circa tre ore", già usata nello script).
- Gli esempi "workflow di content", "sistema di follow-up", "pipeline di
  onboarding" (sezione finale dell'articolo) sono generici nel testo
  originale, non descritti come sistemi che Fabio ha personalmente
  costruito e misurato. **Lo script attuale non li usa** (sono stati
  esclusi dal DRAFT1 per restare entro la struttura obbligatoria richiesta
  e per evitare di dover marcarli come "esempio ipotetico" dentro un video
  già denso) — segnalato qui solo come nota di trasparenza, nessuna azione
  richiesta.

## 2. Presenza sezione "Chi sono"

**PASS.** Sezione autonoma, 0:30-1:15, subito dopo l'hook, come richiesto.
Non celebrativa, non da curriculum.

## 3. Durata stimata

**PASS.** ~7:45 totali, dentro il range 6-9 minuti richiesto. Vedi
`VIDEO_SCRIPT_DRAFT1.md` per la scomposizione per sezione.

## 4. Assenza di affermazioni inventate

**PASS**, con la cautela già registrata al punto 1. Nessuno strumento
software nominato (nessun tutorial tecnico), nessun cliente/caso reale con
nome, nessun dato biografico non presente nell'articolo o nelle fonti
verificate (governance, tracker).

## 5. Assenza di promesse universali

**PASS.** Sezione 5 dello script ("Caso delle 3 ore") contiene
esplicitamente: "Questo è il mio caso... Non è una promessa che vale
automaticamente per te, e non è un risultato garantito." La stessa cautela
è ripetuta nella sezione esercizio pratico ("Il risultato più comune...").

## 6. Chiarezza del framework a tre categorie

**PASS.** Ogni categoria ha: definizione, esempio (dall'articolo), errore
da evitare, decisione pratica — come richiesto dalla struttura obbligatoria.
Vedi script sezione 4 e storyboard scene 7-13.

## 7. Differenziazione dagli 8 video già pubblicati

**PASS.** Verificato contro l'inventario di
`FM2030_ARTICOLI_VIDEO_INVENTORY_AND_NEXT_SELECTION_REPORT.md`: nessuno
degli 8 video pubblicati (piano-continuita-minima-energia-bassa,
sistema-minimo-giorni-storti, ricaduta-non-fallimento, over-40-ai-esperienza,
ferma-il-caos, mantieni-il-controllo-revisione-settimanale,
manifesto-sistemi-autonomi, reinventarsi-dopo-i-40-metodo) tratta la delega
pratica di attività specifiche all'AI con un framework a tre categorie.
Angolo confermato unico nella playlist.

## 8. Coerenza col target over 40

**PASS.** Linguaggio adulto, nessun tono "guru", nessuna promessa di
produttività facile; framework presentato come metodo da applicare con
disciplina (esercizio pratico, misurazione), coerente col posizionamento
"esperienza e giudizio umano al centro".

## 9. CTA unica

**PASS.** Una sola CTA principale, verso `/estratto`, collegata al metodo
"Successo in 3 Passi", tono non aggressivo ("Nessuna pressione, nessun
impegno"). Nessuna seconda CTA nel corpo.

## 10. Assenza di immagini AI

**PASS.** Verificato in `VIDEO_VISUAL_PLAN.md`: solo lavagna/testo/icone
interne e due asset fotografici reali già esistenti nel repository
(`fabio-speech.jpg`, cover libro Lulu corrente). Nessuna fotografia stock
nuova strutturalmente necessaria per questo script; l'unico brief stock
opzionale è dichiarato non necessario e non eseguito.

## 11. Assenza di render/audio/upload

**CONFERMATO.** Zero render prodotti, zero audio/TTS generato, zero avatar,
zero musica scaricata o applicata, zero thumbnail definitiva creata, zero
upload YouTube, zero pubblicazione in qualunque forma.

## 12. Completezza dello storyboard

**PASS.** 21 scene, copertura continua da 0:00 a 7:45 (esclusa
intro/outro di sigla, asset esterni non modificati), nessun buco temporale,
regola lavagna-mai-vuota applicata esplicitamente in ogni transizione.

## 13. Fattibilità tecnica con MesaRender

**PASS con nota.** Lo storyboard non richiede elementi tecnicamente nuovi
rispetto ai video già prodotti: stessa lavagna, stesso blocco
logo/nome/foto, stessa waveform, icone da libreria già in uso. L'unico
elemento nuovo rispetto ai video precedenti è il **blocco apertura
identità/libro** (regola aggiunta 2026-07-20, M2030-T060) — che secondo la
governance corrente è obbligatorio ma **non è ancora stato verificato come
già implementato in un render precedente**: nessuno degli 8 video pubblicati
risulta prodotto dopo l'introduzione di questa regola. **Questo è il primo
video del ciclo per cui il blocco apertura identità/libro deve essere
progettato ex novo in MesaRender** — segnalato come nota tecnica, non come
blocco: la fattibilità è alta (asset reali già disponibili) ma richiede
lavoro di layout non ancora testato su un render reale.

## 14. Discrepanza testuale da risolvere prima del render (nuova, rilevata in questo task)

Il template di apertura della governance video scrive **"Successo in Tre
Passi"** (in lettere), mentre l'intero sito e articolo madre usano
**"Successo in 3 Passi"** (in cifra) — confermato in `src/lib/posts.ts`,
`src/app/JsonLd.tsx`, `src/app/api/subscribe/route.ts`. Lo script di questo
DRAFT1 ha usato la forma numerica per coerenza con la fonte tecnica
corrente, ma questa discrepanza tra fonti interne all'agente stesso va
segnalata e risolta esplicitamente da Fabio prima di qualunque render, per
non violare il gate ortografico ("Successo in 3 Passi" è tra le parole
sensibili del gate di spelling).

---

## Verdetto QA di pre-produzione

**READY_FOR_FABIO_REVIEW.** Nessun blocco tecnico. Due decisioni aperte
(cautela cifra "3 ore" e discrepanza "3"/"Tre" nel testo apertura) da
risolvere con Fabio prima di passare a `SCRIPT_APPROVATO` in senso pieno e
poi a `ASSET_IN_PREPARAZIONE`.
