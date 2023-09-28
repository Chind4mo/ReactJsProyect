import { productos } from "../../products";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import ItemList from "../../components/ItemList/ItemList";


const Home = () => {

    const  [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])


    useEffect (() => {
        setTimeout(()=> {
            setProducts(productos);
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <Layout>
            {
                isLoading
                ? <p>Cargando ... </p>
                : <ItemList products={products}/>
            }
        </Layout>
    );
};

export default Home;
