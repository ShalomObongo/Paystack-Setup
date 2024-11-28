import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');

    if (!reference) {
      return NextResponse.json(
        { message: 'Reference is required' },
        { status: 400 }
      );
    }

    // First verify the transaction
    const transactionResponse = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const transactionData = transactionResponse.data.data;
    console.log('Transaction Data:', JSON.stringify(transactionData, null, 2));

    // If this is a subscription payment, use plan_object for plan details
    if (transactionData.plan && transactionData.plan_object) {
      transactionData.plan = {
        id: transactionData.plan_object.id,
        name: transactionData.plan_object.name,
        plan_code: transactionData.plan_object.plan_code,
        description: transactionData.plan_object.description,
        amount: transactionData.plan_object.amount,
        interval: transactionData.plan_object.interval,
        currency: transactionData.plan_object.currency
      };
    }

    return NextResponse.json({
      status: true,
      data: transactionData
    });
  } catch (error: any) {
    console.error('Payment verification error:', error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data?.message || 'Failed to verify payment' },
      { status: 500 }
    );
  }
}