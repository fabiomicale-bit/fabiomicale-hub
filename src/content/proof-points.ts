export const proofPoints = [
  // [TODO: KPI reali da Fabio. Placeholder qui sotto da sostituire con metriche legate al libro e al metodo.]
  {
    metric: "27",
    description: "Esercizi pratici per riprendere il controllo del tuo business",
    vertical: "passo-1",
  },
  {
    metric: "−30h/sett",
    description: "Riduzione dell'operatività personale media grazie ai sistemi",
    vertical: "passo-2",
  },
  {
    metric: "5 mesi",
    description: "Per ridefinire l'identità professionale e smettere di rincorrere il tempo",
    vertical: "passo-3",
  },
  {
    metric: "1 Metodo",
    description: "Che ha trasformato il modo di lavorare di decine di professionisti",
    vertical: "libro",
  },
] as const;

export type ProofPoint = (typeof proofPoints)[number];
