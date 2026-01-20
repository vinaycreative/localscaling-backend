import { Request, Response } from 'express';
import { createPaymentLink } from './stripe.service';
import { transporter } from '@/config/nodemailer';
import { asyncHandler } from '../../../utils/asyncHandler';
import { sendSuccess } from '@/utils/response';
import { AppError } from '@/utils/appError';

export const sendPaymentLink = asyncHandler(async (req: Request, res: Response) => {
  const { email, amount, description } = req.body;

  const paymentUrl = await createPaymentLink({
    clientId: req.user?.id || "",
    clientEmail: email,
    amount,
    description,
  });

  await transporter.sendMail({
    to: email,
    subject: 'Payment Link',
    html: `
      <p>Please complete your payment using the link below:</p>
      <a href="${paymentUrl}" target="_blank">Pay Now</a>
    `,
  });

    return sendSuccess(res, 'Payment link sent successfully', { paymentUrl });
});

export const sendTestPaymentLink = asyncHandler(async (req: Request, res: Response) => {
  const { email, amount, description } = req.body;

  if (!email || amount === undefined) {
    throw new AppError('email and amount are required', 400);
  }

  const paymentUrl = await createPaymentLink({
    clientId: "test-client-id",
    clientEmail: email,
    amount,
    description: description || 'Test payment',
  });

  await transporter.sendMail({
    to: email,
    subject: 'Test Payment Link',
    html: `
      <p>This is a test Stripe payment link:</p>
      <a href="${paymentUrl}" target="_blank">Pay Now</a>
    `,
  });

  return sendSuccess(res, 'Test payment link sent', { paymentUrl });
});
