import { NextRequest, NextResponse } from 'next/server'
import { processSubscription, validateSubscription, type SubscriptionData } from '@/lib/email'

export const runtime = 'nodejs'

/**
 * POST /api/subscribe
 * Handle newsletter subscription requests
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    
    const subscriptionData: SubscriptionData = {
      email: body.email?.trim().toLowerCase() || '',
      name: body.name?.trim() || '',
      consent: Boolean(body.consent),
    }

    // Validate input
    const validation = validateSubscription(subscriptionData)
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      )
    }

    // Process the subscription
    const result = await processSubscription(subscriptionData)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
          error: result.error,
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: result.message,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe API error:', error)
    
    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request format',
          error: 'Request body must be valid JSON',
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/subscribe
 * Health check endpoint for the subscription service
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'email-subscription',
    timestamp: new Date().toISOString(),
  })
}
