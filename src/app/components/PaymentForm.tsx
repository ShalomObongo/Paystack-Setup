'use client';

import { useState } from 'react';
import axios from 'axios';

export default function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPaymentUrl('');

    try {
      console.log('Submitting payment with data:', { amount, email });
      
      const response = await axios.post('/api/initialize-payment', {
        amount: parseFloat(amount) * 100, // Convert to cents
        email,
      });

      console.log('Response from server:', response.data);

      // Check if we have the authorization_url in the response data
      if (response.data?.status && response.data?.data?.authorization_url) {
        const redirectUrl = response.data.data.authorization_url;
        console.log('Payment URL received:', redirectUrl);
        setPaymentUrl(redirectUrl);
      } else {
        console.error('Invalid response structure:', response.data);
        setError('Invalid response from payment server');
      }
    } catch (err: any) {
      console.error('Payment error:', err.response?.data || err);
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Make Payment</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 mb-2">
            Amount (KES)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount in KES"
            required
            min="1"
            step="0.01"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Processing...' : 'Initialize Payment'}
        </button>
      </form>

      {paymentUrl && (
        <div className="mt-4">
          <a
            href={paymentUrl}
            target="_self"
            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = paymentUrl;
            }}
          >
            Proceed to Payment
          </a>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Click the button above to proceed with your payment
          </p>
        </div>
      )}
    </div>
  );
}
