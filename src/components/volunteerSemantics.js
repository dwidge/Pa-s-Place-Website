import React from 'react';
import Image from 'next/image';
import styles from './volunteerSemantics.module.css';

// Import your volunteer icons
import caretakerIcon from '../../public/howToVolunteer/caretakerIcon.png';
import cateryIcon from '../../public/howToVolunteer/cateryIcon.png';
import maintenancyIcon from '../../public/howToVolunteer/maintenancyIcon.png';
import adminIcon from '../../public/howToVolunteer/adminIcon.png';
import actCoOrdIcon from '../../public/howToVolunteer/actCoOrdIco.png';
import volunteerImage from '../../public/volunteerSemantics/1.jpg'; // Image import

const VolunteerSemantics = () => {
  const containerStyle = {
    backgroundColor: '#3e6c3e',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className="flex items-center justify-center mb-4">
        {/* Next.js Image component for optimized image rendering */}
        <Image src={volunteerImage} alt="Volunteer Image" width={150} height={150} className="rounded-full" />
        <h3 className="text-2xl font-semibold ml-4">What You'll Do</h3>
      </div>
      <p className="text-lg mb-6">
        We're constantly looking for passionate individuals to join our team in various roles:
      </p>
      <ul className="list-disc list-inside text-left mb-8">
        <li className={`${styles.boldItalicShadow}`}>Caretakers to ensure the youth are adequately managed and safety is ensured.</li>
        <li className={`${styles.boldItalicShadow}`}>Activity coordinators to provide fun and enrichment</li>
        <li className={`${styles.boldItalicShadow}`}>Caterers to prepare nutritious meals</li>
        <li className={`${styles.boldItalicShadow}`}>Maintenance helpers to keep our facilities in top shape</li>
        <li className={`${styles.boldItalicShadow}`}>Administrative assistants to help with daily operations</li>
      </ul>
      <div className={`${styles.volunteerIcons}`}>
        {/* Use the imported icons with adjusted size and glow effect */}
        <img src={caretakerIcon.src} alt="Caretaker Icon" className={`${styles.volunteerIcon} ${styles.iconGlow}`} />
        <img src={actCoOrdIcon.src} alt="Activity Coordinator Icon" className={`${styles.volunteerIcon} ${styles.iconGlow}`} />
        <img src={cateryIcon.src} alt="Caterer Icon" className={`${styles.volunteerIcon} ${styles.iconGlow}`} />
        <img src={maintenancyIcon.src} alt="Maintenance Icon" className={`${styles.volunteerIcon} ${styles.iconGlow}`} />
        <img src={adminIcon.src} alt="Admin Icon" className={`${styles.volunteerIcon} ${styles.iconGlow}`} />
      </div>
    </div>
  );
};

export default VolunteerSemantics;
