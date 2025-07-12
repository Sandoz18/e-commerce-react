import React, { useContext } from 'react';
import styles from './ItemDetail.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
function ItemDetail({ product }) { 
    console.log("ItemDetail: Prop 'product' recibida:", product);   
    const { addToCart, getQuantityById, isInCart } = useContext(CartContext); 
    const navigate = useNavigate();
    if (!product) {
        return (
            <p className="text-center my-4">
                Cargando detalles del producto o producto no encontrado...</p>
        );
    }

    const handleAddToCart = (quantity) => {
        addToCart(product, quantity);
        console.log(`Se agregaron ${quantity} unidades de ${product.nombre} al carrito.`);
    };

    const handleFinishPurchaseClickInternal = () => {
        navigate('/Checkout');
    };

    const quantityInCart = getQuantityById(product.id);
    const availableStock = product.stock - quantityInCart;
    console.log("ItemDetail: Stock disponible para ItemCount:", availableStock);

    const formatPrice = (price) => {
        if (typeof price === 'number' && !isNaN(price)) {
            return price.toFixed(2);
        }
        return 'N/A';
    };
    
    const productInCart = isInCart(product.id); 
    return (
        <div className="container my-4 d-flex justify-content-center">
            <div className={styles.detailContainer}>
                <Card className={`${styles.detailCard} shadow-lg text-center`}>
                    <Card.Img
                        variant="top"
                        src={product.imagen || 'https://placehold.co/400x300/EAE0DD/333333?text=No+Image'} // Usar placehold.co
                        alt={product.nombre || 'Producto'} 
                        className="img-fluid rounded-top"
                        style={{ maxHeight: '300px', objectFit: 'contain', padding: '15px' }}
                    />

                    <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title className="fw-bold fs-3 mb-3">{product.nombre || 'Nombre no disponible'}</Card.Title> {/* CORRECCIÓN: Añadido fallback para título */}
                        
                        <Card.Subtitle className="mb-2 text-muted">                           
                            {product.marca || 'Marca'} - {product.categoria || 'Categoría'}
                        </Card.Subtitle>

                        <hr />

                        <Card.Text className="text-justify flex-grow-1 px-3">
                            {product.descripcion || 'No hay descripción disponible para este producto.'}
                        </Card.Text>

                        <hr />

                        <div className="d-flex justify-content-center align-items-center mb-3 px-3">
                            <Card.Text className="fw-bold fs-4 text-primary mb-0">
                                Precio: ${formatPrice(product.precio)} 
                            </Card.Text>
                        </div>
                       
                        {availableStock > 0 ? (
                            <> 
                                <ItemCount
                                    stock={availableStock}
                                    initial={1}
                                    onAdd={handleAddToCart}
                                    isProductInCart={productInCart} 
                                />
                                {productInCart && ( 
                                    <div className="mt-3">
                                        <Button variant="success" onClick={handleFinishPurchaseClickInternal} className="w-100">
                                            Terminar mi compra
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className="text-danger mt-3">Producto sin stock.</p>
                        )}
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ItemDetail;
