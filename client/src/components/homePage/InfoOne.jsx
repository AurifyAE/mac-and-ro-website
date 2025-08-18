import React from 'react';
import bankCertified from '../../assets/homepage/bankCertified.jpg';
import bancaDitalia from '../../assets/homepage/banca-ditalia-logo.svg';
import oecd from '../../assets/homepage/oecd.svg';

const InfoOne = () => {
  const handleDownload = () => {
    // Create a link element for PDF download
    const link = document.createElement('a');
    link.href = '/document.pdf'; // Update with your actual PDF path
    link.download = 'Mac-Ro-Document.pdf';
    link.click();
  };

  return (
    <div className="bg-black w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={bankCertified} 
                alt="Information" 
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-white p-10">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-wide leading-snug">
                Metal Bank Certified by the Bank of Italy
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base lg:text-base mb-8 font-light tracking-wide leading-relaxed text-gray-300">
                Mac & Ro Capital FZC operates fully under Islamic Sharia principles—no commissions, no interest.
            </p>
            <p className="text-sm sm:text-base lg:text-base mb-8 font-light tracking-wide leading-relaxed text-gray-300">
                Regulatory compliance: Registered with Bank of Italy (code no. 5010277), follows OECD guidelines for responsible supply chains.
            </p>

            {/* Two Logos in Same Line */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center">
                <img 
                  src={bancaDitalia}
                  alt="Logo 1" 
                  className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center">
                <img 
                  src={oecd} 
                  alt="Logo 2" 
                  className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>

            {/* Download Button */}
            <button 
              onClick={handleDownload}
              className="px-6 py-2 bg-white text-black hover:bg-black hover:text-white hover:border-white/50 border-2 rounded-lg transition-all duration-300 ease-in-out tracking-wide flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Get the Document</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOne;
