import React, {useContext} from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import {BsTrash, BsPlusLg, BsDashLg} from 'react-icons/bs';
import CartContext from '../../context/CartContext';


function CartItem({item}){
    const {addToCart, removeFromCart} = useContext(CartContext);
    const handleIncreaseQuantity = ()=>{
        addToCart(item, 1);
    };

    const handleDecreaseQuantity = ()=>{
        if (item.quantity > 1){
             addToCart(item, -1);
        }else{
            removeFromCart(item.id);
        }
       
    };

const handleRemoveItem =()=>{
    removeFromCart(item.id);
}

const formatPrice = (price) =>{
    if (typeof price === 'number' && !isNaN(price)){
        return price.toFixed(2);
    }
     return '0.00';
};
return (
        <Card className="mb-3 shadow-sm rounded-lg">
            <Card.Body className="d-flex align-items-center p-3">
                <div className="me-3">
                    <img
                        src={item.imagen || 'https://placehold.co/80x80/EAE0DD/333333?text=No+Image'}
                        alt={item.nombre || 'Producto'}
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>

                <div className="flex-grow-1">
                    <Card.Title className="mb-1 fs-5 fw-bold">{item.nombre || 'Nombre no disponible'}</Card.Title>
                    <Card.Text className="mb-1 text-muted">
                        Precio unitario: ${formatPrice(item.precio)}
                    </Card.Text>

                    <div className="d-flex align-items-center mt-2">
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={handleDecreaseQuantity}
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '30px', height: '30px' }}
                        >
                            <BsDashLg />
                        </Button>
                        <span className="mx-2 fw-bold">{item.quantity}</span>
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={handleIncreaseQuantity}
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '30px', height: '30px' }}
                        >
                            <BsPlusLg />
                        </Button>
                        
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={handleRemoveItem} 
                            className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '35px', height: '35px' }}
                        >
                            <BsTrash />
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}


export default CartItem;
