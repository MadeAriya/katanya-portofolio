
import React from 'react';

const MessageInput = ({ message, setMessage, sendMessage }) => {
  const MAX_MESSAGE_LENGTH = 200;

  return (
    <form onSubmit={sendMessage} className="flex p-4 border-t border-gray-700 items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow w-full p-3 border rounded-lg bg-transparent border-gray-600 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type a message..."
          maxLength={MAX_MESSAGE_LENGTH}
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          {message.length} / {MAX_MESSAGE_LENGTH}
        </div>
      </div>
      <button type="submit" className="p-3 ml-2 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
};

export default MessageInput;
