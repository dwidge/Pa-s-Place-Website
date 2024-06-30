// src/components/reach-out-hero.js
import { useEffect, useState } from 'react';
import styles from './reach-out-hero.module.css';

const ReachOutHero = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [sentimentVisible, setSentimentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleVisible(true);
    }, 500); // Delay for the title animation

    setTimeout(() => {
      setSentimentVisible(true);
    }, 1500); // Delay for the sentiment animation
  }, []);

  return (
    <div className={`relative w-full h-[140vh] bg-cover bg-center ${styles.hero}`}>
      <div className={`absolute top-[150px] left-10 transform transition-all duration-1000 ${titleVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <h1 className="text-6xl font-bold text-black">Reach Out</h1>
      </div>
      <div className={`absolute bottom-[492px] left-[150px] transition-opacity duration-1000 ${sentimentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xl text-white bg-black bg-opacity-50 p-4 rounded-lg">
          We all need a source of help, joy, and a break altruistically.
        </p>
      </div>
    </div>
  );
};

export default ReachOutHero;
