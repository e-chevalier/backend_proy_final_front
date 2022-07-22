import { useState, useEffect } from 'react';
import getCarrito from '../services/GetFetch/getCarrito';

const useCarrito = () => {

    let localCartId = Number(localStorage.getItem('localCartId')) || 0

    const [products, setProducts] = useState([]);
    const [cartId, setCartId] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCarrito(localCartId)
            .then(res => {
                setProducts(res.products)
                setCartId(res.id)
                localStorage.setItem('localCartId', res.id)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('GetCarrito Finalizada');
            });
        return () => {
            setLoading(true);
        }
    }, [localCartId]);

    return [products, loading, cartId, setCartId]
}

export default useCarrito
