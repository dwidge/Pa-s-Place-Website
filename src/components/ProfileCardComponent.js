import Link from 'next/link';
import styles from './ProfileCardComponent.module.css';
import { useEffect, useState } from 'react';

const ProfileCardComponent = ({ profiles }) => {
  const [cardHeight, setCardHeight] = useState('auto');

  useEffect(() => {
    const cardElements = document.querySelectorAll(`.${styles.card}`);
    let maxHeight = 0;

    cardElements.forEach(card => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    setCardHeight(`${maxHeight}px`);
  }, [profiles]);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {profiles.map((profile, index) => (
          <Link href={profile.link} key={index} passHref>
            <div className={styles.card} style={{ height: cardHeight }}>
              <img src={profile.image} alt={profile.title} className={styles.image} />
              <h2 className={styles.title}>{profile.title}</h2>
              <p className={styles.body}>{profile.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileCardComponent;
