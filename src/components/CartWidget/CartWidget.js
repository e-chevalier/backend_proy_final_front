import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button'

const CartWidget = () => {

    const {cartCounter} = useCartContext()    

    return (

        <Button variant="outline-dark" className="position-relative">
            <i className="bi bi-cart h3"></i>
            <span id="cartCounter"
                    className="position-absolute top-0 start-100 translate-middle badge bg-success" hidden={cartCounter === 0}>{cartCounter}</span>
        </Button>
    )
}

export default CartWidget
