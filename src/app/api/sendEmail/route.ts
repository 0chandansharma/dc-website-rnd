import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, message, recipient, subject } = body;
    
    // Here you would typically integrate with an email sending service
    // Such as SendGrid, Mailgun, AWS SES, etc.
    // Example with SendGrid:
    
    // const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: recipient }] }],
    //     from: { email: 'careers@deecogs.com', name: 'DeeCogs Careers' },
    //     subject: subject,
    //     content: [{
    //       type: 'text/plain',
    //       value: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nMessage: ${message}`
    //     }]
    //   }),
    // });
    
    // For now, just log the data and return success
    console.log('Application received:', {
      name,
      email,
      phone,
      position,
      message,
      recipient,
      subject
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in sendEmail API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}