import React, { createContext, useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false); 

  
  useEffect(() => {
    console.log("CartContext: Estado actual del carrito:", cart);
  }, [cart]);


  const addToCart = useCallback((product, quantity) => {
   
    if (!Number.isFinite(quantity)) {
      console.warn("addToCart: Cantidad inválida, debe ser un número finito.");
      toast.error("Cantidad inválida.");
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

       
        if (newQuantity <= 0) {
          
          toast(`"${existingItem.nombre}" eliminado del carrito.`, { icon: '👋' });
          return prevCart.filter(item => item.id !== product.id);
        } else {
          
          const updatedCart = prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: newQuantity } : item
          );
          if (quantity > 0) {
            toast.success(`Se agregaron ${quantity} unidades más de ${product.nombre}.`);
          } else {
            // Mensaje para cuando se resta cantidad
            toast.success(`Se restaron ${Math.abs(quantity)} unidades de ${product.nombre}.`);
          }
          return updatedCart;
        }
      } else {
        
        if (quantity <= 0) {
          console.warn("addToCart: No se puede añadir un producto con cantidad nula o negativa.");
          toast.error("La cantidad para añadir debe ser mayor a cero.");
          return prevCart; 
        }
        toast.success(`"${product.nombre}" agregado al carrito.`);
        return [...prevCart, { ...product, quantity }];
      }
    });
  }, []);


  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => {
      const removedItem = prevCart.find(item => item.id === productId);
      if (removedItem) {
        toast(`"${removedItem.nombre}" eliminado del carrito.`, { icon: '👋' });
      }
      return prevCart.filter(item => item.id !== productId);
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    toast('Carrito vaciado.', { icon: '🗑️' });
  }, []);

  const isInCart = useCallback((productId) => {
    return cart.some(item => item.id === productId);
  }, [cart]);

  const getQuantityById = useCallback((productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }, [cart]);

  const getTotalItems = useCallback(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
  }, [cart]);

  const handleShowCartModal = useCallback(() => {
    setShowCartModal(true);
  }, []);

  const handleCloseCartModal = useCallback(() => {
    setShowCartModal(false);
  }, []);

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    getQuantityById,
    getTotalItems,
    getTotalPrice,
    showCartModal,       
    handleShowCartModal, 
    handleCloseCartModal, 
  };

  return (
    <CartContext.Provider value={contextValue}> 
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
