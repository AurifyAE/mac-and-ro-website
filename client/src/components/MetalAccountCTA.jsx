import React from 'react';
import goldBar from '../assets/metalAccount/gold-bar.png';

const MetalAccountCTA = ({title}) => {
    return (
        <section className="py-20 bg-black relative max-w-4xl mx-auto mb-20">
        {/* Background Image positioned at left -20px */}
        <div className="hidden lg:block absolute left-[-200px] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px]">
            <img src={goldBar} alt="Gold Bar" className="w-full h-full object-cover" />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DCBC7C] mb-8 tracking-tight font-playfair">
              {title}
            </h2>
            <button className="px-6 py-2 bg-transparent border-1 border-white hover:bg-white hover:text-black text-white font-semibold rounded-sm transition-all duration-300 text-base shadow-lg hover:shadow-xl">
              Book Consultant
            </button>
          </div>
        </div>
      </section>
    )
}

export default MetalAccountCTA;