import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import WhoWeAre from './pages/WhoWeAre';
import Accreditations from './pages/Accreditations';
import CorporateGovernance from './pages/CorporateGovernance';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import ProductGrid from './pages/ProductGrid';
import ProductDetails from './pages/ProductDetails';
import { CurrencyProvider } from './context/CurrencyContext';
import MetalAccounts from './pages/MetalAccounts';
import DeluxeMetalAccount from './pages/metalAccounts/DeluxeMetalAccount';
import MacRoMetalAccount from './pages/metalAccounts/MacRoMetalAccount';
import EndOfTreatmentPaymentTFM from './pages/metalAccounts/EndOfTreatmentPaymentTFM';
import KeyManMetalAccount from './pages/metalAccounts/KeyManMetalAccount';
import LocationSwap from './pages/LocationSwap';
  
function App() {
  return (
    <CurrencyProvider>
      <Router>
        <div className="App">
          <Banner />
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/corporate-governance" element={<CorporateGovernance />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/metal-accounts" element={<MetalAccounts />} />
            <Route path="/metal-accounts/deluxe-metal-account" element={<DeluxeMetalAccount />} />
            <Route path="/metal-accounts/mac-ro-metal-account" element={<MacRoMetalAccount />} />
            <Route path="/metal-accounts/end-of-treatment-payment-tfm" element={<EndOfTreatmentPaymentTFM />} />
            <Route path="/metal-accounts/key-man-metal-account" element={<KeyManMetalAccount />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/location-swap" element={<LocationSwap />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;