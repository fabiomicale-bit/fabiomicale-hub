# VIDEO_VISUAL_PLAN — recuperare-tempo-delegare-ai-sistema

**Stato:** piano visuale, nessuna foto scelta in via definitiva, nessun
download eseguito in questo task.

## 1. Stile generale

Sobrio, leggibile, coerente col brand Fabio Micale: lavagna centrale come
elemento didattico, molto spazio, gerarchia chiara, nessuna sovrapposizione
pesante, niente effetti o animazioni invadenti. Continuità totale con il
template già approvato nei video B09/YTB-019/021/022/023.

## 2. Regole vincolanti per questo video

- Nessuna immagine generata con AI.
- Nessun volto artificiale.
- Nessun ufficio palesemente finto.
- Fotografie stock reali solo se e quando servono (per questo script, il
  bisogno reale è minimo — vedi §3).
- Grafici/schemi semplici creati internamente da MesaRender (lavagna,
  etichette, icone), non fotografie.
- Nessun elemento decorativo senza funzione.
- Massimo un concetto principale per schermata (eccezione dichiarata: scena
  13, recap delle tre categorie, vedi storyboard).
- Continuità con i video già approvati: stessa lavagna, stessa posizione
  logo/foto, stessa waveform.

## 3. Asset fotografici reali necessari (nessuno nuovo da cercare in stock)

A differenza di altri video "Dal Blog al Video" con più fotografie stock,
questo script si appoggia quasi interamente su lavagna/testo/icone interne.
Gli unici due asset fotografici richiesti sono **già presenti nel
repository** e **non richiedono ricerca stock**:

| Elemento | Asset canonico | Percorso | Uso previsto | Note |
|---|---|---|---|---|
| Ritratto Fabio (apertura, sinistra) | `fabio-speech.jpg` | `public/fabio-speech.jpg` | Scena 3 (apertura identità) | Alternativa da valutare in produzione: `public/fabio-micale-speaker-square.webp` (formato quadrato, forse più adatto al riquadro in alto a destra usato nel corpo) |
| Cover libro | `successo-in-3-passi-cover-current-2026` | `public/successo-in-3-passi-cover-current-2026.png` (o `.jpg`) | Scena 3 (apertura) e Scena 20 (CTA finale) | Asset Lulu corrente, già usato sul sito (FM2030-P000017) — vietato ricostruirlo o generarlo con AI |
| Foto Fabio in alto a destra (corpo, permanente) | da confermare in produzione tra gli asset già usati negli ultimi video approvati | da verificare nel workspace tecnico video al momento del render | Tutto il corpo (scene 4-19) | Non scelto in questa task: la regola richiede di riusare "la foto usata negli ultimi video giudicati corretti", verifica da fare nel workspace tecnico, non nel repository sito |

Fonte e licenza di questi asset restano quelle già registrate quando sono
stati introdotti sul sito/nei video precedenti; nessuna nuova licenza da
acquisire per questo video.

## 4. Eventuali fotografie stock aggiuntive (facoltative, solo se in produzione si decide di arricchire alcune scene)

Nessuna fotografia stock è strutturalmente necessaria per questo script
(a differenza di video con più scene "di vita reale"). Se in produzione si
decidesse di aggiungere una singola immagine di contesto (per esempio nella
scena 1 o 2, per rinforzare visivamente "settimana piena"), ecco un brief
pronto — da NON scaricare in questa task:

**Brief foto stock opzionale #1 — "scrivania/agenda piena"**
- Query di ricerca: "busy desk calendar notebook overwhelmed work" /
  "scrivania agenda fitta lavoro"
- Piattaforma consigliata: Unsplash o Pexels
- Soggetto reale richiesto: scrivania reale con agenda/calendario visibile,
  nessuna persona in posa, nessun ufficio da stock fotografico patinato
- Orientamento: orizzontale 16:9
- Uso previsto: eventuale sfondo sfumato dietro la lavagna in scena 1-2,
  mai a piena opacità
- Criteri di accettazione: nessun logo di terzi visibile, nessun testo
  leggibile su schermi/agende nella foto, tono neutro non "corporate stock"
  patinato
- Nota: fonte e licenza vanno registrate in `public/blog/IMAGE_SOURCES.md`
  (o equivalente del workspace video) **in fase produttiva**, non ora.

Questa foto è opzionale e non richiesta dallo storyboard attuale, che
regge già senza fotografie aggiuntive.

## 5. Icone/grafica interna necessaria

Elenco icone semplici richieste (libreria icone già in uso nei video
precedenti, stile lineare/sobrio, nessuna icona 3D o cartoon):

- orologio o calendario pieno (scena 2)
- conversazione/dialogo, documento decisione, proposta (scena 7 — categoria 1)
- lente/ricerca, documento/bozza, busta email (scena 9 — categoria 2)
- stop/cestino, sobrio e non comico (scena 12 — categoria 3)

Nessuna di queste richiede generazione AI: sono elementi grafici vettoriali
semplici, coerenti con lo stile lavagna già usato.

## 6. Testo esatto del blocco apertura (scena 3)

```
FABIO MICALE
Scrittore e formatore
Autore di "Successo in 3 Passi" — Edizione 2026

Aiuto manager e professionisti over 40
a riorganizzare lavoro, priorità e decisioni
con metodo e AI pratica.

Payoff: Meno caos. Più struttura. Più controllo.
```

Nota: il numero "3" è scritto in cifra per coerenza con la fonte tecnica
del sito (`src/lib/posts.ts`, `JsonLd.tsx`); la versione testuale della
regola di governance video riporta "Tre" in lettere — discrepanza segnalata
a Fabio in `VIDEO_PREPRODUCTION_QA.md` e nel packet di approvazione.

## 7. Continuità con i video precedenti

Nessuna rottura di stile prevista: stessa lavagna, stessa posizione blocco
logo+nome in alto a sinistra, stessa foto Fabio in alto a destra, stessa
waveform sottile e centrata. Nessuna nuova palette colori proposta in questo
task.
