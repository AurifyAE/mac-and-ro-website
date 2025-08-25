import React from 'react';
import FlipCards from './FlipCards';

const Accounts = () => {

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
                
                {/* Left-aligned Heading and Paragraph */}
                <div className="text-left mb-16">
                    <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed tracking-wide">
                        Mac & Ro Capital offers to all interested parties  different types of Metal Accounts and services to provide solutions dedicated to the different needs of the Physical Gold Investment Market. In addition to the classic Accumulation Plan for cyclical purchases on a monthly and quarterly basis, called PAC, we have launched the possibility of  taking advantage of additional targeted opportunities, suitable for specific investors. We promote a responsible wealth culture founded on stability, direct control, certified documentation, and full regulatory compliance. 
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
