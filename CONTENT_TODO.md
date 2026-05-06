# CONTENT_TODO — Testi, valutazioni e sezioni da completare
> Aggiornato durante refactoring `refactor/3-passi-positioning`
> Raggruppato per pagina. Tutti i `[TODO]` vanno risolti con Fabio prima del merge in `main`.

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

*[da compilare dopo Fase 3 — diff 3/4]*

---

## /src/app/agenzia-business/page.tsx

*[da compilare dopo Fase 3 — diff 4/4]*

---

## /src/app/successo-in-3-passi/page.tsx

*[da compilare dopo Fase 4]*

---

## /src/app/blog/

*[da compilare dopo Fase 5]*
