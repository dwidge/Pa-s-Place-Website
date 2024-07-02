import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './whereWeAreBased.module.css';
import bgImg from '../../public/whereWeAreBased/bg.jpg';
import viewImg from '../../public/whereWeAreBased/view.jpg';

const WhereWeAreBased = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 },
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <Image src={bgImg} alt="Background" layout="fill" objectFit="cover" />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h2 className={`${styles.title} ${isLoaded ? styles.glowEffect : ''}`}>
          Where We Are Based
        </h2>

        <div className={styles.row}>
          <div className={styles.text}>
            <p>
              <strong>
                Nestled within the secluded confines of Kelso, Pennington
              </strong>
              , Pa’s Place stands as a beacon of{' '}
              <span className={styles.highlight}>hope and love</span>. Founded
              by a compassionate family, its inception was driven by an{' '}
              <em>altruistic desire</em> to grant less fortunate youth an
              unforgettable experience. Overlooking the picturesque landscape at{' '}
              <strong>35b Umdoni Road</strong>, this property has undergone
              meticulous transformation to create a haven for the young souls it
              hopes to shelter. Guided by sacred principles, the foundations of
              Pa’s Place were laid with unwavering devotion, fueling a tenacity
              to bestow upon those in need the gift of{' '}
              <span className={styles.highlight}>solace and inspiration</span>.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1sgAUvrOYHiKmndi8EFMzghuUgxeYLtw&ehbc=2E312F"
              width="375"
              height="315"
              className={styles.map}
            ></iframe>
          </div>
        </div>

        <div className={`${styles.row} ${styles.secondRow}`}>
          <div className={styles.imageWrapper} ref={imageRef}>
            <Image
              src={viewImg}
              alt="View"
              width={350}
              height={350}
              className={`${styles.image} ${isLoaded ? styles.slideIn : ''}`}
            />
          </div>
          <div className={styles.text}>
            <p>
              Within walking distance, visitors will find the{' '}
              <strong>jaw-dropping Nkomba Beach</strong>, where nature thrives
              and offers an unparalleled experience for swimmers and surfers
              alike. Embraced by Umdoni's natural conservation, this sanctuary
              unveils{' '}
              <span className={styles.highlight}>
                KwaZulu-Natal's unspoiled beauty
              </span>
              . Visitors may see some of the most stunning predatory birds
              darting across the landscape, as well as other more humble but
              equally enigmatic bird life. Additionally, guests are certain to
              find themselves in contact with the spirited{' '}
              <em>Vervet Monkey troop</em>, on average boasting 25 members,
              ensuring to add vibrancy to the scene. Lastly, the attentive eye
              may spot the marine life, from majestic whales to graceful gulls,
              offering glimpses into the mysteries of the ocean's vast depths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAreBased;
