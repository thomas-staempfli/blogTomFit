/**
 * Email Service Configuration and Utilities
 * 
 * This module provides email sending capabilities for the TomFit application.
 * It supports multiple email service providers and can be configured via environment variables.
 */

export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
  from: string
}

export interface EmailMessage {
  to: string
  subject: string
  text?: string
  html?: string
}

export interface SubscriptionData {
  email: string
  name: string
  consent: boolean
}

export interface EmailServiceResult {
  success: boolean
  message: string
  error?: string
}

/**
 * Get email configuration from environment variables
 */
export function getEmailConfig(): EmailConfig {
  return {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || '',
    },
    from: process.env.EMAIL_FROM || 'noreply@tomfit.com',
  }
}

/**
 * Check if email service is configured
 */
export function isEmailConfigured(): boolean {
  const config = getEmailConfig()
  return !!(config.auth.user && config.auth.pass)
}

/**
 * Validate email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate subscription data
 */
export function validateSubscription(data: Partial<SubscriptionData>): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email address is required')
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }

  if (!data.consent) {
    errors.push('You must agree to receive emails')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Generate welcome email HTML content
 */
export function generateWelcomeEmail(name: string): { subject: string; text: string; html: string } {
  const subject = 'Welcome to TomFit Newsletter! 💪'
  
  const text = `
Hi ${name},

Welcome to the TomFit community!

Thank you for subscribing to our newsletter. You'll now receive weekly insights on:
- Workout tips and training routines
- Nutrition advice and healthy recipes
- Exclusive subscriber-only content

We're excited to have you on board!

Best regards,
The TomFit Team

---
If you didn't subscribe to this newsletter, you can safely ignore this email.
To unsubscribe, reply to this email with "unsubscribe" in the subject line.
  `.trim()

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to TomFit</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to TomFit! 💪</h1>
  </div>
  
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
    <p style="font-size: 18px; margin-top: 0;">Hi <strong>${name}</strong>,</p>
    
    <p>Thank you for subscribing to our newsletter. You're now part of a community of 10,000+ fitness enthusiasts!</p>
    
    <h2 style="color: #f97316; font-size: 20px; margin-top: 30px;">What You'll Receive:</h2>
    
    <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <ul style="margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 10px;"><strong>💪 Workout Tips</strong> - Weekly training insights and routines</li>
        <li style="margin-bottom: 10px;"><strong>🥗 Nutrition Advice</strong> - Healthy eating strategies and recipes</li>
        <li style="margin-bottom: 0;"><strong>⭐ Exclusive Content</strong> - Subscriber-only articles and resources</li>
      </ul>
    </div>
    
    <p>We're excited to have you on board!</p>
    
    <p style="margin-bottom: 0;">Best regards,<br><strong>The TomFit Team</strong></p>
  </div>
  
  <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
    <p style="margin: 0;">If you didn't subscribe to this newsletter, you can safely ignore this email.</p>
    <p style="margin: 10px 0 0 0;">To unsubscribe, reply to this email with "unsubscribe" in the subject line.</p>
  </div>
</body>
</html>
  `.trim()

  return { subject, text, html }
}

/**
 * Generate admin notification email
 */
export function generateAdminNotification(data: SubscriptionData): { subject: string; text: string; html: string } {
  const subject = `New Subscriber: ${data.name}`
  
  const text = `
New newsletter subscription:

Name: ${data.name}
Email: ${data.email}
Consent: ${data.consent ? 'Yes' : 'No'}
Date: ${new Date().toISOString()}
  `.trim()

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
  <h2 style="color: #f97316;">New Newsletter Subscription</h2>
  <table style="border-collapse: collapse; width: 100%; max-width: 400px;">
    <tr>
      <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Name</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${data.email}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Consent</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${data.consent ? '✅ Yes' : '❌ No'}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Date</td>
      <td style="padding: 10px; border: 1px solid #e5e7eb;">${new Date().toLocaleString()}</td>
    </tr>
  </table>
</body>
</html>
  `.trim()

  return { subject, text, html }
}

/**
 * Simulated email send function for development/testing
 * In production, this would use nodemailer or an email service API
 */
export async function sendEmail(message: EmailMessage): Promise<EmailServiceResult> {
  // Check if email service is configured
  if (!isEmailConfigured()) {
    // In development, log the email instead of sending
    console.log('📧 Email Service (Development Mode)')
    console.log('To:', message.to)
    console.log('Subject:', message.subject)
    console.log('---')
    
    return {
      success: true,
      message: 'Email logged (development mode - no SMTP configured)',
    }
  }

  // Production email sending would go here
  // This is where you'd integrate with nodemailer, SendGrid, Mailgun, etc.
  try {
    const config = getEmailConfig()
    
    // For now, we'll simulate success
    // In production, you'd use something like:
    // const transporter = nodemailer.createTransport(config)
    // await transporter.sendMail({ from: config.from, ...message })
    
    console.log(`📧 Sending email to ${message.to}: ${message.subject}`)
    
    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Email send error:', errorMessage)
    
    return {
      success: false,
      message: 'Failed to send email',
      error: errorMessage,
    }
  }
}

/**
 * Store subscriber in database/file
 * This is a placeholder - in production you'd use a proper database
 */
export async function storeSubscriber(data: SubscriptionData): Promise<EmailServiceResult> {
  try {
    // In a real application, you'd store this in a database
    // For now, we'll just log it
    console.log('📝 New subscriber stored:', {
      email: data.email,
      name: data.name,
      subscribedAt: new Date().toISOString(),
    })

    return {
      success: true,
      message: 'Subscriber stored successfully',
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return {
      success: false,
      message: 'Failed to store subscriber',
      error: errorMessage,
    }
  }
}

/**
 * Process a new subscription
 */
export async function processSubscription(data: SubscriptionData): Promise<EmailServiceResult> {
  // Validate input
  const validation = validateSubscription(data)
  if (!validation.valid) {
    return {
      success: false,
      message: 'Validation failed',
      error: validation.errors.join(', '),
    }
  }

  // Store the subscriber
  const storeResult = await storeSubscriber(data)
  if (!storeResult.success) {
    return storeResult
  }

  // Send welcome email
  const welcomeEmail = generateWelcomeEmail(data.name)
  const sendResult = await sendEmail({
    to: data.email,
    ...welcomeEmail,
  })

  if (!sendResult.success) {
    console.warn('Welcome email failed to send, but subscription was stored')
  }

  // Optionally notify admin
  const adminEmail = process.env.ADMIN_EMAIL
  if (adminEmail) {
    const adminNotification = generateAdminNotification(data)
    await sendEmail({
      to: adminEmail,
      ...adminNotification,
    })
  }

  return {
    success: true,
    message: 'Subscription successful! Check your email for confirmation.',
  }
}
