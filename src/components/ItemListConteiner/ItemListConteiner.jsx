import React from 'react';
import './style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListConteiner = (prop) => {
    return (
        <div>
            <h1>
                {prop.greeting}
            </h1>
        </div>
    );
}

export default ItemListConteiner;