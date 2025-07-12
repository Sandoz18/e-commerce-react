import React from 'react';
import { Modal, Button } from 'react-bootstrap'; 
import styles from "./CartModal.module.css"; 

function CartModal({ handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Tu Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
       
        <p>Contenido del carrito...</p>
        <p>Total: $0.00</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={() => alert('Proceder al pago (funcionalidad no implementada)')}> {/* Usar un modal personalizado en lugar de alert() */}
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;