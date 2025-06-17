// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Inicia el estado de carga

    const url = categoryName
      ? `https://dummyjson.com/products/category/${categoryName}`
      : 'https://dummyjson.com/products';

    console.log("DEBUG: 1. Iniciando fetch para URL:", url);

    new Promise(resolve => {
      setTimeout(() => {
        console.log("DEBUG: 2. setTimeout completado, iniciando fetch real.");
        fetch(url)
          .then(res => {
            console.log("DEBUG: 3. Respuesta HTTP recibida. res.ok:", res.ok, "Status:", res.status);
            if (!res.ok) {
              // Intenta leer el cuerpo del error si no es un 2xx
              return res.json().then(errorData => {
                  throw new Error(`HTTP error! status: ${res.status}, Message: ${errorData.message || 'Unknown error from API'}`);
              }).catch(() => {
                  throw new Error(`HTTP error! status: ${res.status}, No JSON error message.`);
              });
            }
            return res.json();
          })
          .then(data => {
            console.log("DEBUG: 4. Data parseada a JSON:", data);

            if (data && Array.isArray(data.products)) {
              setItems(data.products);
              console.log("DEBUG: 5. Productos cargados y establecidos:", data.products.length, "items.");
            } else {
              setItems([]);
              console.warn("DEBUG: 5. 'data.products' no es un array válido. Estableciendo items a vacío. Data recibida:", data);
            }
          })
          .catch(error => {
            // Este catch captura errores de red, errores HTTP (ej. 404), y errores de parseo JSON.
            console.error("ERROR: Fallo crítico en el fetch de productos:", error);
            setItems([]); // Asegura que 'items' sea un array vacío para evitar errores posteriores.
          })
          .finally(() => {
            // ESTA LÍNEA ES CLAVE: se ejecuta siempre, al final del fetch.
            console.log("DEBUG: 6. Bloque finally ejecutado. Estableciendo loading a false.");
            setLoading(false);
            // ESTA LÍNEA TAMBIÉN ES CLAVE: resuelve la Promise del setTimeout.
            console.log("DEBUG: 7. Promise resuelta.");
            resolve(); 
          });
      }, 500); // Retardo de 500 milisegundos
    });

  }, [categoryName]); // Dependencia del useEffect

  return (
    <div className="container my-4">
      <h1>
        {categoryName
          ? `Categoría: ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`
          : 'Todos nuestros productos'
        }
      </h1>
      {loading ? (
        <p className="text-center">Cargando productos...</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p className="text-center">No se encontraron productos en esta categoría o hubo un error al cargar.</p>
      )}
    </div>
  );
}

export default ItemListContainer;