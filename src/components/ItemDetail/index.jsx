import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../Layout/Layout";
import './style.css'
import Item from '../Item/Item'

const ItemDetail = () => {
    
    const { idProduct } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const searchProduct = productos.find(
        (prod) => prod.id === parseInt(idProduct)
    );

    useEffect(() => {

        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(searchProduct);
                }, 1000);
            });
        };

        fetchData()
            .then((data) => {
                console.log(data);
                setProduct(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
                setIsLoading(false);
            });
    }, [searchProduct]);

    return (
        <Layout>
            {isLoading ? (
                <p>Cargando . .</p>
            ) : (
                <Item>
                </Item>
            )}
        </Layout>
    );
};

export default ItemDetail;


