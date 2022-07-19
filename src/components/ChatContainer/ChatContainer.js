import Loading from '../Loading/Loading';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ChatMessagesList from '../ChatMessageList/ChatMessagesList';
import io from 'socket.io-client';
import { denormalize, schema } from "normalizr"
import ChatFormContainer from '../ChatFormContainer/ChatFormContainer';
import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER
const socket = io(BACKEND_SERVER, { transports: ["websocket", "polling"] });

/**
 * Normalizr Schemas 
 * 
 */

const authorSchema = new schema.Entity('author')

const messageSchema = new schema.Entity('message', {
  author: authorSchema
})

const messagesSchema = new schema.Entity('messages', {
  messages: [messageSchema]
})



const ChatContainer = () => {
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { email } = useParams();

  useEffect(() => {

    if (socket && email) socket.emit('join', email);

    socket.on('chat', (dataNormalized) => {
      let dataDesnormalized = denormalize(dataNormalized.result, messagesSchema, dataNormalized.entities)
      setMessages(dataDesnormalized.messages)
      console.log(dataDesnormalized.messages)
      setLoading(false)
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      setLoading(true)
    };
  }, [email]);

  return (
    loading ?
      <Loading /> :
      <Container className='mb-5 justify-content-center'>
        <ChatFormContainer socket={socket} email={email}/>
        <ChatMessagesList messages={messages} />
      </Container>
  );

}

export default ChatContainer