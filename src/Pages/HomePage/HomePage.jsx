import { productos } from "../../products";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ItemList from "../../components/ItemList/ItemList";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos);
                }, 1000);
            });
        };

        fetchData()
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <Layout>
            {isLoading ? <p>Cargando ... </p> : <ItemList products={products} />}
        </Layout>
    );
};

export default Home;