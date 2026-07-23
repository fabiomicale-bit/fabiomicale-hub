# Agenti del sito — indice canonico

Questo indice descrive i sei sub-agenti Claude Code attivi per
`fabiomicale.com`. I file eseguibili sono in `.claude/agents/`; il
repository `fabiomicale-hub` è la fonte tecnica corrente del sito.

Prima di usare un agente leggere:

1. `docs/agents/AGENT_GOVERNANCE.md`;
2. `docs/agents/AGENT_DEPENDENCY_MAP.md`;
3. `docs/agents/CONTENT_PIPELINE_TRACKER.md`, quando il task riguarda
   stato editoriale o distribuzione.

| Agente | File | Scopo | Dipendenze locali principali | Gate principali |
|---|---|---|---|---|
| Content Pipeline Orchestrator | `.claude/agents/agente-content-pipeline-orchestrator.md` | Coordina articolo → video → newsletter → LinkedIn e assegna il lavoro agli specialisti. | Governance, tracker, indice agenti, sorgenti tecniche del sito. | Non produce al posto degli specialisti; non pubblica; ogni stato non verificato resta `DA_VERIFICARE`. |
| Editoriale | `.claude/agents/agente-editoriale.md` | Produce articolo e pacchetto di approvazione. | Governance, tracker, template pacchetti. | Nessuna pubblicazione; articolo fermo a review Fabio. |
| Funnel & Website QA | `.claude/agents/agente-funnel-website-qa.md` | Prepara modifiche tecniche, build e QA del sito. | Repository, governance, tracker, `src/lib/posts.ts`, `public/blog/`, fonti immagini. | Articolo approvato prima della modifica; commit, push e deploy richiedono autorizzazioni esplicite. |
| LinkedIn Distribution | `.claude/agents/agente-linkedin-distribution.md` | Prepara distribuzione, calendario e pacchetto LinkedIn. | Governance, tracker, standard UTM, template pacchetti. | Nessuna programmazione o pubblicazione senza approvazione esplicita. |
| Newsletter | `.claude/agents/agente-newsletter.md` | Produce la newsletter “Un Passo Avanti” e relativo pacchetto. | Governance, tracker, standard UTM, template pacchetti. | Nessun invio, scheduling o modifica piattaforma senza approvazione esplicita. |
| Video / MesaRender Production | `.claude/agents/agente-video-mesarender-production.md` | Prepara e controlla i video “Dal Blog al Video” fino al pre-upload gate. | Governance, tracker, template pacchetti; workspace video soltanto se indicato nel task. | Nessun upload YouTube; nessun render finale o modifica sito senza incarico e gate specifico. |

## Confini del sistema

- `agente-memory-curator.md` non fa parte del repository: resta un
  riferimento legacy. La memoria generale è coordinata da Gippi nella
  root canonica.
- `agente-piano-editoriale.md` è un alias deprecato: usare
  `agente-editoriale`.
- Gli agenti OMNIA26, TradingLab26 e gli agenti stock dei vendor non
  appartengono a questo sistema.
- Gli output di lavorazione repo-locali usano
  `docs/agents/work/<cycle-id>/` e non sostituiscono il report ufficiale
  del protocollo nella memoria canonica.
