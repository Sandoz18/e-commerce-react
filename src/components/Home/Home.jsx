import React from 'react'
import styles from './Home.module.css'
import { ClassNames } from '@emotion/react'
import { Button } from 'bootstrap'
import banner from '../../assets/heroBanner.jpg';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import TopBanner from '../TopBanner/TopBanner';

//la imagen se importa acá porque en css no funciona
//styles va en MINÚSCULA porque es un objeto no un componente
function Home( ){   
  return (
    <>
      <TopBanner/>
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${banner}) ` }}
      > 
     
      <div className={styles.heroText}>
      <h1 className={styles.heroTitle}>Cúbika home & Design</h1>
      <p className={styles.heroSubtitle}>
       Estilos que inspiran
      </p>
      {/*Acá buscar como hacer estilo para este botón principal con tertiary #8BA4A0*/}
      <button className= {styles.btnTertiary}>acá flecha animada</button>
        </div>
     
     
</section>

        </>
    );
  
}

export default Home;