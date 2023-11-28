import React, {useContext , useEffect } from "react"
import { CartCtx } from '../../context/CartContext'
import Layout from '../../components/Layout/Layout'
import { addDoc , doc , updateDoc } from 'firebase/firestore'
import { orderCollections, productsCollections } from '../../db/db'


const Cart = () => {

    const product = {
        name: "YAMAHA",
        price: 9999.12,
        category: "motocicleta",
        stock: 4,
    }

    const { cart : cartProducts } = useContext(CartCtx)

    const createOrderInFirebase = () => {
        addDoc(productsCollections, product).then(product => console.log(product.id)).catch(err => console.log(err))
    }

    const updateProducts = async () => {
        const getReferenceDocument = doc( db , "product" , "TIiCHvpytOKU46jldQbI" )
        updateDoc(getReferenceDocument,{price: 1123.00}).then(res=> console.log(res))
    }

    return (
        <Layout>
            {
                !cartProducts.length
                    ? <>
                    <button onClick={createOrderInFirebase}>Finalizar compra</button>
                    <button onClick={updateProducts}>Modificar Producto</button>
                    </>
                    : <div>
                        {
                            cartProducts.map(products => (
                                <h3>{products.nombre}</h3>
                            ))
                        }
                    </div>
            }
        </Layout>
    )
}

export default Cart;