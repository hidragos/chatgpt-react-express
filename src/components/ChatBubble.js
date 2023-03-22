import React from 'react';

const ChatBubble = ({ message, isUser }) => {
    const bubbleClasses = isUser
      ? 'bg-blue-500 text-white rounded-br-none self-end'
      : 'bg-gray-200 text-black rounded-bl-none self-start';
  
    const tailClasses = isUser
      ? 'right-0 -mr-2 bg-blue-500'
      : 'left-0 -ml-2 bg-gray-200';
  
    return (
      <div className={`p-2 rounded-lg ${bubbleClasses} relative w-max mb-4`}>
        <p>{message}</p>
        <div
          className={`w-4 h-4 absolute top-0 mt-2 rounded-bl-lg ${tailClasses}`}
        />
      </div>
    );
  };
  

export default ChatBubble;
