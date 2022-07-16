import { useState, useEffect } from 'react';
import getFetch from '../services/GetFetch/getFetch';

const useFetch = (id = 0) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch(id)
            .then(res => {
                setProducts(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('GetFetch Finalizada');
            });
        return () => {
            setLoading(true);
        }
    }, [id]);

    return [products, loading]
}

export default useFetch
