import React from 'react';
import styles from './Meet.module.css';

export const Meet = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book N Meet Your Doctor</h1>
      <p className={styles.subtitle}>Just One Tap Away From Your Health</p>
      <div className={styles.searchContainer}>
        <select className={styles.select}>
          <option>State</option>
        </select>
        <select className={styles.select}>
          <option>District</option>
        </select>
        <select className={styles.select}>
          <option>Doctor/Specialist</option>
        </select>
        <button className={styles.searchButton}>🔍</button>
      </div>
    </div>
  );
};
