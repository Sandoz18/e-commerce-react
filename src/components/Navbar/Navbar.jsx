import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import CartWidget from "./CartWidget/CartWidget";
import logoImage from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownButton } from "react-bootstrap";

{/*Acá tengo que usar un hook para traer el estado del scroll useState, despúes el useEffect para escuchar el evento del scroll y un ternario para 
  usar un condicional que aplica una clase de bootstrap para la barra de navegación bg-algo*/}
{/*El estado del scroll es un booleano, useEffect trae un addeventlistener cuando el componente se monta y lo elimina cuando se desmonta*/ }
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => { // <--- ESTO ES LA FUNCIÓN DE LIMPIEZA
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories') // Realiza la petición a la API
      .then(res => res.json()) // Parsea directamente la respuesta a formato JSON
      .then(data => {       
        setCategories(data); // Actualiza el estado 'categories' con los datos recibidos
      });   
  }, []); // Array de dependencias vacío: este efecto se ejecuta SOLO una vez al montar el componente.


  const navbarClass = `navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolledNavbar : ""}`;
  return (
    <>  
      <nav className={navbarClass}>
        {/*contenedor*/}
        <div className="container-fluid d-flex justify-content-around flex-column px-1 px-md-4">
          {/* topRow ahora contiene todos los elementos pero deja fuera los duplicados o colapsables porque no pueden ir dentro del container-fluid */}
          <div className={`d-flex w-100 justify-content-between align-items-center ${styles.topRow}`}>
            {/* "buscar Tienda"  */}
            <button className={`${styles.navbarLink} align-items-center pe-3`}>
              <i className="bi bi-geo-alt"></i>
            </button>

            {/*izquierda*/}
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

              {/*acá ver como hago lo de active y pending para los vinculos*/}
              <ul className={`navbar-nav flex-row  d-none d-md-flex  ${styles.navbarNav}`}>
                <li className={styles.navItem}>
                  <NavLink to='/Muebles' className={styles.navLink}>Muebles</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to='/Espacios' className={styles.navLink}>Espacios</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to='/Deco' className={styles.navLink}>Decoración</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to='Ofertas' className={styles.navLink}>Ofertas</NavLink>
                </li>
              </ul>
            </div>

            {/*sección central logo acá puedo usar link en vez de NavLink porque 
            no necesito utilizar nigún estilo especial, tambien se usa para botones especiales
            que actúan como navegación (volver a =>)*/}
            <div className={`text-center ${styles.navbarLogoWrapper}`}>
              <NavLink to='/' className={styles.logoLink}>
                <img src={logoImage} alt="logo Cúbika" /> </NavLink>

            </div>

            {/*derecha */}
            <div className="d-flex align-items-center">

              <div className={` input-group  d-none d-md-flex ${styles.searchBoxDesktop}`}>
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
              <NavLink className={`${styles.navbarLink}  d-lg-block me-3`}>
                <i className="bi bi-person"></i>
              </NavLink>
              <CartWidget itemCount={0} />
            </div>
          </div> {/* Fin de la primera fila */}


          {/*Esto es la casilla de busqueda oculta en el desktop*/}
          <div className={`${styles.searchBoxMobileWrapper} w-100  d-flex d-md-none`}>
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

          <DropdownButton id='dropdown-categorias' title="Categorias">
            <Dropdown.Menu className={styles.scrolleableMenu}>
              {categories.map((cat) => (
                <Dropdown.Item
                  key={cat.name}
                  as={NavLink}
                  to={`/category/${cat.name}`}
                >
                  {cat.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </DropdownButton>

          {/* Menú colapsable para mobile (solo los ítems de navegación y login/cuenta) */}
          <div className="collapse navbar-collapse w-100  " id="navbarNavCollapse">
            <ul className="navbar-nav w-100 d-lg-none">
              {/* NOTA: El campo de búsqueda móvil YA NO ESTÁ AQUÍ */}
              <li className={styles.navItem}>
                <NavLink to="/Muebles" className="nav-link" >Muebles</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/Espacios" className="nav-link" >Espacios</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/Deco" className="nav-link">Decoración</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/Ofertas" className="nav-link">Ofertas</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/*fin del contenedor*/}
      </nav>

      {/*El offcanvas va fuera del navbar al mismo nivel del dom no se si está bien hacerlo asi en react*/}
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
            <li><NavLink to="/Muebles" className="nav-link">Muebles</NavLink></li>
            <li><NavLink to="/Espacios" className="nav-link">Espacios</NavLink></li>
            <li><NavLink to="/Deco" className="nav-link">Decoración</NavLink></li>
            <li><NavLink to="/Ofertas" className="nav-link">Ofertas</NavLink></li>
          </ul>
        </div>
      </div>
    </>

  );
}
export default Navbar;
