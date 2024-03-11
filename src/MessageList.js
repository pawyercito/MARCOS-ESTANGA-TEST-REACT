import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MessageList.css'; // Importa el archivo CSS

const MessageList = () => {
 const [messages, setMessages] = useState([]);

 useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
}, []);

 return (
    <div className="message-list">
      {messages.map(message => (
        <div key={message.id} className="message-item">
          <h3 className="message-sender">{message.sender_name}</h3>
          <p className="message-text">{message.message_text}</p>
          <p className="message-date">Fecha: {new Date(message.message_date).toLocaleString()}</p>
        </div>
      ))}
    </div>
 );
};

export default MessageList;