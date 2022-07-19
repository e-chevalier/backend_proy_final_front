import { useState } from 'react'
import ChatForm from '../ChatForm/ChatForm';
import Container from 'react-bootstrap/Container';


const ChatFormContainer = ({socket, email}) => {

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);
    //const [type, setType] = useState('')
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
                    type: 'usuario'
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
