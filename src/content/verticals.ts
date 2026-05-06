export const verticals = {
  "punto-zero": {
    eyebrow: "PASSO 1 · APPLICAZIONE PERSONALE",
    heroTitle: "Ricostruire identità e direzione",
    heroAccent: "dopo i 40.",
    heroSubtitle:
      "Punto Zero è il protocollo per chi ha costruito tutto e non si riconosce più. Il primo passo non è ricominciare: è smettere di reagire e capire dove sei davvero.",
    primaryCTA: { label: "Inizia la diagnosi", href: "/contatti?ctx=punto-zero" },
    methodReconnectDomain: "alla ricostruzione personale Over 40",
    faqTopic: "punto-zero",
  },
  "impresa-liquida": {
    eyebrow: "PASSO 2 · APPLICAZIONE OPERATIVA",
    heroTitle: "Un'impresa che funziona",
    heroAccent: "anche senza di te.",
    heroSubtitle:
      "Impresa Liquida è il protocollo di automazione e ingegneria operativa per costruire un sistema che regge nel tempo. Rimettere struttura significa progettare i processi, non comprimerli a mano.",
    primaryCTA: { label: "Mappa la tua impresa", href: "/contatti?ctx=impresa-liquida" },
    methodReconnectDomain: "all'architettura operativa dell'impresa",
    faqTopic: "impresa-liquida",
  },
  "fatturato-garantito": {
    eyebrow: "PASSO 3A · MOTORE FATTURATO",
    heroTitle: "Vendere alla Pubblica Amministrazione",
    heroAccent: "senza improvvisazione.",
    heroSubtitle:
      "Fatturato Garantito è il protocollo MEPA Elite per professionisti che vogliono accedere al mercato pubblico con un sistema di partecipazione, non con la fortuna.",
    primaryCTA: { label: "Diagnosi gratuita MEPA", href: "/contatti?ctx=fatturato-garantito" },
    methodReconnectDomain: "alla costruzione di ricavi prevedibili dalla PA",
    faqTopic: "fatturato-garantito",
  },
  "agenzia-business": {
    eyebrow: "PASSO 3B · MOTORE ACQUISIZIONE",
    heroTitle: "Acquisire clienti",
    heroAccent: "con sistemi AI, non con la fortuna.",
    heroSubtitle:
      "Agenzia Business è il motore di lead generation basato su intelligenza artificiale per professionisti e imprenditori che non vogliono più dipendere dal passaparola.",
    primaryCTA: { label: "Costruisci il tuo motore", href: "/contatti?ctx=agenzia-business" },
    methodReconnectDomain: "alla generazione continua di clienti privati",
    faqTopic: "agenzia-business",
  },
} as const;

export type VerticalKey = keyof typeof verticals;
