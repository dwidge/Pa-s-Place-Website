import React from 'react';
import Image from 'next/image';
import styles from './aboutPennington.module.css';
import featureImg from '@/../public/aboutPennington/feature.jpg';

const AboutPennington = () => {
  return (
    <section className={styles.container}>
      <a
        href="https://www.penningtonkzn.com/whats-on.html"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>About Pennington, KwaZulu-Natal</h2>
          <div className={styles.featureImageContainer}>
            <Image
              src={featureImg}
              alt="Feature"
              width={800}
              height={600}
              className={styles.featureImage}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.description}>
            <p>
              Pennington, a charming town on the KwaZulu-Natal south coast, is
              less than an hour's drive from Durban. Known for its stunning
              ocean views and pristine beaches, it's perfect for a relaxing
              getaway. Enjoy warm waters, friendly restaurants, and a tranquil
              atmosphere.
            </p>
            <p>
              The town boasts a sub-tropical climate, making it ideal for
              year-round swimming. Golf enthusiasts can enjoy nearby courses
              like Selborne and Umdoni Park. For nature lovers, Pennington
              offers beautiful hiking trails, fishing spots, and water
              activities.
            </p>
            <p>
              Discover local attractions like Botha House and Nkomba Sanctuary.
              Visit the What's On page for events and activities.
            </p>
          </div>
        </div>
      </a>
    </section>
  );
};

export default AboutPennington;
