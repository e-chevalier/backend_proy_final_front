import ItemUpdate from '../ItemUpdate/ItemUpdate';
import Loading from '../Loading/Loading';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER


const ItemUpdateContainer = () => {

    const { id } = useParams();
    const [products, loading] = useFetch(id);

    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [code, setCode] = useState('')
    const [stock, setStock] = useState(0)
    let navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        let prodId = products[0].id

        if (form.checkValidity() === true) {
            
            let prod = {
                title: title,
                description: description,
                code: code,
                thumbnail: thumbnail,
                price: Number(price),
                stock: Number(stock),
                timestamp: Date.now(),
                id: prodId,
                qty: 0
            }

            let text = `Se va a modificar el producto ${products[0].title}`
            let options = { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(prod)}
        
            if (window.confirm(text) === true) {
                await fetch(`${BACKEND_SERVER}/api/productos/${prodId}`, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data); // JSON data parsed by `data.json()` call
                    alert("Producto actualizado ID:" + data.id )
                })
            }

            navigate('/')
            
        }
        
        setValidated(true);
    }

    let commonProps = {
        validated: validated,
        setTitle: setTitle,
        setPrice: setPrice,
        setDescription: setDescription,
        setThumbnail: setThumbnail,
        setCode: setCode,
        setStock: setStock,
        handleSubmit: handleSubmit
    }


    return (
        loading ?
            <Loading />
            :
            <Container>
                <ItemUpdate product={products[0]} {...commonProps} />
            </Container>
    )
}

export default ItemUpdateContainer
