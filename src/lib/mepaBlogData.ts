export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mepa-2026-nuovi-obblighi",
    title: "MEPA 2026: Cosa cambia davvero per le imprese.",
    date: "12 Aprile 2026",
    category: "NORMATIVA",
    excerpt: "L'interoperabilità ANAC e il nuovo FVOE stanno cambiando radicalmente l'accesso agli appalti pubblici. Ecco come prepararsi.",
    content: `
      Il panorama degli appalti pubblici in Italia sta vivendo una trasformazione senza precedenti. Con l'avvicinarsi delle scadenze del 2026, il portale MEPA non è più solo una vetrina, ma un ecosistema complesso dominato da PCP (Piattaforma Certificazione Contratti) e FVOE (Fascicolo Virtuale Operatore Economico).
      
      Perché la tua azienda deve fare attenzione?
      La delega operativa non è più un optional. Gestire autonomamente queste procedure richiede ore di formazione e un monitoraggio costante degli errori del sistema.
    `,
    author: "Fabio Micale"
  },
  {
    slug: "vincere-appalti-delega",
    title: "Vincere Appalti senza Ufficio Gare: Il Modello Delegato.",
    date: "10 Aprile 2026",
    category: "STRATEGIA",
    excerpt: "Perché le PMI italiane non hanno bisogno di assumere personale per vincere appalti, ma di delegare la gestione operativa.",
    content: `
      Molte imprese pensano che per partecipare con successo ai bandi pubblici serva un dipendente dedicato. Ma il costo di una risorsa interna, sommato alla curva di apprendimento, spesso supera il beneficio.
      
      Il modello del Collaboratore Delegato permette di avere un esperto sênior senza i costi fissi di un ufficio gare tradizionale.
    `,
    author: "Fabio Micale"
  },
  {
    slug: "codice-appalti-novita",
    title: "Nuovo Codice Appalti: Tre opportunità per le micro-imprese.",
    date: "05 Aprile 2026",
    category: "OPPORTUNITÀ",
    excerpt: "Le novità del Codice che favoriscono le ditte individuali e le piccole società nell'accesso agli acquisti diretti.",
    content: `
      Il principio del risultato e la fiducia nella PA stanno aprendo porte che prima erano sbarrate. Gli acquisti diretti sotto soglia sono aumentati esponenzialmente.
      
      Ma attenzione: se non sei abilitato correttamente e non monitori il portale in tempo reale, queste opportunità scadono in meno di 48 ore.
    `,
    author: "Fabio Micale"
  },
  {
    slug: "iniziare-mepa-da-zero-2026",
    title: "Come iniziare sul MEPA da zero nel 2026: Guida Pratica.",
    date: "14 Aprile 2026",
    category: "GUIDA",
    excerpt: "Dalla firma digitale all'abilitazione ai bandi. Ecco il percorso esatto per chi non ha mai partecipato a una gara pubblica.",
    content: `
      Molte aziende credono che il MEPA sia una riserva esclusiva per colossi industriali o società con uffici legali smisurati. La realtà è che il portale è nato per le PMI, ma la complessità burocratica lo ha reso un labirinto.
      
      Per chi inizia oggi, i passi fondamentali sono:
      1. Firma Digitale e SPID attivo.
      2. Registrazione base su Acquisti in Rete PA.
      3. Abilitazione ai bandi specifici (Lavori, Servizi, Forniture).
      
      Il nostro modello di Delega ti permette di saltare tutta la curva di apprendimento tecnica e concentrarti subito sul primo ordine diretto.
    `,
    author: "Fabio Micale"
  }
];
