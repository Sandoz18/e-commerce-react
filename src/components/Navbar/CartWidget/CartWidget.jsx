import React from "react";
import styles from './CartWidget.module.css';
import { NavLink } from "react-router-dom";

function CartWidget({ itemCount }) {


  return (
    <>

      <NavLink to="/carrito" className={"styles.cartWidgetLink"}>
        <div className={styles.CartWidgetContainer}>
          <i className="bi bi-bag"></i>

          <span className={styles.cartCountBadge}>{itemCount}</span>


        </div>
      </NavLink>



    </>
  )
}

export default CartWidget