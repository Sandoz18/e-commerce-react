import React from "react";
import styles from "./Navbar.module.css";
import CartWidget from "./CartWidget/CartWidget";
import logoImage from "../../assets/logo.png";



  
function Navbar() {
  return (
    <>
      {/*contenedor*/}
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid d-flex flex-column">

          {/*primera fila desktop (visible en desktop y mobile)*/}
          <div className="d-flex w-100 justify-content-between align-items-center py-2">

            {/*sección izquierda busqueda tienda / hamburguesa*/}
            <div className="d-flex align-items-center">
              <button
                className={`navbar-toggler  me-2 ${styles.navbarButton}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavCollapse"
                aria-controls="navbarNavCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"  >   
                 <i className="bi bi-list "></i>            
              </button>
                
              {/* "buscar Tienda" (visible solo en desktop) */}
              <a href="#" className={ `${styles.navbarLink} d-none d-lg-inline-flex align-items-center`}>
                <i className="bi bi-geo-alt me-2"></i>
                <span >buscar Tienda</span>
              </a>
            </div>

            {/*sección central logo*/}
            <div className={`text-center ${styles.navbarLogoWrapper}`}>
              <a href="#" className={styles.logoLink}>
                <img src={logoImage} alt="logo Cúbika" />
              </a>
            </div>

            {/*sección derecha (lupa mobile, login desktop, carrito)*/}
            <div className="d-flex align-items-center">
             

              <a href="#" className={`${styles.navbarLink} me-3 d-lg-block `}>
                <i className="bi bi-person"></i>
              </a>

              <CartWidget itemCount={0} />
            </div>
          </div> {/* Fin de la primera fila */}
          
          <div className={`${styles.searchBoxMobileWrapper} w-100 py-2 d-lg-none`}>
            <div className={`${styles.searchBoxMobile}`}>
                <input
                    type="text"
                    className={`form-control ${styles.searchInput}`}
                    placeholder="¿Cómo podemos ayudarte?"
                    aria-label="Campo de búsqueda"
                />             
            </div>
          </div>
        

          {/* Segunda fila desktop (menú principal y buscador desktop) */}
          <div className="d-flex w-100 justify-content-between align-items-center py-2 d-none d-lg-flex">
            <ul className={`navbar-nav ${styles.navbarNav}`}>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Muebles</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Espacios</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Decoración</a>
              </li>
            </ul>

            <div className={`${styles.searchBox} d-flex align-items-center`}>
              <input
                type="text"
                className={`form-control ${styles.searchInput}`}
                placeholder="¿Cómo podemos ayudarte?"
                aria-label="Campo de búsqueda"
              />
              <a href="#" className={styles.searchIcon}>
                  <i className="bi bi-search"></i>
              </a>
            </div>
          </div>

          {/* Menú colapsable para mobile (solo los ítems de navegación y login/cuenta) */}
          <div className="collapse navbar-collapse w-100" id="navbarNavCollapse">
            <ul className="navbar-nav w-100 d-lg-none">
                {/* NOTA: El campo de búsqueda móvil YA NO ESTÁ AQUÍ */}
                <li className="nav-item">
                    <a className="nav-link" href="#">Muebles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Espacios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Decoración</a>
                </li>
             
            </ul>
          </div>

        </div>
      </nav>
    </>
 


  );
}
export default Navbar;
