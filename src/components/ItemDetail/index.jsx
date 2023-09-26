import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../Layout/Layout";
import './style.css'

const ItemDetail = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const searchProduct = productos.find(
        (prod) => prod.id === parseInt(idProduct)
    );

    useEffect(() => {
        setTimeout(() => {
            console.log(searchProduct);
            setProduct(searchProduct);
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <Layout>
            {isLoading ? (
                <p>Cargando . .</p>
            ) : (
                <>
                    <h1><img src={product.ImgUrl} alt={product.ImgUrl}/></h1>
                    <h1>{product.nombre}</h1> <br />
                    <h2>{product.descripcion}</h2>
                    <h3>
                        ir a <Link to={"/"}>Home</Link>
                    </h3>
                </>
            )}
        </Layout>
    );
};

export default ItemDetail;