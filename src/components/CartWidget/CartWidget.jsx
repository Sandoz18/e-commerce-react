import React, { useContext } from "react";
import styles from './CartWidget.module.css';
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext"; // Ruta ajustada: sube de CartWidget, sube de components, baja a context


function CartWidget({onClick}) {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <>
      
      <NavLink to="#" className={styles.cartWidgetLink} onClick={onClick} >
        <div className={styles.CartWidgetContainer}>
          <i className="bi bi-bag"></i>
          <span className={styles.cartCountBadge}>{totalItems}</span>
        </div>
      </NavLink>
      
    </>
  )
}

export default CartWidget;




