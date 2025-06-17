import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Item from '../Item/Item';

//la estructura de grid va acá porque muestra el conjunto de items
//ItemList es la capa exterior de diseño, mapea y muestra los items
function ItemList({ items }) {
    return (
        <>

        {/*
        Uso e dropdown para las categorias y el grid como tengo con columnas para mostrar
        productos destacados
       */ }


{
    
}
            <div style={{ padding: '20px', margin: '0 auto' }}></div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {/* Mapeamos el array de 'items' para crear una columna (Col) por cada producto.
                */}
                {items.map((prod) => (
                    <Col key={prod.id} className="d-flex">
                        {/* Renderizamos el componente Item.
                            Le pasamos el objeto 'prod' como prop 'product' 
                        */}
                        <Item product={prod} />
                    </Col>
                ))}
            </Row>


        </>
    );
}

export default ItemList;