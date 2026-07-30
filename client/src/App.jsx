import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CurrencyProvider } from './context/CurrencyContext';
import useScrollToTop from './hooks/useScrollToTop';
import SEO from './components/SEO.jsx';

// Route components are lazy-loaded so a visitor only downloads the page they asked for.
// These were all static imports, which put every route in one 300KB chunk — Lighthouse
// measured 191KB of it as unused on the homepage, and 1,842ms of script evaluation on
// mobile. The shell (Banner/Header/Navigation/Footer) stays eager since it renders on
// every route.
const Homepage = lazy(() => import('./pages/Homepage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'));
const Accreditations = lazy(() => import('./pages/Accreditations'));
const CorporateGovernance = lazy(() => import('./pages/CorporateGovernance'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail.jsx'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogContent = lazy(() => import('./pages/BlogContent'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const MetalAccounts = lazy(() => import('./pages/MetalAccounts'));
const DeluxeMetalAccount = lazy(() => import('./pages/metalAccounts/DeluxeMetalAccount'));
const MacRoMetalAccount = lazy(() => import('./pages/metalAccounts/MacRoMetalAccount'));
const EndOfTreatmentPaymentTFM = lazy(() => import('./pages/metalAccounts/EndOfTreatmentPaymentTFM'));
const KeyManMetalAccount = lazy(() => import('./pages/metalAccounts/KeyManMetalAccount'));
const LiveRate = lazy(() => import('./pages/LiveRate'));
const ProductGrid = lazy(() => import('./pages/ProductGrid'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const LocationSwap = lazy(() => import('./pages/LocationSwap'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const OrovivoPrivacyPolicy = lazy(() => import('./pages/OrovivoPrivacyPolicy.jsx'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Profile = lazy(() => import('./pages/Profile'));

// Minimum-height placeholder so swapping in a lazy chunk doesn't collapse the page
// height and shift the footer (which would show up as CLS).
const RouteFallback = () => <div className="min-h-screen" aria-busy="true" />;

function App() {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const hostname = window.location.hostname.toLowerCase();
    const parts = hostname.split('.');
    const isLocalhostLabel = hostname.endsWith('.localhost');
    if (parts.length > 2 || isLocalhostLabel) {
      setSubdomain(parts[0]);
    }
  }, []);

  if (subdomain === 'profiles') {
    return (
      <CurrencyProvider>
        <Router>
          <div className="App">
            <main id="main-content">
              <Suspense fallback={<RouteFallback />}>
                <Profile />
              </Suspense>
            </main>
          </div>
        </Router>
      </CurrencyProvider>
    );
  }
  return (
    <CurrencyProvider>
      <Router>
        <AppContent />
      </Router>
    </CurrencyProvider>
  );
}

// Separate component to use the hook inside Router context
function AppContent() {
  // Use the scroll to top hook inside Router context
  useScrollToTop();

  return (
    <div className="App">
      <SEO />
      {/* Lets keyboard and screen-reader users jump past the three-tier nav.
          Visually hidden until focused. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <Banner />
      <Header />
      <Navigation />
      {/* Lighthouse: "Document does not have a main landmark" — everything used to sit
          in the untagged .App div. */}
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/corporate-governance" element={<CorporateGovernance />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogContent />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/metal-accounts" element={<MetalAccounts />} />
            <Route path="/metal-accounts/deluxe-metal-account" element={<DeluxeMetalAccount />} />
            <Route path="/metal-accounts/mac-ro-metal-account" element={<MacRoMetalAccount />} />
            <Route path="/metal-accounts/end-of-treatment-payment-tfm" element={<EndOfTreatmentPaymentTFM />} />
            <Route path="/metal-accounts/key-man-metal-account" element={<KeyManMetalAccount />} />
            <Route path="/live-rate" element={<LiveRate />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/location-swap" element={<LocationSwap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policies" element={<OrovivoPrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
