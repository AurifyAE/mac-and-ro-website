import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  // Team data array
  const teamMembers = [
    {
      id: 1,
      name: "Eng. Pietro Piccinetti",
      role: "(Honorary President)",
      description: "A high-profile manager with a long international experience and a consolidated reputation, equipped with an extensive network of relationships, a remarkable curriculum and a solid expertise in internationalization and international negotiation activities, with strong capabilities in defining strategies that allow companies to relaunch and expand on the global market. With a proven experience in M&A, he has driven a significant rate of improvement in performance in mergers/corporate management. Familiar with the complexities of due diligence and company valuation, in his long career he has successfully faced the challenges of different corporate cultures in various industrial and Financial (PE) sectors. CEO of Infratel SpA – Infrastructure and Telecommunications for Italy. Vice President of the Italian Association of Fairs and Events.",
      image: "../../assets/about/team-member-1.jpg",
      hasImage: true
    },
    {
      id: 2,
      name: "Dr. Angelo Rossi",
      role: "(Chief Executive Officer)",
      description: "A highly skilled international manager in the precious metals field with a worldwide network of commercial relationships. He is the visionary driving force of the group, assisted by a team of top-level managers.",
      image: "../../assets/about/team-member-2.jpg",
      hasImage: true
    },
    {
      id: 3,
      name: "Dr. Francesco Mariano Mariano",
      role: "(Chief Financial Officer)",
      description: "An Italian banker gifted with a unique understanding of the international banking system. President of the Vis Foundation at Lecce, the non-profit entity managing the Campus of the University of Salento, in Lecce.",
      hasImage: false
    },
    {
      id: 4,
      name: "Dr. Sa Elena Actis",
      role: "(Compliance Officer)",
      description: "One of the best Institutional Relationships and Public Affair experts in Italy, President of Hydro Aid Association and a University's Professor at the European Institute of Design for Marketing and Strategic Communication course.",
      hasImage: false
    },
    {
      id: 5,
      name: "Mr. Ed Bass",
      role: " (Chief Executive Officer USA)",
      description: "He serves as President and Chief Financial Officer of Equitus Corporation and prior to that he was President of Xerox Business Solutions.",
      hasImage: false
    },
    {
      id: 6,
      name: "Miss Valentina Rossi",
      role: "(Chief Administration Officer)",
      description: "She is a former CRN's intern and today she oversees the administration of the Group",
      hasImage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Normal Image */}
            <img 
              src="../../assets/about/whowe-hero.jpg" 
              alt="Who We Are"
              className="w-full h-auto object-cover"
            />
            
            {/* Text Content - Positioned at bottom left of image with black background */}
            <div className="absolute bottom-0 left-0 text-left bg-black px-12 py-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A78E52] mb-6 tracking-tight font-playfair">
                Who we are?
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Paragraphs */}
      <section className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mac & Ro represents the pinnacle of excellence in precious metals investment and wealth management. 
              As a globally recognized firm with deep roots in Italian financial tradition, we combine centuries-old 
              expertise with cutting-edge technology to deliver exceptional value to our clients worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to transparency, regulatory compliance, and client success has positioned us as a trusted 
              partner for individuals and institutions seeking to diversify their portfolios with precious metals. 
              Through our innovative metal accounts and comprehensive investment solutions, we empower our clients 
              to build lasting wealth in an ever-changing financial landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-[#A78E52] mb-4 font-playfair">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to precious metals investments by providing innovative, 
                secure, and transparent financial solutions that empower individuals and 
                institutions to build lasting wealth through strategic diversification.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-[#A78E52] mb-4 font-playfair">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the global leader in precious metals investment solutions, 
                setting industry standards for innovation, client service, and regulatory 
                compliance while expanding access to wealth-building opportunities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Team Header */}
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold text-[#A78E52] mb-6 font-playfair">Our Team</h2>
            <p className="text-lg text-gray-700 mx-auto leading-relaxed">
            Our team combines decades of Italian gold banking expertise with Dubai's role as a global hub for precious metals. With specialists in finance, law, operations, and technology, we provide tailored solutions built on trust, integrity, and innovation.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className={`rounded-4xl shadow-sm overflow-hidden ${
                  member.id > 2 ? 'bg-black text-white' : 'bg-white'
                }`}
              >
                {member.hasImage && (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-contain rounded-4xl"
                  />
                )}
                <div className="p-8 text-center">
                  <h3 className={`text-xl font-bold mb-2 ${
                    member.id > 2 ? 'text-white' : 'text-gray-900'
                  }`}>
                    {member.name}
                  </h3>
                  <p className="text-[#A78E52] font-semibold mb-3">{member.role}</p>
                  <p className={`text-sm leading-relaxed ${
                    member.id > 2 ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Want to Work with Us Card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-4xl shadow-sm border-2 border-black p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4 font-playfair">Want to Work with Us?</h3>
              <p className="text-black mb-4">Send your resume at:</p>
              <a 
                href="mailto:info@mac-ro-capital.com" 
                className="text-black font-semibold text-lg hover:underline"
              >
                info@mac-ro-capital.com
              </a>
            </div>
          </div>

          {/* Our Distribution Partner Section */}
          <div className="mt-16 text-left">
            <h3 className="text-3xl font-bold text-[#A78E52] mb-6 font-playfair">Our Distribution Partner</h3>
            <p className="text-lg text-gray-700 mx-auto mb-8 leading-relaxed">
              Mac & Ro Capital proudly collaborates with Gold Rock Capital as our official distribution company. 
              This partnership ensures that our gold products and solutions are delivered with the same values we 
              stand for — security, transparency, and professionalism.
            </p>
            
            <div className="flex flex-row items-center justify-start space-x-6">
              {/* Partner Logo */}
              <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center border border-gray-200">
                <img 
                  src="../../assets/service/goldrocklogo.png" 
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
                Visit: Gold Rock Capital
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
