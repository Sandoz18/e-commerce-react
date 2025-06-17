import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
//responsable de mostrar un producto
function Item({ product }){
   const navigate= useNavigate()

    return(
      <Card className='w-100'>
          <Card.Img variant="top" src={product.thumbnail || "https://via.placeholder.com/286x180?text=No+Image"} alt='Imagen de producto'/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
         <Card.Text>
          {product.price}
        </Card.Text>
        {/*Acá uso product no item para navegar*/}
        <Button variant="dark"
        onClick={()=>
          navigate(`/item/${product.id}`)}        
        >Ver más</Button>
      </Card.Body>
      </Card>
      
  );
      
    
}

//existe un bootstrap-react con la sintaxis de react, se pueden usar los dos
export default Item;