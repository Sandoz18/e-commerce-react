import React from 'react'
import styles from './Home.module.css'
import { ClassNames } from '@emotion/react'
import { Button } from 'bootstrap'
import banner from '../../assets/banner2.jpg';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

//la imagen se importa acá porque en css no funciona
//styles va en MINÚSCULA porque es un objeto no un componente
function Home( ){   
  return (
    <>
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${banner}) ` }}
      > 
      <div>
        
        </div>     
      <h1 className={styles.heroTitle}>Cúbika Home & Design</h1>
      <p className={styles.heroSubtitle}>
        Diseños únicos que transforman tu hogar
      </p>
      <button>Explora ➡️</button>
</section>

        </>
    );
  
}

export default Home;