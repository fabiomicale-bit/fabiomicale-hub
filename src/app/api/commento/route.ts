import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, messaggio, articolo } = await req.json()

    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { success: false, error: 'Compila tutti i campi.' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Email non valida.' },
        { status: 400 }
      )
    }

    if (messaggio.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Il messaggio è troppo lungo (max 2000 caratteri).' },
        { status: 400 }
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.log('NUOVO COMMENTO:', { nome, email, messaggio, articolo })
      return NextResponse.json({ success: true })
    }

    const emailBody = `
Nuovo commento ricevuto su fabiomicale.com

Articolo: ${articolo}
Nome: ${nome}
Email: ${email}

Messaggio:
${messaggio}

---
Inviato da fabiomicale.com
    `.trim()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'notifiche@fabiomicale.com',
        to: 'info@fabiomicale.com',
        reply_to: email,
        subject: `Nuovo commento da ${nome} — ${articolo}`,
        text: emailBody,
      }),
    })

    if (!res.ok) {
      console.error('Errore Resend:', await res.text())
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Errore commento:', error)
    return NextResponse.json(
      { success: false, error: 'Errore interno. Riprova.' },
      { status: 500 }
    )
  }
}
