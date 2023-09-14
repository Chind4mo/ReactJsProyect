import { productos } from "./products";
import "./App.css";
import CardCustom from "./components/Card";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList/ItemList";
import Item from "./components/Item/Item";
import { useCount } from "./Hooks/UseCount";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {count, decrement, increment} = useCount()

  const getData = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  const requestJsonPlaceHolder = () => fetch('https://fakestoreapi.com/products')

  // WWWw.miecommers.com/products/

  useEffect(() => {
    requestJsonPlaceHolder()
    .then(res => res.json())
    .then(res => {
      setProducts(res);
      setIsLoading(false)
    })
    .catch(err => console.log(err))

    
  }, []);

  return (
    <div>
      <Navbar />
      <ItemList>
        {isLoading ? (
          <div> Cargando ...</div>
        ) : (
          products.map((producto) => (
            <Item
              id={producto.id}
              nombre={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              imgUrl={producto.image}
            ></Item>
          ))
        )}
      </ItemList>
        {/* <h1>{count}</h1>
        <button onClick={()=> increment()}>Sumar</button>
        <button onClick={()=> decrement()}>Restar</button> */}
    </div>
  );
}

export default App;