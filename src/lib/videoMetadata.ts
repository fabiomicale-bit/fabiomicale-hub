type VideoMetadata = {
  name: string;
  uploadDate: string;
  duration: string;
};

const VIDEO_METADATA: Record<string, VideoMetadata> = {
  HWKiXJH6lCM: {
    name: "Il sistema minimo per i giorni storti: come mantenere il controllo quando l'energia è bassa",
    uploadDate: "2026-07-17T08:06:06-07:00",
    duration: "PT4M37S",
  },
  yg4O24YaoVQ: {
    name: "Il piano di continuità minima: come restare nel progetto anche nelle settimane no",
    uploadDate: "2026-07-20T04:23:01-07:00",
    duration: "PT6M12S",
  },
  kKWakV8c94Q: {
    name: "La ricaduta non è un fallimento | Come tornare in carreggiata senza ricominciare da zero",
    uploadDate: "2026-07-05T03:33:26-07:00",
    duration: "PT4M41S",
  },
  ZgZf4VnhhHE: {
    name: "Over 40 e AI: perché la tua esperienza vale più di un algoritmo",
    uploadDate: "2026-06-10T07:40:48-07:00",
    duration: "PT5M53S",
  },
  l26we6XGF5g: {
    name: "Lavori tutto il giorno, ma non avanzi: il primo passo per fermare il caos",
    uploadDate: "2026-06-10T07:40:07-07:00",
    duration: "PT5M26S",
  },
  "cGGXDRJ-Q94": {
    name: "Mantieni il Controllo: 3 Domande da Fare Ogni Venerdì | Dal Blog al Video #3",
    uploadDate: "2026-06-10T07:40:41-07:00",
    duration: "PT5M10S",
  },
  sdUsFPwEpn0: {
    name: "Come ho recuperato 3 ore a settimana delegando all'AI",
    uploadDate: "2026-08-02T03:46:50-07:00",
    duration: "PT7M54S",
  },
  wW4gJhcpTYo: {
    name: "Se tutto passa da te, non è struttura: è dipendenza",
    uploadDate: "2026-06-10T07:40:30-07:00",
    duration: "PT5M51S",
  },
  Yl20TDaoXI8: {
    name: "Reinventarsi dopo i 40: la guida che avrei voluto avere | Fabio Micale",
    uploadDate: "2026-07-15T09:09:18-07:00",
    duration: "PT4M37S",
  },
};

const YOUTUBE_EMBED_PATTERN = /youtube-nocookie\.com\/embed\/([A-Za-z0-9_-]{11})/;

export function getVideoMetadata(contentHtml: string) {
  const youtubeId = contentHtml.match(YOUTUBE_EMBED_PATTERN)?.[1];
  if (!youtubeId) return null;

  const metadata = VIDEO_METADATA[youtubeId];
  if (!metadata) {
    throw new Error(`Missing VideoObject metadata for embedded YouTube video ${youtubeId}`);
  }

  return {
    ...metadata,
    youtubeId,
    thumbnailUrl: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
  };
}
