import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowToVolunteer from '@/components/howToVolunteer'; // Adjust alias if necessary
import VolunteerSemantics from '@/components/volunteerSemantics'; // Adjust alias if necessary

function Volunteer() {
  return (
    <div>
      <Header />
      <HowToVolunteer />
      <VolunteerSemantics />
      <Footer />
    </div>
  );
}

export default Volunteer;
