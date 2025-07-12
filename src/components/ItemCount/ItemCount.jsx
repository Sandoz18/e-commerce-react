import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast'; 
function ItemCount({ stock, initial = 1, onAdd, isProductInCart }) {
    const [count, setCount] = useState(Math.max(1, Math.min(initial, stock)));    
    const [addedLocally, setAddedLocally] = useState(isProductInCart);

    useEffect(() => {
        setCount(Math.max(1, Math.min(initial, stock))); // Eliminado el punto y coma extra
        setAddedLocally(isProductInCart);
    }, [initial, stock, isProductInCart])
    
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    
    const handleAddClick = () => {
        if (count > 0 && count <= stock) {
            onAdd(count);
            setCount(1);
            setAddedLocally(true);
        }
    }

    return (
        <div className="d-flex align-items-center gap-2 mt-3">
            <Button variant="outline-secondary" onClick={decrement} disabled={count === 1}>-</Button>
            <span className="px-1 py-1 border rounded">{count}</span>
            <Button variant="outline-secondary" onClick={increment} disabled={count === stock}>+</Button>

            <Button variant="primary"
             onClick={addedLocally ? () => toast.info("El producto ya se añadió.") : handleAddClick}
             disabled={stock === 0 || count === 0 || addedLocally}>
                {addedLocally ? 'Producto añadido' : 'Agregar al carrito'} {/* Corregido para usar addedLocally */}
            </Button>
        </div>
    );
};

export default ItemCount;