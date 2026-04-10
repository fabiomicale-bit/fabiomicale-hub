import { NextRequest, NextResponse } from "next/server";

const EBOOK_URL =
  "https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=sharing";

const CAPITOLO1_URL =
  "https://drive.google.com/file/d/1_68po3qufRO90yVx1tbFORMRzs3UUip9/view?usp=sharing";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email: string | undefined = body?.email;
  const nome: string | undefined = body?.nome;
  const utmSource: string = body?.utm_source ?? "website";
  const utmMedium: string = body?.utm_medium ?? "organic";
  const notify: string | undefined = body?.notify; // "capitolo1" triggers Resend notification

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, error: "Email non valida." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error("Beehiiv env vars missing");
    return NextResponse.json(
      { success: false, error: "Configurazione server mancante." },
      { status: 500 }
    );
  }

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
        send_welcome_email: true,
        utm_source: utmSource,
        utm_medium: utmMedium,
      }),
    }
  );

  // 409 = already subscribed → treat as success
  if (!beehiivRes.ok && beehiivRes.status !== 409) {
    const text = await beehiivRes.text();
    console.error("Beehiiv error:", beehiivRes.status, text);
    return NextResponse.json(
      { success: false, error: "Errore durante l'iscrizione. Riprova tra poco." },
      { status: 502 }
    );
  }

  const isCapitolo1 = utmSource === "capitolo1" || notify === "capitolo1";
  const resourceUrl = isCapitolo1 ? CAPITOLO1_URL : EBOOK_URL;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

/* 
  if (RESEND_API_KEY) {
    try {
      // Email di conferma all'utente
      // ... (existing code)
    } catch (err) {
      console.error("Resend error:", err);
    }
  }
*/
  console.log("INVIO EMAIL SOSPESO TEMPORANEAMENTE PER REVISIONE CONTENUTI:", { email, utmSource });

  return NextResponse.json({ success: true, ebookUrl: resourceUrl });
}
