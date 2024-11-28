'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

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
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
            Payment Verification
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Verifying your payment status
          </p>
        </div>

        {status === 'loading' && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-12 h-12">
              <svg className="animate-spin w-full h-full text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Verifying payment...
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {message}
              </h3>
            </div>
            {paymentDetails && (
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Amount</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {paymentDetails.currency} {(paymentDetails.amount / 100).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Reference</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {paymentDetails.reference}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Payment Method</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {paymentDetails.channel}
                  </span>
                </div>
                {paymentDetails.plan && (
                  <>
                    <div className="h-px bg-gray-200 dark:bg-gray-700" />
                    <div className="pt-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Subscription Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Plan Name</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {paymentDetails.plan.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Billing Interval</span>
                          <span className="font-medium text-gray-900 dark:text-white capitalize">
                            {paymentDetails.plan.interval}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Plan Code</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {paymentDetails.plan.plan_code}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
                {message}
              </h3>
            </div>
          </div>
        )}

        <div className="pt-4">
          <Link
            href="/"
            className="block w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg 
              text-center hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 focus:outline-none 
              focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}