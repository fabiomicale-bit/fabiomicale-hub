// Pagine archivio dei tre Passi del Metodo (/blog/passo-N-...).
// Fonte unica per i link interni verso gli hub: articoli, home, il-metodo, libro, blog.
export const stepHubs = {
  "1": { href: "/blog/passo-1-ferma-il-caos", label: "Passo 1 — Ferma il Caos" },
  "2": { href: "/blog/passo-2-rimetti-struttura", label: "Passo 2 — Rimetti Struttura" },
  "3": { href: "/blog/passo-3-mantieni-il-controllo", label: "Passo 3 — Mantieni il Controllo" },
} as const;

export type StepHubKey = keyof typeof stepHubs;

// Gli articoli usano 1 | 2 | "3A" | "3B": 3A e 3B condividono l'hub del Passo 3.
export function getStepHub(step: 1 | 2 | "3A" | "3B") {
  return stepHubs[step === "3A" || step === "3B" ? "3" : String(step) as "1" | "2"];
}
