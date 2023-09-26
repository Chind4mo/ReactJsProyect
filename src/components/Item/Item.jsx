import { Link } from "react-router-dom"
import './style.css'

const Item = ({ id, nombre, precio, descripcion, imgUrl }) => {

    console.log("imgUrl:"+imgUrl)
    return (
        <div className="Cards">
            <img style={{ width: "200px", height: "120px" }} src={imgUrl} />
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <Link className="Link" to={`/product/${id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;