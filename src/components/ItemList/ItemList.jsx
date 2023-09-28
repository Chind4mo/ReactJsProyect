import Item from "../Item/Item";

const ItemList = ( {products}) => {

    return (
        <div>
            {products.map((prod) => (
                <Item
                    key={prod.id}
                    id={prod.id}
                    nombre={prod.nombre}
                    descripcion={prod.descripcion}
                    imgUrl={prod.imgUrl}
                    />
            ))}
        </div>
    )
}

export default ItemList;
