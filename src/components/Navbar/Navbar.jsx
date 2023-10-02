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
                    <li><Link to={"/Barato"}>Barato</Link></li>
                    <li><Link to={"/Intermedio"}>Intermedio</Link></li>
                    <li><Link to={"/Caros"}>Caros</Link></li>
                    <li><Link to={"/Tablets"}>Tablets/PC</Link></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    );
}

export default Navbar;