import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import teamMember1 from '../assets/about/team-member-1.jpg';
import teamMember2 from '../assets/about/team-member-2.jpg';
import teamMember3 from '../assets/about/team-member-3.jpg';
import teamMember4 from '../assets/about/edward-bass.jpeg';
import goldRockLogo from '../assets/service/goldrocklogo.png';
import whoweHero from '../assets/about/whowe-hero.jpg';
import { useTranslation } from 'react-i18next';

const WhoWeAre = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  // Team data array
  // Note: First 4 members (ids 1-4) have images, rest (ids 5-8) don't have images
  const teamMembers = [
    {
      id: 1,
      name: t('whoWeAre.team.members.angelo.name'),
      role: t('whoWeAre.team.members.angelo.role'),
      description: t('whoWeAre.team.members.angelo.description'),
      image: teamMember2,
      hasImage: true
    },
    {
      id: 2,
      name: t('whoWeAre.team.members.ed.name'),
      role: t('whoWeAre.team.members.ed.role'),
      description: t('whoWeAre.team.members.ed.description'),
      image: teamMember4,
      hasImage: true
    },
    {
      id: 3,
      name: t('whoWeAre.team.members.pietro.name'),
      role: t('whoWeAre.team.members.pietro.role'),
      description: t('whoWeAre.team.members.pietro.description'),
      image: teamMember1,
      hasImage: true
    },
    {
      id: 4,
      name: t('whoWeAre.team.members.burak.name'),
      role: t('whoWeAre.team.members.burak.role'),
      description: t('whoWeAre.team.members.burak.description'),
      description2: t('whoWeAre.team.members.burak.description2'),
      description3: t('whoWeAre.team.members.burak.description3'),
      image: teamMember3,
      hasImage: true
    },
    {
      id: 5,
      name: t('whoWeAre.team.members.francesco.name'),
      role: t('whoWeAre.team.members.francesco.role'),
      description: t('whoWeAre.team.members.francesco.description'),
      hasImage: false
    },
    {
      id: 6,
      name: t('whoWeAre.team.members.elena.name'),
      role: t('whoWeAre.team.members.elena.role'),
      description: t('whoWeAre.team.members.elena.description'),
      hasImage: false
    },
    {
      id: 7,
      name: t('whoWeAre.team.members.valentina.name'),
      role: t('whoWeAre.team.members.valentina.role'),
      description: t('whoWeAre.team.members.valentina.description'),
      hasImage: false
    },
    {
      id: 8,
      name: t('whoWeAre.team.members.asmait.name'),
      role: t('whoWeAre.team.members.asmait.role'),
      description: t('whoWeAre.team.members.asmait.description'),
      hasImage: false
    }
  ];

  const renderMemberCard = (member) => (
    <div 
      key={member.id} 
      className={`rounded-4xl shadow-sm overflow-hidden ${
        member.id > 4 ? 'bg-black text-white' : 'bg-white'
      }`}
    >
      {member.hasImage && (
        <img 
          src={member.image} 
          alt={member.name}
          className="w-64 h-80 object-cover rounded-4xl mx-auto"
        />
      )}
      <div className="p-8 text-center">
        <h3 className={`text-xl font-bold mb-2 ${
          member.id > 4 ? 'text-white' : 'text-gray-900'
        }`}>
          {member.name}
        </h3>
        <p className="text-[#A78E52] font-semibold mb-3">{member.role}</p>
        <div>
          <p className={`text-sm leading-relaxed mb-2 ${
            member.id > 4 ? 'text-gray-300' : 'text-gray-600 text-justify'
          }`}>
            {member.description}
          </p>
          <p className={`text-sm leading-relaxed mb-2 ${
            member.id > 4 ? 'text-gray-300' : 'text-gray-600 text-justify'
          }`}>
            {member.description2 || ''}
          </p>
          <p className={`text-sm leading-relaxed mb-2 ${
            member.id > 4 ? 'text-gray-300' : 'text-gray-600 text-justify'
          }`}>
            {member.description3 || ''}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-white`} dir={isArabic ? 'rtl' : 'ltr'}>
      <SEO
        title="Digital Gold Account & Physical Investment | Mac & Ro Capital"
        description="Secure your wealth with Mac & Ro Capital. Open a digital gold account, invest in certified physical bullion, and benefit from expert Italian gold banking."
        keywords="Physical Gold Investment Dubai, Sharia-Compliant Gold Investment, Gold Bank UAE, Buy Physical Gold Online, Certified Gold Bars Investment, Digital Gold Account, Gold Accumulation Plan (PAC), Institutional Gold Vaulting, Precious Metals Trading, Gold Location Swap, Licensed Gold Bank, Secure Gold Storage Dubai, Italian Gold Banking Expertise, Transparent Gold Investment"
        url="https://mac-ro-capital.com/who-we-are"
      />
      {/* Header Section */}
      <section className="relative md:py-20 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Normal Image */}
            <img 
              src={whoweHero} 
              alt="Who We Are"
              className="w-full md:h-auto h-56 object-cover"
            />
            
            {/* Text Content - Positioned at bottom left of image with black background */}
            <div className="absolute bottom-0 left-0 text-left bg-black px-12 py-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A78E52] mb-2 md:mb-6 tracking-tight font-playfair">
                {t('whoWeAre.hero.title')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Paragraphs */}
      <section className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`${isArabic ? "text-right" : "text-left" } `}>
            <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
              {t('whoWeAre.intro.description1')}
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {t('whoWeAre.intro.description2')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-[#A78E52] mb-4 font-playfair">{t('whoWeAre.missionVision.mission.title')}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {t('whoWeAre.missionVision.mission.description')}
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-[#A78E52] mb-4 font-playfair">{t('whoWeAre.missionVision.vision.title')}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {t('whoWeAre.missionVision.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Team Header */}
          <div className={`${isArabic ? "text-right" : "text-left"}  mb-16`}>
            <h2 className="text-4xl font-bold text-[#A78E52] mb-6 font-playfair">{t('whoWeAre.team.title')}</h2>
            <p className="text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
            {t('whoWeAre.team.description')}
            </p>
          </div>

          {/* Team Members Grid - Simple 2 column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teamMembers.map((member) => renderMemberCard(member))}
          </div>

          {/* Want to Work with Us Card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-4xl shadow-sm border-2 border-black p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4 font-playfair">{t('whoWeAre.careers.title')}</h3>
              <p className="text-black mb-4">{t('whoWeAre.careers.description')}</p>
              <a 
                href={`mailto:${t('whoWeAre.careers.email')}`} 
                className="text-black font-semibold text-lg hover:underline"
              >
                {t('whoWeAre.careers.email')}
              </a>
            </div>
          </div>

          {/* Our Distribution Partner Section */}
          <div className={`${isArabic ? "text-right" : "text-left"} mt-16 text-left`}>
            <h3 className="text-3xl font-bold text-[#A78E52] mb-6 font-playfair">{t('whoWeAre.partner.title')}</h3>
            <p className="text-sm md:text-base text-gray-700 mx-auto mb-8 leading-relaxed">
              {t('whoWeAre.partner.description')}
            </p>
            
            <div className="flex flex-row items-center justify-start space-x-6">
              {/* Partner Logo */}
              <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center border border-gray-200">
                <img 
                  src={goldRockLogo} 
                  alt="Gold Rock Capital Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              {/* Visit Link */}
              <a 
                href="https://goldrockcapital.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A78E52] font-semibold text-lg hover:underline hover:text-[#c59c6a] transition-all duration-300"
              >
                {t('whoWeAre.partner.visitLink')}
                <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
