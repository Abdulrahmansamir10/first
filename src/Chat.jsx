import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // قم بتغيير الرابط وفقًا لعنوان خادم Socket.io الخاص بك

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // استمع لأحداث "message" الواردة من الخادم
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // تنظيف الاشتراك عند إلغاء تحميل المكون
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      // إرسال رسالة إلى الخادم
      socket.emit('message', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div>
      <h2>Chat with Company Team</h2>
      <div style={{ height: '200px', overflowY: 'scroll', border: '1px solid #ccc', padding: '5px', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
      <button className='chat' onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
