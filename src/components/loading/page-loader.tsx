"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page-loader.module.css';

export default function PageLoader() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start moving logo up after a brief delay
    const moveTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    // Complete animation and remove loader
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
    }, 2000);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (isComplete) return null;

  return (
    <div className={`${styles.loaderContainer} ${!isAnimating ? styles.fadeOut : ''}`}>
      <div className={`${styles.logoWrapper} ${!isAnimating ? styles.moveUp : ''}`}>
        <Image
          src="/es_horizontal.png"
          alt="ES Celebrations"
          width={200}
          height={80}
          priority
          className={styles.logo}
        />
      </div>
    </div>
  );
}