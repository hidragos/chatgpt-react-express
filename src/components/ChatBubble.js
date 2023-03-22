import React from 'react';

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'chatgpt'}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatBubble;