import React from 'react';
import FlipCards from './FlipCards';
import { useTranslation } from 'react-i18next';

const Accounts = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    return (
        <div className="bg-gray-50 md:py-20 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
                
                {/* Left-aligned Heading and Paragraph */}
                <div className={`${isArabic ? "text-right" : "text-left"} mb-16`} dir={isArabic ? 'rtl' : 'ltr'}>
                    <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        {t('homepage.accounts.title')}
                    </h2>
                    <p className="text-sm md:text-base text-justify md:text-left  text-gray-600 leading-relaxed tracking-wide">
                        {t('homepage.accounts.description')}
                    </p>
                </div>

                {/* Flip Cards Section */}
                <div className="mb-16">
                    <FlipCards />
                </div>
            </div>
        </div>
    );
};

export default Accounts;
