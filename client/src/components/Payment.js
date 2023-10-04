import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = ({ amount, currency, stripeKey }) => {
  const [success, setSuccess] = useState(false);
  const onToken = (token) => {
    // Call your server-side endpoint to process the payment
    fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        token: token.id,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <StripeCheckout
        amount={amount}
        currency={currency}
        token={onToken}
        stripeKey={stripeKey}
      />
      {success && <div>Payment successful!</div>}
    </div>
  );
};

export default Payment;
