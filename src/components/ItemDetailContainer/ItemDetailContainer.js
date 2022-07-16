import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import useFetch from '../../hooks/useFetch';

import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [products, loading] = useFetch(id);


    return (
        loading ?
            <Loading />
            :
            <Container>
                <ItemDetail product={products[0]} />
            </Container>
    )
}

export default ItemDetailContainer
