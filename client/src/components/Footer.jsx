import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/homepage/logo.svg';
import send from '../assets/homepage/send.svg';
import mastercard from '../assets/homepage/mastercard.jpeg';
import visa from '../assets/homepage/visa.svg';
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
            <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1 - About Us */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <h3 className="text-xl font-bold mb-6 text-[#DCBC7C]">About Us</h3>
                <ul className="space-y-3">
                    <li><a href="#" className="text-black hover:text-white transition-colors">Who We Are</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">Create an Account</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">Products</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">FAQ</a></li>
                </ul>
                </motion.div>

                {/* Column 2 - Info */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                >
                <h3 className="text-xl font-bold mb-6 text-[#DCBC7C]">Info</h3>
                <ul className="space-y-3">
                    <li><a href="#" className="text-black hover:text-white transition-colors">Sustainable Responsibility</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">Investment</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">Ingots</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">Sharia Compliance</a></li>
                    <li><a href="#" className="text-black hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
                </motion.div>

                {/* Column 3 - Newsletter */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                >
                <h3 className="text-xl font-bold mb-6 text-[#DCBC7C]">Subscribe to the Newsletter</h3>
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
                        By sending this email I declare that I have read the privacy policy
                    </label>
                    </div>
                </form>
                </motion.div>
            </div>
            </div>
        </section>

        {/* Second Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
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
                <p className="text-sm text-black">
                    Professional Operator Code Gold 5010277
                </p>

                <p className="text-sm text-black">
                    VAT number 05280070755 - REA number LE 355240
                </p>
                
                {/* Secure Payments */}
                <div>
                    <p className="text-sm text-black mb-3">Secure Payments</p>
                    <div className="flex space-x-3">
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                        <img src={mastercard} alt="Mastercard" className="w-12 h-12 filter grayscale" />
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                        <img src={visa} alt="Visa" className="w-12 h-12 filter grayscale" />
                    </div>
                    <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                        <img src={bankTransfer} alt="Bank Transfer" className="w-12 h-12 filter grayscale" />
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
                    <h4 className="text-lg font-semibold mb-3 text-[#DCBC7C]">Dubai Office</h4>
                    <p className="text-black text-sm leading-relaxed">
                    MAC & RO CAPITAL FZC, <br />
                    Saif Suite - Gold Park, Q1-1-027 Sharjah <br />
                    Tel: +39 392 294 7569 <br />
                    info@mac-ro-group.it
                    </p>
                </div>
                
                {/* Social Icons */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#DCBC7C]">Follow Us</h4>
                    <div className="flex space-x-4">
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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
                    <h4 className="text-lg font-semibold mb-3 text-[#DCBC7C]">Milan Office</h4>
                    <p className="text-black text-sm leading-relaxed">
                    MAC & RO SRL <br />
                    Via dei Mocenigo 9, 73100 Lecce, Italy. <br />
                    Tel: +39 392 294 7569 <br />
                    Professional Operator Code Gold 5010277
                    </p>
                </div>
                
                {/* Second Address */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#DCBC7C]">Zurich Office</h4>
                    <p className="text-black text-sm leading-relaxed">   
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
            <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white text-sm">
                © 2025 Mac & Ro. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
