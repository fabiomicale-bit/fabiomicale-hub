# VIDEO_STORYBOARD_DRAFT1 — recuperare-tempo-delegare-ai-sistema

**Stato:** DRAFT1 — nessun render. Storyboard concettuale per MesaRender,
non frame renderizzati.
**Template di base:** video-lezione consolidato — lavagna centrale, foto
Fabio in alto a destra, blocco logo+"FABIO MICALE"+"autore & formatore"
fisso in alto a sinistra durante tutto il corpo, waveform sottile e
centrata. Intro e outro mantengono grafica ufficiale autonoma (file esterni,
non generati da questo storyboard).
**Regola lavagna-mai-vuota:** applicata a ogni scena — ogni cambio di scena
sotto ha una transizione continua indicata in colonna, mai un frame vuoto
>0,5s.
**Numero scene:** 21 (esclusa intro/outro di sigla, che restano asset
esterni già esistenti).

Legenda colonne: # scena · durata · testo/concetto · visuale principale ·
testo a schermo · transizione · asset necessario · fonte prevista ·
rischio artificialità · note MesaRender.

---

### INTRO (sigla ufficiale, asset esterno — non contata nelle 21 scene)

Sigla ufficiale della playlist "Dal Blog al Video", identica a quella usata
in B09/YTB-019/021/022/023. Nessuna modifica in questo task.

---

### SCENA 1 — 0:00-0:15

- **Testo/concetto:** hook — "attività che occupano tempo ma non richiedono
  il giudizio"
- **Visuale principale:** lavagna con titolo del video già visibile dal
  primo frame (regola lavagna-mai-vuota); in sovrimpressione, in basso,
  inizia a comporsi il blocco apertura identità (nome + ruolo)
- **Testo a schermo:** titolo video (breve, max 6-7 parole a schermo) +
  inizio blocco "FABIO MICALE — Scrittore e formatore"
- **Transizione:** dissolvenza in ingresso dalla sigla, mai un cut secco su
  lavagna vuota
- **Asset necessario:** nessuna foto, solo grafica lavagna + testo generato
  internamente
- **Fonte prevista:** interna (grafica MesaRender)
- **Rischio artificialità:** basso
- **Note MesaRender:** verificare che il blocco identità non si sovrapponga
  al titolo lavagna; safe margin rispettati

### SCENA 2 — 0:15-0:30

- **Testo/concetto:** "lo facciamo comunque, solo più in fretta"
- **Visuale principale:** lavagna con icona semplice (orologio/calendario
  pieno) coerente col concetto "velocità senza produttività"
- **Testo a schermo:** "Più veloce ≠ più produttivo"
- **Transizione:** continua dal frame precedente (elemento nuovo entra
  mentre il vecchio esce, mai buco)
- **Asset necessario:** icona vettoriale semplice (orologio o calendario)
- **Fonte prevista:** libreria icone interna già usata nei video precedenti
  (continuità visiva); nessuna icona generata con AI
- **Rischio artificialità:** basso
- **Note MesaRender:** completare il blocco apertura identità entro questa
  scena (deve concludersi entro i 10-15s totali, per gate obbligatorio)

### SCENA 3 — 0:30-0:50

- **Testo/concetto:** apertura identità completa — chi è Fabio, autorevolezza
  libro, pubblico, promessa
- **Visuale principale:** layout apertura a tre zone: sinistra asset
  `fabio-speech.jpg` (asset canonico esistente), centro nome/ruolo/promessa,
  destra cover libro canonica
- **Testo a schermo:** blocco identità completo — vedi testo esatto in
  `VIDEO_VISUAL_PLAN.md`, sezione apertura
- **Transizione:** il layout si assesta senza cut, elementi laterali entrano
  in scivolamento leggero
- **Asset necessario:** `public/fabio-speech.jpg` (o
  `public/fabio-micale-speaker-square.webp` come alternativa, da confermare
  in produzione); cover libro `public/successo-in-3-passi-cover-current-2026.png`
- **Fonte prevista:** asset canonici già presenti nel repository — NESSUN
  asset da generare o scaricare
- **Rischio artificialità:** nullo (foto reale + cover reale già in uso sul
  sito)
- **Note MesaRender:** verificare leggibilità mobile e desktop (screenshot
  richiesto prima del gate, per regola apertura identità/libro)

### SCENA 4 — 0:50-1:15

- **Testo/concetto:** payoff + chiusura sezione "chi sono" parlata
  ("metodo, over 40, AI pratica, libro come parte del metodo")
- **Visuale principale:** lavagna torna centrale, payoff resta visibile in
  basso per continuità
- **Testo a schermo:** "Meno caos. Più struttura. Più controllo."
- **Transizione:** dissolvenza morbida dal layout apertura alla lavagna
  centrale, payoff non scompare di scatto
- **Asset necessario:** nessuno oltre a quanto già presente
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** da qui in poi attivo il blocco fisso logo+nome in
  alto a sinistra e foto Fabio in alto a destra, per tutto il corpo

### SCENA 5 — 1:15-1:35

- **Testo/concetto:** "essere occupati" vs "lavorare bene"
- **Visuale principale:** lavagna divisa in due concetti contrapposti,
  semplici etichette, non due colonne dense
- **Testo a schermo:** "Essere occupati" / "Lavorare bene"
- **Transizione:** i due concetti compaiono uno dopo l'altro, mai insieme
  come blocco statico immobile — leggero movimento per dare vita
- **Asset necessario:** nessuno, solo tipografia
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** massimo un concetto principale per schermata — non
  sovrapporre le due etichette nello stesso istante di lettura

### SCENA 6 — 1:35-2:15

- **Testo/concetto:** "il problema è la selezione, non la velocità"
- **Visuale principale:** lavagna con singola frase guida, waveform visibile
  ma discreta
- **Testo a schermo:** "Non velocità. Selezione."
- **Transizione:** continua dalla scena precedente
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 7 — 2:15-3:00 (Categoria 1 — alto giudizio)

- **Testo/concetto:** definizione + esempio categoria 1
- **Visuale principale:** lavagna con etichetta "Categoria 1 — Alto
  giudizio" e tre micro-icone per gli esempi (cliente, decisione, proposta)
- **Testo a schermo:** "Categoria 1 — Alto giudizio" + parole chiave
  "esperienza · contesto · decisione"
- **Transizione:** entrata da sinistra, coerente con futura sequenza a tre
  categorie (stesso pattern per le 3, per riconoscibilità)
- **Asset necessario:** 3 icone semplici (conversazione, decisione,
  documento/proposta)
- **Fonte prevista:** libreria icone interna coerente con gli altri video
- **Rischio artificialità:** basso
- **Note MesaRender:** icone piccole e discrete, non protagoniste della
  scena — la lavagna resta il centro

### SCENA 8 — 3:00-3:00 (errore/decisione categoria 1, inclusa nella scena 7 se il tempo lo richiede)

- **Testo/concetto:** errore da evitare + decisione pratica categoria 1
- **Visuale principale:** stessa lavagna, aggiunta di una riga
  "Errore da evitare" e una riga "Decisione pratica"
- **Testo a schermo:** "Non delegare il giudizio. Solo l'esecuzione."
- **Transizione:** il testo precedente scorre in alto, il nuovo entra sotto
  (mai schermo vuoto)
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 9 — 3:00-3:30 (Categoria 2 — alto volume, basso giudizio)

- **Testo/concetto:** definizione categoria 2
- **Visuale principale:** lavagna "Categoria 2 — Alto volume, basso
  giudizio" con icone (ricerca, bozza, email)
- **Testo a schermo:** "Categoria 2 — Alto volume, basso giudizio"
- **Transizione:** stesso pattern di entrata delle categorie precedenti
- **Asset necessario:** 3 icone (lente/ricerca, documento/bozza, busta
  email)
- **Fonte prevista:** libreria icone interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 10 — 3:30-3:50 (esempio "prima bozza")

- **Testo/concetto:** esempio concreto — prima bozza di contenuti, tempo
  dimezzato
- **Visuale principale:** lavagna con schema minimale "angolo → AI genera
  struttura → io rivedo il giudizio"
- **Testo a schermo:** "Tempo di scrittura: dimezzato"
- **Transizione:** continua dallo schema precedente
- **Asset necessario:** nessuno (schema testuale/icone, non foto)
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** l'immagine/icona compare solo quando la voce nomina
  esattamente quel passaggio (sincronizzazione semantica) — non prima

### SCENA 11 — 3:50-4:00 (errore/decisione categoria 2)

- **Testo/concetto:** errore da evitare + decisione pratica categoria 2
- **Visuale principale:** stessa lavagna, riga aggiuntiva
- **Testo a schermo:** "Output AI = bozza, non verdetto"
- **Transizione:** scorrimento continuo
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 12 — 4:00-4:25 (Categoria 3 — da eliminare)

- **Testo/concetto:** definizione categoria 3 + esempi (meeting inutili,
  processi ridondanti)
- **Visuale principale:** lavagna "Categoria 3 — Da eliminare" con icona
  "cestino" o "stop", non decorativa ma funzionale al concetto
- **Testo a schermo:** "Categoria 3 — Da eliminare"
- **Transizione:** stesso pattern di entrata
- **Asset necessario:** 1 icona semplice (stop/cestino)
- **Fonte prevista:** libreria icone interna
- **Rischio artificialità:** basso
- **Note MesaRender:** attenzione a non rendere l'icona comica o eccessiva
  — tono adulto e sobrio

### SCENA 13 — 4:25-4:45 (errore/decisione categoria 3 + recap tre categorie)

- **Testo/concetto:** "non si automatizza, si elimina" + recap veloce delle
  tre categorie insieme
- **Visuale principale:** lavagna che mostra in piccolo le tre etichette
  già viste (Categoria 1/2/3) come riepilogo visivo, non tre schermate
  dense insieme
- **Testo a schermo:** "1. Alto giudizio  2. Alto volume, basso giudizio
  3. Da eliminare"
- **Transizione:** le tre etichette si compongono in sequenza rapida, non
  tutte insieme di scatto
- **Asset necessario:** nessuno (riuso delle etichette già create)
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** questo è il frame più denso del video — verificare
  che resti leggibile e non violi "massimo un concetto principale per
  schermata" (qui l'eccezione è il recap, va tenuto molto essenziale)

### SCENA 14 — 4:45-5:05 (Caso delle 3 ore — introduzione)

- **Testo/concetto:** introduzione al caso personale, cautela su
  generalità
- **Visuale principale:** lavagna con titolo sezione
- **Testo a schermo:** "Il mio caso: -3 ore in una settimana"
- **Transizione:** continua
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 15 — 5:05-5:35 (i tre numeri concreti)

- **Testo/concetto:** scrittura dimezzata / ricerca 30 min invece di 3h /
  email -2/3
- **Visuale principale:** lavagna con tre righe numeriche semplici, che
  compaiono una alla volta esattamente quando la voce le nomina
- **Testo a schermo:** "Scrittura: -50%" · "Ricerca: 3h → 30min" ·
  "Email: -2/3"
- **Transizione:** ogni riga entra e resta, mai sovrapposizione caotica
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** sincronizzazione semantica stretta — ogni numero
  deve apparire nel preciso istante in cui viene pronunciato, non prima

### SCENA 16 — 5:35-5:45 (caveat non universale)

- **Testo/concetto:** "il mio caso, non una promessa per tutti"
- **Visuale principale:** lavagna, tono visivo leggermente più sobrio (meno
  elementi) per accompagnare il caveat
- **Testo a schermo:** "Non una promessa. Un metodo da provare."
- **Transizione:** continua
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 17 — 5:45-6:15 (esercizio pratico — passi 1-2)

- **Testo/concetto:** elenca le attività, assegnale alle tre categorie
- **Visuale principale:** lavagna con numerazione "1." e "2." che compaiono
  in sequenza, stile lista scritta a mano/lavagna, non slide aziendale
- **Testo a schermo:** "1. Elenca  2. Categorizza"
- **Transizione:** continua
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 18 — 6:15-6:45 (esercizio pratico — passi 3-4 + statistica 40-50%)

- **Testo/concetto:** scegli una sola attività, misura il tempo recuperato,
  statistica 40-50% categoria 2
- **Visuale principale:** lavagna con "3. Scegline una" e "4. Misura", poi
  numero "40-50%" in evidenza come chiusura della sezione
- **Testo a schermo:** "3. Scegline una  4. Misura" → "40-50% è già
  delegabile"
- **Transizione:** continua, il numero finale entra con leggero rilievo
  (non un pop invasivo)
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 19 — 6:45-7:15 (chiusura)

- **Testo/concetto:** "l'AI non deve sostituire la testa, deve liberarla"
- **Visuale principale:** lavagna pulita, frase centrale unica, foto Fabio
  in alto a destra resta come unico elemento umano visibile
- **Testo a schermo:** "Liberare la testa. Non sostituirla."
- **Transizione:** dissolvenza lenta, tono di chiusura
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** nessuno

### SCENA 20 — 7:15-7:35 (CTA — libro + estratto)

- **Testo/concetto:** CTA verso l'estratto, collegata al libro
- **Visuale principale:** cover libro (stesso asset canonico
  dell'apertura) ricompare accanto alla CTA testuale
- **Testo a schermo:** "www.fabiomicale.com/estratto"
- **Transizione:** la cover entra in scivolamento, mai a schermo vuoto
- **Asset necessario:** `public/successo-in-3-passi-cover-current-2026.png`
  (stesso asset, riuso — non una nuova immagine)
- **Fonte prevista:** asset canonico già presente
- **Rischio artificialità:** nullo
- **Note MesaRender:** CTA visiva solo in questa sezione, coerente con la
  regola "CTA solo nella sezione coerente"

### SCENA 21 — 7:35-7:45 (chiusura CTA, transizione a outro)

- **Testo/concetto:** chiusura pulita prima della sigla outro
- **Visuale principale:** lavagna che si svuota gradualmente verso l'outro,
  mai un cut secco su nero
- **Testo a schermo:** nessuno aggiuntivo (CTA resta leggibile fino al
  cambio scena)
- **Transizione:** dissolvenza verso sigla outro ufficiale
- **Asset necessario:** nessuno
- **Fonte prevista:** interna
- **Rischio artificialità:** basso
- **Note MesaRender:** verificare durata minima di lettura della CTA prima
  della dissolvenza (almeno 3-4 secondi pieni)

---

### OUTRO (sigla ufficiale, asset esterno)

Sigla/outro ufficiale della playlist, identica a quella usata negli altri
video pubblicati. Nessuna modifica in questo task.

---

## Nota generale su rischio artificialità

Nessuna scena di questo storyboard richiede fotografie AI-generate, volti
artificiali o uffici finti. Tutti gli elementi visivi sono: lavagna/testo
generato internamente, icone semplici da libreria interna già in uso, e due
soli asset fotografici reali già esistenti nel repository (`fabio-speech.jpg`
e la cover libro corrente). Questo mantiene il rischio di artificialità
complessivo **basso/nullo** su tutto il video.
