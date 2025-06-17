
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Necesitas Button de React-Bootstrap aquí

function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);

    // Asegura que el contador no exceda el stock ni sea menor que 1
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) { // Mínimo de 1 unidad
            setCount(count - 1);
        }
    };

    return (
        <div className="d-flex align-items-center gap-2 mt-3"> {/* Estilos de Bootstrap para alinear */}
            <Button variant="outline-secondary" onClick={decrement} disabled={count === 1}>-</Button>
            <span className="px-3 py-1 border rounded">{count}</span> {/* Muestra el contador */}
            <Button variant="outline-secondary" onClick={increment} disabled={count === stock}>+</Button>
            
            {/* Botón para agregar al carrito, que llama a la función onAdd pasada como prop */}
            <Button variant="primary" onClick={() => onAdd(count)} disabled={stock === 0 || count === 0}>
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;