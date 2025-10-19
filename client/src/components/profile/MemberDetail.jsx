import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileBanner from '../../assets/profile/profileBanner.svg';
import siteLogo from '../../assets/homepage/logo.svg';
import phoneIcon from '../../assets/profile/phone.svg';
import mailIcon from '../../assets/profile/mail.svg';
import whatsappIcon from '../../assets/profile/whatsapp.svg';
import shareIcon from '../../assets/profile/share.svg';
import instagram from '../../assets/profile/instagram.svg';
import facebook from '../../assets/profile/facebook.svg';
import globe from '../../assets/profile/globe.svg';
import download from '../../assets/profile/download.svg';
import mapPin from '../../assets/profile/map-pin.svg';
import { getInitials } from '../../data/teamMembers';

function MemberDetail({ name, role, email, phone, whatsapp, address, photo }) {
	return (
        <motion.div 
            className="min-h-screen flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main container */}
            <motion.div 
                className="w-full max-w-6xl mx-auto md:px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Back button for desktop */}
                <motion.div 
                    className="hidden md:block md:mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <Link to="/" className="text-sm text-white hover:text-gray-200">← Back to team</Link>
                </motion.div>
                
                {/* Content container */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-black md:rounded-2xl overflow-hidden">
                    {/* Left side - Full height image with text overlay */}
                    <motion.div 
                        className="relative h-screen max-h-[80vh] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Back button positioned on image - Mobile only */}
                        <motion.div 
                            className="absolute top-6 left-6 z-10 md:hidden"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <Link to="/" className="text-sm text-white hover:text-gray-200 bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">← Back to team</Link>
                        </motion.div>
                                 {photo ? (
                                     <img src={photo} alt={name} className="w-full lg:w-md h-full object-cover grayscale-100" />
                                 ) : (
                                     <div className="w-full h-full bg-[#fdedb9] text-[#f0c22c] flex items-center justify-center font-semibold text-6xl">
                                         {getInitials(name)}
                                     </div>
                                 )}
                                 {/* Gradient overlay for text readability */}
                                 <motion.div 
                                     className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
                                     initial={{ opacity: 0 }}
                                     animate={{ opacity: 1 }}
                                     transition={{ duration: 0.8, delay: 0.4 }}
                                 ></motion.div>
                                 {/* Text overlay positioned at bottom */}
                                 <motion.div 
                                     className="absolute bottom-6 left-6 max-w-sm text-white"
                                     initial={{ opacity: 0, y: 30 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.6, delay: 0.6 }}
                                 >
                                     <motion.h1 
                                         className="text-4xl font-bold"
                                         initial={{ opacity: 0, x: -20 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ duration: 0.5, delay: 0.7 }}
                                     >
                                         {name}
                                     </motion.h1>
                                     <motion.p 
                                         className="text-xl text-gray-200"
                                         initial={{ opacity: 0, x: -20 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ duration: 0.5, delay: 0.8 }}
                                     >
                                         {role}
                                     </motion.p>
                                 </motion.div>
                             </motion.div>
                            
                            {/* Right side - Logo, Location and Icons */}
                            <motion.div 
                                className="flex flex-col items-start md:items-center bg-black text-white pb-20 lg:pb-0 px-6 md:px-0"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {/* Logo */}
                                <motion.img 
                                    src={siteLogo} 
                                    alt="Logo" 
                                    className="h-20 lg:h-24 mb-4"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                />
                                
                                {/* Location */}
                                {address && (
                                    <motion.div 
                                        className="flex items-center gap-2 mb-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 }}
                                    >
                                        <img src={mapPin} alt="Location" className="h-5 w-5" />
                                        <span className="text-lg lg:text-2xl">{address}</span>
                                    </motion.div>
                                )}
                                
                                {/* 8 Icons in 2 rows of 4 - Ordered: phone, whatsapp, mail, instagram, facebook, globe, download, share */}
                                <motion.div 
                                    className="grid grid-cols-4 gap-4 place-items-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    {/* Row 1 */}
                                    {[
                                        { href: `tel:${phone}`, icon: phoneIcon, label: "Call", title: "Call" },
                                        whatsapp ? { href: `https://wa.me/${whatsapp.replace(/\D/g, '')}`, icon: whatsappIcon, label: "WhatsApp", title: "WhatsApp", external: true } : null,
                                        { href: `mailto:${email}`, icon: mailIcon, label: "Email", title: "Email" },
                                        { href: "#", icon: instagram, label: "Instagram", title: "Instagram" }
                                    ].map((item, index) => item ? (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={item.external ? "noreferrer" : undefined}
                                            aria-label={item.label}
                                            title={item.title}
                                            className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                        </motion.a>
                                    ) : (
                                        <div key={index} className="h-14 w-14 lg:h-16 lg:w-16"></div>
                                    ))}
                                    
                                    {/* Row 2 */}
                                    {[
                                        { href: "#", icon: facebook, label: "Facebook", title: "Facebook" },
                                        { href: "#", icon: globe, label: "Website", title: "Website" },
                                        { href: "#", icon: download, label: "Download", title: "Download" },
                                        { type: "button", icon: shareIcon, label: "Share", title: "Share" }
                                    ].map((item, index) => item.type === "button" ? (
                                        <motion.button
                                            key={index + 4}
                                            type="button"
                                            aria-label={item.label}
                                            title={item.title}
                                            onClick={() => {
                                                const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
                                                if (navigator.share) {
                                                    navigator.share({ title: `${name} – ${role}`, url: shareUrl }).catch(() => {});
                                                } else if (navigator.clipboard && shareUrl) {
                                                    navigator.clipboard.writeText(shareUrl).catch(() => {});
                                                }
                                            }}
                                            className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                        </motion.button>
                                    ) : (
                                        <motion.a
                                            key={index + 4}
                                            href={item.href}
                                            aria-label={item.label}
                                            title={item.title}
                                            className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>
                </div>
            </motion.div>
        </motion.div>
	);
}

export default MemberDetail;
