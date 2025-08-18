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
import { CurrencyProvider } from './context/CurrencyContext';

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
          </Routes>
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;