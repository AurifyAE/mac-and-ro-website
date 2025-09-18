import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Mac & Ro Capital?",
      answer: "Mac &amp; Ro Capital FZC (www.mac-ro-capital.com ), is a Gold Trader and a Gold Services Provider. It is part of the Mac &amp; Ro Group (www.mac-ro-group.it). Beyond our local presence, Mac &amp; Ro Group is deeply rooted in the whole Gold Industry Chain, facilitating the acquisition and sale of investment-grade bullion bars and dorè."
    },
    {
      question: "Is Mac & Ro Capital authorized to operate in UAE?",
      answer: "Yes, Mac & Ro Capital FZC operates under the full authorization and regulation of the SAIF ZONE - SAIF GOLD PARK of Sharjah, holding all necessary licenses. We strictly comply with all UAE regulations governing precious metal trading, including robust Anti-Money Laundering (AML) and Know Your Customer (KYC) protocols to ensure a secure and compliant environment for all our clients."
    },
    {
      question: "What services I get from Mac & Ro Capital FZC?",
      answer: (
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Mac & Ro Capital FZC is your comprehensive partner for all precious
              metal endeavours, offering a diverse array of services meticulously
              crafted for individuals, small investors, and corporate entities alike.
              Our offerings span direct physical acquisition, industrial services, and
              specialized investment and partnership solutions:
            </p>
            <ul className="list-disc list-inside px-3 space-y-2">
              <li>
                <strong>Selling Gold/Precious Metals (Sharjah Office):</strong> You can
                directly purchase and acquire physical gold from our Sharjah office,
                where our expert team provides personalized service and consultation.
              </li>
              <li>
                <strong>Selling Gold (ONLINE PLATFORM):</strong> Our secure Capital
                Platform provides a convenient and streamlined digital channel to buy
                physical gold bars from the comfort of your home, with insured delivery
                options.
              </li>
              <li>
                <strong>ORO VIVO APP (Mobile Application):</strong> Engage in dynamic
                trading using our cutting-edge mobile app for gold trading, Location
                Swap, and much more — allowing you to buy and sell gold based on
                real-time market fluctuations and manage your holdings from your phone.
              </li>
              <li>
                <strong>Gold Saving Account:</strong> Designed for small investors,
                this service enables gradual accumulation of gold through flexible,
                regular contributions, with the option for physical redemption once a
                sufficient quantity is reached.
              </li>
              <li>
                <strong>Brokerage:</strong> We offer a dedicated brokerage channel,
                providing individuals and agents with the opportunity to generate
                revenue by referring clients to our comprehensive precious metal
                services.
              </li>
              <li>
                <strong>Corporate Client Services:</strong> Tailored solutions for
                businesses to efficiently manage and execute large-volume precious
                metal transactions, meeting specific investment and operational
                requirements.
              </li>
              <li>
                <strong>Bulk Gold Dealing:</strong> For significant acquisitions or
                sales, we facilitate bulk bullion trade, offering competitive pricing,
                secure logistics, and discreet service for large transactions.
              </li>
            </ul>
            <p>
              Whether you're looking to acquire physical gold, engage in active
              trading, build long-term savings, or explore business partnerships,
              Mac & Ro Capital FZC delivers a secure, transparent, and versatile
              environment for all your precious metal aspirations.
            </p>
          </div>
        )
    },
    {
      question: "What security measures are in place to safeguard my precious metals and funds?",
      answer: "We employ multi-layered security protocols to protect your assets. Physical gold holdings are secured in highly fortified, insured vaults. Our online platform utilizes advanced encryption and multi-factor authentication to secure your digital transactions and account access. All financial transfers adhere to stringent banking security standards."
    },
    {
      question: "How do you assure the authenticity and purity of the gold you buy?",
      answer: "Our commitment to quality is paramount. All gold bullion products we trade are directly sourced from reputable refiners and mints, and their authenticity and purity are guaranteed by their adherence to the stringent Dubai Good Delivery (DGD) or London Good Delivery (LGD) Standards. Each physical purchase comes with a verifiable certificate of authenticity."
    },
    {
      question: "How is my personal and financial information protected?",
      answer: "We adhere to strict data privacy principles. Your personal and financial information is handled with the utmost confidentiality, secured through robust technological safeguards, and processed in full compliance with UAE data protection regulations. We do not share your data with unauthorized third parties."
    },
    {
      question: "How to buy gold from Mac & Ro Capital FZC?",
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
          Our primary business is the <strong>sale of physical gold</strong>. We offer authentic precious metal bars to both individuals and companies at competitive prices.
          </p>
          <ul className="list-disc list-inside px-3 space-y-2">
            <li>
              <strong>At Our Physical Location:</strong>You are invited to visit our Sharjah office or store where our team can guide you through the process of purchasing gold, silver, or other precious metals in person.
            </li>
            <li>
              <strong>Through Our Online Bullion Store:</strong> Explore our selection of gold bars on our secure online bullion store. Once you&#39;ve chosen your desired items, complete your payment securely online or via bank transfer. We then arrange for fully insured, certified delivery directly to your doorstep within the UAE, complemented by our commitment to buy back your purchase at our prevailing acquisition price.
            </li>
            <li>
              <strong>Utilizing Our Online Trading Platform (Metal Account):</strong> Designed for clients keen on daily engagement, our online platform allows you to purchase gold at any moment, from any location. You retain the flexibility to sell your holdings back through the platform or request physical redemption of bullion bars at a later stage. We also facilitate bookings with a partial upfront deposit, with the remaining balance settled prior to delivery. Secure doorstep physical delivery within the UAE is also an available option.
            </li>
            <li>
              <strong>Operating by OROVIVO APP:</strong> With our state of art APP, all our clients can trade in real time with gold bullion, they can carry out Location Swaps, and much more.
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "What minimum quantity I can buy from Gold Trade?",
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            The minimum purchase quantities differ based on your chosen acquisition method:
          </p>
          <ul className="list-disc list-inside px-3 space-y-2">
            <li>
              <strong>Via Our Online Bullion Store:</strong> Our inventory includes gold in various standard denominations, ranging from 1 gram up to 1-kilogram bars and coins.
            </li>
            <li>
              <strong>Via Our OROVIVO APP:</strong> All clients can operate for any quantity all different types of trades.
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Can I sell the purchased gold or other precious metals back to Mac &amp; Ro Capital FZC?",
      answer: "Absolutely. Mac &amp; Ro Capital FZC maintains a robust buy-back program for all precious metals originally acquired from us. You can divest your holdings either through your online bullion account (if the metal is held with us) or by physically returning the commodity if it was in your direct custody. All buy-back transactions are processed at the prevailing international spot market prices."
    },
    {
      question: "On what price I can buy or sell gold?",
      answer: "When transacting on our online platform, your purchases and sales of precious metals are based on the real-time international spot market rates. These prices exhibit continuous fluctuations throughout the trading week, from Monday to Friday. Kindly note that our service charges or applicable commissions will be applied in addition to the displayed spot price."
    },
    {
      question: "Which brands are available at Mac &amp; Ro Capital FZC? Are they certified?",
      answer: "Mac &amp; Ro Capital FZC proudly offers a diverse range of esteemed global and prominent local bullion brands, including but not limited to Pamp, Credit Suisse, Chimet,Emirates Gold, Al Etihad Gold or Saif Zone Gold refineries. All our bullion products rigorously adhere to and are certified under either the Dubai Good Delivery (DGD) Standards or the London Good Delivery (LGD) Standards, guaranteeing their unparalleled authenticity and fineness."
    },
    {
      question: "What are the delivery specifics and associated costs for shipments within the UAE?",
      answer: "Within the UAE, we offer fully insured, secure doorstep delivery. Specific delivery charges depend on the value and weight of the order, and estimated delivery times will be provided at the point of purchase. Details are also available on our online bullion store&#39;s delivery information section."
    },
    {
      question: "Is it possible to collect my physical gold or silver directly from your office?",
      answer: "Absolutely. You are welcome to arrange for direct collection of your physical gold or silver from our Sharjah office. To ensure a smooth process, please schedule your collection in advance and bring valid identification documents for verification."
    },
    {
      question: "How is the insurance handled for physical deliveries?",
      answer: "Every physical delivery dispatched from Mac &amp; Ro Capital FZC is comprehensively insured against loss or damage until it reaches your specified delivery address and is signed for. This ensures peace of mind throughout the transit process."
    },
    {
      question: "Can Mac &amp; Ro Capital FZC deliver gold outside UAE also?",
      answer: "Yes, Mac & Ro Capital FZC extends its delivery services for gold bars and coins beyond the UAE's borders to most international destinations, provided they are not subject to global trade restrictions. Clients should anticipate applicable courier, insurance, and any potential customs charges."
    },
    {
      question: "Can I Store My Gold Securely and Receive It Later?",
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Yes, absolutely! We offer a truly <strong>unique and secure service</strong> that allows you to store your gold holdings electronically within our dedicated application. This means you can purchase gold from us and have it digitally represented in your account. You'll have <strong>no need for physical storage on your end, and you won't incur any storage expenses</strong>.
          </p>
          <p>
            What makes this service stand out is the robust security built into our electronic system. Your gold is always fully backed by physical reserves, ensuring its integrity and your peace of mind. When you're ready to take possession, you can simply <strong>request to receive your gold in kind</strong>, and we'll provide you with the equivalent physical bars. This service uniquely combines the convenience of digital management with the <strong>unwavering security</strong> of knowing your gold is always redeemable for its physical form.
          </p>
        </div>
      )
    },
    {
      question: "What specific documents are necessary to open a Metal Account or Gold Saving Account?",
      answer: "To open an account, we typically require a valid form of identification (e.g., passport or Emirates ID) and proof of address. Our online registration form or Bullion Purchase Agreement will list all precise requirements, ensuring a smooth onboarding process."
    },
    {
      question: "What is the procedure if I misplace my Metal Account login details?",
      answer: "Should you forget your login credentials, simply use the 'Forgot Password' link on our platform's login page. You'll be guided through a secure process to reset your password. Our customer support can also assist if you encounter any difficulties."
    },
    {
      question: "What are your customer service hours and available contact channels?",
      answer: "Our dedicated customer service team is available to assist you during 10:00 AM to 6:00 PM, Monday to Friday via phone at +971 …………….., email at info@mac-ro-capital.com"
    },
    {
      question: "Does VAT apply to the purchase or sale of gold in Dubai/UAE?",
      answer: "In the UAE, investment-grade gold (with a purity of 99.5% or higher, typically in bar or coin form) is generally zero-rated for VAT. This means no Value Added Tax is applied to its purchase or sale under current regulations. However, specific types of gold jewellery or gold with lower purity might be subject to VAT. We advise consulting with a tax professional for personalized advice."
    },
    {
      question: "Are there any other taxes or duties associated with gold trading in the UAE?",
      answer: "Currently, individuals trading gold as an investment in the UAE are not subject to capital gains tax. Import or export duties may apply to certain physical gold movements, particularly for commercial quantities or specific forms of gold. We recommend reviewing the latest UAE tax regulations or seeking professional tax advice for your specific circumstances."
    },
    {
      question: "What is Online Platform?",
      answer: "We host a sophisticated online platform, accessible via dedicated mobile and desktop applications. This tool provides real-time international spot prices for gold, reflecting continuous market shifts from Monday to Friday. It empowers you to execute online buy and sell orders for gold, allowing you to leverage these price movements strategically."
    },
    {
      question: "Is there any need to open account to book price online by OROVIVO APP?",
      answer: "Indeed, to access and utilize our online platform or the OROVIVO APP for real-time price booking and transactions, establishing a Metal Account is a prerequisite."
    },
    {
      question: "How can I open a Metal Account?",
      answer: "Initiating your Metal Account is a swift process. You can either complete our digital On boarding registration form available on our website or by OROVIVO APP, or alternatively, download, fill out, and submit the Bullion Purchase Agreement or Metal Account form to info@mac-ro-capita.com. Both methods are designed for efficiency, typically requiring just a few minutes of your time."
    },
    {
      question: "How can I access my Metal Account?",
      answer: "Upon approval of your Metal Account, you can gain access by downloading our specialized trading platform application to your preferred mobile device or desktop. Your provided login credentials will enable you to securely manage your account and begin your trading activities."
    },
    {
      question: "What is minimum amount needed to open a Metal Account?",
      answer: "To activate and commence trading with a Metal Account, an initial funding of $1000 USD i required."
    },
    {
      question: "What are the operational hours for the online trading platform?",
      answer: "Our online trading platform operates continuously from Monday to Friday, providing 24/5 access to the markets. Please be aware that market holidays or specific maintenance periods may occasionally affect these hours, which will be communicated in advance."
    },
    {
      question: "Will there be scheduled downtimes or maintenance for the platform?",
      answer: "To ensure optimal performance and security, we occasionally schedule brief maintenance windows. Such instances are typically planned during off-peak hours and clients are notified well in advance through platform announcements and email."
    },
    {
      question: "What occurs if my internet connection is interrupted during a trade?",
      answer: "In the event of an internet disruption during an active trade, our system is designed to handle orders based on the last confirmed instruction. For any immediate concerns, our customer support team is readily available via phone to assist you."
    },
    {
      question: "Could you explain what the &#39;spot price&#39; represents?",
      answer: "The 'spot price'refers to the current market price at which a precious metal can be bought or sold for immediate delivery. It's an internationally recognized benchmark, derived from global trading exchanges, forming the foundation of our pricing on the platform."
    },
    {
      question: "Are there any undisclosed fees or supplementary charges?",
      answer: "Transparency is a cornerstone of our service. All applicable fees for platform usage are explicitly detailed in our terms and conditions and during the transaction process. We assure you there are no hidden fees. For a complete understanding, our customer service is available to provide a full breakdown."
    },
    {
      question: "Does your platform support advanced order types, such as limit or stop-loss orders?",
      answer: "Yes, our online trading platform offers sophisticated order management capabilities, including the ability to place limit orders (to buy/sell at a specific price or better) and stop-loss orders (to limit potential losses). These features allow for more strategic trading."
    },
    {
      question: "Is there any other type of account other than Live Account?",
      answer: " Is there any other type of account other than Live Account? Yes, alongside our Metal Account for active trading, we also offer the Gold Saving Account, Deluxe Metal Account, Key Man Metal Account, Location Swap Account and EOT Account."
    },
    {
      question: "What is Gold Saving Account?",
      answer: "The possibility to open a Gold Saving Account is specifically designed for individuals looking to systematically convert their monetary savings into gold. You have the flexibility to begin with a modest amount, such as AED 3670 or more, and contribute regularly or whenever convenient. Once your accumulated gold quantity reaches or exceeds one 10 grams bar, you acquire the option to redeem it in its physical form."
    },
    {
      question: "In which currency I can fund my account?",
      answer: "We facilitate the deposits in AED (United Arab Emirates Dirham), USD (United States Dollar), and EUR (Euro). Please be advised that standard bank currency conversion charges may be applied if your deposit currency differs from your designated account currency."
    },
    {
      question: "What are the charges on buying and selling through platform?",
      answer: "We apply only nominal charges specifically when you open a position on our trading platform. There are no additional fees incurred for closing these positions. For a comprehensive overview of our fee structure, we encourage you to contact our customer service team at info@mac-ro-capital.com."
    },
    {
      question: "How to fund a Metal Account or Gold Saving Account?",
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
          You have multiple convenient methods to credit your Metal Account or Gold Saving Account:
          </p>
          <ul className="list-disc list-inside px-3 space-y-2">
            <li>
              <strong>Cash Deposit:</strong> Directly at our secure office or store location.
            </li>
            <li>
              <strong>Wire Transfer:</strong> Funds can be transferred electronically to our official bank accounts.
            </li>
            <li>
            <strong>Physical Bullion Deposit:</strong> You may deposit physical gold or silver bars. We will then purchase these at the prevailing market price, and the equivalent monetary value will be credited directly to your account.
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "How long time does it take to redeem physical bars or coins?",
      answer: "Physical redemption of your bars or coins is usually processed within 2-3 working days under typical market circumstances. However, during periods of heightened demand or unforeseen market shifts, this timeframe may occasionally extend to two weeks."
    },
    {
      question: "How I get market update and forecast?",
      answer: "As a valued, registered client, you can get market intelligence and current news within our dedicated Gold News section on our website and across our official social media channels."
    },
    {
      question: "How is the UAE's gold industry regulated?",
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            All regulation of the UAE's gold industry is carried out at a federal level by the Ministry of Economy. The MoE has established a comprehensive set of regulations and policies to mitigate risks within the precious metals sector.
          </p>
          <p>
            More information on the due diligence regulations for responsible sourcing of gold can be found on the official MoE website.
          </p>
        </div>
      )
    },
    {
      question: "What does the UAE do to enhance the oversight of the trade and circulation of gold in the country?",
      answer: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
          The UAE Ministry of Economy established the Emirates Gold Bullion Committee to unify national efforts to enhance oversight of the gold sector.
          </p>
          <p>
          The Emirates Gold Bullion Committee overseas the UAE Good Delivery Standard for Gold, which was launched in November 2021.
          </p>
          <p>
          This is a national standard that lays out the quality and transparency specifications for gold traders and refiners in the UAE. It was established in accordance with the latest international best-practice standards from the Organisation for Economic Co-operation and Development (OECD).
          </p>
        </div>
      )
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-base text-gray-600 mx-auto leading-relaxed">
            Find answers to common questions about our services, investment processes, 
            and how to get started with Mac & Ro.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-6 h-6 text-[#DCBC7C] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team of experts is here to help. 
            Contact us for personalized assistance with your investment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-[#DCBC7C] hover:bg-[#C4A76A] text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Contact Our Team
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-[#DCBC7C] text-[#DCBC7C] hover:bg-[#DCBC7C] hover:text-black font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Quick Links
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more about Mac & Ro and our comprehensive investment solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/who-we-are"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About Us</h3>
              <p className="text-gray-600">
                Learn about our company history, mission, and values.
              </p>
            </Link>
            
            <Link 
              to="/accreditations"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accreditations</h3>
              <p className="text-gray-600">
                View our regulatory certifications and compliance status.
              </p>
            </Link>
            
            <Link 
              to="/"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home</h3>
              <p className="text-gray-600">
                Return to our main page for an overview of all services.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
