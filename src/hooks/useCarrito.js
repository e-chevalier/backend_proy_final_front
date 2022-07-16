import { useState, useEffect } from 'react';
import getCarrito from '../services/GetFetch/getCarrito';

const useCarrito = (id = 0) => {

    const [products, setProducts] = useState([]);
    const [cartId, setCartId] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCarrito(id)
            .then(res => {
                setProducts(res.products)
                setCartId(res.id)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('GetCarrito Finalizada');
            });
        return () => {
            setLoading(true);
        }
    }, [id]);

    return [products, loading, cartId, setCartId]
}

export default useCarrito
