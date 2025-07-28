import {
    BanknotesIcon,
    CheckCircleIcon,
    CreditCardIcon,
    ExclamationTriangleIcon,
    LockClosedIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface PaymentProcessorProps {
    amount: number;
    currency: string;
    onSuccess: (paymentId: string) => void;
    onError: (error: string) => void;
    onCancel: () => void;
}

interface PaymentMethod {
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    description: string;
    type: 'card' | 'mobile_money' | 'bank_transfer';
    isPopular?: boolean;
}

const paymentMethods: PaymentMethod[] = [
    {
        id: 'bkash',
        name: 'bKash',
        icon: BanknotesIcon,
        description: 'Fast and secure mobile banking',
        type: 'mobile_money',
        isPopular: true
    },
    {
        id: 'nagad',
        name: 'Nagad',
        icon: BanknotesIcon,
        description: 'Digital financial service',
        type: 'mobile_money'
    },
    {
        id: 'rocket',
        name: 'Rocket',
        icon: BanknotesIcon,
        description: 'Dutch-Bangla Bank mobile banking',
        type: 'mobile_money'
    },
    {
        id: 'visa',
        name: 'Visa/Mastercard',
        icon: CreditCardIcon,
        description: 'International credit/debit card',
        type: 'card'
    },
    {
        id: 'bank_transfer',
        name: 'Bank Transfer',
        icon: BanknotesIcon,
        description: 'Direct bank transfer',
        type: 'bank_transfer'
    }
];

const CardPaymentForm: React.FC<{
    amount: number;
    currency: string;
    onSuccess: (paymentId: string) => void;
    onError: (error: string) => void;
}> = ({ amount, currency, onSuccess, onError }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
            setError('Please fill in all card details');
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            // Simulate card payment processing
            setTimeout(() => {
                setIsProcessing(false);
                onSuccess(`card_payment_${Date.now()}`);
            }, 2000);
        } catch (err) {
            setError('Payment processing failed. Please try again.');
            onError('Payment processing failed. Please try again.');
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Information
                </label>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Card Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        maxLength={19}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength={5}
                        />
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="CVV"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength={4}
                        />
                    </div>
                    <input
                        type="text"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                        placeholder="Cardholder Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {error && (
                <motion.div
                    className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                    <span className="text-red-700 text-sm">{error}</span>
                </motion.div>
            )}

            <motion.button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                whileHover={!isProcessing ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isProcessing ? { scale: 0.98 } : {}}
            >
                {isProcessing ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Payment...</span>
                    </div>
                ) : (
                    `Pay ${currency} ${amount.toLocaleString()}`
                )}
            </motion.button>
        </form>
    );
};

const MobileMoneyPayment: React.FC<{
    method: PaymentMethod;
    amount: number;
    currency: string;
    onSuccess: (paymentId: string) => void;
    onError: (error: string) => void;
}> = ({ method, amount, currency, onSuccess, onError }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phoneNumber) {
            setError('Please enter your phone number');
            return;
        }

        setIsProcessing(true);
        setError(null);

        // Simulate mobile money payment processing
        setTimeout(() => {
            setIsProcessing(false);
            // In a real implementation, you would integrate with the mobile money provider's API
            onSuccess(`mobile_${method.id}_${Date.now()}`);
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {method.name} Phone Number
                </label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={`Enter your ${method.name} number`}
                    required
                />
            </div>

            {error && (
                <motion.div
                    className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                    <span className="text-red-700 text-sm">{error}</span>
                </motion.div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-blue-900">Secure Payment</h4>
                        <p className="text-sm text-blue-700">
                            You will receive an SMS with a verification code. Enter the code to complete your payment.
                        </p>
                    </div>
                </div>
            </div>

            <motion.button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                whileHover={!isProcessing ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isProcessing ? { scale: 0.98 } : {}}
            >
                {isProcessing ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                    </div>
                ) : (
                    `Pay ${currency} ${amount.toLocaleString()} with ${method.name}`
                )}
            </motion.button>
        </form>
    );
};

const BankTransferPayment: React.FC<{
    amount: number;
    currency: string;
    onSuccess: (paymentId: string) => void;
    onError: (error: string) => void;
}> = ({ amount, currency, onSuccess, onError }) => {
    const [reference, setReference] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!reference) {
            return;
        }

        setIsProcessing(true);

        // Simulate bank transfer processing
        setTimeout(() => {
            setIsProcessing(false);
            onSuccess(`bank_transfer_${Date.now()}`);
        }, 1500);
    };

    return (
        <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Bank Transfer Details</h4>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Bank Name:</span>
                        <span className="font-semibold">Sonali Bank</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-semibold">InnovateCorp Foundation</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-semibold">1234567890</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Routing Number:</span>
                        <span className="font-semibold">200123456</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold">{currency} {amount.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Transaction Reference
                    </label>
                    <input
                        type="text"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your bank transfer reference"
                        required
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${isProcessing
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                        }`}
                    whileHover={!isProcessing ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isProcessing ? { scale: 0.98 } : {}}
                >
                    {isProcessing ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                        </div>
                    ) : (
                        'Confirm Transfer'
                    )}
                </motion.button>
            </form>
        </div>
    );
};

const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
    amount,
    currency,
    onSuccess,
    onError,
    onCancel
}) => {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

    const handleMethodSelect = (method: PaymentMethod) => {
        setSelectedMethod(method);
    };

    const renderPaymentForm = () => {
        if (!selectedMethod) return null;

        switch (selectedMethod.type) {
            case 'card':
                return (
                    <CardPaymentForm
                        amount={amount}
                        currency={currency}
                        onSuccess={onSuccess}
                        onError={onError}
                    />
                );
            case 'mobile_money':
                return (
                    <MobileMoneyPayment
                        method={selectedMethod}
                        amount={amount}
                        currency={currency}
                        onSuccess={onSuccess}
                        onError={onError}
                    />
                );
            case 'bank_transfer':
                return (
                    <BankTransferPayment
                        amount={amount}
                        currency={currency}
                        onSuccess={onSuccess}
                        onError={onError}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Secure Payment</h3>
                <div className="flex items-center space-x-2 text-green-600">
                    <LockClosedIcon className="h-5 w-5" />
                    <span className="text-sm font-semibold">SSL Secured</span>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="text-2xl font-bold text-gray-900">
                        {currency} {amount.toLocaleString()}
                    </span>
                </div>
            </div>

            {!selectedMethod ? (
                <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Select Payment Method</h4>
                    <div className="space-y-3">
                        {paymentMethods.map((method) => (
                            <motion.div
                                key={method.id}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${selectedMethod?.id === method.id
                                    ? 'border-blue-600 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                    }`}
                                onClick={() => handleMethodSelect(method)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <method.icon className="h-6 w-6 text-gray-600" />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <span className="font-semibold text-gray-900">{method.name}</span>
                                                {method.isPopular && (
                                                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600">{method.description}</p>
                                        </div>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border-2 ${selectedMethod?.id === method.id
                                        ? 'border-blue-600 bg-blue-600'
                                        : 'border-gray-300'
                                        }`}>
                                        {selectedMethod?.id === method.id && (
                                            <CheckCircleIcon className="w-5 h-5 text-white" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="font-semibold text-gray-900">Payment with {selectedMethod.name}</h4>
                        <button
                            onClick={() => setSelectedMethod(null)}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                            Change Method
                        </button>
                    </div>
                    {renderPaymentForm()}
                </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <ShieldCheckIcon className="h-4 w-4" />
                    <span>Your payment information is encrypted and secure</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentProcessor; 