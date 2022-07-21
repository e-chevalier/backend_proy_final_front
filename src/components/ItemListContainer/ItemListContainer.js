import Container from 'react-bootstrap/Container';
import Loading from '../Loading/Loading';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import ItemFormContainer from '../../components/ItemFormContainer/ItemFormContainer';
import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER


const ItemListContainer = ({ greeting }) => {

    const [products, loading] = useFetch();
    const { id } = useParams();

    const deleteProd = async (prod) => {
        let text = `Se va a eliminar el producto ${prod.title}`

        let options = { 
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('coderJWT')}
        }
        
        if (window.confirm(text) === true) {
            await fetch(`${BACKEND_SERVER}/api/productos/${prod.id}`, options)
            .then(res => res.json())
            .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            })

            window.location.reload()
        }
    }

    return (

        loading ?
            <Loading />
            :
            <div>
                <p className="h4 my-5 text-center">{greeting}</p>
                <Container id="cards" className="py-5 my-5">
                    <ItemFormContainer/>
                    {
                        <ItemList products={id ? products.filter(prod => prod.code === id) : products} deleteProd={deleteProd} />
                    }
                </Container>
            </div>
    )
}

export default ItemListContainer
