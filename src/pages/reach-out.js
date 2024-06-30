import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReachOutHero from '@/components/reach-out-hero';
import PasPlaceInfo from '@/components/pas-place-info';
import ContactUs from '@/components/ContactUs'; // Corrected import

function AboutUsPage() {
  return (
    <div>
      <Header />
      <ReachOutHero />
      <PasPlaceInfo />
      <ContactUs /> {/* Corrected component usage */}
      <Footer />
    </div>
  );
}

export default AboutUsPage;
