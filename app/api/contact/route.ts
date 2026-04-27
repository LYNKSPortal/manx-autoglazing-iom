import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, vehicle, message, insurance } = body;

    // Validate required fields
    if (!name || !phone || !email || !vehicle || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to business - with Reply-To set to customer's email
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: 'accounts@manxautoglazing.com',
      replyTo: email, // This allows you to click reply and respond directly to the customer
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with Logo -->
          <div style="background-color: #1F1F1F; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 32px;">
              <span style="color: #D32F2F;">MANX</span> AUTOGLAZING
            </h1>
            <p style="color: #999; margin: 10px 0 0 0; font-size: 14px;">Professional Windscreen Repair & Replacement</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #D32F2F; margin-top: 0;">New Quote Request</h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #D32F2F; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #1F1F1F;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F1F1F;">Phone:</strong> ${phone}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F1F1F;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F1F1F;">Vehicle:</strong> ${vehicle}</p>
              ${insurance ? `<p style="margin: 10px 0;"><strong style="color: #1F1F1F;">Insurance Company:</strong> ${insurance}</p>` : ''}
            </div>
            
            <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e0e0e0; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1F1F1F;">Message:</strong></p>
              <p style="margin: 0; color: #666;">${message}</p>
            </div>
            
            <div style="background-color: #D32F2F; color: white; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="margin: 0; text-align: center;">
                <strong>💡 Click "Reply" to respond directly to ${name}</strong>
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1F1F1F; padding: 20px; text-align: center; color: #ffffff;">
            <p style="margin: 5px 0; font-size: 12px;">Manx Autoglazing</p>
            <p style="margin: 5px 0; font-size: 12px;">Unit 22, Isle of Man Business Park, The Cooil, Braddan</p>
            <p style="margin: 5px 0; font-size: 12px;">+44 7624 304585 | info@manxautoglazing.com</p>
          </div>
        </div>
      `,
    };

    // Send email to business
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationEmail = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Quote Request Received - Manx Autoglazing',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with Logo -->
          <div style="background-color: #1F1F1F; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 32px;">
              <span style="color: #D32F2F;">MANX</span> AUTOGLAZING
            </h1>
            <p style="color: #999; margin: 10px 0 0 0; font-size: 14px;">Professional Windscreen Repair & Replacement</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #D32F2F; margin-top: 0;">Thank you for your quote request!</h2>
            <p style="color: #1F1F1F; font-size: 16px;">Dear ${name},</p>
            <p style="color: #1F1F1F; font-size: 16px;">We have received your quote request and our team will be in touch within 24 hours.</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #D32F2F; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #D32F2F;">Your Request Details:</h3>
              <p style="margin: 10px 0; color: #1F1F1F;"><strong>Vehicle:</strong> ${vehicle}</p>
              ${insurance ? `<p style="margin: 10px 0; color: #1F1F1F;"><strong>Insurance Company:</strong> ${insurance}</p>` : ''}
              <p style="margin: 10px 0; color: #1F1F1F;"><strong>Message:</strong> ${message}</p>
            </div>
            
            <div style="background-color: #ffffff; border: 2px solid #D32F2F; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #D32F2F;">We'll Contact You At:</h3>
              <p style="margin: 8px 0; color: #1F1F1F;">📞 <strong>Phone:</strong> ${phone}</p>
              <p style="margin: 8px 0; color: #1F1F1F;">✉️ <strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: #1F1F1F; color: white; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #D32F2F;">Need Urgent Assistance?</h3>
              <p style="margin: 8px 0;">📞 <strong>Phone:</strong> +44 7624 304585</p>
              <p style="margin: 8px 0;">✉️ <strong>Email:</strong> info@manxautoglazing.com</p>
              <p style="margin: 8px 0;">📍 <strong>Address:</strong> Unit 22, Isle of Man Business Park, The Cooil, Braddan</p>
            </div>
            
            <p style="color: #1F1F1F; font-size: 16px; margin-top: 30px;">Best regards,</p>
            <p style="color: #D32F2F; font-size: 18px; font-weight: bold; margin: 5px 0;">The Manx Autoglazing Team</p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1F1F1F; padding: 20px; text-align: center; color: #ffffff;">
            <p style="margin: 5px 0; font-size: 12px;">Manx Autoglazing - Professional Windscreen Repair & Replacement</p>
            <p style="margin: 5px 0; font-size: 12px;">Unit 22, Isle of Man Business Park, The Cooil, Braddan</p>
            <p style="margin: 5px 0; font-size: 12px;">+44 7624 304585 | info@manxautoglazing.com</p>
            <p style="margin: 10px 0; font-size: 11px; color: #999;">© ${new Date().getFullYear()} Manx Autoglazing. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send confirmation to customer
    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
