// src/components/ItemDetail/ItemDetail.jsx
import React from 'react';
// Si usas CSS Modules, asegúrate de que el archivo exista y lo necesites
// import styles from './ItemDetail.module.css'; // Comentado si no lo estás usando activamente

import Card from 'react-bootstrap/Card';     // Importa Card
import Button from 'react-bootstrap/Button'; // Importa Button (aunque ItemCount ya lo usa)
// Eliminamos la importación de Row y Col para simplificar
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import ItemCount from '../ItemCount/ItemCount'; // Importa ItemCount

// Este componente recibe el objeto 'product' como prop desde ItemDetailContainer
function ItemDetail({ product }) {
    // Si 'product' es nulo o indefinido, muestra un mensaje de carga/error
    if (!product) {
        return <p className="text-center my-4">Cargando detalles del producto o producto no encontrado...</p>;
    }

    // Función que se pasará a ItemCount para manejar la adición al carrito
    const handleAddToCart = (quantity) => {
        console.log(`Se agregaron ${quantity} unidades de ${product.title} al carrito.`);
        // Aquí iría tu lógica real para agregar el producto al carrito (ej. usando Context API)
        alert(`¡${quantity} unidades de ${product.title} añadidas al carrito!`); // Alerta simple para demostración
    };

    return (
        // Contenedor principal de Bootstrap para centrar y añadir margen
        <div className="container my-4 d-flex justify-content-center">
            {/* Componente Card de React-Bootstrap para la ficha de detalle */}
            {/* SIN usar Row/Col dentro de la Card para simplificar */}
            <Card style={{ maxWidth: '400px' }} className="shadow-lg text-center"> {/* Ficha con ancho fijo, sombra y texto centrado */}
                {/* Imagen del producto */}
                <Card.Img
                    variant="top"
                    src={product.thumbnail || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={product.title}
                    className="img-fluid rounded-top" // Bootstrap para imagen responsiva
                    // padding para que la imagen no toque los bordes
                    style={{ maxHeight: '300px', objectFit: 'contain', padding: '15px' }} 
                />
                
                {/* Cuerpo de la tarjeta con título, descripción y precio */}
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold fs-3 mb-3">{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {product.brand} - {product.category}
                    </Card.Subtitle>
                    <hr />
                    <Card.Text className="text-justify flex-grow-1 px-3"> {/* Añadimos padding horizontal */}
                        {product.description || 'No hay descripción disponible para este producto.'}
                    </Card.Text>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-3 px-3"> {/* Padding horizontal aquí también */}
                        <Card.Text className="fw-bold fs-4 text-primary mb-0">
                            Precio: ${product.price}
                        </Card.Text>
                        <Card.Text className="text-success mb-0">
                            Stock: {product.stock}
                        </Card.Text>
                    </div>

                    {/* Aquí se integra el componente ItemCount */}
                    {product.stock > 0 ? (
                        <ItemCount
                            stock={product.stock}
                            initial={1} // Valor inicial del contador
                            onAdd={handleAddToCart} // Función que se ejecuta al presionar "Agregar al carrito"
                        />
                    ) : (
                        <p className="text-danger mt-3">Producto sin stock.</p>
                    )}
                </Card.Body>

                {/* Opcional: Sección para imágenes adicionales, si existen */}
                {product.images && product.images.length > 0 && (
                    <Card.Footer className="text-center p-3 bg-light border-top">
                        <h5>Más Vistas:</h5>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.title} vista ${index + 1}`}
                                    className="img-thumbnail" // Clase de Bootstrap para miniaturas
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                            ))}
                        </div>
                    </Card.Footer>
                )}
            </Card>
        </div>
    );
}

export default ItemDetail;