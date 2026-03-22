import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email: string | undefined = body?.email;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email non valida." }, { status: 400 });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return NextResponse.json({ error: "Configurazione server mancante." }, { status: 500 });
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "website",
        utm_medium: "organic",
        utm_campaign: "lead_magnet_ebook",
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("Beehiiv error:", res.status, text);
    return NextResponse.json(
      { error: "Errore durante l'iscrizione. Riprova tra poco." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
