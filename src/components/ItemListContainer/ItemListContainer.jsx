import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import HeroSection from '../HeroSection/HeroSection';
import CartContext from '../../context/CartContext';
import { getProducts, getProductsByCategory } from '../../firebase/db';
import { BeatLoader } from 'react-spinners';
function ItemListContainer() {
  const { categoryName } = useParams();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log("ItemListContainer: Efecto ejecutado para categoryName:", categoryName);
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let productsToSet;
        if (categoryName) {
          productsToSet = await getProductsByCategory(categoryName);
          console.log(`ItemListContainer: Productos filtrados por categoría '${categoryName}':`, productsToSet);
        } else {
          productsToSet = await getProducts();
          console.log("ItemListContainer: Todos los productos obtenidos:", productsToSet);
        }
        setItems(productsToSet);
      } catch (err) {
        console.error('ItemListContainer: Error al cargar los productos:', err);
        setError("Error al cargar los productos. Intente de nuevo más tarde.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName, error, setError]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        {isHome && <HeroSection />}
        <h1 className="text-3xl font-bold text-center my-8 rounded-lg p-4 bg-blue-100 text-blue-800 shadow-md">
          {categoryName ? `Categoría: ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}` : 'Todos nuestros productos'}
        </h1>
        <BeatLoader color="#007bff" loading={loading} size={15} margin={5} />
        <p className="text-center text-lg text-gray-600 mt-3">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        {isHome && <HeroSection />}
        <h1 className="text-3xl font-bold text-center my-8 rounded-lg p-4 bg-blue-100 text-blue-800 shadow-md">
          {categoryName ? `Categoría: ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}` : 'Todos nuestros productos'}
        </h1>
        <p className="text-center text-lg text-red-500">{error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-4">
        {isHome && <HeroSection />}
        <h1 className="text-3xl font-bold text-center my-8 rounded-lg p-4 bg-blue-100 text-blue-800 shadow-md">
          {categoryName ? `Categoría: ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}` : 'Todos nuestros productos'}
        </h1>
        <p className="text-center text-lg text-red-500">No hay productos disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {isHome && <HeroSection />}

      <h1 className="text-3xl font-bold text-center my-8 rounded-lg p-4 bg-blue-100 text-blue-800 shadow-md">
        {categoryName ? `Categoría: ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}` : 'Todos nuestros productos'}
      </h1>

      <ItemList items={items} addToCart={addToCart} cart={cart} />
    </div>
  );
}
export default ItemListContainer;
