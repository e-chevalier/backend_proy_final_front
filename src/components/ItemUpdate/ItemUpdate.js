import { Link } from 'react-router-dom';
//import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useEffect } from 'react'

const ItemUpdate = ({ product, validated, setTitle, setPrice, setDescription, setThumbnail, setCode, setStock, handleSubmit }) => {


    useEffect(() => {
        setTitle(product.title)
        setPrice(product.price)
        setDescription(product.description)
        setThumbnail(product.thumbnail)
        setCode(product.code)
        setStock(product.stock)
    }, [product, setTitle, setPrice, setDescription, setThumbnail, setCode, setStock])

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h3 className="m-3 p-3">Modificando {product.title}</h3>

                <Form.Group className="mb-3" controlId="formTitle">
                    <FloatingLabel label="Nuevo Nombre" className="mb-3">
                        <Form.Control required defaultValue={product.title} type="text" placeholder={product.title}
                            onBlur={(e) => { setTitle(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">No se olvide de ingresar el nombre del producto.</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                    <FloatingLabel label="Nuevo Precio" className="mb-3">
                        <Form.Control required defaultValue={product.price} type="number" placeholder="Ingrese valor del producto"
                            onBlur={(e) => { setPrice(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">Ingrese un precio válido.</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <FloatingLabel label="Nueva Descripción" className="mb-3">
                        <Form.Control as="textarea" required defaultValue={product.description} placeholder="Ingrese descripción del producto"
                            onBlur={(e) => { setDescription(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">Ingrese un precio válido.</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formThumbnail">
                    <FloatingLabel label="Nueva URL Foto" className="mb-3">
                        <Form.Control required defaultValue={product.thumbnail} type="text" placeholder="Ingrese la direccion de la foto del producto."
                            onBlur={(e) => { setThumbnail(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">Ingrese URL de imagen valido.</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCode">
                    <FloatingLabel label="Nuevo Codigo" className="mb-3">
                        <Form.Control required defaultValue={product.code} type="text" placeholder="Código del producto"
                            onBlur={(e) => { setCode(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">No se olvide de ingresar el código del producto.</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStock">
                    <FloatingLabel label="Nuevo Stock" className="mb-3">
                        <Form.Control required defaultValue={product.stock} type="number" placeholder="Ingrese el Stock del producto"
                            onBlur={(e) => { setStock(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">Ingrese un Stock válido.</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <div className="d-flex justify-content-end">
                    <Button className="m-2 p-2" as={Link} to={`/`} variant="primary">
                        Cancelar
                    </Button>
                    <Button className="m-2 p-2" variant="primary" type="submit">
                        Actualizar
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default ItemUpdate
