import { Router } from 'express';
import { sendPaymentLink, sendTestPaymentLink } from './stripe.controller';
import { authMiddleware } from '../../../middleware/authMiddleware';

const router = Router();

router.post('/payment-link', authMiddleware, sendPaymentLink);
router.post('/payment-link/test', sendTestPaymentLink);

export default router;
