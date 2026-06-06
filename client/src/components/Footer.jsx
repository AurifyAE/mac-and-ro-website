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
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const [email, setEmail] = useState('');
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && privacyChecked) {
            const subject = encodeURIComponent('Newsletter Subscription');
            const body = encodeURIComponent(`Please subscribe the following email to the newsletter:\n\n${email}`);
            const mailto = `mailto:info@mac-ro-capital.com?subject=${subject}&body=${body}`;
            window.location.href = mailto;
        }
    };

    return (
        <footer className="text-black border-t border-gray-800">
        {/* First Section */}
        <section className="py-5 md:py-16 bg-[#F1F0E8]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    
                    {/* Column 1 - About Us */}
                    <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    >
                    <h3 className="text-lg font-bold mb-6 text-black">{t('footer.aboutUs')}</h3>
                    <ul className="space-y-3">
                        <li><Link to="/who-we-are" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.whoWeAre')}</Link></li>
                        <li><Link to="/metal-accounts" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.metalAccount')}</Link></li>
                        <li><Link to="/products" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.products')}</Link></li>
                        <li><Link to="/contact" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.contact')}</Link></li>
                    </ul>
                    </motion.div>

                    {/* Column 2 - Info */}
                    <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    >
                    <h3 className="text-lg font-bold mb-6 text-black">{t('footer.info')}</h3>
                    <ul className="space-y-3">
                        <li><Link to="/terms-and-conditions" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.termsAndConditions')}</Link></li>
                        <li><Link to="/corporate-governance" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.corporateGovernance')}</Link></li>
                        <li><Link to="/privacy-policy" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.privacyPolicy')}</Link></li>
                        <li><Link to="/faq" className="text-sm md:text-base text-black hover:text-[#DCBC7C] transition-colors">{t('footer.faq')}</Link></li>
                    </ul>
                    </motion.div>

                    {/* Column 3 - Newsletter */}
                    <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='col-span-2 md:col-span-1'
                    >
                    <h3 className="text-lg font-bold mb-6 text-black">{t('footer.subscribeNewsletter')}</h3>
                    <form onSubmit={handleSubscribe} className="space-y-4">
                        <div className="flex relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('footer.enterEmail')}
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
                            {t('footer.privacyDeclaration')}{' '}
                            <Link to="/privacy-policy" className="text-[#DCBC7C] hover:underline">
                                {t('footer.privacyPolicy')}
                            </Link>
                        </label>
                        </div>
                    </form>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Second Section */}
        <section className="py-5 md:py-16">
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
                    {t('footer.professionalOperatorCode')}
                </p>

                <p className="text-[13px] text-black">
                    {t('footer.vatNumber')}
                </p>
                
                {/* Secure Payments */}
                <div>
                    <p className="text-[13px] text-black mb-3">{t('footer.downloadApp')}</p>
                    <div className="flex items-center space-x-3">
                    <div className="tooltip-container">
                        <div className="w-24 h-auto bg-white rounded relative group cursor-pointer">
                            <Link 
                                to="https://play.google.com/store/apps/details?id=com.orovivo.app"
                                className="block"
                                target='_blank'
                            >
                                <img src={googlePlay} alt="Google Play" className="w-24 h-auto" />
                            </Link>
                        </div>
                    </div>
                    <div className="tooltip-container">
                        <div className="w-24 h-auto bg-white rounded relative group cursor-pointer">
                            <Link
                                to="https://apps.apple.com/us/app/orovivo/id6759100030"
                                className="block"
                                target="_blank"
                            >
                                <img src={appStore} alt="App Store" className="w-24 h-8" />
                            </Link>
                        </div>
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
                    <h4 className="text-lg font-semibold mb-3 text-black">{t('footer.dubai')}</h4>
                    <p className="text-black text-[13px] leading-relaxed">
                    MAC & RO CAPITAL FZC, <br />
                    Saif Suite - Gold Park, Q1-1-027 Sharjah <br />
                    Tel: +971 58 592 8981 <br />
                    info@mac-ro-capital.com
                    </p>
                </div>
                
                {/* Social Icons */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">{t('footer.socialMedia')}</h4>
                    <div className="flex space-x-4">
                    <Link to="https://www.instagram.com/mac_and_ro_capital_fzc" target="_blank" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </Link>
                    <Link to="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </Link>
                    <Link to="https://www.facebook.com/MacandroCapitalFzc" target="_blank" className="text-black hover:text-[#DCBC7C] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </Link>
                    <a href="#" className="text-black hover:text-[#DCBC7C] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.993 2.993 0 0 0-2.108-2.12C19.447 3.5 12 3.5 12 3.5s-7.447 0-9.39.566A2.993 2.993 0 0 0 .502 6.186C0 8.134 0 12.001 0 12.001s0 3.867.502 5.814a2.993 2.993 0 0 0 2.108 2.12c1.943.566 9.39.566 9.39.566s7.447 0 9.39-.566a2.993 2.993 0 0 0 2.108-2.12c.502-1.947.502-5.814.502-5.814s0-3.867-.502-5.815zM9.545 15.568V8.434l6.273 3.567-6.273 3.567z"/>
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
                    <h4 className="text-lg font-semibold mb-3 text-black">{t('footer.headOffice')}</h4>
                    <p className="text-black text-[13px] leading-relaxed">
                    MAC & RO SRL <br />
                    Via dei Mocenigo 9, 73100 Lecce, Italy. <br />
                    Tel: +39 392 294 7569 <br />
                    Professional Operator Code Gold 5010277
                    </p>
                </div>
                
                {/* Second Address */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">{t('footer.brazzaville')}</h4>
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
                            {t('footer.copyright')}
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
