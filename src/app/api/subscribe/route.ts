import { NextRequest, NextResponse } from "next/server";

const EBOOK_URL =
  "https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=sharing";

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

  // Notifica Resend se richiesta (es. download capitolo 1)
  if (notify === "capitolo1") {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "notifiche@fabiomicale.com",
            to: "info@fabiomicale.com",
            reply_to: email,
            subject: `📄 Download Capitolo 1 — ${nome ?? email}`,
            text: `Nuovo download del Capitolo 1\n\nNome: ${nome ?? "(non fornito)"}\nEmail: ${email}\nOrigine: ${utmSource}\n\nData: ${new Date().toLocaleString("it-IT")}`,
          }),
        });
      } catch (err) {
        console.error("Resend notification error:", err);
        // Non blocchiamo il flusso se la notifica fallisce
      }
    } else {
      console.log("Download Capitolo 1:", { nome, email, utmSource });
    }
  }

  return NextResponse.json({ success: true, ebookUrl: EBOOK_URL });
}
