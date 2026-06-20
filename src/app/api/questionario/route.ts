import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, situazione, problema, esperienze, obiettivo, tempo } = await req.json()

    // --- Forward to Dashboard ---
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
            source: "questionario",
            tag: "consulenza",
            notes: `Questionario: ${situazione.substring(0, 50)}...`
          }),
        });
      } catch (err) {
        console.error("Dashboard forward failed:", err);
      }
    }

    if (!nome || !email) {
      return NextResponse.json({ success: false, error: 'Nome ed email sono obbligatori.' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    const emailBody = `
🎯 NUOVO QUESTIONARIO DI PROFILAZIONE

Da: ${nome} <${email}>
Ricevuto: ${new Date().toLocaleString('it-IT')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SITUAZIONE PROFESSIONALE
${situazione}

SFIDA PRINCIPALE
${Array.isArray(problema) ? problema.join(', ') : problema}

ESPERIENZE PRECEDENTI
${esperienze}

OBIETTIVO NEI PROSSIMI 3-6 MESI
${obiettivo}

TEMPO DISPONIBILE A SETTIMANA
${tempo}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 SUGGERIMENTO RISPOSTA:
Rispondi a: ${email}
Saluta per nome: ${nome}
    `.trim()

    if (RESEND_API_KEY) {
      // Email di notifica a Fabio
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Fabio Micale <notifiche@fabiomicale.com>',
          to: 'info@fabiomicale.com',
          reply_to: email,
          subject: `🎯 Nuovo questionario da ${nome}`,
          text: emailBody,
        }),
      })

      // Email di conferma all'utente
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Fabio Micale <fabio@fabiomicale.com>',
          to: email,
          subject: `${nome}, ho ricevuto il tuo questionario ✅`,
          text: `Ciao ${nome},

ho ricevuto correttamente il tuo questionario.

Lo leggerò con attenzione e userò le informazioni che hai condiviso per capire meglio la tua situazione e il punto da cui partire.

Se servirà approfondire qualcosa, ti risponderò direttamente a questa email.

Fabio Micale
fabiomicale.com`,
        }),
      })
    } else {
      console.log('NUOVO QUESTIONARIO (RESEND non configurato):', { nome, email, situazione, problema, esperienze, obiettivo, tempo })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Errore questionario:', error)
    return NextResponse.json({ success: false, error: 'Errore interno.' }, { status: 500 })
  }
}
