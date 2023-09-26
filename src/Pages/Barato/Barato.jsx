import React, { Component } from 'react';
import { productos } from '../../products';
import Layout from '../../components/Layout/Layout';
import ItemList from '../../components/ItemList/ItemList';
import './style.css'


class ProductList extends Component {
    state = {
        selectedCategory: 'Todos',
    };

    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category });
    };

    render() {
        const { selectedCategory } = this.state;
        const filteredProducts = selectedCategory === 'Todos'
            ? productos
            : productos.filter(product => product.categoria === selectedCategory);

        return (
            <Layout>
                <div>
                {/* Agrega aquí la interfaz de usuario para mostrar los productos y la selección de categoría */}
                <div>
                    <button onClick={() => this.handleCategoryChange('Todos')}>Todos</button>
                    <button onClick={() => this.handleCategoryChange('Baratos')}>Barato</button>
                    <button onClick={() => this.handleCategoryChange('Caros')}>Caros</button>
                    <button onClick={() => this.handleCategoryChange('Intermedios')}>Intermedios</button>
                    <button onClick={() => this.handleCategoryChange('Tablets/PC')}>Tablets/PC</button>
                    {}
                </div>
                {}
                <ItemList>
                {filteredProducts.map(prod => (
                    <div key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <p>{prod.descripcion}</p>
                        {}
                    </div>
                ))}
                </ItemList>
            </div>
            </Layout>
        );
    }
}

export default ProductList;