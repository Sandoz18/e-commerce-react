import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';
function ItemList({ items }) {
    return (
        <>
            <Row xs={1} md={2} lg={4} className="g-4 justify-content-center mb-5">              
                    {items.map((prod) => (
                    <Col key={prod.id} className="d-flex justify-content-center">                       
                        <Item product={prod} />
                    </Col>
                ))}
            </Row>


        </>
    );
}

export default ItemList;