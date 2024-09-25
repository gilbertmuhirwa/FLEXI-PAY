import express from 'express';
import { createPaymentPlan, processPayment } from '../controllers/paymentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected routes
router.post('/create-plan', authMiddleware, createPaymentPlan);
router.post('/pay', authMiddleware, processPayment);

export default router;