import React from 'react'
import styles from './HeroSection.module.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import SocialIcons from '../SocialMediaIcons/SocialMediaIcons';

function HeroSection() {
  return (
    <>


      <div className={`container-fluid ${styles.heroSection} w-100`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Cúbika home & Design</h1>
          <p className={styles.heroSubtitle}>
            Descubrí más
          </p>
        
          <button className={styles.btnTertiary}> flecha </button>
        </div>

     
      </div>
   
    </>
  );

}

export default HeroSection;