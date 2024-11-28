import { NextResponse } from 'next/server';
import axios from 'axios';

type PaystackPayload = {
  amount: any;
  email: any;
  currency: string;
  callback_url: string;
  plan?: string; // Optional plan property
};

export async function POST(req: Request) {
  try {
    const { amount, email, isRecurring, interval } = await req.json();

    if (!amount || amount < 100) {
      return NextResponse.json(
        { message: 'Invalid amount' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Initializing payment with data:', { amount, email, isRecurring, interval });

    const basePayload: PaystackPayload = {
      amount,
      email,
      currency: 'KES',
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/verify`,
    };

    let endpoint = 'https://api.paystack.co/transaction/initialize';
    let payload: PaystackPayload = basePayload;

    if (isRecurring) {
      // For recurring payments, we first create a plan
      const planResponse = await axios.post(
        'https://api.paystack.co/plan',
        {
          name: `${interval} Subscription`,
          amount,
          interval,
          currency: 'KES',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Then initialize a subscription transaction
      payload = {
        ...basePayload,
        plan: planResponse.data.data.plan_code,
      };
    }

    const response = await axios.post(
      endpoint,
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Paystack API Response:', JSON.stringify(response.data, null, 2));

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Payment initialization error:', error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data?.message || 'Failed to initialize payment' },
      { status: 500 }
    );
  }
}
