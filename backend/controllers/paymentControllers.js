import Stripe from 'stripe';
import PaymentPlan from '../models/PaymentPlan.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create a payment plan for a user
export const createPaymentPlan = async(req, res) => {
    const { totalAmount, installments, dueDates } = req.body;

    try {
        const newPlan = new PaymentPlan({
            userId: req.user.id,
            totalAmount,
            remainingAmount: totalAmount,
            installments,
            dueDates,
            status: 'active',
        });

        await newPlan.save();
        res.json(newPlan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Process a payment
export const processPayment = async(req, res) => {
    const { planId, amount, paymentMethodId } = req.body;

    try {
        const paymentPlan = await PaymentPlan.findById(planId);
        if (!paymentPlan) return res.status(404).json({ msg: 'Payment plan not found' });

        // Process payment with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Stripe expects amount in cents
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true,
        });

        // Update payment plan status
        paymentPlan.remainingAmount -= amount;
        if (paymentPlan.remainingAmount <= 0) {
            paymentPlan.status = 'completed';
        }
        await paymentPlan.save();

        res.json({ success: true, paymentPlan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};