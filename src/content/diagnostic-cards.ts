export const diagnosticCards = [
  {
    step: 1,
    eyebrow: "PASSO 1 — FERMA IL CAOS",
    problem: "Hai costruito tutto. Non ti riconosci più.",
    solution:
      "Il primo passo è ricostruire identità e direzione, non aggiungere progetti.",
    href: "/punto-zero",
    ctaLabel: "Entra in Punto Zero",
    vertical: "punto-zero",
  },
  {
    step: 2,
    eyebrow: "PASSO 2 — RIMETTI STRUTTURA",
    problem: "L'azienda gira, ma gira intorno a te.",
    solution:
      "Il secondo passo è progettare un sistema operativo che funziona senza la tua presenza costante.",
    href: "/impresa-liquida",
    ctaLabel: "Entra in Impresa Liquida",
    vertical: "impresa-liquida",
  },
  {
    step: "3A",
    eyebrow: "PASSO 3A — MOTORE FATTURATO",
    problem: "Vendi a privati, ma la PA ti ignora.",
    solution:
      "Costruire un canale stabile di partecipazione MEPA è il motore di continuità del fatturato.",
    href: "/fatturato-garantito",
    ctaLabel: "Entra in Fatturato Garantito",
    vertical: "fatturato-garantito",
  },
  {
    step: "3B",
    eyebrow: "PASSO 3B — MOTORE ACQUISIZIONE",
    problem: "Aspetti i clienti dal passaparola.",
    solution:
      "Un sistema AI di lead generation è il motore di continuità dell'acquisizione clienti.",
    href: "/agenzia-business",
    ctaLabel: "Entra in Agenzia Business",
    vertical: "agenzia-business",
  },
] as const;

export type DiagnosticCard = (typeof diagnosticCards)[number];
