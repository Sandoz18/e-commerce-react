import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import CartWidget from "./CartWidget/CartWidget";
import logoImage from "../../assets/logo.png";

{/*Acá tengo que usar un hook para traer el estado del scroll useState, despúes el useEffect para escuchar el evento del scroll y un ternario para 
  usar un condicional que aplica una clase de bootstrap para la barra de navegación bg-algo*/}

{/*El estado del scroll es un booleano, useEffect trae un addeventlistener cuando el componente se monta y lo elimina cuando se desmonta*/ }
function Navbar ( ) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolledNavbar : ""}`;
  return (

    <>
      {/*contenedor*/}
      <nav className={navbarClass}>
        <div className="container-fluid d-flex flex-column px-5">

          {/*primera fila desktop (visible en desktop y mobile)*/}
          <div className={`d-flex w-100 justify-content-between align-items-center ${styles.topRow}`}>

            {/*sección izquierda busqueda tienda / hamburguesa*/}
            <div className="d-flex align-items-center">

              {/* "buscar Tienda" (visible solo en desktop) */}
              <a href="#" className={`${styles.navbarLink} d-none d-lg-inline-flex align-items-center`}>
                <i className="bi bi-geo-alt"></i>
                <span >Buscar Tienda</span>
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

          {/*Esto es la casilla de busqueda oculta en el desktop*/}
          <div className={`${styles.searchBoxMobileWrapper} w-100  d-flex d-lg-none`}>
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${styles.searchInput}`}
                placeholder="¿Cómo podemos ayudarte?"
                aria-label="Campo de búsqueda"
              />
              <span className={`input-group-text ${styles.searchIconContainer}`}>
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>

          {/* Segunda fila desktop (menú principal y buscador desktop) */}
          <div className={`d-flex w-100 justify-content-between align-items-center d-none d-lg-flex ${styles.bottomRow}`}>
            <div className="d-flex align-items-center">
              <button
                className={`btn ${styles.navbarButton}`}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuLateral"
                aria-controls="menuLateral"
              >
                <i className="bi bi-list"></i>
              </button>

              <ul className={`navbar-nav flex-row ${styles.navbarNav}`}>
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
            </div>

            <div className={` input-group  ${styles.searchBoxDesktop}`}>
              <input
                type="text"
                className={`form-control ${styles.searchInput}`}
                placeholder="¿Cómo podemos ayudarte?"
                aria-label="Campo de búsqueda"
              />
              <span className={`input-group-text ${styles.searchIconContainer}`}>
                <i className="bi bi-search"></i>
              </span>
            </div>

          </div>
          {/* Menú colapsable para mobile (solo los ítems de navegación y login/cuenta) */}
          <div className="collapse navbar-collapse w-100  " id="navbarNavCollapse">
            <ul className="navbar-nav w-100 d-lg-none">
              {/* NOTA: El campo de búsqueda móvil YA NO ESTÁ AQUÍ */}
              <li className={styles.navItem}>
                <a className="nav-link" href="#">Muebles</a>
              </li>
              <li className={styles.navItem}>
                <a className="nav-link" href="#">Espacios</a>
              </li>
              <li className={styles.navItem}>
                <a className="nav-link" href="#">Decoración</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="menuLateral"
        aria-labelledby="menuLateralLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="menuLateralLabel">
            Menú
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Cerrar"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li><a href="#" className="nav-link">Muebles</a></li>
            <li><a href="#" className="nav-link">Espacios</a></li>
            <li><a href="#" className="nav-link">Decoración</a></li>
          </ul>
        </div>
      </div>
    </>

  );
}
export default Navbar;
