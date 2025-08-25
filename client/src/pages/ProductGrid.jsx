import React from 'react';
import { useNavigate } from 'react-router-dom';
import productBanner from '../assets/service/product-banner.jpg';
import goldRockLogo from '../assets/service/goldrocklogo.png';
import { products } from '../data/products';
import whyInvest from '../assets/service/whyinvest.jpg';


const ProductGrid = () => {
    const navigate = useNavigate();

    // Function to handle navigation to product details
    const handleShopNow = (productId) => {
        navigate(`/product/${productId}`);
    };

    // Function to handle email for product inquiry
    // const handleEmailInquiry = (product) => {
    //     const subject = `Product Inquiry: ${product.name}`;
    //     const body = `Hello,\n\nI am interested in purchasing the following product:\n\nProduct: ${product.name}\nWeight: ${product.weight}\n\nPlease provide me with more information about pricing, availability, and purchasing process.\n\nThank you.`;
        
    //     const mailtoLink = `mailto:sales@macandrocapital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //     window.open(mailtoLink);
    // };

    return (
        <div className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative bg-cover bg-center bg-no-repeat h-96" 
                     style={{ backgroundImage: `url(${productBanner})` }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-white max-w-6xl px-6">
                        <h1 className="text-3xl sm:text-3xl lg:text-4xl text-[#DCBC7C] font-bold mb-6 leading-tight font-playfair">
                        Our Products
                        </h1>

                        <p className="text-base mb-4 leading-relaxed">
                        At Mac and Ro Capital, we craft premium-grade gold ingots with meticulous precision. 
                        Available in a range of sizes—from 1 gram to 1 kilogram—each piece is produced in 24K 
                        (999.9‰) purity and certified to LBMA standards.
                        </p>

                        <p className="text-base mb-4 leading-relaxed flex items-center">
                        Distributed in partnership with 
                        <img 
                            src={goldRockLogo} 
                            alt="Gold Rock Capital Logo" 
                            className="w-12 h-12 inline-block ml-2" 
                        /> 
                        <a href="https://goldrockcapital.eu" target="_blank" rel="noopener noreferrer" className="ml-2 text-base underline hover:text-[#c59c6a] transition-all duration-300">Gold Rock Capital</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                            Gold Casted Bars
                        </h2>
                        
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-60 bg-gray-100 flex items-center justify-center p-6">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-60 h-auto object-contain"
                                    />
                                </div>
                                <div className="text-center p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    <button 
                                        onClick={() => handleShopNow(product.id)}
                                        className="w-2/3 bg-transparent border-2 border-black text-black py-2 px-4 rounded-sm hover:bg-black hover:border-transparent hover:text-white transition-all duration-300"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image + Content Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="order-2 lg:order-1">
                            <img 
                                src={whyInvest}
                                alt="Precious Metals Investment"
                                className="w-full h-96 object-cover rounded-[42px] shadow-lg"
                            />
                        </div>
                        
                        {/* Right Side - Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
                                Why Invest in Gold?
                            </h2>
                            <p className="text-base text-gray-600 mb-6 leading-relaxed">
                                Gold bars are a timeless investment, valued for their ability to preserve wealth and provide financial security. Known for their stability, gold bars serve as a trusted hedge against inflation and currency fluctuations. Their global liquidity and consistent performance during periods of economic and geopolitical uncertainty make them a smart addition to any investment portfolio. Investing in gold bars not only enhances portfolio diversification but also offers a dependable way to safeguard your assets for the long term.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductGrid;
