import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-playfair leading-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Your privacy is important to us. This document outlines how we collect, use, and protect your information.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div>
                                <p className="text-gray-700 leading-relaxed">
                                    In accordance with Article 13 of the Legislative Decree 196/2003, we provide you with the following information. 
                                    We at www.mac-ro-capital.com believe that the privacy of our visitors is extremely important. This document describes in detail the types of personal information collected and recorded by our site and how they are used.
                                </p>
                            </div>

                            {/* Log Files */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Log Files</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Like many other websites, ours uses log files. These files simply log visitors to the site – usually a standard procedure of hosting companies and hosting analytics services.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The information inside the log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring /exit pages or the number of clicks.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    This information is used to analyze trends, administer the site, track users' movement around the site, and gather demographic information. IP addresses and other information are not linked to personally identifiable information, so all data is collected in a completely anonymous form.
                                </p>
                            </div>

                            {/* Cookies Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">This website uses Cookies</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Cookies are small text files that are automatically placed on the navigator's PC inside the browser. They contain basic information on Internet navigation and thanks to the browser they are recognized every time the user visits the site.
                                </p>
                                
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This site uses cookies, including third-party cookies, to improve the browsing experience, allow users to use any online services and monitor navigation on the site.
                                </p>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">How to disable Cookies</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    It is possible to disable cookies directly from the browser used, by accessing the settings (preferences or options): this choice could limit some navigation features of the site.
                                </p>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies Management</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The cookies used on this site may fall into the categories described below.
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                    <li>
                                        <strong>Activities strictly necessary for operation:</strong> These cookies are technical in nature and allow the site to function correctly. For example, they keep the user connected during navigation, preventing the site from requiring multiple connections to access subsequent pages.
                                    </li>
                                    <li>
                                        <strong>Preference saving activity:</strong> These cookies allow us to remember the preferences selected by the user during navigation, for example, they allow us to set the language.
                                    </li>
                                    <li>
                                        <strong>Statistical and Audience Measurement Activities (e.g. Google Analytics):</strong> These cookies help us understand, through data collected anonymously and in aggregate form, how users interact with websites by providing information relating to the sections visited, the time spent on the site, any malfunctions. This helps improve the performance of websites.
                                    </li>
                                    <li>
                                        <strong>Social media cookies (e.g. Facebook):</strong> These third-party cookies are used to integrate some widespread features of the main social media and provide them within the site. In particular, they allow registration and authentication on the site via Facebook and Google. connect , sharing and commenting on site pages on social media enable the "like" features on Facebook and the "+1″ features on G+.
                                    </li>
                                </ul>
                            </div>

                            {/* Third Party Providers */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third Party Providers</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Third-party vendors, including Google, use cookies to serve ads based on a user's previous visits to this site.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    The use of cookies for advertising allows Google and its partners to publish ads for users of this site (and other sites) based on statistical data collected on this site and on the websites of Google partners.
                                </p>
                            </div>

                            {/* Purpose of Processing */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Purpose of the processing</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Data may be collected for one or more of the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>provide access to reserved areas of the Portal and Portals/sites connected to this one and to the sending of communications, including commercial communications, news, updates on the initiatives of this site and of the companies controlled by it and/or connected to it and/or Sponsors.</li>
                                    <li>possible transfer of the aforementioned data to third parties, always aimed at carrying out email marketing campaigns and sending commercial communications.</li>
                                    <li>perform obligations under laws or regulations;</li>
                                    <li>contact management;</li>
                                </ul>
                            </div>

                            {/* Treatment Methods */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment methods</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The data will be processed in the following ways:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>data collection with single- opt mode , in a specific database;</li>
                                    <li>recording and processing on paper and/or magnetic media;</li>
                                    <li>organization of archives in a predominantly automated form, pursuant to the Technical Regulations regarding minimum security measures, Annex B of the Privacy Code.</li>
                                </ul>
                            </div>

                            {/* Mandatory Nature */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mandatory nature</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    All requested data is mandatory.
                                </p>
                            </div>

                            {/* Rights of Interested Party */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rights of the interested party</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Pursuant to art. 7 (Right of access to personal data and other rights) of the Privacy Code, we inform you that your rights regarding the processing of data are:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>know, through free access, the existence of data processing that may concern you;</li>
                                    <li>be informed about the nature and purposes of the processing</li>
                                    <li>obtain from the owner, without delay:</li>
                                </ul>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-6 mt-2">
                                    <li>confirmation of the existence or otherwise of personal data concerning you, even if not yet registered, and communication in an intelligible form of the same data and their origin, as well as the logic and purposes on which the processing is based; the request may be renewed, unless there are justified reasons, with an interval of no less than ninety days;</li>
                                    <li>the cancellation, transformation into anonymous form or blocking of data processed in violation of the law, including data whose retention is not necessary in relation to the purposes for which the data were collected or subsequently processed;</li>
                                    <li>the updating, rectification or, if there is interest, the integration of existing data;</li>
                                    <li>to object in whole or in part for legitimate reasons to the processing of personal data concerning you, even if pertinent to the purpose of the collection;</li>
                                </ul>
                            </div>

                            {/* Data Controller */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Controller</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We inform you that the data controller for all legal purposes is:
                                </p>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p className="text-gray-700 font-semibold mb-2">Mac & Ro Capital FZC</p>
                                    <p className="text-gray-700 mb-2">SAIF</p>
                                    <p className="text-gray-700 mb-2">Tel: +971 585928981</p>
                                    <p className="text-gray-700">Email: info@mac-ro-capital.com</p>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    To exercise the rights provided for in art. 7 of the Privacy Code or to delete your data from the archive, simply contact us through one of the channels made available. All data is protected through the use of antivirus, firewall and password protection.
                                </p>
                            </div>

                            {/* Information for Children */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information for children</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We believe it is important to provide added protection for children online. We encourage parents and guardians to spend time online with their children to observe, participate in and/or monitor and guide their online activity. We do not collect personal information from minors.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    If a parent or guardian believes that our site has personal information of a child in its database, please contact us immediately (using the email provided) and we will do our best to remove such information as quickly as possible.
                                </p>
                            </div>

                            {/* Scope */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    This privacy policy applies only to our online activities and is valid for visitors to our website and regarding information shared and/or collected. This policy does not apply to any information collected offline or via channels other than this website.
                                </p>
                            </div>

                            {/* Consent */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    By using our website, you hereby consent to our privacy policy and agree to its terms. If you require further information or have any questions about our privacy policy, please do not hesitate to contact us.
                                </p>
                            </div>

                            {/* Disclaimer */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The information, services, and products provided on this website are intended for use and access by individuals and entities located in jurisdictions where such offerings are permitted by applicable laws and regulations. However, please be aware that certain jurisdictions may have legal or regulatory restrictions that prohibit or limit the availability or use of these services, products, or information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
