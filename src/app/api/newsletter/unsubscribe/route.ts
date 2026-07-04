import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

function normalizeEmail(email: string | null): string {
  return String(email || "").trim().toLowerCase();
}

function signingSecret(): string {
  return process.env.NEWSLETTER_UNSUBSCRIBE_SECRET || process.env.BEEHIIV_API_KEY || "";
}

function expectedToken(email: string): string {
  return crypto.createHmac("sha256", signingSecret()).update(email).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function htmlPage(title: string, message: string, status = 200) {
  return new NextResponse(
    `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head><body style="font-family:Arial,sans-serif;line-height:1.6;max-width:680px;margin:48px auto;padding:0 20px;color:#1d1d1b;"><h1 style="font-family:Georgia,serif;">${title}</h1><p>${message}</p><p><a href="https://www.fabiomicale.com">Torna a fabiomicale.com</a></p></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

async function unsubscribe(email: string) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return htmlPage("Configurazione non completa", "La cancellazione automatica non e' configurata correttamente. Scrivi a info@fabiomicale.com con oggetto unsubscribe.", 500);
  }

  const getRes = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/by_email/${encodeURIComponent(email)}`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );

  if (getRes.status === 404) {
    return htmlPage("Disiscrizione confermata", "Questa email non risulta piu' iscritta alla newsletter.");
  }

  const getData = await getRes.json().catch(() => null);
  if (!getRes.ok || !getData?.data?.id) {
    return htmlPage("Disiscrizione non completata", "Non sono riuscito a completare la cancellazione automatica. Scrivi a info@fabiomicale.com con oggetto unsubscribe.", 502);
  }

  const updateRes = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/${getData.data.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ unsubscribe: true }),
    }
  );

  if (!updateRes.ok) {
    return htmlPage("Disiscrizione non completata", "Non sono riuscito a completare la cancellazione automatica. Scrivi a info@fabiomicale.com con oggetto unsubscribe.", 502);
  }

  return htmlPage("Disiscrizione confermata", "La tua email e' stata rimossa dalla newsletter Un Passo Avanti.");
}

export async function GET(req: NextRequest) {
  const email = normalizeEmail(req.nextUrl.searchParams.get("email"));
  const token = req.nextUrl.searchParams.get("token") || "";

  if (!email || !email.includes("@") || !token) {
    return htmlPage("Link non valido", "Il link di cancellazione non e' valido. Scrivi a info@fabiomicale.com con oggetto unsubscribe.", 400);
  }

  if (!signingSecret()) {
    return htmlPage("Configurazione non completa", "La cancellazione automatica non e' configurata correttamente. Scrivi a info@fabiomicale.com con oggetto unsubscribe.", 500);
  }

  if (!safeEqual(token, expectedToken(email))) {
    return htmlPage("Link non valido", "Il link di cancellazione non e' valido. Scrivi a info@fabiomicale.com con oggetto unsubscribe.", 400);
  }

  return unsubscribe(email);
}

export async function POST(req: NextRequest) {
  return GET(req);
}
