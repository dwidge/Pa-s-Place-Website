// src/components/howToVolunteer.js
import React from 'react';
import Image from 'next/image';
import styles from './howToVolunteer.module.css';

// Import your volunteer icons
import hammerImg from '../../public/howToVolunteer/hammer.png';
import caretakerIcon from '../../public/howToVolunteer/caretakerIcon.png';
import cateryIcon from '../../public/howToVolunteer/cateryIcon.png';
import maintenancyIcon from '../../public/howToVolunteer/maintenancyIcon.png';
import adminIcon from '../../public/howToVolunteer/adminIcon.png';
import actCoOrdIcon from '../../public/howToVolunteer/actCoOrdIco.png';

const HowToVolunteer = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${styles.armySubtle}`}
    >
      <div className="flex items-center mb-12">
        <div className="mr-8">
          <h2 className="text-3xl font-bold mb-4">How to Volunteer</h2>
          <p className="text-lg text-center mb-8">
            Reach out at{' '}
            <a
              href="mailto:info@pasplace.co.za"
              className="text-blue-500 hover:underline"
            >
              info@pasplace.co.za
            </a>{' '}
            to find a position.
          </p>
        </div>
        <div className={`relative w-40 h-40 ${styles.hammer}`}>
          <Image src={hammerImg} alt="Hammer" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default HowToVolunteer;
