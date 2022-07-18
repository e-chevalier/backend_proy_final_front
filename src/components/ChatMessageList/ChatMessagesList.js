import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'

const ChatMessagesList = ({messages}) => {
    return (
        <>
           <div className="">
                {messages.map( message => 
                    <ChatMessage key={message.id} message={message} />
                )}
            </div >  
        </>
    )
}

export default ChatMessagesList