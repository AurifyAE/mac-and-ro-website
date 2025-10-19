import React from 'react';
import { useTranslation } from 'react-i18next';
import profileBanner from '../../assets/profile/profileBanner.svg';
import siteLogo from '../../assets/homepage/logo.svg';
import { members } from '../../data/teamMembers';
import ProfileCard from './ProfileCard';

function TeamHome() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    
    return (
        <div className='bg-black h-auto'>
            <div className="w-full">
                <div className="mx-auto max-w-5xl px-6 py-6">
                    <div className="relative">
                        <img src={profileBanner} alt="Profiles banner" className="w-full h-36 object-cover rounded-t-xl border border-gray-200" />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <img src={siteLogo} alt="Logo" className="h-14" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 py-10">
                <h2 className="text-4xl font-bold text-[#A78E52] mb-10 font-playfair">{t('whoWeAre.team.title')}</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                    {members.map((m) => (
                        <ProfileCard key={m.slug} name={m.name} path={m.slug} role={m.role} photo={m.photo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamHome;
