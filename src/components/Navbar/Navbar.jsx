import ItemListConteiner from '../ItemListConteiner/ItemListConteiner';
import CartWidget from '../CartWidget/CartWidget'
import './style.css'

const Navbar = () => {
    return (
        <div>
            <ItemListConteiner />
            <CartWidget />
        </div>
    );
}

export default Navbar;