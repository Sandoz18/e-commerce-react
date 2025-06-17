// src/components/TopBanner/TopBanner.jsx
import React from 'react';
import styles from './TopBanner.module.css'; // Importa tu CSS Module

function TopBanner() {
  const phrase = "¡Hasta 12 cuotas sin interés en compras superiores a 100.000 pesos!";

  return (
    <div className={styles.topBannerContainer}>
      <div className={styles.marqueeContent}>
       
        
       
        <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
         <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
        <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
        <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
        <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
        <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
        <span>{phrase}</span>
        <span className={styles.separator}></span> {/* Separador */}
      </div>
    </div>
  );
}

export default TopBanner;