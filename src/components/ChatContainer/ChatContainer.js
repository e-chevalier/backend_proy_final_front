import Loading from '../Loading/Loading';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ChatMessagesList from '../ChatMessageList/ChatMessagesList';
import io from 'socket.io-client';
import { normalize, denormalize, schema } from "normalizr"

const socket = io("https://backendproyfinal.herokuapp.com", { transports: ["websocket", "polling"] });

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
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading]  = useState(true);

    const { email } = useParams();

    useEffect(() => {
        socket.on('connect', () => {
          setIsConnected(true);
        });
    
        socket.on('disconnect', () => {
          setIsConnected(false);
        });
    
        socket.on('pong', () => {
          setLastPong(new Date().toISOString());
        });

        socket.on('messages', (dataNormalized) => {

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
      }, []);
    
      const sendPing = () => {
        socket.emit('ping');
      }
    
      return (
        loading ?
        <Loading/>:
        <div className='container'>
          <p>Connected: { '' + isConnected }</p>
          <p>Last pong: { lastPong || '-' }</p>
          <button onClick={ sendPing }>Send ping</button>
          <ChatMessagesList messages={messages}/>
        </div>
      );


    // return (

    //         <Container>
    //             <ChatMessagesList />
    //         </Container>
    // )
}

export default ChatContainer