import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Item({ product }) {
  const navigate = useNavigate()
  return (
    <Card className='w-100'>
      <Card.Img variant="top" src={product.imagen} alt='Imagen de producto' />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          {product.descricion}
        </Card.Text>
        <Card.Text>
          {product.precio}
        </Card.Text>

        {/*Acá uso product no item para navegar*/}
        <Button variant="dark"
          onClick={() =>
            navigate(`/item/${product.id}`)}
        >Ver más</Button>
      </Card.Body>
    </Card>

  );
}
export default Item;