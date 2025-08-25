import React from 'react'
import Hero from '../components/homePage/Hero'
import GoldInfo from '../components/homePage/GoldInfo'
import Accounts from '../components/homePage/Accounts'
import InfoOne from '../components/homePage/InfoOne'
import Features from '../components/homePage/Features'
import Cta from '../components/homePage/Cta'
import CreateAccountSteps from '../components/homePage/CreateAccountSteps'

export default function Homepage() {
    return (
        <div>
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
