import React, { useState, useEffect } from 'react'
import Hero from '../components/homePage/Hero'
import GoldInfo from '../components/homePage/GoldInfo'
import Accounts from '../components/homePage/Accounts'
import InfoOne from '../components/homePage/InfoOne'
import Features from '../components/homePage/Features'
import Cta from '../components/homePage/Cta'
import CreateAccountSteps from '../components/homePage/CreateAccountSteps'
import AppPromoModal from '../components/AppPromoModal'

export default function Homepage() {
    const [showAppModal, setShowAppModal] = useState(false);

    useEffect(() => {
        // Check if user has seen the app modal recently
        const lastSeenModal = localStorage.getItem('lastSeenAppModal');
        
        // Show modal if never seen (localStorage will auto-expire after 30 minutes)
        if (!lastSeenModal) {
            const timer = setTimeout(() => {
                setShowAppModal(true);
            }, 2000); // 2 second delay

            return () => clearTimeout(timer);
        }
    }, []);

    // Hide modal when component unmounts (user navigates away from homepage)
    useEffect(() => {
        return () => {
            setShowAppModal(false);
        };
    }, []);

    const handleCloseAppModal = () => {
        setShowAppModal(false);
        // Set localStorage to expire after 30 minutes
        localStorage.setItem('lastSeenAppModal', 'true');
        
        // Auto-remove localStorage after 30 minutes
        setTimeout(() => {
            localStorage.removeItem('lastSeenAppModal');
        }, 30 * 60 * 1000); // 30 minutes
    };

    return (
        <div>
            <AppPromoModal isOpen={showAppModal} onClose={handleCloseAppModal} />
            <Hero />
            <GoldInfo />
            <Accounts />
            <InfoOne />
            <Cta />
            <Features />
            <CreateAccountSteps />            
        </div>
    )
}
