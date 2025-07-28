import {
    CheckCircleIcon,
    HeartIcon
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import PaymentProcessor from '../UI/PaymentProcessor';

interface DonationAmount {
    value: number;
    label: string;
    isCustom?: boolean;
}

const Donation: React.FC = () => {
    const [selectedAmount, setSelectedAmount] = useState<number>(1000);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [showPaymentProcessor, setShowPaymentProcessor] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const donationAmounts: DonationAmount[] = [
        { value: 500, label: '৳500' },
        { value: 1000, label: '৳1,000' },
        { value: 2500, label: '৳2,500' },
        { value: 5000, label: '৳5,000' },
        { value: 10000, label: '৳10,000' },
        { value: 0, label: 'Custom', isCustom: true }
    ];

    const handleAmountSelect = (amount: DonationAmount) => {
        if (amount.isCustom) {
            setSelectedAmount(0);
            setCustomAmount('');
        } else {
            setSelectedAmount(amount.value);
            setCustomAmount('');
        }
    };

    const handleCustomAmountChange = (value: string) => {
        setCustomAmount(value);
        setSelectedAmount(parseInt(value) || 0);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProceedToPayment = () => {
        if (!formData.name || !formData.email) {
            alert('Please fill in your name and email address.');
            return;
        }
        if (getCurrentAmount() <= 0) {
            alert('Please select a valid donation amount.');
            return;
        }
        setShowPaymentProcessor(true);
    };

    const handlePaymentSuccess = (paymentId: string) => {
        setShowPaymentProcessor(false);
        setShowSuccess(true);

        // Reset form after success
        setTimeout(() => {
            setShowSuccess(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setSelectedAmount(1000);
            setCustomAmount('');
        }, 3000);
    };

    const handlePaymentError = (error: string) => {
        console.error('Payment error:', error);
        // You can show an error message here
    };

    const handlePaymentCancel = () => {
        setShowPaymentProcessor(false);
    };

    const getCurrentAmount = () => {
        return selectedAmount || parseInt(customAmount) || 0;
    };

    return (
        <section id="donation" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HeartIcon className="h-8 w-8 text-white" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Support Our Mission
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Your generous donation helps us continue our work in innovation, sustainability,
                        and community development. Every contribution makes a difference.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Donation Form */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>

                        {/* Amount Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-4">
                                Select Amount (BDT)
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {donationAmounts.map((amount) => (
                                    <motion.button
                                        key={amount.label}
                                        onClick={() => handleAmountSelect(amount)}
                                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${(amount.isCustom && selectedAmount === 0) ||
                                                (!amount.isCustom && selectedAmount === amount.value)
                                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="font-semibold">{amount.label}</span>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Custom Amount Input */}
                            {(selectedAmount === 0 || customAmount) && (
                                <motion.div
                                    className="mt-4"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Custom Amount (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter amount"
                                        min="1"
                                    />
                                </motion.div>
                            )}
                        </div>

                        {/* Personal Information */}
                        <div className="space-y-4 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Share why you're donating..."
                                />
                            </div>
                        </div>

                        {/* Proceed to Payment Button */}
                        <motion.button
                            onClick={handleProceedToPayment}
                            className="w-full py-4 px-6 rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Proceed to Secure Payment - ৳{getCurrentAmount().toLocaleString()}
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Impact Stats */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">৳2.5M+</div>
                                    <div className="text-blue-100">Total Raised</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">15K+</div>
                                    <div className="text-blue-100">Donors</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">50+</div>
                                    <div className="text-blue-100">Projects Funded</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">100%</div>
                                    <div className="text-blue-100">Transparent</div>
                                </div>
                            </div>
                        </div>

                        {/* How Your Donation Helps */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Your Donation Helps</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Innovation Projects</h4>
                                        <p className="text-gray-600 text-sm">Support cutting-edge research and development initiatives</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Community Development</h4>
                                        <p className="text-gray-600 text-sm">Fund local community programs and educational initiatives</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Sustainability Programs</h4>
                                        <p className="text-gray-600 text-sm">Support environmental conservation and green technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Donors Say</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <p className="text-gray-600 italic mb-2">
                                        "I'm proud to support such meaningful initiatives. The transparency and impact are incredible."
                                    </p>
                                    <p className="text-sm text-gray-500">- Sarah Ahmed, Monthly Donor</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <p className="text-gray-600 italic mb-2">
                                        "Knowing exactly where my donation goes gives me confidence in supporting this organization."
                                    </p>
                                    <p className="text-sm text-gray-500">- Mohammad Rahman, Corporate Partner</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Payment Processor Modal */}
                <AnimatePresence>
                    {showPaymentProcessor && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="w-full max-w-2xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                <PaymentProcessor
                                    amount={getCurrentAmount()}
                                    currency="৳"
                                    onSuccess={handlePaymentSuccess}
                                    onError={handlePaymentError}
                                    onCancel={handlePaymentCancel}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Success Modal */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircleIcon className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                <p className="text-gray-600 mb-6">
                                    Your donation of ৳{getCurrentAmount().toLocaleString()} has been processed successfully.
                                    You will receive a confirmation email shortly.
                                </p>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Continue
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Donation; 