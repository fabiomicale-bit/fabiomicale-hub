# BASELINE — Analisi pre-refactoring
> Generato il 2026-05-06 · Branch: `refactor/3-passi-positioning`

---

## 1. Albero rotte `/src/app/`

```
/src/app/
├── page.tsx                                    # Homepage Hub
├── layout.tsx
├── globals.css
├── robots.ts
├── sitemap.ts
├── JsonLd.tsx
├── not-found.tsx
│
├── accademia/page.tsx
├── ai-per-professionisti/page.tsx
├── chi-sono/page.tsx
├── contatti/page.tsx
├── cookies/page.tsx
├── il-libro/page.tsx                           # ⚠️ da rinominare → /successo-in-3-passi
├── il-metodo/page.tsx
├── lavora-con-me/page.tsx + FaqAccordion.tsx
├── manutenzione/page.tsx
├── newsletter/page.tsx
├── note-legali/page.tsx
├── privacy/page.tsx
├── recensioni/page.tsx
├── reinvenzione-over-40/page.tsx
│
├── blog/
│   ├── page.tsx                                # lista articoli
│   ├── BlogContent.tsx
│   └── [slug]/
│       ├── page.tsx
│       ├── ReadingProgress.tsx
│       ├── ShareBar.tsx
│       ├── TableOfContents.tsx
│       └── headingUtils.ts
│
├── punto-zero/
│   ├── page.tsx                                # Verticale 1 (Passo 1)
│   ├── layout.tsx
│   └── aggiornamenti/page.tsx
│
├── impresa-liquida/
│   ├── page.tsx                                # Verticale 2 (Passo 2)
│   ├── layout.tsx
│   ├── aggiornamenti/[slug]/page.tsx
│   ├── aggiornamenti/page.tsx
│   ├── chi-siamo/page.tsx
│   └── contatti/page.tsx
│
├── fatturato-garantito/
│   ├── page.tsx                                # Verticale 3A (Passo 3A)
│   ├── layout.tsx
│   ├── aggiornamenti/[slug]/page.tsx
│   ├── aggiornamenti/page.tsx
│   ├── chi-siamo/page.tsx
│   ├── contatti/page.tsx
│   ├── risultati/page.tsx
│   └── servizio/page.tsx
│
├── agenzia-business/
│   ├── page.tsx                                # Verticale 3B (Passo 3B)
│   ├── layout.tsx
│   ├── analisi-strategiche/[slug]/page.tsx
│   ├── analisi-strategiche/page.tsx
│   └── contatti/page.tsx
│
└── api/
    ├── commento/route.ts
    ├── questionario/route.ts
    └── subscribe/route.ts
```

---

## 2. Componenti in `/src/components/`

### Componenti globali (37 file totali)

| File | Scope |
|------|-------|
| `AccademiaPreview.tsx` | Hub |
| `BackToTop.tsx` | Globale |
| `CapitoloForm.tsx` | Libro |
| `ChiSonoPreview.tsx` | Hub |
| `ComePossoAiutarti.tsx` | Hub |
| `CommentoForm.tsx` | Blog |
| `CookieBanner.tsx` | Globale |
| `EbookForm.tsx` | Libro |
| `FAQSection.tsx` | Multi-pagina |
| `Footer.tsx` | Globale |
| `Hero.tsx` | Hub (legacy) |
| `HeroEditorial.tsx` | Hub (editorial) |
| `HubContactForm.tsx` | Hub |
| `HubWaitlist.tsx` | Hub |
| `LibriShowcase.tsx` | Hub |
| `MetodoSection.tsx` | Hub |
| `MondiSection.tsx` | Hub |
| `Navbar.tsx` | Globale |
| `Newsletter.tsx` | Globale |
| `NumeriAuthority.tsx` | Hub |
| `PerChiE.tsx` | Hub |
| `ProtocolloModal.tsx` | Hub |
| `QuestionarioForm.tsx` | Hub |
| `VerticalSelector.tsx` | Hub |

### Sotto-cartelle componenti
| Cartella | Componenti |
|----------|------------|
| `agency/` | `ContactForm.tsx` |
| `footers/` | `FooterAgency.tsx`, `FooterImpresa.tsx`, `FooterMepa.tsx`, `FooterPunto.tsx` |
| `mepa/` | `BlogCard.tsx`, `Comparison.tsx`, `Hero.tsx`, `PricingCards.tsx`, `ServiceInfo.tsx` |
| `navbars/` | `NavbarAgency.tsx`, `NavbarImpresa.tsx`, `NavbarMepa.tsx`, `NavbarPunto.tsx` |

**Nota:** esistono già `HeroEditorial.tsx` e `Hero.tsx` — il nuovo `EditorialHero.tsx` andrà a unificarli.

---

## 3. Token CSS definiti in `globals.css`

### Token primari (usare questi in tutti i componenti)
```css
--hub-bg: #FAFAF8
--hub-bg-alt: #F2F0EC
--hub-bg-warm: #F7F3ED
--hub-ink: #1A1A1A
--hub-ink-muted: #6B6B6B
--hub-ink-light: #999999
--hub-gold: #C8A45A
--hub-gold-light: #E8D5A3
--hub-gold-dark: #A8873D
--hub-charcoal: #2A2A2A
--hub-charcoal-light: #3A3A3A
--hub-white: #FCFCFA
--hub-border: rgba(0,0,0,0.06)
--hub-border-hover: rgba(0,0,0,0.12)
```

### Alias verticali (tutti puntano ai token primari)
- `--pa-green`, `--pa-blue`, `--pa-bg`, `--pa-text` → alias MEPA
- `--gold`, `--bg`, `--text` → alias shorthand
- `--brand-blue`, `--brand-green` → alias agency
- `--pz-platinum-*`, `--pz-obsidian` → alias punto-zero
- `--color-hub-*`, `--color-platinum-*`, `--color-agency-*` → alias Tailwind v4

### ⚠️ Token mancante
Il prompt fa riferimento a `--hub-cream` ma questo token **non esiste** in `globals.css`. Il token equivalente per cream/avorio è `--hub-bg-warm: #F7F3ED`. Da chiarire con Fabio prima di usarlo.

---

## 4. Conteggio righe pagine principali

| Pagina | Righe | Note |
|--------|-------|------|
| `src/app/page.tsx` | 271 | Homepage Hub |
| `src/app/punto-zero/page.tsx` | 161 | Verticale 1 |
| `src/app/impresa-liquida/page.tsx` | 423 | Verticale 2 — il più lungo |
| `src/app/fatturato-garantito/page.tsx` | 142 | Verticale 3A |
| `src/app/agenzia-business/page.tsx` | 197 | Verticale 3B |
| **Totale** | **1.194** | |

**Target post-refactoring:** ~80 righe JSX ciascuna (composizione da componenti)

---

## 5. Blocchi JSX duplicati / hardcoded da correggere

### 5.1 Colori hardcoded da tokenizzare

File con valori hardcoded più critici:

| File | Occorrenze | Esempio |
|------|-----------|---------|
| `src/app/impresa-liquida/page.tsx` | 17+ | `#0A0A0A`, `#FDFDFD`, `#F9FAFB`, `#D4AF37` |
| `src/app/page.tsx` | 1 | `style={{ backgroundColor: "#111111" }}` |

I colori `#0A0A0A` / `#1A1A1A` → `var(--hub-ink)`, `#D4AF37` → `var(--hub-gold)`, `#FDFDFD`/`#FAFAF8` → `var(--hub-bg)`.

### 5.2 Pattern strutturali ripetuti tra verticali

Tutti e 4 i verticali ripetono indipendentemente:
- Un hero section con eyebrow + titolo + CTA
- Una sezione "3 passi" (inline, non come componente condiviso)
- Una sezione newsletter/contatti
- Footer verticale specifico

Nessun blocco è letteralmente identico a livello di codice (ogni verticale ha scritto il proprio), ma la **struttura semantica** è identica → candidata perfetta per i componenti `EditorialHero`, `MethodPillars`, `NewsletterCTA`.

### 5.3 Componenti `"use client"` (14 su 24 componenti globali)

Componenti con `"use client"` che potrebbero essere parzialmente Server Components:
- `FAQSection.tsx` — accordion interattivo (client giustificato)
- `Navbar.tsx` — menu mobile (client giustificato)
- `Newsletter.tsx` — form submit (client giustificato)
- `NumeriAuthority.tsx` — animazioni counter (da verificare)
- `ProtocolloModal.tsx` — modal (client giustificato)
- `BackToTop.tsx` — scroll listener (client giustificato)
- `CookieBanner.tsx` — localStorage (client giustificato)

---

## 6. Stato pre-esistente da gestire

- **9 file modificati non committati** su `main` prima della creazione del branch:
  `page.tsx`, `punto-zero/page.tsx`, `impresa-liquida/page.tsx`, `fatturato-garantito/page.tsx`, `agenzia-business/page.tsx`, `globals.css`, `layout.tsx`, `Footer.tsx`, `Navbar.tsx`
- **`/src/content/` non esiste** → da creare in Fase 1
- **`/il-libro/page.tsx` esiste** → da rinominare a `/successo-in-3-passi/` con redirect 301 (Fase 4)
- **Blog esiste** (`/src/app/blog/`) → da verificare tassonomia step (Fase 5)
- **Archivi passo-1/2/3 non esistono** nel blog → da creare (Fase 5)

---

*Fine BASELINE — Pronto per Fase 1 (Componenti Condivisi) su conferma.*
