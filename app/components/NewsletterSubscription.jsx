'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '../../api/services/homeService';

export default function NewsletterSubscription({ variant = 'full', colors: initialColors }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [colors] = useState({
        primary: initialColors?.primary || '#22c55e',
        secondary: initialColors?.secondary || '#16a34a'
    });

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email.trim());
    };

    const handleSubscription = async (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setMessage('Please enter your email address');
            setType('error');
            return;
        }

        if (!isValidEmail(trimmedEmail)) {
            setMessage('Please enter a valid email address');
            setType('error');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const data = await subscribeToNewsletter(trimmedEmail);

            if (data.rs === 1) {
                setMessage(data.res?.ResponseMessage || 'Successfully subscribed to newsletter!');
                setType('success');
                setEmail('');
            } else {
                const responseMsg = data.res?.ResponseMessage || 'Subscription failed. Please try again.';

                if (responseMsg.toLowerCase().includes('already subscribed')) {
                    setMessage('This email is already subscribed to our newsletter.');
                    setType('info');
                } else {
                    setMessage(responseMsg);
                    setType('error');
                }
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setMessage('Something went wrong. Please try again.');
            setType('error');
        } finally {
            setIsLoading(false);
        }
    };

    // Inline styles with dynamic CSS variables
    const dynamicStyles = `
        .newsletter-container {
            --primary-color: ${colors.primary};
            --secondary-color: ${colors.secondary};
            --primary-color-10: ${colors.primary}1A;
            --primary-color-20: ${colors.primary}33;
        }
        .newsletter-gradient-bg {
            background: linear-gradient(to right, var(--primary-color-10), var(--primary-color-20));
        }
        .newsletter-btn-bg {
            background-color: var(--primary-color);
        }
        .newsletter-btn-hover:hover {
            background-color: var(--secondary-color);
        }
        .newsletter-btn-disabled:disabled {
            background-color: var(--primary-color);
            opacity: 0.6;
        }
        .newsletter-btn-focus:focus {
            ring-color: var(--primary-color);
        }
    `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />

            {variant === 'compact' ? (
                <div className="w-full max-w-md mx-auto newsletter-container">
                    {message && (
                        <div className={`mb-3 p-3 rounded text-sm ${type === 'success'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : type === 'info'
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-red-100 text-red-700 border border-red-200'
                            }`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubscription} className="flex gap-0">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Type your Email"
                            required
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 newsletter-focus-ring focus:border-transparent text-gray-700 placeholder-gray-400 text-sm disabled:bg-gray-100"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="newsletter-btn-bg newsletter-btn-hover newsletter-btn-disabled text-white font-medium px-6 py-2.5 rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 newsletter-btn-focus text-sm disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                </div>
            ) : (
                <div className="w-full newsletter-gradient-bg py-12 px-6 newsletter-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Subscribe to our Newsletter
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Stay updated with the latest news and updates from the agricultural world.
                            </p>

                            {message && (
                                <div className={`mb-4 p-4 rounded-lg ${type === 'success'
                                    ? 'bg-green-100 text-green-700 border border-green-200'
                                    : type === 'info'
                                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                        : 'bg-red-100 text-red-700 border border-red-200'
                                    }`}>
                                    {message}
                                </div>
                            )}

                            <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    disabled={isLoading}
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 newsletter-focus-ring focus:border-transparent text-gray-700 placeholder-gray-400 disabled:bg-gray-100"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="newsletter-btn-bg newsletter-btn-hover newsletter-btn-disabled text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 newsletter-btn-focus focus:ring-offset-2 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
