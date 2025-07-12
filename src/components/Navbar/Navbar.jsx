import React, { useState, useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import CartModal from "../CartModal/CartModal";
import logoImage from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownButton } from "react-bootstrap";
import ThemeContext from '../../context/ThemeContext';
import { Nav, Container, Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import CartContext from '../../context/CartContext';
import { getProducts } from "../../firebase/db";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { handleShowCartModal, handleCloseCartModal, getTotalItems, showCartModal } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchCategoriesFirebase = async () => {
      try {
        const allProducts = await getProducts();
        const productCategories = [...new Set(allProducts
          .map(product => product.categoria)
          .filter(Boolean)
          .map(category => category.toLowerCase())
        )];
        const formattedCategories = productCategories.map(cat => ({
          name: cat.charAt(0).toUpperCase() + cat.slice(1),
          path: cat
        }));
        setCategories(formattedCategories);
      } catch (error) {
        console.error('Error al obtener datos de firebase', error);
        setCategories([]);
      }
    };
    fetchCategoriesFirebase();
  }, []);

  const navbarClass = `navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolledNavbar : ""}`;
  return (
    <>
      <nav className={navbarClass}>
        <div className="container-fluid d-flex justify-content-around flex-column px-1 px-md-4">
          <div className={`d-flex w-100 justify-content-between align-items-center ${styles.topRow}`}>
            <div className="d-flex align-items-center me-auto">
              <button className={`${styles.navbarLink} align-items-center pe-3`}>
                <i className="bi bi-geo-alt"></i>
              </button>

              <button
                className={`btn d-md-none ${styles.navbarButton}`}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuLateral"
                aria-controls="menuLateral"
              >
                <i className="bi bi-list"></i>
              </button>

              <ul className={`navbar-nav flex-row d-none d-md-flex ${styles.navbarNav}`}>
                {categories.map((cat) => (
                  <li key={cat.path} className={styles.navItem}>
                    <NavLink to={`/category/${cat.path}`} className={styles.navLink}>
                      {cat.name.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <DropdownButton
                id="dropdown-categorias"
                title="Categorías"
                className={`${styles.dropdownCategorias} d-none d-md-block`}
                variant="light"
              >
                <Dropdown.Menu className={styles.scrolleableMenu}>
                  {categories.map((cat) => (
                    <Dropdown.Item
                      key={cat.path}
                      as={NavLink}
                      to={`/category/${cat.path}`}
                      className={styles.navLink}
                    >
                      {cat.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </DropdownButton>
            </div>

            <div className={`text-center ${styles.navbarLogoWrapper}`}>
              <NavLink to='/' className={styles.logoLink}>
                <img src={logoImage} alt="logo Cúbika" />
              </NavLink>
            </div>

            <div className="d-flex align-items-center ms-auto">
              <div className={` input-group d-none d-md-flex ${styles.searchBoxDesktop}`}>
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
              <NavLink className={`${styles.navbarLink} d-lg-block me-3`}>
                <i className="bi bi-person"></i>
              </NavLink>
              <CartWidget onClick={handleShowCartModal} totalItems={getTotalItems()} />
              <button
                className={`btn btn-outline-secondary ms-3 ${styles.themeToggleButton}`}
                onClick={toggleTheme}
                aria-label="Cambiar tema"
              >
                {isDarkMode ? <BsSun /> : <BsMoon />}
              </button>
            </div>
          </div>

          <div className={`${styles.searchBoxMobileWrapper} w-100 d-flex d-md-none`}>
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

          <div className="collapse navbar-collapse w-100" id="navbarNavCollapse">
            <ul className="navbar-nav w-100 d-lg-none">
              {categories.map((cat) => (
                <li key={cat.path} className={styles.navItem}>
                  <NavLink to={`/category/${cat.path}`} className={styles.navLink} data-bs-dismiss="offcanvas">
                    {cat.name}
                  </NavLink>
                </li>
              ))}
              <li><NavLink to="/Ofertas" className="nav-link" data-bs-dismiss="offcanvas">Ofertas</NavLink></li>
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
            {categories.map((cat) => (
              <li key={cat.path}>
                <NavLink to={`/category/${cat.path}`} className="nav-link" data-bs-dismiss="offcanvas">
                  {cat.name}
                </NavLink>
              </li>
            ))}
            <li><NavLink to="/Ofertas" className="nav-link" data-bs-dismiss="offcanvas">Ofertas</NavLink></li>
          </ul>
        </div>
      </div>

      {showCartModal && <CartModal handleClose={handleCloseCartModal} show={showCartModal} />}
    </>
  );
}
export default Navbar;
