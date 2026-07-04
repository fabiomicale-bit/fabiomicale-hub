import { NextRequest, NextResponse } from "next/server";

const ESTRATTO_PDF_URL =
  "https://www.fabiomicale.com/downloads/estratto-successo-in-3-passi-2026.pdf";

// Varianti che corrispondono a iscrizione newsletter (senza invio PDF)
const NEWSLETTER_VARIANTS = ["newsletter", "default", "article"];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, error: "Richiesta non valida." },
      { status: 400 }
    );
  }

  const email: string | undefined = body?.email;
  const nome: string | undefined = body?.nome;
  const cognome: string | undefined = body?.cognome;
  const telefono: string | undefined = body?.telefono;
  const sitoweb: string | undefined = body?.sitoweb;
  const variant: string = body?.variant ?? "";
  const privacyConsent: boolean = body?.privacy_consent === true;
  const newsletterConsent: boolean = body?.newsletter_consent === true;
  const utmMedium: string = body?.utm_medium ?? "organic";

  // --- Honeypot server-side ---
  const honeypot: string | undefined = body?.website_url;
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  // --- Privacy obbligatoria ---
  if (!privacyConsent) {
    return NextResponse.json(
      { success: false, error: "Accettazione della privacy obbligatoria." },
      { status: 400 }
    );
  }

  // --- Email validation ---
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, error: "Email non valida." },
      { status: 400 }
    );
  }

  // --- Variant routing ---
  const isBookExcerpt = variant === "book-excerpt";
  const isBookWaitlist = variant === "book-waitlist";
  const isNewsletter = NEWSLETTER_VARIANTS.includes(variant);

  if (!isBookExcerpt && !isBookWaitlist && !isNewsletter) {
    console.warn(`[subscribe] Variant non supportata: "${variant}" — richiesta rifiutata.`);
    return NextResponse.json(
      { success: false, error: "Tipo di richiesta non supportato." },
      { status: 400 }
    );
  }

  const backendSource = isBookExcerpt
    ? "estratto_s3p_2026"
    : isBookWaitlist
      ? "waitlist_s3p_2026"
      : "newsletter_un_passo_avanti";

  const backendTag = isBookExcerpt
    ? "lead_magnet_s3p_2026"
    : isBookWaitlist
      ? "waitlist_s3p_2026"
      : "un_passo_avanti";

  const beehiivTag = isBookExcerpt
    ? "lead_magnet_s3p_2026"
    : isBookWaitlist
      ? "waitlist_s3p_2026"
      : "un_passo_avanti";

  const utmSource = isBookExcerpt
    ? "estratto_s3p_2026"
    : isBookWaitlist
      ? "waitlist_s3p_2026"
      : "newsletter_un_passo_avanti";

  // --- 1. Backend Dashboard ---
  const BACKEND_URL = process.env.BACKEND_API_URL;
  const DASHBOARD_KEY = process.env.DASHBOARD_API_KEY;

  if (BACKEND_URL && DASHBOARD_KEY) {
    try {
      await fetch(`${BACKEND_URL}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": DASHBOARD_KEY,
        },
        body: JSON.stringify({
          email,
          first_name: nome,
          last_name: cognome,
          phone: telefono,
          website: sitoweb,
          source: backendSource,
          tag: backendTag,
          notes: `Lead da Hub Form: ${variant}; newsletter_consent=${newsletterConsent}; email_opt_out=false`,
        }),
      });
    } catch (err) {
      console.error("Dashboard forward failed:", err);
    }
  }

  // --- 2. Beehiiv ---
  // book-waitlist: il form è finalizzato all'avviso lancio — Beehiiv riceve sempre il lead.
  // altri variant: solo se newsletter_consent === true.
  if (newsletterConsent || isBookWaitlist) {
    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (apiKey && publicationId) {
      try {
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
              // custom_fields richiede che "lead_source" esista nella pubblicazione Beehiiv.
              // Creare il campo in Beehiiv: Settings → Custom Fields → Add field "lead_source".
              // Il campo "tags" non è supportato dall'API v2 di Beehiiv: ignorato silenziosamente.
              custom_fields: [
                { name: "lead_source", value: beehiivTag },
              ],
            }),
          }
        );

        const beehiivData = await beehiivRes.json().catch(() => null);
        const subscriberId = beehiivData?.data?.id ?? "none";
        console.log(`[beehiiv] status:${beehiivRes.status} subscriber_id:${subscriberId} variant:${variant} utm_source:${utmSource}`);

        if (!beehiivRes.ok && beehiivRes.status !== 409) {
          const errDetail = beehiivData?.errors ?? beehiivData?.message ?? "unknown";
          console.error("[beehiiv] error:", beehiivRes.status, JSON.stringify(errDetail));
        }
      } catch (err) {
        console.error("Beehiiv fetch error:", err);
      }
    }
  }

  // --- 3. Resend (solo book-excerpt) ---
  if (isBookExcerpt) {
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
            from: "Fabio Micale <info@fabiomicale.com>",
            to: email,
            subject: "Il tuo estratto di Successo in 3 Passi",
            html: `
              <div style="font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #0A0A0A; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 24px; font-family: serif;">Successo in 3 Passi</h1>
                <p>Ciao ${nome || "Amico"},</p>
                <p>ecco l'estratto gratuito di <em>Successo in 3 Passi — Edizione 2026</em>.</p>
                <p>Non è un riassunto promozionale: è un primo ingresso reale nel Metodo.</p>
                <p>Il punto di partenza è semplice:<br/>
                non serve aggiungere altra confusione.<br/>
                Serve fermare il caos, rimettere struttura e mantenere il controllo.</p>
                <div style="margin: 40px 0; text-align: left;">
                  <a href="${ESTRATTO_PDF_URL}" style="background-color: #C8A45A; color: #fff; padding: 16px 32px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; border-radius: 4px; display: inline-block;">Scarica l'estratto</a>
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
    } else {
      console.log(`[subscribe] RESEND_API_KEY non configurato — email a ${email} non inviata.`);
    }
  }

  return NextResponse.json({ success: true });
}
