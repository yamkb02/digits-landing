import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  inquiryType: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using custom SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true' || false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Only if you have self-signed certificates
      },
    })

    // Email to business owner
    const businessEmailHtml = `
      <h2>New Contact Form Submission - Digits ERP</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ea580c; margin: 0 0 15px 0;">Contact Details</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        <p><strong>Inquiry Type:</strong> ${body.inquiryType}</p>
      </div>

      <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin: 0 0 15px 0;">Subject</h3>
        <p style="font-weight: 600;">${body.subject}</p>
        
        <h3 style="color: #374151; margin: 20px 0 15px 0;">Message</h3>
        <p style="line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
      </div>

      <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #92400e;">
          <strong>Reminder:</strong> Please respond within 24 hours as promised on the website.
        </p>
      </div>
    `

    // Confirmation email to user
    const userEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">digits.</h1>
          <p style="color: #fed7aa; margin: 10px 0 0 0;">Modern ERP System</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <h2 style="color: #374151; margin: 0 0 20px 0;">Thank you for contacting us!</h2>
          
          <p style="color: #6b7280; line-height: 1.6; margin: 0 0 20px 0;">
            Hi ${body.name},
          </p>
          
          <p style="color: #6b7280; line-height: 1.6; margin: 0 0 20px 0;">
            We've received your message about "<strong>${body.subject}</strong>" and our team will get back to you within 24 hours.
          </p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #ea580c; margin: 0 0 15px 0;">What happens next?</h3>
            <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
              <li>Our team will review your inquiry</li>
              <li>We'll prepare a personalized response</li>
              <li>You'll hear back from us within 24 hours</li>
              <li>If urgent, feel free to call us directly</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://your-domain.com" style="background: #ea580c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #9ca3af; font-size: 14px; text-align: center; margin: 0;">
            This email was sent from the Digits ERP contact form.<br>
            If you didn't submit this form, please ignore this email.
          </p>
        </div>
      </div>
    `

    // Send email to business
    await transporter.sendMail({
      from: `"Digits ERP Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'miguelrhatchitsolutions@gmail.com',
      subject: `New Contact: ${body.subject} - ${body.inquiryType}`,
      html: businessEmailHtml,
      replyTo: body.email
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Digits ERP" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: 'Thank you for contacting Digits ERP',
      html: userEmailHtml
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 