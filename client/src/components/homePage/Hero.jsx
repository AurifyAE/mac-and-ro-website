import { motion } from 'framer-motion';
// Web-encoded H.264. The .mov originals are kept in the repo as masters but are not
// shipped: the hero was 20.2MB at 14.2Mbps for a 12s silent loop, which is broadcast
// master territory, not delivery.
import heroVideo1 from '../../assets/homepage/mac-hero-video1.web.mp4';
import heroVideo2 from '../../assets/homepage/hero-video2.web.mp4';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLazyVideo from '../../hooks/useLazyVideo';

const Hero = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    // Second video sits below the fold — don't fetch 8.7MB until it's approached.
    const secondVideoRef = useLazyVideo();

    // The old useEffect called .play() on both videos on mount. The `autoPlay`
    // attribute already does that for the hero, and forcing it on the second video
    // was what pulled its 8.7MB down during initial load.

    return (
        <>
        {/* First Hero Section */}
        <div className={`relative h-screen w-full overflow-hidden ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
            {/* Video Background.
                `poster` gives the browser something to paint immediately — it becomes
                the LCP element instead of the video itself, which was costing 1,520ms of
                render delay. See ASSETS-TODO.md step 2 for replacing this 20MB .mov with
                a web-encoded mp4.
                aria-hidden + no text fallback: this is decorative, and the old
                "Your browser does not support the video tag." string was being read into
                the accessibility tree and counted as page content. */}
            <video
            autoPlay
            muted
            loop
            playsInline
            poster="/video-posters/mac-hero-video1.webp"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo1}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<div className="relative z-10 flex items-center justify-center pb-40 h-full">
				<motion.div
					className={`text-white px-10 sm:px-12 lg:px-12 ${isArabic ? 'text-right' : 'text-left'}`}
					dir={isArabic ? 'rtl' : 'ltr'}
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
						{t('homepage.hero.title1')}
					</motion.h1>
					<motion.p
						className="text-2xl sm:text-3xl lg:text-4xl mb-8 font-light tracking-wide"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.25, duration: 0.5 }}
					>
						{t('homepage.hero.title2')}
					</motion.p>
					<motion.div
						className={`flex flex-col sm:flex-row gap-4 items-start md:items-center ${isArabic ? 'justify-end' : 'justify-start'}`}
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
							{t('homepage.hero.getStarted')}
						</button>
					</motion.div>
				</motion.div>
			</div>

            {/* Scroll Indicator */}
            <div className="absolute md:bottom-50 bottom-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center text-white">
                <span className="text-sm font-medium mb-2 tracking-wide">{t('homepage.hero.scrollDown')}</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
            </div>

            {/* Fade In Effect Top - Transition from first hero to second section */}
            <div className="absolute bottom-0 left-0 w-full z-10 h-60 bg-gradient-to-b from-transparent to-black"></div>
        </div>    

        {/* Second Video Section */}
        <div className={`relative w-full overflow-hidden bg-black ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
            {/* Content Section Above Video with Fade Effects */}
            <div className="relative z-20 bg-black">
                {/* Content Area */}
                <div className="py-10">
                    <div className={`max-w-6xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8 ${isArabic ? 'text-center' : 'text-center'}`} dir={isArabic ? 'rtl' : 'ltr'}>
						<motion.h2
							className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5 }}
						>
							{t('homepage.hero.secureEmpowered')}
						</motion.h2>
						<motion.p
							className="text-sm md:text-base text-justify md:text-center mb-8 font-light tracking-wide leading-relaxed"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ delay: 0.1, duration: 0.5 }}
						>
							{t('homepage.hero.description1')}
						</motion.p>
						<motion.p
							className="text-sm md:text-base text-justify md:text-center mb-8 font-light tracking-wide leading-relaxed"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							{t('homepage.hero.description2')}
						</motion.p>
                        <button 
                        onClick={() => {
                            navigate('/services');
                        }}
                        className="px-6 py-2 bg-transparent border border-white hover:bg-white hover:text-black hover:border-white/50 text-white font-semibold rounded-sm transition-colors duration-300 ease-in-out tracking-wide text-base">
                            {t('homepage.hero.knowMore')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Background */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                {/* Bottom Fade Out */}
                <div className="absolute top-0 left-0 w-full z-10 h-5 bg-gradient-to-t from-transparent to-black"></div>
                
                {/* Below the fold: no autoPlay + preload="none" means nothing is
                    fetched until useLazyVideo sees it approach the viewport. */}
                <video
                    ref={secondVideoRef}
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/video-posters/hero-video2.webp"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={heroVideo2}
                />

            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
            </div>
        </div>
        </>
    );
};

export default Hero;
