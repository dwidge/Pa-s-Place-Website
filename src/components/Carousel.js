import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const Carousel = ({ images, keyPoints }) => {
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
          })
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrevClick} className={styles.arrowButton}>‹</button>
      <div className={styles.carouselImages}>
        {images.map((src, index) => (
          <div key={index} className={`${styles.imageContainer} ${index === currentIndex ? styles.active : ''}`}>
            <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.keyPoints}>
        {keyPoints}
      </div>
      <button onClick={handleNextClick} className={styles.arrowButton}>›</button>
    </div>
  );
};

export default Carousel;
``
