import React from "react";
import styles from './CartWidget.module.css';

function CartWidget( {itemCount}){


    return( 
        <>
      
      <div className={styles.CartWidgetContainer}>
                <a href="#">                
                  <i className="bi bi-bag"></i>
              </a>
               <span className={styles.cartCountBadge}>
        {itemCount}
      </span>
      </div>
      
      
      
     
      
        </>
    )
}

export default CartWidget