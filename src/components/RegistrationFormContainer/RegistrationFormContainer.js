import { useState } from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Container from 'react-bootstrap/Container';
import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER

const RegistrationFormContainer = () => {

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
 

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            let newuser = {
                username: username,
                password: password,
                email: email,
                firstname: firstname,
                lastname: lastname,
                address: address,
                phone: phone,
                age: age
            }

            console.log(newuser)

            let options = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newuser)}
            await fetch(`${BACKEND_SERVER}/api/registration`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                alert("Usuario agregado ID:" + data.id )
            })

            handleClose()
            window.location.reload()
            
        }
        
        setValidated(true);
    }

    let commonProps = {
        show: show,
        validated: validated,
        setUsername: setUsername,
        setPassword: setPassword,
        setEmail: setEmail,
        setFirstname: setFirstname,
        setLastname: setLastname,
        setAddress: setAddress,
        setPhone: setPhone,
        setAge: setAge,
        handleShow: handleShow,
        handleClose: handleClose,
        handleSubmit: handleSubmit
    }

    return (
            <Container className='d-flex justify-content-center'>
                <RegistrationForm {...commonProps} />
            </Container>
    )
}

export default RegistrationFormContainer
