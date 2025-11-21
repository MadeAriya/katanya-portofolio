
import React from 'react';

const NameInput = ({ name, setName, handleNameSubmit }) => {
  return (
    <section className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h1 className='font-montserrat text-4xl font-extrabold tracking-tight sm:text-5xl'>
          Join the Conversation
        </h1>
        <p className='mt-4 text-lg text-gray-400'>
          Enter your name to start chatting with others in real-time.
        </p>
      </div>
      <form onSubmit={handleNameSubmit} className="mt-8 flex flex-col items-center justify-center sm:flex-row w-full max-w-md mx-auto p-4 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] shadow-lg">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow w-full p-3 border rounded-lg bg-transparent border-gray-600 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2 sm:mb-0 sm:mr-2"
          placeholder="Your name..."
        />
        <button type="submit" className="w-full sm:w-auto p-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105">
          Join Chat
        </button>
      </form>
    </section>
  );
};

export default NameInput;
