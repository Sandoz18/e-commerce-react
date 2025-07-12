import React, { useState, useEffect, useContext } from 'react';
import styles from './Checkout.module.css';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext'; 
import { db } from '../../firebase/db'; 
import { collection, addDoc } from 'firebase/firestore'; 
import { BeatLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';

function Checkout() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null);
    const [buyerInfo, setBuyerInfo] = useState(null); 
 
    const { cart, getTotalPrice, clearCart } = useContext(CartContext); 
    const navigate = useNavigate();
    useEffect(() => {       
    }, [orderId, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'address':
                setAddress(value);
                break;
            default:
                break;
        }
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);
       
        if (!name || !email || !phone || !address) {
            setError('Por favor, completa todos los campos obligatorios.');
            setLoading(false);
            return;
        }
        
        if (cart.length === 0) {
            setError('Tu carrito está vacío. No puedes realizar una compra.');
            setLoading(false);
            return;
        }
       
        const invalidItems = cart.filter(item => 
            !item.nombre || typeof item.precio === 'undefined' || isNaN(item.precio)
        );

        if (invalidItems.length > 0) {
            setError('Alguno de los productos en tu carrito tiene un nombre o precio inválido. Por favor, revisa tu carrito y la base de datos.');
            setLoading(false);
            return;
        }
      
        const totalOrderPrice = getTotalPrice();
        if (isNaN(totalOrderPrice)) {
            setError('El total de la compra es inválido. Por favor, revisa los precios de los productos en tu carrito y en la base de datos.');
            setLoading(false);
            return;
        }
        const order = {
            buyer: { name, email, phone, address },
            items: cart.map(item => ({
                id: item.id,
                name: item.nombre,
                quantity: item.quantity,
                price: item.precio,
            })),
            total: totalOrderPrice,
            date: new Date(),
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            setBuyerInfo(order.buyer); 
            
            clearCart();
        } catch (err) {
            console.error("Error al procesar la compra:", err);
            setError('Hubo un error al procesar tu compra. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };
    
    const handleGoHome = () => {
        setOrderId(null);
        setBuyerInfo(null);
        setName(''); 
        setEmail('');
        setPhone('');
        setAddress('');
        navigate('/'); 
    };

    return (
        <div className={styles.checkoutContainer}> 
            <h2>Finalizar Compra</h2>

            {loading && (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <BeatLoader color="#007bff" loading={loading} size={15} margin={5} />
                    <p style={{ marginTop: '10px', color: '#555' }}>Procesando tu compra...</p>
                </div>
            )}
           
            {orderId && buyerInfo && ( 
                <div className={styles.orderConfirmation}> 
                    <h3>¡Compra Exitosa! 🎉</h3>
                    <p>Tu número de orden es:</p>
                    <strong>{orderId}</strong>
                    <div className={styles.buyerDetails}> 
                        <h4>Datos del Comprador:</h4>
                        <p><strong>Nombre:</strong> {buyerInfo.name}</p>
                        <p><strong>Email:</strong> {buyerInfo.email}</p>
                        <p><strong>Teléfono:</strong> {buyerInfo.phone}</p>
                        <p><strong>Dirección:</strong> {buyerInfo.address}</p>
                    </div>
                    <p className={styles.redirectMessage}>
                        ¡Gracias por tu compra! Revisá tu correo! Te enviamos un mail con la confirmación y los detalles de tu compra.
                    </p>
                    <Button variant="primary" onClick={handleGoHome} className={styles.goHomeButton}>
                        Volver al inicio
                    </Button>
                </div>
            )}

            {error && <p className={styles.errorMessage}>Error: {error}</p>} 
            {!orderId && !loading && (
                <form onSubmit={handleSubmit} className={styles.checkoutForm}> 
                    <h3 className={styles.buyerDataTitle}>Datos del Comprador</h3> 
                    <div className={styles.formGroup}> 
                        <input type="text" id="name" name="name" value={name} onChange={handleChange} required placeholder="Nombre:" />
                    </div>
                    <div className={styles.formGroup}> 
                        <input type="email" id="email" name="email" value={email} onChange={handleChange} required placeholder="Email:" />
                    </div>
                    <div className={styles.formGroup}> 
                        <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} required placeholder="Teléfono:" />
                    </div>
                    <div className={styles.formGroup}> {/* Usamos la clase del CSS Module */}
                        <input type="text" id="address" name="address" value={address} onChange={handleChange} required placeholder="Dirección:" />
                    </div>

                    <h3 className={styles.summaryHeading}>Resumen de Compra</h3>                     
                    
                    <div className={styles.cartItemsSummary}>
                        {cart.map(item => (
                            <div key={item.id} className={styles.cartItemSummary}>
                                <span className={styles.itemName}>{item.nombre}</span>
                                <span className={styles.itemQuantity}> ({item.quantity})</span>
                                <span className={styles.itemSubtotal}> ${item.precio.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>         

                    <p className={styles.totalAmount}>Total a pagar: ${getTotalPrice().toFixed(2)}</p> 

                    <Button type="submit" variant="primary" className={styles.submitButton}> 
                        Confirmar Compra
                    </Button>
                </form>
            )}
        </div>
    );
}

export default Checkout;
