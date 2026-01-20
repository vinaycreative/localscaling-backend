import { AppError } from '@/utils/appError';
import { stripe } from '@/config/stripe';

type CreatePaymentLinkInput = {
  clientId: string;
  clientEmail: string;
  amount: number; // in INR or USD, smallest unit handled below
  description: string;
};

export const createPaymentLink = async ({
  clientId,
  clientEmail,
  amount,
  description,
}: CreatePaymentLinkInput) => {
  if (!clientEmail) {
    throw new AppError('Client email is required to create a payment link');
  }

  if (!clientId) {
    throw new AppError('Client id is required to create a payment link');
  }

  const normalizedAmount = Number(amount);
  if (!Number.isFinite(normalizedAmount) || normalizedAmount <= 0) {
    throw new AppError('Invalid amount for payment link');
  }

  // 1. Create a product
  const product = await stripe.products.create({
    name: description,
  });

  // 2. Create a price
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: Math.round(normalizedAmount * 100), // convert to smallest currency unit
    currency: 'inr', // change if needed
  });

  // 3. Create payment link
  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    billing_address_collection: 'required',
    customer_creation: 'always',
    payment_intent_data: {
      metadata: {
        clientId,
        clientEmail,
      },
    },
    after_completion: {
      type: 'redirect',
      redirect: {
        url: `${process.env.APP_BASE_URL}/login`,
      },
    },
  });

  return paymentLink.url;
};
