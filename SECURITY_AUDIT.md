# SECURITY_AUDIT.md
> Avviato durante refactoring `refactor/3-passi-positioning`.
> Raccoglie vulnerabilità e rischi da risolvere in Fase 7.

---

## [OPEN] Richieste a dominio esterno: transparenttextures.com

**Severità**: Media (privacy + CSP)

### Occorrenze trovate

| File | Stato | Note |
|---|---|---|
| `src/app/impresa-liquida/page.tsx` (LEGACY) | ✅ Rimosso con refactoring | Era presente in 3 punti: hero, Mappa Operativa, Algoritmo. Eliminato integralmente dalla nuova pagina. |
| `src/components/_archive/impresa-liquida-legacy.tsx` | ⚠️ Commentato nell'archivio | URL presenti come commento nei componenti `ImpresaLiquidaMappaLegacy` e `ImpresaLiquidaAlgoritmoLegacy`. Nessun rischio in produzione finché non vengono reimportati. |
| `src/app/impresa-liquida/chi-siamo/page.tsx` | 🔴 ATTIVO | Fuori scope del refactoring attuale. Da risolvere prima del merge. |
| `src/app/impresa-liquida/page.tsx.bak` | 🔴 FILE STRAY | File backup non tracciato da Git. Potenzialmente caricato da un import errato. Da eliminare. |

### Azione richiesta (Fase 7)
1. Eliminare `src/app/impresa-liquida/page.tsx.bak`.
2. Rimuovere o sostituire l'URL `transparenttextures.com` in `chi-siamo/page.tsx` con un SVG inline o un pattern CSS nativo.
3. Aggiungere CSP header in `next.config.ts` che blocchi `img-src` e `style-src` da domini esterni non esplicitamente allowlistati.

---

## [PENDING] Validazione form newsletter

**Severità**: Bassa (hardening)

`NewsletterCTA` implementa honeypot (`website_url`, `tabIndex={-1}`, `display:none`) ma non ha rate limiting né validazione Zod server-side sull'endpoint `/api/subscribe`.

### Azione richiesta (Fase 7)
- Aggiungere schema Zod in `/src/app/api/subscribe/route.ts`.
- Implementare rate limiting (es. con `@upstash/ratelimit` o `next-rate-limit`).

---

## [PENDING] Variabili d'ambiente

**Severità**: Media

`NEXT_PUBLIC_AMAZON_BOOK_URL` referenziata in `BookFeature.tsx` ma non verificata nel build. Se assente, il link Amazon non viene renderizzato silenziosamente.

### Azione richiesta (Fase 7)
- Aggiungere controllo in `next.config.ts` per variabili obbligatorie.
- Aggiornare `.env.example` con tutte le variabili richieste.
