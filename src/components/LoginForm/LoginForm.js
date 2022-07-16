import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const LoginForm = ({show, validated, setEmail, setPassword, handleShow, handleClose, handleSubmit}) => {

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Ingresar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingresar</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <FloatingLabel label="Email" className="mb-3">
                                <Form.Control required type="text" placeholder="Correo Electrónico" onBlur={(e) => { setEmail(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar el Correo Electrónico</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <FloatingLabel label="Contraseña" className="mb-3">
                                <Form.Control required type="password" placeholder="Contraseña" onBlur={(e) => { setPassword(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese su contraseña</Form.Control.Feedback>
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

export default LoginForm
