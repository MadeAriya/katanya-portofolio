import React from 'react';

const ChatHeader = ({ changeName }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b-3 border-[#1A1A2E]">
      <div className="mb-4 md:mb-0">
        <h1 className='font-poppins font-black text-3xl md:text-4xl lg:text-5xl text-[#1A1A2E]'>Live Chat</h1>
        <p className='text-sm md:text-base text-[#1A1A2E]/60 font-montserrat font-medium'>Feel free to leave a message, share your thoughts, or just say hello.</p>
      </div>
      <button onClick={changeName} className="px-4 py-2 text-white bg-[#FF6B35] font-bold font-montserrat rounded-sm border-3 border-[#1A1A2E] shadow-[3px_3px_0px_#1A1A2E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1A1A2E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1A1A2E] transition-all duration-150 self-start md:self-center z-99">
        Change Name
      </button>
    </div>
  );
};

export default ChatHeader;
