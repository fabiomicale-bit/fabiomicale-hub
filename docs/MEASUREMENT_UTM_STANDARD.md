# Standard UTM — fabiomicale.com

Standard unico per costruire link tracciabili verso il sito da LinkedIn, dalla newsletter "Un Passo Avanti" e da YouTube. Usare sempre questi parametri, in questo formato, per ogni link pubblicato che porta traffico verso il sito.

## Regole generali

- Tutti i valori in **minuscolo**.
- Parole separate da **trattino** (`-`), mai underscore, mai spazi.
- Nessun accento, nessun carattere speciale.
- `utm_campaign` identifica il contenuto/iniziativa, non la data esatta al giorno — usare il mese quando serve distinguere nel tempo (es. `lancio-libro-2026-07`), non il giorno.
- `utm_content` si usa solo quando su una stessa pagina/email esistono **più link verso la stessa destinazione** e serve distinguerli (es. due CTA diverse nello stesso post LinkedIn, o link diversi nello stesso numero di newsletter).
- Non tracciare i link interni al sito (menu, articoli correlati, footer) — gli UTM servono solo per il traffico che arriva **da fuori**.
- Il valore di `utm_source` e `utm_medium` per ciascun canale è **fisso** (vedi tabella): non cambiarlo di volta in volta, altrimenti i report si frammentano.

## Tabella canali

| Canale | `utm_source` | `utm_medium` |
|---|---|---|
| LinkedIn (post organico) | `linkedin` | `social` |
| Newsletter "Un Passo Avanti" | `beehiiv` | `email` |
| YouTube (descrizione video) | `youtube` | `video` |

## `utm_campaign`: come costruirlo

Formato: `<argomento-in-2-4-parole>` oppure, se ricorrente nel tempo, `<argomento>-<anno>-<mese>`.

Esempi validi: `pillar-reinvenzione`, `estratto-gratuito`, `cluster-ai-over40`, `newsletter-2026-07`.

## Esempi completi pronti all'uso

**LinkedIn** — post che promuove la pillar sulla reinvenzione, con link a `/blog/reinventarsi-dopo-i-40-metodo`:
```
https://www.fabiomicale.com/blog/reinventarsi-dopo-i-40-metodo?utm_source=linkedin&utm_medium=social&utm_campaign=pillar-reinvenzione
```

**Newsletter "Un Passo Avanti"** — link nel numero settimanale che porta a `/estratto`, con due CTA diverse nella stessa email (una nel corpo, una nel P.S.):
```
https://www.fabiomicale.com/estratto?utm_source=beehiiv&utm_medium=email&utm_campaign=newsletter-2026-07&utm_content=corpo-email
https://www.fabiomicale.com/estratto?utm_source=beehiiv&utm_medium=email&utm_campaign=newsletter-2026-07&utm_content=ps-email
```

**YouTube** — link nella descrizione di un video collegato a un articolo del blog:
```
https://www.fabiomicale.com/blog/mantieni-il-controllo-revisione-settimanale?utm_source=youtube&utm_medium=video&utm_campaign=video-revisione-settimanale
```

## Cosa succede a questi parametri sul sito

- GA4 li legge automaticamente e li usa per l'attribuzione di sessione (canale, sorgente, campagna) — non serve altro codice per questo.
- Il sito salva `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` (se presenti) in `sessionStorage` alla prima pagina vista. Gli eventi CTA continuano a usare questi dati per l'attribuzione. Gli eventi di conversione form `lead_estratto_submit` e `newsletter_submit`, invece, inviano soltanto un campo `source` categorico (`linkedin`, `beehiiv`, `youtube`, `organic`, `direct`, `other`): i valori UTM grezzi controllabili dall'URL non vengono copiati nelle conversioni, così eventuali valori impropri o identificativi non possono raggiungere GA4.
- Il campo `utm_medium` viene inoltre inoltrato alla singola richiesta di iscrizione verso Beehiiv, così anche il CRM newsletter riceve il canale reale invece del valore predefinito `organic`.
