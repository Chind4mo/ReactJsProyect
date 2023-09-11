import './style.css'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
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
        </div>
    );
}

export default Navbar;