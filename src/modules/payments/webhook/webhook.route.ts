import { Router } from 'express';
import bodyParser from 'body-parser';
import { stripeWebhookHandler } from './webhook.controller';

const router = Router();

router.post(
  '/stripe',
  bodyParser.raw({ type: 'application/json' }),
  stripeWebhookHandler
);

export default router;
