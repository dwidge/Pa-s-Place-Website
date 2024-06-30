import React from 'react';
import Image from 'next/image';
import styles from './volunteerInfo.module.css';

// Import your volunteer icons
import caretakerIcon from '../../public/howToVolunteer/caretakerIcon.png';
import cateryIcon from '../../public/howToVolunteer/cateryIcon.png';
import maintenancyIcon from '../../public/howToVolunteer/maintenancyIcon.png';
import adminIcon from '../../public/howToVolunteer/adminIcon.png';
import actCoOrdIcon from '../../public/howToVolunteer/actCoOrdIco.png';
import volunteerImage from '../../public/volunteerSemantics/1.jpg';
import hammerImage from '../../public/howToVolunteer/hammer.png';

const VolunteerInfo = () => {
  return (
    <div className={`${styles.container} flex flex-col items-center justify-center w-full`}>
      <div className="flex flex-row justify-around items-start w-full max-w-6xl mt-8">
        <div className={`${styles.howToVolunteer} flex flex-col items-center w-1/2`}>
          <h2 className="text-3xl font-bold mb-4">How to Volunteer</h2>
          <p className="text-lg text-center mb-4">
            Reach out at{' '}
            <a href="mailto:info@pasplace.co.za" className="text-blue-500 hover:underline">
              info@pasplace.co.za
            </a>{' '}
            to find a position.
          </p>
          <div className={`${styles.hammer} relative w-20 h-20`}>
            <Image src={hammerImage} alt="Hammer" layout="fill" />
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <div className="flex items-center justify-center my-4">
            <Image src={volunteerImage} alt="Volunteer Image" width={100} height={100} className="rounded-full" />
            <h3 className="text-2xl font-semibold ml-4">What You'll Do</h3>
          </div>
          <div className="flex flex-wrap justify-around items-start mb-6 w-full">
            <ul className="list-disc list-inside text-left max-w-md">
              <li className={styles.boldItalicShadow}>Caretakers to ensure the youth are adequately managed and safety is ensured.</li>
              <li className={styles.boldItalicShadow}>Activity coordinators to provide fun and enrichment</li>
              <li className={styles.boldItalicShadow}>Caterers to prepare nutritious meals</li>
              <li className={styles.boldItalicShadow}>Maintenance helpers to keep our facilities in top shape</li>
              <li className={styles.boldItalicShadow}>Administrative assistants to help with daily operations</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.volunteerIcons}>
        <img src={caretakerIcon.src} alt="Caretaker Icon" className={`${styles.volunteerIcon} ${styles.iconGlow} ${styles.bounce1}`} />
        <img src={actCoOrdIcon.src} alt="Activity Coordinator Icon" className={`${styles.volunteerIcon} ${styles.iconGlow} ${styles.bounce2}`} />
        <img src={cateryIcon.src} alt="Caterer Icon" className={`${styles.volunteerIcon} ${styles.iconGlow} ${styles.bounce3}`} />
        <img src={maintenancyIcon.src} alt="Maintenance Icon" className={`${styles.volunteerIcon} ${styles.iconGlow} ${styles.bounce4}`} />
        <img src={adminIcon.src} alt="Admin Icon" className={`${styles.volunteerIcon} ${styles.iconGlow} ${styles.bounce5}`} />
      </div>
    </div>
  );
};

export default VolunteerInfo;
