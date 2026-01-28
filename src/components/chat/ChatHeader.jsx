import React from 'react';

const ChatHeader = ({ changeName }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b border-gray-700">
      <div className="mb-4 md:mb-0">
        <h1 className='font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl'>Live Chat</h1>
        <p className='text-sm md:text-base text-gray-400'>Feel free to leave a message, share your thoughts, or just say hello.</p>
      </div>
      <button onClick={changeName} className="p-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 self-start md:self-center transform hover:scale-105 z-99">
        Change Name
      </button>
    </div>
  );
};

export default ChatHeader;
