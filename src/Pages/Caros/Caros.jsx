import React, { Component } from 'react';
import { productos } from '../../products';
import Layout from '../../components/Layout/Layout';
import ItemList from '../../components/ItemList/ItemList';
import './style.css'

class ProductList extends Component {
    state = {
        selectedCategory: 'Caros',
    };

    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category });
    };

    render() {
        const { selectedCategory } = this.state;
        const filteredProducts = productos.filter(product => product.categoria === selectedCategory);

        return (
            <Layout>
                <div>
                    <ItemList products={filteredProducts} />
                </div>
            </Layout>
        );
    }
}

export default ProductList;