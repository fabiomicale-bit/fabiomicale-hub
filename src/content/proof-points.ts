export const proofPoints = [
  // [TODO: KPI reali da Fabio. Placeholder qui sotto da sostituire.]
  {
    metric: "+47%",
    description: "Partecipazioni MEPA chiuse — Cliente Fatturato Garantito",
    vertical: "fatturato-garantito",
  },
  {
    metric: "−30h/sett",
    description: "Riduzione operatività personale — Cliente Impresa Liquida",
    vertical: "impresa-liquida",
  },
  {
    metric: "5 mesi",
    description: "Per ridefinire identità professionale — Cliente Punto Zero",
    vertical: "punto-zero",
  },
  {
    metric: "3×",
    description: "Lead qualificati al mese — Cliente Agenzia Business",
    vertical: "agenzia-business",
  },
] as const;

export type ProofPoint = (typeof proofPoints)[number];
