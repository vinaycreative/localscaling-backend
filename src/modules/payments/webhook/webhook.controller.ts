import { Request, Response } from "express";
import { stripe } from "@/config/stripe";
import { successPaymentService } from "@/modules/admin/client/client.service";

export const stripeWebhookHandler = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET! || "whsec_4886f6955cd143bc0b756b7dc7c289f8b103711cb9c7ee262361855410e9aa4f"
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error`);
  }

  if (event.type === "checkout.session.completed") {
  const session = event.data.object as any;
  const paymentIntent = await stripe.paymentIntents.retrieve(
    session.payment_intent
  );

  const { clientId, clientEmail } = paymentIntent.metadata;
  console.log("clientId: ", clientId)
  console.log("clientEmail: ", clientEmail)
  console.log("paymentIntent: ", paymentIntent)

    if (clientId) {
      try {
        await successPaymentService(clientId);
      } catch (err) {
        return res.status(500).send("Failed to process payment");
      }
    }
  }

  res.json({ received: true });
};


