export const methodPillars = {
  hub: {
    eyebrow: "IL METODO IN TRE PASSI",
    title: "Ferma il caos. Rimetti struttura. Mantieni il controllo.",
    pillars: [
      {
        number: "1",
        name: "Architettura Mentale",
        description:
          "Il primo passo è smettere, non iniziare. Riconoscere il rumore che guida le decisioni e ridurre la reattività. Senza questa pulizia, ogni nuova iniziativa si aggiunge al disordine invece di risolverlo.",
      },
      {
        number: "2",
        name: "Potenziamento Tecnico",
        description:
          "Quando il caos si è fermato, è il momento di costruire. Valori che guidano davvero. Micro-decisioni quotidiane. Un'architettura che regge senza dipendere dalla tua sola forza di volontà.",
      },
      {
        number: "3",
        name: "Eccellenza Sistemica",
        description:
          "Il sistema serve quando smette di servire chi l'ha costruito. Costruiamo protocolli che lavorano per te. Automazioni, flussi delegabili e strutture indipendenti dalla tua presenza continua.",
      },
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
