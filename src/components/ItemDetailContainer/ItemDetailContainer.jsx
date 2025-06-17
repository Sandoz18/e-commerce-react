import {useState, useEffect} from "react";
import styles from "./ItemDetailContainer.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";//Hook para obtener el id de la URL
import ItemDetail from "../ItemDetail/ItemDetail";

{/**el fetch se hace sobre un producto en especifico usando params */}
function ItemDetailContainer(){
const [detail, setDetail]=useState({

});
const [loading, setLoading]=useState(true);
const {id}=useParams();

useEffect(()=>{
  setLoading(true); // Inicia el estado de carga al principio del fetch
fetch (`https://dummyjson.com/products/${id}`)
 .then(res => res.json())
      .then(data=>{
       setDetail(data);
         setLoading(false);//termina la carga
        console.log("Detalle del producto cargado:", data);
      });
}, [id])

//control de carga
  if (loading || !detail) return <p>Cargando...</p>; 

    return(
<>
<div className={styles.detailContainer}>Item Detail Container</div>
  <ItemDetail product={detail} />

 
</>
    )
}


export default ItemDetailContainer;