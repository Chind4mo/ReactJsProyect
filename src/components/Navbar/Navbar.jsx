import { Link } from "react-router-dom";
import './style.css'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <div>
            <div className='conteiner'>
                <div className="logo">
                    <img src="./src/assets/companylogo.jpg" alt="Logo" />
                </div>
                <div className="brand">
                    <Link to={"/"}><h1>CHINDAMO'S</h1></Link>
                </div>
                <ul>
                    <li><Link to={"/Barato"}>Categorias</Link></li>
                    <li><Link to={""}>Contacto</Link></li>
                    <li><Link to={""}>Nosotros</Link></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    );
}

export default Navbar;