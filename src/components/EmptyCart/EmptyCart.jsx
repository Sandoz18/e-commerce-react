import React  from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BsCartX } from 'react-icons/bs';

function EmptyCart({handleCloseModal}){
    const navigate = useNavigate();

    const handleGoToShop = () =>{
        navigate('/');
        if(handleCloseModal){
            handleCloseModal();
        }
    };
    
    return (
        <div className="text-center p-4 d-flex flex-column align-items-center justify-content-center">
            <BsCartX size={80} className="mb-4 text-muted" /> {/* Icono de carrito vacío */}
            <h4 className="mb-3">¡Tu Carrito está vacío!</h4>
            <p className="text-muted mb-4">Parece que aún no has añadido ningún producto.</p>
            <Button variant="primary" onClick={handleGoToShop} className="px-4 py-2">
                Ir a comprar
            </Button>
        </div>
    );
}

export default EmptyCart;