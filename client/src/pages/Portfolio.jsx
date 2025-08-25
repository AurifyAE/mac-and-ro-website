import React from 'react';

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-playfair leading-tight mb-6">
                        Portfolio
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our investment portfolio and performance metrics
                    </p>
                </div>
            </section>

            {/* In Progress Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-12">
                        <div className="mb-6">
                            <svg 
                                className="w-16 h-16 text-yellow-500 mx-auto mb-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                            <h2 className="text-3xl font-bold text-yellow-800 mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-lg text-yellow-700 mb-6">
                                We're currently working on building our portfolio showcase. 
                                
                            </p>
                        </div>
                    </div>

                   
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
