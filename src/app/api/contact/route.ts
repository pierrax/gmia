import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { prenom, email, message, website, turnstileToken } = body

  // Honeypot: if the hidden "website" field is filled, it's a bot
  if (website) {
    return NextResponse.json({ success: true })
  }

  // Validate required fields
  if (!prenom || !email || !message) {
    return NextResponse.json(
      { error: 'Tous les champs sont requis.' },
      { status: 400 },
    )
  }

  // Verify Turnstile token
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
  if (turnstileSecret) {
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken || '',
        }),
      },
    )
    const turnstileResult = await turnstileResponse.json()
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: 'Vérification anti-spam échouée. Veuillez réessayer.' },
        { status: 403 },
      )
    }
  }

  try {
    await resend.emails.send({
      from: 'Good Morning IA <onboarding@resend.dev>',
      to: 'maxime@goodmorningia.com',
      subject: `Nouveau message de ${prenom} via Good Morning IA`,
      replyTo: email,
      text: [
        `Prénom : ${prenom}`,
        `Email : ${email}`,
        '',
        `Message :`,
        message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 },
    )
  }
}
