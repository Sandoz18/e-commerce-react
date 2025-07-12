import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import CartItem from '../CartItem/CartItem';
import EmptyCart from '../EmptyCart/EmptyCart'; 
function CartContainer({ handleCloseModal }) {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const formatPrice = (price) => {
        if (typeof price === 'number' && !isNaN(price)) {
            return price.toFixed(2);
        }
        return '0.00'
    };

    const handleCheckout = () => {
        navigate('/checkout');
        if (handleCloseModal) {
            handleCloseModal();
        }
    };

    if (cart.length === 0) {        
        return <EmptyCart handleCloseModal={handleCloseModal} />;
    }

    const subtotal = getTotalPrice();
    const discount = 0;
    const total = subtotal - discount;

    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">Carrito de compras</h3>
                {handleCloseModal && (
                    <Button variant="light" onClick={handleCloseModal}
                        className="btn-close" aria-label="Cerrar"></Button>
                )}
            </div>

            <ListGroup className="cart-items-list mb-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {cart.map(item => (
                    <ListGroup.Item key={item.id} className='p-0 border-0'>
                        <CartItem item={item} />
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <hr />

            <div className="summary mb-4">
                <div className="d-flex justify-content-between mb-1">
                    <span>Subtotal:</span>
                    <span className="fw-bold">${formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                    <div className="d-flex justify-content-between mb-1 text-success">
                        <span>Descuento:</span>
                        <span className="fw-bold">-${formatPrice(discount)}</span>
                    </div>
                )}
                <div className="d-flex justify-content-between fs-5 fw-bold mt-2">
                    <span>Total:</span>
                    <span>${formatPrice(total)}</span>
                </div>
            </div>

            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleCheckout} className="py-2">
                    Finalizar compra
                </Button>
                <Button variant="outline-danger" onClick={clearCart} className="py-2">
                    Vaciar carrito
                </Button>
            </div>
        </div>
    );
}

export default CartContainer;
