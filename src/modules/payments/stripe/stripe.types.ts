export interface CreateCheckoutSessionPayload {
  priceId: string
  quantity?: number
  customerEmail?: string
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string | number | null>
}

export interface StripeWebhookPayload {
  signature: string | string[] | undefined
  rawBody: Buffer | string
}

export type StripeEventHandler = (event: { type: string; data: unknown }) => Promise<void> | void
