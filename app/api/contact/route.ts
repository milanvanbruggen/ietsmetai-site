import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig emailadres' },
        { status: 400 }
      );
    }

    // Check if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email versturen is niet geconfigureerd (RESEND_API_KEY ontbreekt)' },
        { status: 500 }
      );
    }

    // Resend is configured, send email
    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'info@milanvanbruggen.nl';

    const emailHtml = `
        <h2>Nieuw contactformulier bericht</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ''}
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;

    const emailText = `
Nieuw contactformulier bericht

Naam: ${name}
Email: ${email}
${phone ? `Telefoon: ${phone}` : ''}

Bericht:
${message}
      `;

    const { error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Contactformulier: ${name}`,
      html: emailHtml,
      text: emailText,
    });

    if (resendError) {
      console.error('Resend email error:', resendError);
      return NextResponse.json(
        {
          error: 'Kon email niet versturen, probeer het later opnieuw.',
          // Expose extra detail only in non-production to help diagnose issues locally
          detail:
            process.env.NODE_ENV !== 'production'
              ? resendError.message || 'Onbekende Resend fout'
              : undefined,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}

