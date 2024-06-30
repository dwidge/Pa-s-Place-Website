import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhereWeAreBased from '@/components/whereWeAreBased';
import AboutPennington from '@/components/aboutPennington';
import MissionStatement from '@/components/missionStatement';
import ComfortSecurityComponent from '@/components/comfortVSsecuirity';

function AboutUsPage() {
  return (
    <div>
      <Header />
      <MissionStatement />
      <WhereWeAreBased />
      <AboutPennington />
      <ComfortSecurityComponent />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
