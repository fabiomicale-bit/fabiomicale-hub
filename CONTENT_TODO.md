# CONTENT_TODO — Testi, valutazioni e sezioni da completare
> Aggiornato durante refactoring `refactor/3-passi-positioning`
> Raggruppato per pagina. Tutti i `[TODO]` vanno risolti con Fabio prima del merge in `main`.

---

## Decisioni strategiche aperte

- `/il-metodo` espone framework 3-pilastri (Architettura Mentale / Potenziamento Tecnico / Eccellenza Sistemica) concorrente al Metodo Successo in 3 Passi. Decidere prima del merge PR finale: (a) deprecare con redirect 301 verso `/successo-in-3-passi`, (b) riscrivere come traduzione operativa dei 3 Passi, (c) mantenere come framework parallelo distinto. Decisione richiede input di Fabio.
- Asimmetria sub-rotte Impresa Liquida: `/impresa-liquida/chi-siamo`, `/contatti`, `/aggiornamenti` usano theme verde IL distinto dalla pagina principale `/impresa-liquida` (che ora segue tema hub). Decidere se uniformare le sub-rotte al tema hub o accettare il verde IL come scelta editoriale del verticale. Decisione richiede input di Fabio prima del merge PR finale.
- `MetodoSection.tsx` (componente attivo) e `/il-metodo` (rotta attiva) espongono un framework concorrente al Metodo Successo in 3 Passi. `MetodoSection` è usato da `/accademia/page.tsx`. Decisione richiesta da Fabio prima del merge PR finale: deprecare entrambi e migrare `/accademia` al framework 3 Passi, oppure mantenere il framework parallelo come scelta editoriale per Accademia. **NON archiviare `MetodoSection` — è attivo.**
- Landing tematiche `/ai-per-professionisti` e `/reinvenzione-over-40` indipendenti dal sistema 3 Passi. Verificare in fase di merge se valga la pena collegarle al framework (es. `/reinvenzione-over-40` → naturale ingresso al Passo 1) o lasciarle autonome.

---

## Debito tecnico (da risolvere in Fase 6)

| Componente | Problema | Azione |
|---|---|---|
| `MethodPillars.tsx` | `readonly` array castato con `as unknown as` per aggirare incompatibilità di tipo | Risolvere in Fase 6 con tipizzazione esplicita di `method-pillars.ts` (rimuovere `as const` sui sotto-array, oppure adattare la firma del componente per accettare `readonly`). |
| Mini-blog Agenzia Business | Articoli hardcoded in `agenzia-business/analisi-strategiche/[slug]/page.tsx`, fuori dal sistema `posts.ts` | Valutare migrazione a `posts.ts` con campo `verticalScope: 'agenzia-business'` opzionale, oppure mantenere separato come scelta editoriale. Decisione futura. |
| Architettura Navbar/Footer | Ogni route importa `<Navbar />` e `<Footer />` individualmente invece di delegare al layout globale (`src/app/layout.tsx`). Anti-pattern Next.js: il layout globale è il punto canonico per shell UI condivisa. La migrazione richiede: (1) aggiungere Navbar/Footer a `layout.tsx`, (2) rimuovere i 20+ import duplicati da ogni `page.tsx`. Farlo in un commit atomico dopo audit completo delle rotte. Priorità bassa — funzionale ma non idiomatico. |
| Migrazione hardcoded → token | 8 pagine dark-editorial (`recensioni`, `ai-per-professionisti`, `reinvenzione-over-40`, `not-found`, `privacy`, `note-legali`, `cookies`, `manutenzione`) e 6 pagine IL satellite usano valori hex hardcoded che hanno ora i token corrispondenti formalizzati (`--dark-bg`, `--dark-bg-alt`, `--dark-accent`, `--il-green`, `--il-green-dark`, `--il-ink`). Migrazione massiva da pianificare come task autonomo. Stima: ~250 sostituzioni totali. |
| Refactoring bottoni CSS | `.btn-primary`, `.btn-gold`, `.btn-outline`, `.btn-ghost`, `.btn-platinum`, `.btn-agency`, `.btn-pa` condividono ~13 proprietà base identiche (~40 righe duplicate). Candidato a estrazione in `.btn-base` + classi modificatrici. Refactoring puramente di rendering, richiede test visivo prima/dopo su tutte le pagine con bottoni. NON eseguito in Step 6.2.3 per disciplina di scope. Da pianificare come task dedicato post-merge. |

---

## /src/content/ — Testi da Fabio

### method-pillars.ts — Declinazioni verticali (tutti i passi 1/2/3)
I testi dei 3 passi per ogni verticale sono placeholder. Servono 4 set × 3 paragrafi:
- `punto-zero` pillars: versione personale del Passo 1, 2, 3
- `impresa-liquida` pillars: versione operativa del Passo 1, 2, 3
- `fatturato-garantito` pillars: versione PA/MEPA del Passo 1, 2, 3
- `agenzia-business` pillars: versione lead gen AI del Passo 1, 2, 3

### proof-points.ts — KPI reali
I 4 KPI sono placeholder. Sostituire con dati reali (metric, description, vertical).

### book.ts — ISBN e ASIN
- `isbn`: da inserire quando KDP è live
- `asin`: ASIN nuova edizione 2026

---

## /src/app/punto-zero/page.tsx

### Sezioni legacy archiviate
File: `/src/components/_archive/punto-zero-legacy.tsx`

| Sezione rimossa | Note |
|---|---|
| Hero inline personalizzato | Sostituito da `EditorialHero variant="vertical"` |
| "Lo Zero non è vuoto" (id="protocollo") | Sezione narrativa con visual cerchio SVG animato. Valutare reintroduzione come componente `PuntoZeroNarrativa` separato. |
| "Il Porto" + community card (id="percorso") | Testimonial + card community. Valutare reintroduzione con testi reali approvati da Fabio. |
| EbookForm "Il Libro" (id="manuale") | **Lead magnet rimosso.** `NewsletterCTA` copre la cattura email nella fase attuale. Se necessario un lead magnet specifico per Punto Zero, valutare come variante dedicata `NewsletterCTA variant="punto-zero-excerpt"`. L'`EbookForm` aveva anche un errore TS pre-esistente (`variant="editorial"` non valido) ora risolto. |

---

## /src/app/impresa-liquida/page.tsx

### Sezioni legacy archiviate
File: `/src/components/_archive/impresa-liquida-legacy.tsx`

| Sezione rimossa | Note |
|---|---|
| Hero glassmorphism (`ImpresaLiquidaHeroLegacy`) | Hero premium con griglia 2 colonne, visual glass interface animata con 4 card "Flusso". Sostituito da `EditorialHero variant="vertical"`. |
| Dark Strip ×5 (`ImpresaLiquidaDarkStripLegacy`) | 5 banner `bg-hub-charcoal` con testi sloganistici in uppercase gold. Eliminati: `EditorialHero` e `MethodReconnect` coprono il posizionamento narrativo. |
| "Sindrome dell'Imprenditore Intrappolato" (`ImpresaLiquidaSindromeLegacy`) | Sezione confronto Stato di Caos vs Sistema Liquido con due card. Valutare reintroduzione come componente `DiagnosticCompare` se serve evidenza visiva del problema/soluzione. |
| "Mappa Operativa" (`ImpresaLiquidaMappaLegacy`) | Sezione 2-colonne con lista punti + visual dark card. Contiene URL `transparenttextures.com` commentato. Vedi SECURITY_AUDIT.md. |
| "Algoritmo di Pilotaggio" (`ImpresaLiquidaAlgoritmoLegacy`) | Sezione parallela a Mappa Operativa — contenuto sovrapposto, rimossa come duplicato. Contiene URL `transparenttextures.com` commentato. |
| "I 4 Asset dell'Ingegneria Liquida" (`ImpresaLiquidaAssetLegacy`) | Griglia 4 card con emoji + descrizione asset operativi. `MethodPillars context="impresa-liquida"` copre questa funzione. |
| "I Servizi" (`ImpresaLiquidaServiziLegacy`) | Due card Fase 01 / Fase 02 con prezzi "Richiedi Analisi". Valutare reintroduzione come componente `ServicesGrid` dopo che Fabio definisce pricing e offer. |
| CTA Finale "Il Secondo Tempo" (`ImpresaLiquidaCTAFinaLeLegacy`) | Sezione `bg-hub-charcoal` con copy "Costruisci il tuo secondo tempo". `NewsletterCTA` copre la cattura nella fase attuale. |

---

## /src/app/fatturato-garantito/page.tsx

### Sezioni legacy archiviate
File: `/src/components/_archive/fatturato-garantito-legacy.tsx`

| Sezione rimossa | Note |
|---|---|
| Hero MEPA custom (`Hero` da `mepa/`) | **Non eliminato** da `src/components/mepa/Hero.tsx`. Componente mepa/* preservato (vedi nota sotto). |
| "Il paradosso del tempo perso" (sezione vuota) | Sezione `id="sistema"` con placeholder — solo titolo, nessun contenuto reale. Rimossa. |
| "Cos'è il MePA?" | Blocco 2-colonne con testo introduttivo. Valutare reintroduzione con contenuto completo approvato da Fabio. |
| "Success Stories" (case study + testimoniale) | **Testi placeholder — DA RIFORNIRE.** Case study "Da zero a 85k in 4 mesi" e testimoniale "Paolo R." non verificati. Restituire a Fabio per approvazione prima di qualsiasi reintroduzione. |
| CTA finale doppia (2 sezioni `bg-hub-charcoal`) | "Trasforma il MEPA nel Tuo Ufficio Gare Privato" + "Agiamo Insieme". `NewsletterCTA` copre la cattura nella fase attuale. |
| EbookForm (se presente in evoluzioni future) | Qualsiasi lead magnet specifico per Fatturato Garantito va gestito via `NewsletterCTA` (variante futura `variant="fatturato-garantito-excerpt"`), non via `EbookForm`. |

### Componenti mepa/* — nota di audit
I componenti `src/components/mepa/` (`Hero`, `ServiceInfo`, `Comparison`, `PricingCards`) **non vengono eliminati**. Non sono più usati da `fatturato-garantito/page.tsx` ma potrebbero essere importati da route figlie (`/fatturato-garantito/contatti`, etc.). **Azione in Fase 6 (audit orfani):** verificare con grep quali route li importano davvero; se nessuna, decidere se archiviarli o mantenerli per evoluzioni future.

---

## /src/app/agenzia-business/page.tsx

### Sezioni legacy archiviate
File: `/src/components/_archive/agenzia-business-legacy.tsx`

| Sezione rimossa | Note |
|---|---|
| Hero custom (`AgenziaBusinessHeroLegacy`) | Hero `bg-hub-bg-alt` con titolo + 2 CTA inline. Sostituito da `EditorialHero variant="vertical"`. |
| "Il Sistema Unico" (`AgenziaBusinessSistemaLegacy`) | Griglia 3 card: Traffico Strategico, Protocolli di Conversione, Automazioni AI. `MethodPillars context="agenzia-business"` copre concettualmente questa funzione. Se le 3 leve operative specifiche dell'agenzia devono restare visibili, valutare in fase successiva un componente dedicato `OperationalLevers` riusabile anche per altri verticali. |
| "Casi di Successo" (`AgenziaBusinessCasiSuccessoLegacy`) | **KPI placeholder non verificati: +148%, 320h, -58%.** Archiviati. Da rifornire con dati reali quando Fabio passa i numeri certificati. Stessa logica delle Success Stories di Fatturato Garantito. `ProofRibbon` copre la prova sociale nella fase attuale. |
| CTA finale standalone (`AgenziaBusinessCTALegacy`) | Sezione `bg-hub-bg` con copy "Inizia a ricevere Appuntamenti non problemi". `NewsletterCTA` copre la cattura nella fase attuale. |
| `theme="hub"` su FAQSection | Corretto a `theme="agency"` — fix coerente con gli altri verticali. |

---

## /src/app/successo-in-3-passi/page.tsx

### Rotta rinominata da `/il-libro/`
Redirect 301 in `next.config.ts`. Archivio: `/src/components/_archive/il-libro-legacy.tsx`.

| Sezione rimossa | Note |
|---|---|
| Hero con copertina (`/fabio libro.jpg`) | `EditorialHero variant="book"` + `BookFeature` coprono hero e copertina. La nuova cover asset è `/copertina-libro.png`. |
| Focus Cards (Protocollo / Dossier Reali / Operatività) | `MethodPillars context="book"` copre la struttura del libro. |
| I 3 Passi con citazioni | Citazioni nelle card archiviate — valutare se recuperarle in `book.ts` come campo `stepQuotes`. |
| "Per chi è" con 4 bullet + CTA email | Valutare reintroduzione come `BookAudience` component con testi validati da Fabio. |
| Edizione 2017 (sezione completa) | Sostituita dal blocco editoriale `BookEditionsHistory` inline. **Testo del blocco da rifinire con Fabio** se il placeholder attuale non è sufficiente. |
| CTA finale `bg-hub-charcoal` | `NewsletterCTA variant="book-excerpt"` copre la cattura. |

---

## /src/app/blog/

### Content gap — Passo 3

Nessun articolo mappa attualmente sul Passo 3 (step `"3A"` o `"3B"`). Quando il blog filtra per Passo 3, gli archivi `/blog/passo-3-mantieni-il-controllo/` saranno vuoti. Considerare:
1. Primo articolo MEPA-PA (step `"3A"`) — es. "Come funziona il portale acquisti PA" o case study fatturato garantito
2. Primo articolo lead gen AI (step `"3B"`) — es. "Come ho costruito il mio primo sistema di acquisizione clienti con AI"

Da pianificare con Fabio prima del lancio del filtro Passo 3 nel blog.
