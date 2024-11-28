import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { amount, email } = await req.json();

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

    console.log('Initializing payment with data:', { amount, email });

    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        amount,
        email,
        currency: 'KES',
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/verify`,
      },
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
