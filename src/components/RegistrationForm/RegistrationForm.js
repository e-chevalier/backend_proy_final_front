import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const RegistrationForm = (
    {
        show,
        validated, 
        setUsername,
        setPassword,
        setEmail,
        setFirstname,
        setLastname,
        setAddress,
        setPhone,
        setAge,
        handleShow,
        handleClose,
        handleSubmit
    }) => {

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Registrarse
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registración de Usuario</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <FloatingLabel label="Nombre de Usuario" className="mb-3">
                                <Form.Control required type="text" placeholder="Nombre de Usuario" onBlur={(e) => { setUsername(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar el nombre del usuario.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <FloatingLabel label="Contraseña" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese contraseña" onBlur={(e) => { setPassword(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese una contraseña valida.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <FloatingLabel label="Correo Electronico" className="mb-3">
                                <Form.Control required type="email" placeholder="Ingrese un correo electrónico" onBlur={(e) => { setEmail(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un email válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFirstname">
                            <FloatingLabel label="Nombre" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese su nombre" onBlur={(e) => { setFirstname(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar su nombre.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLastname">
                            <FloatingLabel label="Apellido" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese su apellido" onBlur={(e) => { setLastname(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar su apellido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <FloatingLabel label="Dirección" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese su dirección" onBlur={(e) => { setAddress(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar su dirección.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <FloatingLabel label="Teléfono" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese su teléfono" onBlur={(e) => { setPhone(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar su teléfono.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAge">
                            <FloatingLabel label="Fecha de nacimiento" className="mb-3">
                                <Form.Control required type="date" placeholder="Ingrese su Fecha de Nacimiento" onBlur={(e) => { setAge(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Falta fecha de nacimiento.</Form.Control.Feedback>
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

export default RegistrationForm
