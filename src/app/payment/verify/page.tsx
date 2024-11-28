'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function VerifyPayment() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    const reference = searchParams.get('reference');
    if (!reference) {
      setStatus('error');
      setMessage('No reference found');
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await axios.get(`/api/verify-payment?reference=${reference}`);
        if (response.data.status && response.data.data.status === 'success') {
          setStatus('success');
          setMessage('Payment verified successfully');
          setPaymentDetails(response.data.data);
        } else {
          setStatus('error');
          setMessage('Payment verification failed');
        }
      } catch (error: any) {
        setStatus('error');
        setMessage(error.response?.data?.message || 'Failed to verify payment');
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment Verification</h2>
      {status === 'loading' && (
        <div className="text-center text-gray-600">
          Verifying payment...
        </div>
      )}
      {status === 'success' && (
        <div className="space-y-4">
          <div className="text-center text-green-600 font-semibold">
            {message}
          </div>
          {paymentDetails && (
            <div className="mt-4 space-y-2">
              <p><span className="font-semibold">Amount:</span> {paymentDetails.currency} {paymentDetails.amount / 100}</p>
              <p><span className="font-semibold">Reference:</span> {paymentDetails.reference}</p>
              <p><span className="font-semibold">Payment Method:</span> {paymentDetails.channel}</p>
            </div>
          )}
        </div>
      )}
      {status === 'error' && (
        <div className="text-center text-red-600">
          {message}
        </div>
      )}
      <div className="mt-6 text-center">
        <a
          href="/"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}