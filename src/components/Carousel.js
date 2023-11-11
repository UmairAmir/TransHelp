import React, { useState, useEffect, useCallback  } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  useEffect(() => {
    // Set up an interval to call the function every 5 seconds
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [goToNextSlide]);

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className={styles.slide}>
        <h2>{slides[currentIndex].heading}</h2>
        <p>{slides[currentIndex].paragraph}</p>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.responsiveImage}
        />
      </div>
      <button className={styles.nextButton} onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
