import './style.css'
import React from 'react';

const Navbar = () => {
    return (

        <nav>
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

            <div>
                <img src="./src/components/images/shoopingcart.png" alt="CarritoLogo" />
                <h1>(1)</h1>
            </div>
        </nav>
    );
}

export default Navbar;