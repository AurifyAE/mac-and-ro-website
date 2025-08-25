import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/homepage/logo.svg';
import send from '../assets/homepage/send.svg';
import googlePlay from '../assets/homepage/googlePlay.png';
import appStore from '../assets/homepage/appStore.png';
import { Link } from 'react-router-dom';
import visa from '../assets/homepage/visa.svg';
import mastercard from '../assets/homepage/mastercard.svg';
import bankTransfer from '../assets/homepage/bankTransfer.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && privacyChecked) {
        // Handle newsletter subscription
        console.log('Subscribing:', email);
        }
    };

    return (
        <footer className="text-black border-t border-gray-800">
        {/* First Section */}
        <section className="py-16 bg-[#F1F0E8]">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1 - About Us */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <h3 className="text-lg font-bold mb-6 text-black">About Us</h3>
                <ul className="space-y-3">
                    <li><Link to="/who-we-are" className="text-black hover:text-[#DCBC7C] transition-colors">Who We Are</Link></li>
                    <li><Link to="/metal-accounts" className="text-black hover:text-[#DCBC7C] transition-colors">Metal Account</Link></li>
                    <li><Link to="/products" className="text-black hover:text-[#DCBC7C] transition-colors">Products</Link></li>
                    <li><Link to="/contact" className="text-black hover:text-[#DCBC7C] transition-colors">Contact</Link></li>
                </ul>
                </motion.div>

                {/* Column 2 - Info */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                >
                <h3 className="text-lg font-bold mb-6 text-black">Info</h3>
                <ul className="space-y-3">
                    <li><Link to="/terms-and-conditions" className="text-black hover:text-[#DCBC7C] transition-colors">Terms & Conditions</Link></li>
                    <li><Link to="/corporate-governance" className="text-black hover:text-[#DCBC7C] transition-colors">Corporate Governance</Link></li>
                    <li><Link to="/privacy-policy" className="text-black hover:text-[#DCBC7C] transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/faq" className="text-black hover:text-[#DCBC7C] transition-colors">FAQ</Link></li>
                </ul>
                </motion.div>

                {/* Column 3 - Newsletter */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                >
                <h3 className="text-lg font-bold mb-6 text-black">Subscribe to the Newsletter</h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 pr-16 bg-transparent text-black border-2 border-black rounded-full focus:outline-none focus:ring-2 placeholder:text-black/50 focus:ring-[#DCBC7C]"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-[#DCBC7C] text-black font-semibold rounded-full hover:bg-[#C4A76A] transition-colors flex items-center justify-center"
                    >
                        <img src={send} alt="Send" className="w-4 h-4" />
                    </button>
                    </div>
                    <div className="flex items-start space-x-3">
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={privacyChecked}
                        onChange={(e) => setPrivacyChecked(e.target.checked)}
                        className="mt-1 w-4 h-4 text-[#DCBC7C] bg-gray-800 border-gray-600 rounded focus:ring-[#DCBC7C]"
                        required
                    />
                    <label htmlFor="privacy" className="text-sm text-black leading-relaxed">
                        By sending this email I declare that I have read the{' '}
                        <Link to="/privacy-policy" className="text-[#DCBC7C] hover:underline">
                            privacy policy
                        </Link>
                    </label>
                    </div>
                </form>
                </motion.div>
            </div>
            </div>
        </section>

        {/* Second Section */}
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1 - Logo & Code */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                {/* Logo */}
                <div className="mb-4">
                    <img src={logo} alt="Mac & Ro Logo" className="h-12" />
                </div>
                
                {/* Professional Operator Code */}
                <p className="text-[13px] text-black">
                    Professional Operator Code Gold 24378
                </p>

                <p className="text-[13px] text-black">
                    VAT number 104904019700003
                </p>
                
                {/* Secure Payments */}
                <div>
                    <p className="text-[13px] text-black mb-3">Download App</p>
                    <div className="flex space-x-3">
                    <div className="w-24 h-auto bg-white rounded">
                        <a href="https://play.google.com/store/apps">
                            <img src={googlePlay} alt="Google Play" className="w-24 h-8" />
                        </a>
                    </div>
                    <div className="w-24 h-auto bg-white rounded">
                        <a href="https://apps.apple.com/us/app">
                            <img src={appStore} alt="App Store" className="w-24 h-8" />
                        </a>
                    </div>
                    </div>
                </div>
                </motion.div>

                {/* Column 2 - Dubai Address & Social */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                {/* Dubai Address */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Dubai:</h4>
                    <p className="text-black text-[13px] leading-relaxed">
                    MAC & RO CAPITAL FZC, <br />
                    Saif Suite - Gold Park, Q1-1-027 Sharjah <br />
                    Tel: +971 50 4815 553 <br />
                    info@mac-ro-capital.com
                    </p>
                </div>
                
                {/* Social Icons */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Social Media</h4>
                    <div className="flex space-x-4">
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    </div>
                </div>
                </motion.div>

                {/* Column 3 - Two Addresses */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                {/* First Address */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Head Office:</h4>
                    <p className="text-black text-[13px] leading-relaxed">
                    MAC & RO SRL <br />
                    Via dei Mocenigo 9, 73100 Lecce, Italy. <br />
                    Tel: +39 392 294 7569 <br />
                    Professional Operator Code Gold 5010277
                    </p>
                </div>
                
                {/* Second Address */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Brazzaville:</h4>
                    <p className="text-black text-[13px] leading-relaxed">   
                    MAC & RO BRAZZAVILLE SARLU, <br />
                    116 Avenue Felix Eboue Mpila Center -<br/> 
                    Ville Brazzaville. <br />
                    
                    </p>
                </div>
                </motion.div>
            </div>
            </div>
        </section>

        {/* Copyright */}
        <div className="bg-black py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Copyright */}
                    <div>
                        <p className="text-white text-[13px]">
                            © 2025 Mac & Ro. All rights reserved.
                        </p>
                    </div>
                    
                    {/* Payment Methods */}
                    <div className="flex items-center space-x-2">
                        <img src={visa} alt="Visa" className="w-12 h-6 object-cover rounded-md grayscale" />
                        <img src={mastercard} alt="MasterCard" className="w-12 h-6 object-cover rounded-md grayscale" />
                        <img src={bankTransfer} alt="Bank Transfer" className="w-12 h-6 object-cover rounded-md grayscale" />
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
