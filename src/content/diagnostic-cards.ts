export const diagnosticCards = [
  {
    step: 1,
    eyebrow: "PASSO 1 — FERMA IL CAOS",
    problem: "Lavori senza sosta ma sei fermo.",
    solution:
      "Il primo passo è l'architettura mentale. Devi ricostruire la tua direzione e fermare l'emorragia di tempo ed energie.",
    href: "/il-metodo#passo-1",
    ctaLabel: "Scopri il Primo Passo",
    vertical: "passo-1",
  },
  {
    step: 2,
    eyebrow: "PASSO 2 — RIMETTI STRUTTURA",
    problem: "L'attività gira, ma dipende totalmente da te.",
    solution:
      "Il secondo passo è il potenziamento tecnico. Inseriamo le giuste leve tecnologiche per scalare il tuo tempo, non le tue ore.",
    href: "/il-metodo#passo-2",
    ctaLabel: "Scopri il Secondo Passo",
    vertical: "passo-2",
  },
  {
    step: 3,
    eyebrow: "PASSO 3 — MANTIENI IL CONTROLLO",
    problem: "Il sistema crolla appena ti allontani.",
    solution:
      "Il terzo passo è l'eccellenza sistemica. Costruiamo automatismi e protocolli che garantiscono continuità e libertà a lungo termine.",
    href: "/il-metodo#passo-3",
    ctaLabel: "Scopri il Terzo Passo",
    vertical: "passo-3",
  },
] as const;

export type DiagnosticCard = (typeof diagnosticCards)[number];
