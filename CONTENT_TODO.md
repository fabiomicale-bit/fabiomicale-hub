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

*[da compilare dopo Fase 3 — diff 2/4]*

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
