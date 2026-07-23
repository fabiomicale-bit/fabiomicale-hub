# Mappa dipendenze dei sei agenti

## Classi

- `GIÀ_PRESENTE_NEL_REPO`: fonte tecnica già disponibile.
- `NECESSARIA_DA_TRASFERIRE`: contenuto minimo consolidato in
  `docs/agents/`.
- `NECESSARIA_DA_RISCRIVERE`: riferimento aggiornato verso fonte
  corrente o output runtime.
- `LEGACY_DA_RIMUOVERE`: dipendenza operativa non trasferita.
- `RIFERIMENTO_ESTERNO_VALIDO`: fonte canonica o workspace fornito dal
  task.
- `DUBBIO_DA_SEGNALARE`: fonte da verificare prima dell'uso.

## Consolidamento comune

| Sorgente legacy | Destinazione/decisione | Classe | Motivo |
|---|---|---|---|
| `CLAUDE_CODE_ORCHESTRATOR_CHARTER_FOR_FABIO.md` | `docs/agents/AGENT_GOVERNANCE.md` | `NECESSARIA_DA_TRASFERIRE` | Ruoli e limiti consolidati. |
| `AGENTS_ARCHITECTURE_1M2030.md` | `docs/agents/AGENTS_INDEX.md` | `NECESSARIA_DA_TRASFERIRE` | Conservati soltanto i sei agenti sito. |
| `FABIO_MICALE_PERSONAL_CONTEXT_AND_MASTER_GOAL.md` | Master Context in `FABIO_MICALE_AI_BRAIN_2030` | `NECESSARIA_DA_RISCRIVERE` | La vecchia memoria non è più canonica. |
| workflow, approval gates e state machine sotto `wiki/` | `docs/agents/AGENT_GOVERNANCE.md` | `NECESSARIA_DA_TRASFERIRE` | Gate correnti in un solo documento. |
| tracker articolo/video, weekly e newsletter sotto `wiki/sintesi/` | `docs/agents/CONTENT_PIPELINE_TRACKER.md` | `NECESSARIA_DA_TRASFERIRE` | Struttura nuova senza importare claim non verificati. |
| template sotto `lavori/` | `docs/agents/WORK_PACKET_TEMPLATES.md` | `NECESSARIA_DA_TRASFERIRE` | Schemi minimi, senza copiare 375 file. |
| `gippi_sync/`, `DECISION_LOG.md`, `ACTIVE_TASKS_AND_OPEN_LOOPS.md`, `NEXT_ACTIONS.md` | report FM2030 nella memoria canonica e tracker repo-locale | `NECESSARIA_DA_RISCRIVERE` | Il vecchio vault non è memoria operativa. |
| `asset/visual-stock/` | `public/blog/` + `public/blog/IMAGE_SOURCES.md` | `NECESSARIA_DA_RISCRIVERE` | Asset e licenze devono stare nel repository tecnico. |
| output in `lavori/*` | `docs/agents/work/<cycle-id>/` | `NECESSARIA_DA_RISCRIVERE` | Destinazione repo-locale creata solo all'uso. |
| `agente-memory-curator` | Gippi e report canonico | `LEGACY_DA_RIMUOVERE` | Agente non migrato per istruzione P000024. |
| `agente-piano-editoriale` | `agente-editoriale` | `LEGACY_DA_RIMUOVERE` | Alias deprecato. |
| copia GIPPI_SYNC in OMNIA26 | nessuna copia | `LEGACY_DA_RIMUOVERE` | OMNIA26 resta archivio. |
| `src/lib/posts.ts` | invariato | `GIÀ_PRESENTE_NEL_REPO` | Fonte corrente degli articoli. |
| `public/blog/` e `public/blog/IMAGE_SOURCES.md` | invariati | `GIÀ_PRESENTE_NEL_REPO` | Asset editoriali e tracciamento fonti. |
| `docs/MEASUREMENT_UTM_STANDARD.md` | invariato | `GIÀ_PRESENTE_NEL_REPO` | Standard UTM corrente. |
| memoria `FABIO_MICALE_AI_BRAIN_2030` | invariata | `RIFERIMENTO_ESTERNO_VALIDO` | Memoria generale canonica. |
| workspace video nominati da report legacy | solo se indicati nel task corrente | `DUBBIO_DA_SEGNALARE` | Nessun workspace video canonico è stato stabilito. |

## Per agente

| Agente | Trasferite/consolidate | Riscritte | Eliminate | Dubbie |
|---|---|---|---|---|
| Content Pipeline Orchestrator | governance, indice, tracker, template | sorgenti sito, output ciclo, memoria/report | memory curator, alias editoriale, GIPPI_SYNC legacy | stato storico video/newsletter/LinkedIn |
| Editoriale | governance, indice, tracker, template | pacchetto articolo, Master Context | alias piano editoriale, memory curator | precedenti bozze non importate |
| Funnel & Website QA | governance, indice, tracker, template | repository, immagini/licenze, autorizzazioni Git/deploy | warehouse immagini legacy, GIPPI_SYNC | stato live da verificare per task |
| LinkedIn Distribution | governance, tracker, template, UTM | output LinkedIn e gate scheduling | alias piano editoriale, memory curator, copia OMNIA26 | stato piattaforma/preview esterno |
| Newsletter | governance, tracker, template, UTM | output newsletter e gate invio | memory curator, GIPPI_SYNC | stato piattaforma email esterno |
| Video / MesaRender Production | governance, tracker, template | articolo madre e report canonico | memory curator, copia OMNIA26 | workspace/render/asset video finché non indicati |

## Dipendenze non trasferite

Non sono stati copiati vault, cronologie, report grezzi, cartelle
`lavori`, warehouse immagini legacy, output video, configurazioni
piattaforme, credenziali o file personali. Se un task futuro richiede
una di queste fonti, va indicata e verificata selettivamente.
