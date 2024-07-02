import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          }),
      );
      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    loadImages();
  }, [images]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carouselFrame}>
      <div className={styles.overlay}></div>
      <div className={styles.frameContainer}>
        <div className={styles.frameOverlay}></div>
        <div className={styles.frameBackground}></div>
        <div className={styles.carousel}>
          <button onClick={handlePrevClick} className={styles.arrowButton}>
            ‹
          </button>
          <div className={styles.carouselImages}>
            {images.map((src, index) => (
              <div
                key={index}
                className={`${styles.imageContainer} ${index === currentIndex ? styles.active : ''}`}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          <button onClick={handleNextClick} className={styles.arrowButton}>
            ›
          </button>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <p>
            Pa's Place, located in Kelso, Pennington, offers a safe, nurturing
            environment for youth. Enjoy comfortable dormitories, recreational
            spaces, and the beautiful Nkomba Beach. We prioritize safety and
            provide enriching activities for personal growth and community
            building.
          </p>
          <Link href="/aboutUs" legacyBehavior>
            <a className={styles.learnMoreButton}>Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
