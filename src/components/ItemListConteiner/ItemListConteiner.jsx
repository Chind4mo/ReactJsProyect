import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartWidget from '../CartWidget/CartWidget'
import React from 'react';
import './style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListConteiner = (prop) => {
    return (
        <div>

            <div className='conteiner'>
                <div class="logo">
                    <img src="./src/components/assets/companylogo.jpg" alt="Logo" />
                </div>
                <div class="brand">
                    <h1>CHINDAMO'S</h1>
                </div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <CartWidget />
            </div>

            <h1>
                {prop.greeting}
            </h1>
        </div>
    );
}

export default ItemListConteiner;