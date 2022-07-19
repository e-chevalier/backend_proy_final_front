import { useState } from 'react'
import ChatForm from '../ChatForm/ChatForm';
import Container from 'react-bootstrap/Container';


const ChatFormContainer = ({socket, email}) => {

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState(0)
    const [alias, setAlias] = useState('')
    const [avatar, setAvatar] = useState('')
    const [message, setMessage] = useState('')

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            let newMessage = {
                author: {
                    id: email,
                    name: name,
                    surname: surname,
                    age: Number(age),
                    alias: alias,
                    avata: avatar 
                },
                text: message,
                date: (new Date()).toLocaleString()
            }
            //socket.emit
            if (socket) socket.emit('chat', { newMessage, room: email });
            handleClose()
            window.location.reload()      
        }
        
        setValidated(true);
    }

    let commonProps = {
        show: show,
        validated: validated,
        setName: setName,
        setSurname: setSurname,
        setAge: setAge,
        setAlias: setAlias,
        setAvatar: setAvatar,
        setMessage: setMessage,
        handleShow: handleShow,
        handleClose: handleClose,
        handleSubmit: handleSubmit
    }

    return (
            <Container className='my-5 d-flex justify-content-center'>
                <ChatForm  {...commonProps} />
            </Container>
    )
}

export default ChatFormContainer
