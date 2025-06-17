import React from 'react'
import styles from './Home.module.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import SocialIcons from '../SocialMediaIcons/SocialMediaIcons';
//no necesito importar react-router-dom porque este elemento es mi archivo raíz y ya está respresentado en App.jsx
//la imagen se importa acá porque en css no funciona
//styles va en MINÚSCULA porque es un objeto no un componente
function Home() {
  return (
    <>


      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Cúbika home & Design</h1>
          <p className={styles.heroSubtitle}>
            Estilos que inspiran
          </p>
          {/*Acá buscar como hacer estilo para este botón principal con tertiary #8BA4A0*/}
          <button className={styles.btnTertiary}>acá flecha animada</button>
        </div>

     
      </section>
   <ItemListContainer text='Nuestros Productos' />
    </>
  );

}

export default Home;