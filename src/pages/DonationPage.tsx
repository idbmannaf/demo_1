import {
    ArrowLeftIcon,
    CheckCircleIcon,
    HeartIcon
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import PaymentProcessor from '../components/UI/PaymentProcessor';

interface DonationAmount {
    value: number;
    label: string;
    isCustom?: boolean;
}

const DonationPage: React.FC = () => {
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
    };

    const handlePaymentCancel = () => {
        setShowPaymentProcessor(false);
    };

    const getCurrentAmount = () => {
        return selectedAmount || parseInt(customAmount) || 0;
    };

    const handleBackToHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <motion.header
                className="bg-white/95 backdrop-blur-md shadow-lg"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.button
                            onClick={handleBackToHome}
                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeftIcon className="h-5 w-5" />
                            <span className="font-semibold">Back to Home</span>
                        </motion.button>

                        <motion.div
                            className="text-2xl font-bold text-gray-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            InnovateCorp
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HeartIcon className="h-10 w-10 text-white" />
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Make a Difference Today
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Your generous donation helps us continue our work in innovation, sustainability,
                        and community development. Every contribution makes a real impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column - Donation Form */}
                    <motion.div
                        className="bg-white rounded-3xl shadow-2xl p-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Donation</h2>

                        {/* Amount Selection */}
                        <div className="mb-8">
                            <label className="block text-lg font-semibold text-gray-700 mb-4">
                                Select Amount (BDT)
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {donationAmounts.map((amount) => (
                                    <motion.button
                                        key={amount.label}
                                        onClick={() => handleAmountSelect(amount)}
                                        className={`p-6 rounded-xl border-2 transition-all duration-300 text-lg font-semibold ${(amount.isCustom && selectedAmount === 0) ||
                                            (!amount.isCustom && selectedAmount === amount.value)
                                            ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-lg'
                                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-md'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {amount.label}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Custom Amount Input */}
                            {(selectedAmount === 0 || customAmount) && (
                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                                        Custom Amount (BDT)
                                    </label>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                                        className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter amount"
                                        min="1"
                                    />
                                </motion.div>
                            )}
                        </div>

                        {/* Personal Information */}
                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="block text-lg font-semibold text-gray-700 mb-3">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-semibold text-gray-700 mb-3">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-semibold text-gray-700 mb-3">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-semibold text-gray-700 mb-3">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Share why you're donating..."
                                />
                            </div>
                        </div>

                        {/* Proceed to Payment Button */}
                        <motion.button
                            onClick={handleProceedToPayment}
                            className="w-full py-6 px-8 rounded-xl font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Proceed to Secure Payment - ৳{getCurrentAmount().toLocaleString()}
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Impact Stats */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white">
                            <h3 className="text-3xl font-bold mb-8">Your Impact</h3>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-3">৳2.5M+</div>
                                    <div className="text-blue-100 text-lg">Total Raised</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-3">15K+</div>
                                    <div className="text-blue-100 text-lg">Donors</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-3">50+</div>
                                    <div className="text-blue-100 text-lg">Projects Funded</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-3">100%</div>
                                    <div className="text-blue-100 text-lg">Transparent</div>
                                </div>
                            </div>
                        </div>

                        {/* How Your Donation Helps */}
                        <div className="bg-white rounded-3xl shadow-xl p-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">How Your Donation Helps</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Projects</h4>
                                        <p className="text-gray-600">Support cutting-edge research and development initiatives</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Development</h4>
                                        <p className="text-gray-600">Fund local community programs and educational initiatives</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Sustainability Programs</h4>
                                        <p className="text-gray-600">Support environmental conservation and green technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="bg-white rounded-3xl shadow-xl p-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Donors Say</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <p className="text-gray-600 italic mb-3 text-lg">
                                        "I'm proud to support such meaningful initiatives. The transparency and impact are incredible."
                                    </p>
                                    <p className="text-gray-500 font-semibold">- Sarah Ahmed, Monthly Donor</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <p className="text-gray-600 italic mb-3 text-lg">
                                        "Knowing exactly where my donation goes gives me confidence in supporting this organization."
                                    </p>
                                    <p className="text-gray-500 font-semibold">- Mohammad Rahman, Corporate Partner</p>
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
                                className="bg-white rounded-3xl p-10 max-w-md mx-4 text-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircleIcon className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Your donation of ৳{getCurrentAmount().toLocaleString()} has been processed successfully.
                                    You will receive a confirmation email shortly.
                                </p>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
                                >
                                    Continue
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DonationPage; 