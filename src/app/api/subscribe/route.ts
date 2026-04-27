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
  try {
    await fetch("http://localhost:8000/api/v1/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        first_name: nome,
        last_name: cognome,
        phone: telefono,
        website: sitoweb,
        source: "form",
        tag: utmSource === "risorse_ebook" || notify === "capitolo1" ? "consulenza" : "newsletter",
        notes: `Lead da Hub Form: ${utmSource}`
      }),
    });
  } catch (err) {
    console.error("Failed to forward lead to dashboard:", err);
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
  const isCapitolo1 = utmSource === "capitolo1" || notify === "capitolo1";
  const resourceUrl = isCapitolo1 ? CAPITOLO1_URL : EBOOK_URL;

  if (RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Fabio Micale <info@fabiomicale-hub.com>",
          to: email,
          subject: isCapitolo1 
            ? "Ecco il primo capitolo: Il Disallineamento" 
            : "Accesso Autorizzato: Il tuo Manuale PuntoZero",
          html: `
            <div style="font-family: serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #000; font-style: italic;">Benvenuto, ${nome || "Navigante"}.</h2>
              <p>Hai appena attraversato la Soglia. Ecco il link per accedere alla risorsa:</p>
              <div style="margin: 30px 0; text-align: center;">
                <a href="${resourceUrl}" style="background-color: #000; color: #fff; padding: 15px 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">Accedi ora</a>
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
              <p style="font-size: 12px; color: #999;">Fabio Micale — Area Riservata</p>
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
