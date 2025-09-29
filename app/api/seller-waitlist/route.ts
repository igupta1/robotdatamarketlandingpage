import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { fullName, email } = await request.json()

    // Validate input
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email notification using Resend
    const emailSent = await sendSellerNotificationEmail(fullName, email)
    
    if (emailSent) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Error processing seller waitlist signup:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Send email notification using Resend
async function sendSellerNotificationEmail(fullName: string, email: string): Promise<boolean> {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.TO_EMAIL || 'your-email@example.com'],
      subject: '🚀 New Seller Waitlist Signup!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
            New Seller Waitlist Signup
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p style="margin: 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Action Required:</strong> This person wants to become a seller on your robotics data marketplace. 
              Consider reaching out to discuss their datasets and onboarding process.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; height: 1px; background-color: #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            This email was sent from your Neural Inc. landing page contact form.
          </p>
        </div>
      `,
      text: `
        New Seller Waitlist Signup
        
        Full Name: ${fullName}
        Email: ${email}
        
        This person wants to become a seller on your robotics data marketplace.
        Consider reaching out to discuss their datasets and onboarding process.
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return false
    }

    console.log('Seller notification email sent successfully:', data)
    return true

  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}
