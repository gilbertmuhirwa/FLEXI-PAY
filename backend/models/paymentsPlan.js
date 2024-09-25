import mongoose from 'mongoose';

const paymentPlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalAmount: { type: Number, required: true },
    remainingAmount: { type: Number, required: true },
    installments: { type: [Number], required: true }, // List of installments
    dueDates: { type: [Date], required: true }, // List of due dates for each installment
    status: {
        type: String,
        enum: ['active', 'completed', 'failed'],
        default: 'active',
    },
});

export default mongoose.model('PaymentPlan', paymentPlanSchema);