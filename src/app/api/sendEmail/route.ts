import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Debug environment variables
    console.log('Service ID:', process.env.EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.EMAILJS_TEMPLATE_ID);
    console.log('User ID:', process.env.EMAILJS_USER_ID);
    
    const body = await request.json();
    const { name, email, phone, position, message, subject } = body;
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' }, 
        { status: 400 }
      );
    }
    
    // Check if environment variables exist
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_USER_ID) {
      console.error('Missing EmailJS credentials in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' }, 
        { status: 500 }
      );
    }
    
    // EmailJS fetch request
    const emailjsData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: {
        to_email: 'business@deecogs.com',
        from_name: name,
        from_email: email,
        phone: phone || 'Not provided',
        position: position || 'Not provided',
        message: message,
        subject: subject || 'New contact from website',
      }
    };
    
    console.log('Sending data to EmailJS:', JSON.stringify(emailjsData));
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailjsData),
    });
    
    const responseText = await response.text();
    console.log('EmailJS response:', response.status, responseText);
    
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error('EmailJS error response:', responseText);
      return NextResponse.json(
        { error: 'Failed to send email', details: responseText }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in sendEmail API route:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: String(error) }, { status: 500 });
  }
}