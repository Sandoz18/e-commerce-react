import React from "react";
import styles from './ItemListContainer.module.css'

{/*forEach siempre retorna undefined, no construye ni devuelve un nuevo array ni un valor acumulado, por eso uso .map **/}
function ItemListContainer(){

    return(
        <>
        <div className={styles.ItemListContainer}>
          {/**<div>
                  {productos.map ((prod )=><p key={prod.id}>{prod.nombre}</p>)} 
            </div> */}  
          
        </div>

     
        </>
    )
}

export default ItemListContainer