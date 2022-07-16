import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const ItemForm = ({show, validated, setTitle, setPrice, setDescription, setThumbnail, setCode, setStock, handleShow, handleClose, handleSubmit}) => {

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Cargar producto
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cargar producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <FloatingLabel label="Nombre" className="mb-3">
                                <Form.Control required type="text" placeholder="Nombre del producto" onBlur={(e) => { setTitle(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar el nombre del producto.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <FloatingLabel label="Precio" className="mb-3">
                                <Form.Control required type="number" placeholder="Ingrese valor del producto" onBlur={(e) => { setPrice(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un precio válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <FloatingLabel label="Descripción" className="mb-3">
                                <Form.Control  as="textarea" required placeholder="Ingrese descripción del producto" onBlur={(e) => { setDescription(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un precio válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formThumbnail">
                            <FloatingLabel label="URL Foto" className="mb-3">
                                <Form.Control required type="url" placeholder="Ingrese la direccion de la foto del producto." onBlur={(e) => { setThumbnail(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese URL de imagen valido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCode">
                            <FloatingLabel label="Codigo" className="mb-3">
                                <Form.Control required type="text" placeholder="Código del producto" onBlur={(e) => { setCode(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar el código del producto.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formStock">
                            <FloatingLabel label="Stock" className="mb-3">
                                <Form.Control required type="number" placeholder="Ingrese el Stock del producto" onBlur={(e) => { setStock(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un Stock válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )

}

export default ItemForm
