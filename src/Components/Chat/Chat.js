import React, { useState } from "react";
import css from './Chat.css';


export default function Chat(){
    const [messages, setMessages] = useState([]); // Stores chat messages
    const [input, setInput] = useState(''); // Stores current input message
  
    // Handle sending a message
    const sendMessage = () => {
      if (input.trim() === '') return; // Ignore empty messages
      setMessages([...messages, { text: input, sender: 'You' }]); // Add new message
      setInput(''); // Clear input field
      autoReply(input); // Call auto-reply function
    };
  
    // Auto-reply for a simulated chat bot response
    const autoReply = (message) => {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Me: ${message}`, sender: 'you' },
        ]);
      }, 1000); // Reply after 1 second
    };
    return(
        <div className="App">
        <h1>Chat Application</h1>
        <div className="chat-container">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    )
}