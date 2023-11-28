import './style.css'
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/index"
import { useParams } from "react-router-dom";

import { db } from "../../db/db"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailConteiner = () => {

    // Estado para almacenar la informacion del producto y estado de carga
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    // Obtener el ID del producto de los parametros de la URL 
    const { idProduct } = useParams();

    useEffect(() => {
        // Crear una referencia al documento del producto en Firestore 
        const productRef = doc(db, "productos", idProduct);

        // Utilizar la funcion getDoc para obtener la informacion de un solo producto
        getDoc(productRef).then((response) => {
            // Verificar si el producto con ese ID existe en la base de datos 
            if (response.exists()) {
                // Si existe, darle formato y almacenar en estado
                const productData = { id: response.id, ...response.data() };
                setProduct(productData);
                setLoading(false);
            } else {
                console.log("El producto no existe en la base de datos");
            }
        });
    }, [idProduct]);

    return (
        <div id="item-detail-conteiner">
            {/* */}

            {loading ? <>Cargando...</> : <ItemDetail product={product} />}

        </div>
    )
};

export default ItemDetailConteiner;