import React, { useState, useEffect } from 'react';
import CartContext from '../context/CartContext';
function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {    
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [showCartModal, setShowCartModal] = useState(false);
  const handleShowCartModal = () => setShowCartModal(true);
  const handleCloseCartModal = () => setShowCartModal(false);
  
  const isInCart = (id) => {
    return cart.some((item)=>item.id === id)
  };  

  const addToCart = (product) => {  
    if (isInCart(product.id)) {
    const updatedCart = cart.map((item) => {
      if (item.id===product.id) {
        return{...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
    setCart(updatedCart);
    console.log ('se ha incrementado la cantidad del producto' )
  } else {
    setCart([...cart, {...product, quantity:1}]);
    console.log ('Ha sido añadido')
  }
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };



  const getQuantityById = (id) => {
    const found = cart.find(item => item.id === id);
    return found ? found.quantity : 0;
  };

 
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  
  const getTotalPrice = () => cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);


  
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('error al guardar el carrito', error)
    }
  }, [cart]);//ejecuto cuando cart cambia

  return (
    <CartContext.Provider value={{
      cart, setCart, addToCart, isInCart, getQuantityById, removeItem, clearCart,
      getTotalItems, getTotalPrice, showCartModal, handleShowCartModal, handleCloseCartModal
    }}>

      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
