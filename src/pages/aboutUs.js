import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhereWeAreBased from '@/components/whereWeAreBased';
import AboutPennington from '@/components/aboutPennington';
import MissionStatement from '@/components/missionStatement';

function AboutUsPage() {
  return (
    <div>
      <Header />
      <WhereWeAreBased />
      <AboutPennington />
      <MissionStatement />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
