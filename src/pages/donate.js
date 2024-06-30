import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Donate from '../components/donateHero';
import WhereYourMoneyGoes from '@/components/whereYourMoneyGoes';
import VolunteerInfo from '@/components/volunteerInfo';

function AboutUsPage() {
  return (
    <div>
      <Header />
      <Donate />
      <WhereYourMoneyGoes />
      <VolunteerInfo />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
