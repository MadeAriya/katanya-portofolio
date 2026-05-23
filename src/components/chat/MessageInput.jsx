
import React from 'react';

const MessageInput = ({ message, setMessage, sendMessage }) => {
  const MAX_MESSAGE_LENGTH = 200;

  return (
    <form onSubmit={sendMessage} className="flex p-4 border-t-3 border-[#1A1A2E] items-center bg-[#FFFDF7]">
      <div className="relative flex-grow">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow w-full p-3 bg-white text-[#1A1A2E] font-montserrat rounded-sm border-2 border-[#1A1A2E] focus:outline-none focus:shadow-[3px_3px_0px_#FF6B35] transition-shadow duration-200 placeholder:text-[#1A1A2E]/40"
          placeholder="Type a message..."
          maxLength={MAX_MESSAGE_LENGTH}
        />
        <div className="absolute bottom-2 right-2 text-xs text-[#1A1A2E]/50 font-montserrat font-bold">
          {message.length} / {MAX_MESSAGE_LENGTH}
        </div>
      </div>
      <button type="submit" className="p-3 ml-2 text-white bg-[#FF6B35] rounded-sm border-2 border-[#1A1A2E] shadow-[2px_2px_0px_#1A1A2E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#1A1A2E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_#1A1A2E] transition-all duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
};

export default MessageInput;
