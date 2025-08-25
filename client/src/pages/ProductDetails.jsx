import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    // Find the product by ID
    const product = productsData.find(p => p.id === parseInt(productId));

    // If product not found, redirect to products page
    if (!product) {
        navigate('/products');
        return null;
    }

    // Get related products (excluding current product)
    const relatedProducts = productsData
        .filter(p => p.id !== parseInt(productId))
        .slice(0, 3);

    // Function to handle navigation to product details
    const handleShopNow = (productId) => {
        navigate(`/product/${productId}`);
    };

    // Function to handle email for product inquiry
    const handleEmailInquiry = (product) => {
        const subject = `Product Inquiry: ${product.name}`;
        const body = `Hello,\n\nI am interested in purchasing the following product:\n\nProduct: ${product.name}\nWeight: ${product.weight}\nLength: ${product.length}\nDiameter: ${product.diameter}\nThickness: ${product.thickness}\nFineness: ${product.fineness}\nCertification: ${product.certification}\n\nPlease provide me with more information about pricing, availability, and purchasing process.\n\nThank you.`;
        
        const mailtoLink = `mailto:info@mac-ro-capital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    // Function to handle contact sales email
    // const handleContactSales = (product) => {
    //     const subject = `Sales Inquiry: ${product.name}`;
    //     const body = `Hello Sales Team,\n\nI would like to discuss purchasing the following product:\n\nProduct: ${product.name}\nWeight: ${product.weight}\nLength: ${product.length}\nDiameter: ${product.diameter}\nThickness: ${product.thickness}\nFineness: ${product.fineness}\nCertification: ${product.certification}\n\nPlease contact me to discuss pricing, bulk orders, or any special requirements.\n\nThank you.`;
        
    //     const mailtoLink = `mailto:sales@macandrocapital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //     window.open(mailtoLink);
    // };

    return (
        <div className="min-h-screen bg-white">
            {/* Product Details Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Left Side - Product Image */}
                        <div className="order-2 lg:order-1 lg:col-span-1">
                            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                                <img 
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto max-w-md object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right Side - Product Details */}
                        <div className="order-1 lg:order-2 lg:col-span-2 p-6">
                            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
                                {product.name}
                            </h1>
                            
                            {/* Product Specifications */}
                            <div className="bg-gray-50 rounded-lg py-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                        <div className="text-left">
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide block mb-1">Weight</span>
                                            <span className="text-gray-900 font-bold text-base">{product.weight}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                        <div className="text-left">
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide block mb-1">Length</span>
                                            <span className="text-gray-900 font-bold text-base">{product.length}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                        <div className="text-left">
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide block mb-1">Diameter</span>
                                            <span className="text-gray-900 font-bold text-base">{product.diameter}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                        <div className="text-left">
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide block mb-1">Thickness</span>
                                            <span className="text-gray-900 font-bold text-base">{product.thickness}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                        <div className="text-left">
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide block mb-1">Fineness</span>
                                            <span className="text-gray-900 font-bold text-base">{product.fineness}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                        <div className="text-left">
                                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide block mb-1">Certification</span>
                                            <span className="text-gray-900 font-bold text-base">{product.certification}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => handleEmailInquiry(product)}
                                    className="flex-1 bg-transparent border-1 border-black text-black py-3 px-6 rounded-sm hover:bg-black hover:border-transparent hover:text-white transition-all duration-300 font-semibold"
                                >
                                    Shop Now
                                </button>
                                {/* <button 
                                    onClick={() => handleContactSales(product)}
                                    className="flex-1 bg-transparent border-2 border-[#DCBC7C] text-[#DCBC7C] py-3 px-6 rounded-sm hover:bg-[#DCBC7C] hover:text-white transition-all duration-300 font-semibold"
                                >
                                    Contact Sales
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* You May Also Prefer Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                            You May Also Prefer
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-60 bg-gray-100 flex items-center justify-center p-6">
                                    <img 
                                        src={relatedProduct.image} 
                                        alt={relatedProduct.name}
                                        className="w-60 h-auto object-contain"
                                    />
                                </div>
                                <div className="text-center p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        {relatedProduct.name}
                                    </h3>
                                    <button 
                                        onClick={() => handleShopNow(relatedProduct.id)}
                                        className="w-2/3 bg-transparent border-2 border-black text-black py-2 px-4 rounded-sm hover:bg-[#DCBC7C] hover:border-transparent hover:text-white transition-all duration-300"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;