import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import angeloPhoto from '../assets/about/team-member-2.jpg';
import valentinaPhoto from '../assets/profile/valentina.jpg';
import asmaitPhoto from '../assets/profile/asmait.jpg';
import profileBanner from '../assets/profile/profileBanner.svg';
import siteLogo from '../assets/homepage/logo.svg';
import phoneIcon from '../assets/profile/phone.svg';
import mailIcon from '../assets/profile/mail.svg';
import whatsappIcon from '../assets/profile/whatsapp.svg';
import shareIcon from '../assets/profile/share.svg';
import phoneGray from '../assets/profile/phone-gray.svg';
import mailGray from '../assets/profile/mail-gray.svg';
import whatsappGray from '../assets/profile/whatsapp-gray.svg';
import mapPin from '../assets/profile/map-pin.svg';

const members = [
	{
		slug: 'angelo',
		name: 'Angelo Rossi',
		role: 'CEO',
		email: 'Angelo.rossi@mac-ro-capital.com',
		phone: '+971 585928981',
		whatsapp: '+971 585928981',
		address: 'Dubai, UAE',
        photo: angeloPhoto,
	},
    {
		slug: 'valentina',
		name: 'Valentina Rossi',
		role: 'Head of Administration',
		email: 'administration@mac-ro-capital.com',
		phone: '+971 50 660 2595',
		whatsapp: '+971 50 660 2595',
		address: 'Italy, EU',
		photo: valentinaPhoto,
	},
	{
		slug: 'asmait',
		name: 'Asmait F. Ghebrehiwet',
		role: 'Sales Manager',
		email: 'asmaitfutsumbrhan@gmail.com',
		phone: '+971 50 188 3042',
		whatsapp: '+971 50 188 3042',
		address: 'Dubai, UAE',
        photo: asmaitPhoto,
	},
];

function getInitials(name) {
    const parts = name.split(' ').filter(Boolean);
    const first = parts[0]?.[0] || '';
    const last = parts[parts.length - 1]?.[0] || '';
    return (first + last).toUpperCase();
}

function ProfileCard({ name, path, role, photo }) {
    return (
        <Link to={`/${path}`} className="block rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-md transition group bg-white/70 backdrop-blur-sm"> 
            <div className="flex items-center gap-4">
                {photo ? (
                    <img src={photo} alt={name} className="h-14 w-14 rounded-full object-cover border border-gray-200" />
                ) : (
                    <div className="h-14 w-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
                        {getInitials(name)}
                    </div>
                )}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-[#b9b07c] transition-colors">{name}</h3>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
                <span className="text-sm text-indigo-600">View →</span>
            </div>
        </Link>
    );
}

function TeamHome() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <div>
            <div className="w-full bg-amber-50">
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

function MemberDetail({ name, role, email, phone, whatsapp, address, photo }) {
	return (
        <div>
            <div className="w-full bg-amber-50">
                <div className="mx-auto max-w-5xl px-6 py-6">
                    <div className="relative">
                        <img src={profileBanner} alt="Profiles banner" className="w-full h-36 object-cover rounded-t-xl border border-gray-200" />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <img src={siteLogo} alt="Logo" className="h-14" />
                        </div>
                    </div>
                    <div className="-mt-28 ml-10 relative z-10">
                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">← Back to team</Link>
                        {photo ? (
                            <img src={photo} alt={name} className="mt-6 h-32 w-32 rounded-2xl object-cover border-4 border-white" />
                        ) : (
                            <div className="mt-3 h-32 w-32 rounded-2xl bg-[#fdedb9] text-[#f0c22c] flex items-center justify-center font-semibold text-xl">
                                {getInitials(name)}
                            </div>
                        )}
                        <h1 className="mt-3 text-3xl font-semibold">{name}</h1>
                        <p className="text-gray-600">{role}</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 pt-4 pb-8">
                <div className="grid gap-6 lg:grid-cols-3 items-start">
                    <div className="rounded-xl border border-gray-200 p-6 bg-white">
                        <div className="flex items-center gap-3">
                            <a href={`tel:${phone}`} aria-label="Call" title="Call" className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white hover:bg-neutral-900 transition">
                                <img src={phoneIcon} alt="Call" className="h-5 w-5" />
                            </a>
                            <a href={`mailto:${email}`} aria-label="Email" title="Email" className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white hover:bg-neutral-900 transition">
                                <img src={mailIcon} alt="Email" className="h-5 w-5" />
                            </a>
                            {whatsapp ? (
                                <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white hover:bg-neutral-900 transition">
                                    <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                                </a>
                            ) : null}
                            <button type="button" aria-label="Share" title="Share" onClick={() => {
                                const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
                                if (navigator.share) {
                                    navigator.share({ title: `${name} – ${role}`, url: shareUrl }).catch(() => {});
                                } else if (navigator.clipboard && shareUrl) {
                                    navigator.clipboard.writeText(shareUrl).catch(() => {});
                                }
                            }} className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white hover:bg-neutral-900 transition">
                                <img src={shareIcon} alt="Share" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 p-6 lg:col-span-2 bg-white">
                        
                        <div className="space-y-6 text-[#374151]">
                            
                            <p className="flex items-center gap-4">
                                <img src={phoneGray} alt="Mobile" className="h-6 w-6" />
                                <a className="text-[#374151] hover:underline" href={`tel:${phone}`}>{phone}</a>
                            </p>
                            <p className="flex items-center gap-4">
                                <img src={mailGray} alt="Email" className="h-6 w-6" />
                                <a className="text-[#374151] hover:underline" href={`mailto:${email}`}>{email}</a>
                            </p>
                            {whatsapp ? (
                                <p className="flex items-center gap-4">
                                    <img src={whatsappGray} alt="WhatsApp" className="h-6 w-6" />
                                    <a className="text-[#374151] hover:underline" href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{whatsapp}</a>
                                </p>
                            ) : null}
                            {address ? (
                                <p className="flex items-center gap-4">
                                    <img src={mapPin} alt="Location" className="h-6 w-6" />
                                    <span>{address}</span>
                                </p>
                            ) : null}
                        </div>
                    </div>
				</div>
			</div>
        </div>
	);
}

function MemberDetailRoute() {
	const { slug } = useParams();
	const member = members.find((m) => m.slug === slug);
	if (!member) {
		return (
			<div className="mx-auto max-w-3xl px-4 py-12">
				<Link to="/" className="text-sm text-gray-600 hover:text-gray-800">← Back to team</Link>
				<h1 className="mt-3 text-2xl font-semibold">Member not found</h1>
			</div>
		);
	}
	return <MemberDetail {...member} />;
}

function Profile() {
	return (
		<Routes>
			<Route index element={<TeamHome />} />
			<Route path=":slug" element={<MemberDetailRoute />} />
		</Routes>
	);
}

export default Profile;


