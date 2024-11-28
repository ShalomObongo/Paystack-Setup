import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const hash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
      .update(body)
      .digest('hex');
    
    const signature = req.headers.get('x-paystack-signature');

    if (hash !== signature) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Handle different event types
    switch (event.event) {
      case 'charge.success':
        // Handle successful payment
        // You can store transaction details in your database here
        console.log('Payment successful:', event.data);
        break;
      
      case 'charge.failed':
        // Handle failed payment
        console.log('Payment failed:', event.data);
        break;
      
      default:
        // Handle other events
        console.log('Unhandled event:', event.event);
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { message: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
