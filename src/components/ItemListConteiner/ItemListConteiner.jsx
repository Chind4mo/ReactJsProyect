import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemListConteiner() {
    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./src/components/images/pantalon.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemListConteiner;