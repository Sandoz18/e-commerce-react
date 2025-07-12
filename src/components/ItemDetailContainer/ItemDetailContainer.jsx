import React, { useState, useEffect } from "react";
import styles from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../firebase/db";
import { BeatLoader } from "react-spinners";
function ItemDetailContainer() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
  
    const fetchProductDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const product = await getProductById(id);
        if (product) {
          setDetail(product);
         // console.log('mostrame el detalle de este producto reinon'); 
        } else {
          setDetail(null);
          setError("Producto no encontrado.");
          console.warn(`Producto con ID '${id}' no encontrado.`);
        }
      } catch (err) {
        console.error('Error al cargar el detalle del producto:', err);
        setError("Error al cargar el producto. Intente de nuevo más tarde.");
        setDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();

    // DEBUG: Función de limpieza para ver cuándo el componente se desmonta
   // return () => {
     // console.log("ItemDetailContainer: Componente desmontado o efecto limpiado para ID:", id);
   // };
  }, [id]); // El efecto se ejecuta cada vez que el ID de la URL cambia 
  if (loading) {
    return (
      <div className={styles.container}>
         <BeatLoader color="#007bff" loading={loading} size={15} margin={5} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }

  if (!detail) {
    return (
      <div className={styles.container}>
        <p className={styles.notFoundMessage}>El producto solicitado no existe.</p>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <ItemDetail product={detail} />
    </div>
  );
}
export default ItemDetailContainer;
