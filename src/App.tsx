import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from './theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TrustSection from './components/TrustSection';
import PricingSection from './components/PricingSection';
import Web3Banner from './components/Web3Banner';
import FeatureShowcase from './components/FeatureShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css'

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

const VetricLandingPage: React.FC = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="min-h-screen bg-[#07070a]">
          <Header />
          <main>
            <HeroSection />
            <FeaturesSection />
            <TrustSection />
            <PricingSection />
            <Web3Banner />
            <FeatureShowcase />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default VetricLandingPage;