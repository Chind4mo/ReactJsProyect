import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import ItemListCss from './ItemListConteiner.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


function ItemListConteiner() {
    return (


        <div className='conteiner'>
            <div class="logo">
                <img src="./src/components/images/companylogo.jpg" alt="Logo" />
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
        </div>

    );
}

export default ItemListConteiner;