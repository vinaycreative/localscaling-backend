import { Router } from 'express';
import { sendPaymentLink } from './stripe/stripe.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import stripeRoutes from './stripe/stripe.routes';

const router = Router();

router.use('/stripe', stripeRoutes);

export default router;