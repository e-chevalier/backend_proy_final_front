import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const ChatForm = ({show, validated, setName, setSurname, setAge, setAlias, setAvatar, setMessage, handleShow, handleClose, handleSubmit}) => {

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Enviar Nuevo mensaje
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Mensaje</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formName">
                            <FloatingLabel label="Nombre" className="mb-3">
                                <Form.Control required type="text" placeholder="Nombre" onBlur={(e) => { setName(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un Nombre.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSurname">
                            <FloatingLabel label="Apellido" className="mb-3">
                                <Form.Control  type="text" required placeholder="Ingrese su apellido" onBlur={(e) => { setSurname(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un apellido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAge">
                            <FloatingLabel label="Age" className="mb-3">
                                <Form.Control required type="number" placeholder="Ingrese Edad" onBlur={(e) => { setAge(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese su edad.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAlias">
                            <FloatingLabel label="Alias" className="mb-3">
                                <Form.Control  type="text" required placeholder="Ingrese su alias" onBlur={(e) => { setAlias(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un alias.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAvatar">
                            <FloatingLabel label="URL Foto" className="mb-3">
                                <Form.Control required type="url" placeholder="Ingrese la url de la foto" onBlur={(e) => { setAvatar(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese URL de imagen valido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formMessage">
                            <FloatingLabel label="Mensaje" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese su mensaje" onBlur={(e) => { setMessage(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar su mensaje.</Form.Control.Feedback>
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

export default ChatForm
