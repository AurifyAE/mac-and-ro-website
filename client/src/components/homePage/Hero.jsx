import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroVideo1 from '../../assets/homepage/mac-hero-video1.mov';
import heroVideo2 from '../../assets/homepage/hero-video2.mp4';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const videoRef = useRef(null);
    const secondVideoRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
        }
        if (secondVideoRef.current) {
        secondVideoRef.current.play().catch(error => {
            console.log('Second video autoplay failed:', error);
        });
        }
    }, []);

    return (
        <>
        {/* First Hero Section */}
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            >
            <source src={heroVideo1} type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<div className="relative z-10 flex items-center justify-center pb-40 h-full">
				<motion.div
					className="text-left text-white px-10 sm:px-12 lg:px-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<motion.h1
						className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-tight"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
					>
						Secure Your Wealth with Physical Gold -
					</motion.h1>
					<motion.p
						className="text-2xl sm:text-3xl lg:text-4xl mb-8 font-light tracking-wide"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.25, duration: 0.5 }}
					>
						Trusted, Flexible Investment Solutions
					</motion.p>
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-start items-start md:items-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<button 
						onClick={() => {
							navigate('/contact');
						}}
						className="px-6 py-2 bg-transparent border border-white hover:bg-white hover:text-black hover:border-white/50 text-white font-semibold rounded-sm transition-colors duration-300 ease-in-out tracking-wide text-base"
						>
							Get Started Today
						</button>
					</motion.div>
				</motion.div>
			</div>

            {/* Scroll Indicator */}
            <div className="absolute md:bottom-50 bottom-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center text-white">
                <span className="text-sm font-medium mb-2 tracking-wide">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
            </div>

            {/* Fade In Effect Top - Transition from first hero to second section */}
            <div className="absolute bottom-0 left-0 w-full z-10 h-60 bg-gradient-to-b from-transparent to-black"></div>
        </div>    

        {/* Second Video Section */}
        <div className="relative w-full overflow-hidden bg-black">
            {/* Content Section Above Video with Fade Effects */}
            <div className="relative z-20 bg-black">
                {/* Content Area */}
                <div className="py-10">
                    <div className="max-w-6xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
						<motion.h2
							className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5 }}
						>
							Secure. Empowered. Global.
						</motion.h2>
						<motion.p
							className="text-sm sm:text-base mb-8 font-light tracking-wide leading-relaxed"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ delay: 0.1, duration: 0.5 }}
						>
							Mac & Ro capital FZC brings decades of Italian gold banking expertise to Dubai—one of the world’s leading hubs for physical precious metals. As a licensed Gold Bank in Italy, we now serve global clients through our Dubai entity with trusted, transparent, and world-class services.
						</motion.p>
						<motion.p
							className="text-sm sm:text-base mb-8 font-light tracking-wide leading-relaxed"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							We help individuals, families, businesses, and professional investors safeguard and grow their wealth through structured gold strategies. Operating independently and free from conflicts of interest, we ensure complete transparency, legal compliance, and operational integrity. From digital gold accounts to institutional-grade vaulting and physical bullion trading, Mac & Ro Capital FZC provides a seamless, secure, and innovative way to manage and grow your wealth with gold.
						</motion.p>
						<button 
                        onClick={() => {
                            navigate('/services');
                        }}
                        className="px-6 py-2 bg-transparent border border-white hover:bg-white hover:text-black hover:border-white/50 text-white font-semibold rounded-sm transition-colors duration-300 ease-in-out tracking-wide text-base">
                            Know More
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Background */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                {/* Bottom Fade Out */}
                <div className="absolute top-0 left-0 w-full z-10 h-5 bg-gradient-to-t from-transparent to-black"></div>
                
                <video
                    ref={secondVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={heroVideo2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
            </div>
        </div>
        </>
    );
};

export default Hero;
