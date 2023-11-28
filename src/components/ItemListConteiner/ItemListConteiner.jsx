import { useEffect, useState } from "react";
import './style.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../db/db";

const ItemListConteiner = () => {
    // Estado para almacenar la lista de productos y el estado de carga
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener el parametro de la categoria desde ReactRouter
    const { idCategory } = useParams();

    useEffect(() => {
        // Configurar la referencia de coleccion "productos" en Firebase
        const productsRef = collection(db, "productos");

        // Obtener todos los productos de Firebase 
        getDocs(productsRef)
            .then((response) => {
                // Formatear los datos obtenidos en un array de objetos
                const productsData = response.docs.map((productDoc) => ({
                    id: productDoc.id,
                    ...productDoc.data(),
                }));

                //Actualizar el estado con los productos obtenidos y marcar la carga como completa
                setProducts(productsData);
                setLoading(false);
            })

            .catch((error) => {
                console.error("Error al obtener productos", error);
            });

        // Crear una consulta para filtrar los productos por categoria 
        const categoryQuery = query(
            productsRef,
            where("categoria", "==", "Baratos")
        );

        // Obtener los productos filtrados por categoria 
        getDocs(categoryQuery)
            .then((response) => {
                // Formatear los datos obtenidos en un array de objetos
                const filteredProductsData = response.docs.map((productDoc) => ({
                    id: productDoc.id,
                    ...productDoc.data(),
                }));
                console.log("Productos filtrados por categoria", filteredProductsData)
            })
            .catch((error) => {
                console.error(
                    "Error al obtener los productos filtrados por categoria", error
                );
            }, [idCategory]);

        return (
            <div id="item-list-conteiner">
                {/* */}

                {loading ? <>Cargando...</> : <ItemDetail products={products} />}

            </div>
        )
    })
}

export default ItemListConteiner;