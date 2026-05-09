import { NextRequest, NextResponse } from "next/server";

const EBOOK_URL =
  "https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=sharing";

const CAPITOLO1_URL =
  "https://drive.google.com/file/d/1_68po3qufRO90yVx1tbFORMRzs3UUip9/view?usp=sharing";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email: string | undefined = body?.email;
  const nome: string | undefined = body?.nome;
  const cognome: string | undefined = body?.cognome;
  const telefono: string | undefined = body?.telefono;
  const sitoweb: string | undefined = body?.sitoweb;
  const utmSource: string = body?.utm_source ?? "website";
  const utmMedium: string = body?.utm_medium ?? "organic";
  const notify: string | undefined = body?.notify; // "capitolo1" triggers Resend notification

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, error: "Email non valida." },
      { status: 400 }
    );
  }

  // --- 1. Forward to Dashboard Backend ---
  const BACKEND_URL = process.env.BACKEND_API_URL;
  const DASHBOARD_KEY = process.env.DASHBOARD_API_KEY;

  if (BACKEND_URL && DASHBOARD_KEY) {
    try {
      await fetch(`${BACKEND_URL}/leads`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-API-Key": DASHBOARD_KEY
        },
        body: JSON.stringify({
          email,
          first_name: nome,
          last_name: cognome,
          phone: telefono,
          website: sitoweb,
          source: "hub_form",
          tag: utmSource === "risorse_ebook" || notify === "capitolo1" ? "consulenza" : "newsletter",
          notes: `Lead da Hub Form: ${utmSource}`
        }),
      });
    } catch (err) {
      console.error("Failed to forward lead to dashboard:", err);
    }
  } else {
    console.warn("Backend forwarding skipped: BACKEND_API_URL or DASHBOARD_API_KEY missing.");
  }

  // --- 2. Subscribe to Beehiiv ---
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (apiKey && publicationId) {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: utmSource,
          utm_medium: utmMedium,
          tags: utmSource === "risorse_ebook" || notify === "capitolo1" ? ["puntozero"] : ["newsletter"],
        }),
      }
    );

    if (!beehiivRes.ok && beehiivRes.status !== 409) {
      console.error("Beehiiv error:", beehiivRes.status);
    }
  }

  // --- 3. Delivery via Resend ---
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const isBookExcerpt = body?.variant === "book-excerpt";
  const isCapitolo1 = utmSource === "capitolo1" || notify === "capitolo1";
  
  let subject = "Accesso Autorizzato: Il tuo Manuale PuntoZero";
  let resourceUrl = EBOOK_URL;
  let htmlContent = `
    <h2 style="color: #000; font-style: italic;">Benvenuto, ${nome || "Navigante"}.</h2>
    <p>Hai appena attraversato la Soglia. Ecco il link per accedere alla risorsa:</p>
  `;

  if (isBookExcerpt) {
    subject = "Il tuo estratto di Successo in 3 Passi";
    resourceUrl = "https://www.fabiomicale.com/downloads/estratto-successo-in-3-passi-2026.pdf";
    htmlContent = `
      <p>Ciao ${nome || "Amico"},</p>
      <p>ecco l’estratto gratuito di “Successo in 3 Passi — Edizione 2026”.</p>
      <p>Puoi leggerlo con calma. Non è un riassunto promozionale: è un primo ingresso reale nel Metodo.</p>
      <p>Il punto di partenza è semplice:<br/>
      non serve aggiungere altra confusione.<br/>
      Serve fermare il caos, rimettere struttura e mantenere il controllo.</p>
      <p>Nei prossimi messaggi riceverai contenuti pratici collegati al Metodo Successo in 3 Passi e alla newsletter “Un Passo Avanti”.</p>
    `;
  } else if (isCapitolo1) {
    subject = "Ecco il primo capitolo: Il Disallineamento";
    resourceUrl = CAPITOLO1_URL;
  }

  if (RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Fabio Micale <info@fabiomicale.com>",
          to: email,
          subject: subject,
          html: `
            <div style="font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #0A0A0A; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 24px; font-family: serif;">Successo in 3 Passi</h1>
              <div style="font-size: 16px;">
                ${htmlContent}
              </div>
              <div style="margin: 40px 0; text-align: left;">
                <a href="${resourceUrl}" style="background-color: #C8A45A; color: #fff; padding: 16px 32px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; border-radius: 4px; display: inline-block;">Scarica l'estratto</a>
              </div>
              <hr style="border: none; border-top: 1px solid #EEE; margin: 40px 0;" />
              <p style="font-size: 13px; color: #666;">
                A presto,<br/>
                <strong>Fabio Micale</strong><br/>
                <a href="https://www.fabiomicale.com" style="color: #C8A45A; text-decoration: none;">fabiomicale.com</a>
              </p>
            </div>
          `,
        }),
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  return NextResponse.json({ success: true, ebookUrl: resourceUrl });
}
