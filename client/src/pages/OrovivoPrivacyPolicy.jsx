import React from "react";

const OrovivoPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-sm md:text-base">

      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-playfair  text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Effective Date: <strong>21 February 2026</strong> &nbsp;·&nbsp; Developer/Company:{" "}
            <strong>Mac & Ro</strong>
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-3 max-w-2xl mx-auto">
            This Privacy Policy explains how Orovivo collects, uses, shares, and protects your
            information when you use the Orovivo mobile application. We are committed to protecting
            your privacy and complying with the requirements of the Apple App Store, Google Play
            Store, and applicable privacy laws.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">

            {/* 1. Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">A. Information You Provide to Us</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                <li>
                  <strong>Account Registration Data:</strong> When you create an account, we collect
                  your name, email address, phone number, and profile image.
                </li>
                <li>
                  <strong>Identity Verification (KYC) Data:</strong> To comply with financial and
                  regulatory obligations, we collect Know Your Customer (KYC) information.
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>For Individuals:</strong> Date of birth, nationality, country of
                      residence, Government ID number/expiry, Passport number/expiry,
                      occupation/industry, and photographs of your identity documents.
                    </li>
                    <li>
                      <strong>For Companies:</strong> Company name, email, date of incorporation,
                      countries of operation/domicile, industry, products, registration numbers, and
                      branch information.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Customer Support:</strong> Any information you provide when you contact us
                  for help or feedback.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">B. Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                <li>
                  <strong>Device Information:</strong> We collect information about your device,
                  including device model, operating system version, unique device identifiers, and
                  mobile network information.
                </li>
                <li>
                  <strong>Usage Data & Analytics:</strong> We use tools like Firebase Analytics to
                  understand how you interact with the App, including features used, time spent, and
                  crash reports (via Firebase Crashlytics) to improve performance and stability.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">C. Information Collected via Device Permissions</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                With your explicit consent, we may request access to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Camera & Photo Library:</strong> To allow you to take or upload photos for
                  profile pictures and mandatory KYC/transaction assistance documents.
                </li>
                <li>
                  <strong>Bluetooth:</strong> To securely connect to supported hardware devices if
                  required for enhanced functionality.
                </li>
                <li>
                  <strong>Network & Storage:</strong> For real-time spot rate updates, downloading
                  files, and caching application data locally.
                </li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Service Provisioning:</strong> To create and manage your account, process
                  transactions, and provide real-time rate updates.
                </li>
                <li>
                  <strong>Identity Verification:</strong> To verify your identity as part of our KYC
                  and Anti-Money Laundering (AML) compliance processes.
                </li>
                <li>
                  <strong>App Improvements:</strong> To analyze usage trends, troubleshoot crashes,
                  and enhance the overall user experience.
                </li>
                <li>
                  <strong>Communication:</strong> To send you important administrative notices,
                  security alerts, and support messages.
                </li>
              </ul>
            </div>

            {/* 3. How We Share Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> We share information with trusted third-party
                  services that assist us in operating the App, such as:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Firebase (Google):</strong> For analytics, crash reporting, and backend
                      services.
                    </li>
                    <li>
                      <strong>Supabase:</strong> For secure database storage and authentication.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Legal & Regulatory Compliance:</strong> We may disclose your information
                  (including KYC data) to regulatory authorities, law enforcement, or other government
                  officials as required by law to prevent fraud or illegal activities.
                </li>
              </ul>
            </div>

            {/* 4. Data Security & Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security & Retention</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A. Security Measures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard encryption and security protocols to protect your
                personal and KYC data from unauthorized access, alteration, or disclosure. All data
                transmissions are strictly secured.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">B. Data Retention</h3>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal and KYC information only for as long as necessary to fulfill
                the purposes outlined in this policy or to comply with legal, tax, or regulatory
                requirements. Once no longer needed, your data is securely deleted or anonymized.
              </p>
            </div>

            {/* 5. Your Rights and Choices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your jurisdiction, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Access & Update:</strong> Review and edit your profile information within
                  the App.
                </li>
                <li>
                  <strong>Revoke Permissions:</strong> Disable device permissions (Camera, Photos,
                  Bluetooth) at any time through your device settings, though this may limit certain
                  App functionalities.
                </li>
                <li>
                  <strong>Account & Data Deletion:</strong> You can request the deletion of your
                  account and associated personal data by contacting us. Please note that certain KYC
                  data may be retained as required by law.
                </li>
              </ul>
            </div>

            {/* 6. Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                The App is not intended for use by children under the age of 13 (or higher age
                depending on applicable law). We do not knowingly collect personal information from
                children. If we discover we have inadvertently collected such data, we will take
                immediate steps to delete it.
              </p>
            </div>

            {/* 7. Changes to This Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. If we make material changes, we
                will notify you by updating the "Effective Date" at the top of this policy and, if
                required, requesting your renewed consent within the App.
              </p>
            </div>

            {/* 8. Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your
                personal data, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-700 font-semibold">Mac & Ro (MAC & RO SRL)</p>
                <p className="text-gray-700">Via dei Mocenigo 9, 73100 Lecce, Italy</p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a href="mailto:info@mac-ro-capital.com" className="text-gray-900 underline">
                    info@mac-ro-capital.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Website:{" "}
                  <a href="https://mac-ro-capital.com/" className="text-gray-900 underline">
                    https://mac-ro-capital.com/
                  </a>
                </p>
                <p className="text-gray-700">Tel: +39 392 294 7569</p>
                <p className="text-gray-700">Professional Operator Code: Gold 5010277</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OrovivoPrivacyPolicy;