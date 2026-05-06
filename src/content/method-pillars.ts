export const methodPillars = {
  hub: {
    eyebrow: "IL METODO IN TRE PASSI",
    title: "Ferma il caos. Rimetti struttura. Mantieni il controllo.",
    pillars: [
      {
        number: "1",
        name: "Ferma il Caos",
        description:
          "Il primo passo è smettere, non iniziare. Riconoscere il rumore che guida le decisioni e ridurre la reattività. Senza questa pulizia, ogni nuova iniziativa si aggiunge al disordine invece di risolverlo.",
        verticalLabel: "Applicazione personale",
        verticalHref: "/punto-zero",
      },
      {
        number: "2",
        name: "Rimetti Struttura",
        description:
          "Quando il caos si è fermato, è il momento di costruire. Valori che guidano davvero. Micro-decisioni quotidiane. Architettura del lavoro e dell'impresa. Una struttura che regge senza dipendere dalla forza di volontà.",
        verticalLabel: "Applicazione operativa",
        verticalHref: "/impresa-liquida",
      },
      {
        number: "3",
        name: "Mantieni il Controllo nel Tempo",
        description:
          "Il sistema serve quando smette di servire chi l'ha costruito. Per durare, servono motori di continuità: ricavi prevedibili e acquisizione clienti che funzionano da sé.",
        subVerticals: [
          { label: "Motore fatturato (PA/MEPA)", href: "/fatturato-garantito" },
          { label: "Motore acquisizione (lead AI)", href: "/agenzia-business" },
        ],
      },
    ],
  },
  "punto-zero": {
    eyebrow: "PASSO 1 APPLICATO ALLA RICOSTRUZIONE PERSONALE",
    title: "I tre passi del Metodo, applicati al tuo punto zero",
    pillars: [
      { number: "1", name: "Ferma", description: "[TODO: testo da Fabio — versione personale del Passo 1]" },
      { number: "2", name: "Rimetti", description: "[TODO: testo da Fabio]" },
      { number: "3", name: "Mantieni", description: "[TODO: testo da Fabio]" },
    ],
  },
  "impresa-liquida": {
    eyebrow: "PASSO 2 APPLICATO ALLE OPERAZIONI",
    title: "I tre passi del Metodo, applicati alla tua impresa",
    pillars: [
      { number: "1", name: "Ferma", description: "[TODO: testo da Fabio]" },
      { number: "2", name: "Rimetti", description: "[TODO: testo da Fabio]" },
      { number: "3", name: "Mantieni", description: "[TODO: testo da Fabio]" },
    ],
  },
  "fatturato-garantito": {
    eyebrow: "PASSO 3A · MOTORE FATTURATO",
    title: "I tre passi del Metodo, applicati alla vendita verso la PA",
    pillars: [
      { number: "1", name: "Ferma", description: "[TODO: testo da Fabio]" },
      { number: "2", name: "Rimetti", description: "[TODO: testo da Fabio]" },
      { number: "3", name: "Mantieni", description: "[TODO: testo da Fabio]" },
    ],
  },
  "agenzia-business": {
    eyebrow: "PASSO 3B · MOTORE ACQUISIZIONE",
    title: "I tre passi del Metodo, applicati alla generazione lead",
    pillars: [
      { number: "1", name: "Ferma", description: "[TODO: testo da Fabio]" },
      { number: "2", name: "Rimetti", description: "[TODO: testo da Fabio]" },
      { number: "3", name: "Mantieni", description: "[TODO: testo da Fabio]" },
    ],
  },
  book: {
    eyebrow: "ANTEPRIMA DEL METODO",
    title: "Cosa trovi nei tre passi del libro",
    pillars: [
      {
        number: "1",
        name: "Ferma il Caos",
        description: "Capitoli 4–5. Esercizi 4–7. Imparare a smettere prima di iniziare.",
      },
      {
        number: "2",
        name: "Rimetti Struttura",
        description: "Capitoli 6–8. Esercizi 8–14. Costruire valori, decisioni, architettura.",
      },
      {
        number: "3",
        name: "Mantieni il Controllo nel Tempo",
        description:
          "Capitoli 9–11. Esercizi 15–17. Ricadute come informazione, continuità come metodo.",
      },
    ],
  },
} as const;

export type MethodContext = keyof typeof methodPillars;
