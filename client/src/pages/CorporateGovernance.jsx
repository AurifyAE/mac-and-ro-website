import React from 'react';
import { Link } from 'react-router-dom';
import governanceBg from '../assets/corporate/corporatebg.jpg';
import dubaiIcon from '../assets/corporate/dubai-icon.svg';
import italyIcon from '../assets/corporate/italy-icon.svg';
import MacRoSrlBusinessPolicyItaly from "../assets/downloadFiles/italy/Mac-Ro-Srl-STANDARD.pdf"
import MacRoEthicCodeItaly from "../assets/downloadFiles/italy/Codice-Etico-Mac-Ro-Srl.pdf";
import MacRoAmlCftPolicyItaly from "../assets/downloadFiles/italy/Conto-Metallo-Deluxe-Ed.MR-2025-14.7.pdf";
import MacRoEthicsSustainabilityItaly from "../assets/downloadFiles/italy/ETICA-E-SOSTENIBILITA_Mac-Ro-Srl.pdf";
import MacRoProfessionalOperatorItaly from "../assets/downloadFiles/italy/Professional_Operators_for_gold(ITALY)_ELE_ORO_certification.pdf";

import MacRoCapitalBusinessPolicyDubai from "../assets/downloadFiles/dubai/Mac-&-Ro-Standard.pdf";
import MacRoEthicCodeDubai from "../assets/downloadFiles/dubai/Mac-n-Ro-Capital-Code-of-Ethics.pdf";
import MacRoAmlCftPolicyDubai from "../assets/downloadFiles/dubai/AML-POLICY-AND-PROCEDURES-MAC-&-RO-CAPITAL-REPORT-1.pdf";
import MacRoEthicsSustainabilityDubai from "../assets/downloadFiles/dubai/ETHICS-AND-SUSTAINABILITY.pdf";



import { useTranslation } from 'react-i18next';

const reportsDataOfItaly = [

  {
    id: 1,
    title: "MAC N RO CAPITAL BUSINESS POLICY",
    downloadUrl: "/reports/italy/business-policy.pdf"
  }
]

const CorporateGovernance = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const reportsDataOfItaly = [

    {
      id: 1,
      title: "MAC N RO SRL BUSINESS POLICY",
      downloadUrl: MacRoSrlBusinessPolicyItaly
    },
    {
      id: 2,
      title: "ETHIC CODE MAC N RO SRL",
      downloadUrl: MacRoEthicCodeItaly
    },
    // {
    //   id: 3,
    //   title: "MAC N RO SRL SUPPLY CHAIN POLICY",
    //   downloadUrl: ""
    // },
    {
      id: 4,
      title: "MAC N RO SRL AML / CFT POLICY",
      downloadUrl: MacRoAmlCftPolicyItaly
    },
    {
      id: 5,
      title: "ETHICS AND SUSTAINABILITY REPORT",
      downloadUrl: MacRoEthicsSustainabilityItaly
    },
    {
      id: 6,
      title: "Professional operator of Gold",
      downloadUrl: MacRoProfessionalOperatorItaly
    }
  ]

  const reportsDataOfDubai = [
    {
      id: 1,
      title: "MAC N RO CAPITAL BUSINESS POLICY",
      downloadUrl: MacRoCapitalBusinessPolicyDubai
    },
    {
      id: 2,
      title: "ETHIC CODE MAC N RO CAPITAL",
      downloadUrl: MacRoEthicCodeDubai
    },
    // {
    //   id: 3,
    //   title: "MAC N RO CAPITAL SUPPLY CHAIN POLICY",
    //   downloadUrl: ""
    // },
    {
      id: 4,
      title: "MAC N RO CAPITAL AML / CFT POLICY",
      downloadUrl: MacRoAmlCftPolicyDubai
    },
    {
      id: 5,
      title: "ETHICS AND SUSTAINABILITY REPORT",
      downloadUrl: MacRoEthicsSustainabilityDubai
    }
  ];

  const handleDownload = (report) => {
    if (!report.downloadUrl) {
      alert(t('corporateGovernance.alerts.downloadNotAvailable'));
      return;
    }

    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      
      // Set the href to the download URL
      link.href = report.downloadUrl;
      
      // Set the download attribute with a meaningful filename
      const filename = report.title.replace(/\s+/g, '_').toLowerCase() + '.pdf';
      link.download = filename;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert(t('corporateGovernance.alerts.downloadFailed'));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-cover bg-center bg-no-repeat h-96" 
                dir={isArabic ? 'rtl' : 'ltr'}
                     style={{ backgroundImage: `url(${governanceBg})` }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-white max-w-6xl px-6">
                        <h1 className="text-3xl sm:text-3xl lg:text-4xl text-[#DCBC7C] font-bold mb-6 leading-tight font-playfair">
                          {t('corporateGovernance.hero.title')}
                        </h1>

                        <p className="text-sm md:text-base mb-4 leading-relaxed">
                        {t('corporateGovernance.hero.description')}
                        </p>

                        {/* <p className="text-base mb-4 leading-relaxed flex items-center">
                        Distributed in partnership with 
                        <img 
                            src="/src/assets/service/goldrocklogo.png" 
                            alt="Gold Rock Capital Logo" 
                            className="w-12 h-12 inline-block ml-2"
                        /> 
                        <span className="ml-2">Gold Rock Capital</span>
                        </p> */}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F1F0E8]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-center gap-6 mb-12">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-playfair">
                     {t('corporateGovernance.sections.dubai')}
                  </h1>
                  <img src={dubaiIcon} alt="Corporate Governance" className="w-12 h-12" />
                </div>
                
                {/* Reports and Downloads Table Of Dubai */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-black">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                            {t('corporateGovernance.table.reports')}
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wider">
                            {t('corporateGovernance.table.downloads')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {reportsDataOfDubai.map((report) => (
                          <tr key={report.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium uppercase text-gray-900">{report.title}</div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <button 
                                onClick={() => handleDownload(report)}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#A78E52] hover:bg-[#DCBC7C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DCBC7C] transition-colors"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {t('corporateGovernance.table.downloadButton')} 
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                
              </div>

              <div className="max-w-6xl mx-auto px-4  py-20">
                <div className="flex items-center justify-center gap-6 mb-12">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-playfair">
                     {t('corporateGovernance.sections.italy')}
                  </h1>
                  <img src={italyIcon} alt="Corporate Governance" className="w-12 h-12" />
                </div>
                
                {/* Reports and Downloads Table Of Dubai */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-black">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                            {t('corporateGovernance.table.reports')}
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wider">
                            {t('corporateGovernance.table.downloads')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {reportsDataOfItaly.map((report) => (
                          <tr key={report.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium uppercase text-gray-900">{report.title}</div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <button 
                                onClick={() => handleDownload(report)}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#A78E52] hover:bg-[#DCBC7C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DCBC7C] transition-colors"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {t('corporateGovernance.table.downloadButton')}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>            
    </div>
  );
};

export default CorporateGovernance;
