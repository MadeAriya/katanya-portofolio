
import React from 'react';

const NameInput = ({ name, setName, handleNameSubmit }) => {
  return (
    <section className='mx-auto max-w-4xl px-4 pt-28 md:pt-36 pb-16 sm:px-6 lg:px-8 relative z-20'>
      <div className='text-center z-999'>
        <h1 className='font-poppins text-4xl font-black tracking-tight sm:text-5xl text-[#1A1A2E]'>
          Join the Conversation
        </h1>
        <p className='mt-4 text-lg text-[#1A1A2E]/60 font-montserrat font-medium'>
          Enter your name to start chatting with others in real-time.
        </p>
      </div>
      <form onSubmit={handleNameSubmit} className="mt-8 flex flex-col items-center justify-center sm:flex-row w-full max-w-md mx-auto p-6 bg-white rounded-lg border-3 border-[#1A1A2E] shadow-[6px_6px_0px_#1A1A2E]">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow w-full p-3 bg-white text-[#1A1A2E] font-montserrat rounded-sm border-2 border-[#1A1A2E] focus:outline-none focus:shadow-[3px_3px_0px_#FF6B35] transition-shadow duration-200 placeholder:text-[#1A1A2E]/40 mb-3 sm:mb-0 sm:mr-3"
          placeholder="Your name..."
        />
        <button type="submit" className="w-full sm:w-auto px-6 py-3 text-white bg-[#FF6B35] font-bold font-montserrat rounded-sm border-3 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1A1A2E] transition-all duration-150">
          Join Chat
        </button>
      </form>
    </section>
  );
};

export default NameInput;
