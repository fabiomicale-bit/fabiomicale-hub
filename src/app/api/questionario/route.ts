import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, situazione, problema, esperienze, obiettivo, tempo } = await req.json()

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

ho ricevuto il tuo questionario. Grazie per aver condiviso la tua situazione con me — ci vuole coraggio a mettere per iscritto i propri blocchi.

Leggo tutto con attenzione e ti rispondo personalmente entro 48 ore con qualche riflessione concreta sulla tua situazione.

Nel frattempo, se vuoi iniziare subito, puoi scaricare l'ebook gratuito:
https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=sharing

A presto,
Fabio

—
Fabio Micale | fabiomicale.com
"Non ti vendo sogni. Ti do strumenti."`,
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
