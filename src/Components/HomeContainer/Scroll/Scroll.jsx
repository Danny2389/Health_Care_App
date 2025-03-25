import React, { useState } from 'react';
import styles from './Scroll.module.css';

const images = [
  '/scrollimages/GYN.png',
  '/scrollimages/GYNco.png',
  '/scrollimages/Neuro.png',
  '/scrollimages/Orthopedic.png',
  '/scrollimages/Osteo.png',
  '/scrollimages/pngwing.png',
  '/scrollimages/Pulmono.png',
  '/scrollimages/Radio.png',
];

export const Scroll = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <h3 className={styles.special}>More than 40+ Specialities</h3>
      <div className={styles.scrollContainer}>
        <div className={styles.imageWrapper}>
          {images.slice(0, showAll ? images.length : 7).map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} className={styles.image} />
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.seeMoreButton} onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See Less' : 'See All Services'}
        </button>
      </div>
    </>
  );
};
