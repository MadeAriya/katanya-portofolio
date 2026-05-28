import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import './MessageList.css';

const MessageList = ({ messages, name }) => {
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <ScrollArea ref={scrollAreaRef} className='flex-grow min-h-0 overflow-hidden p-4 message-list-scrollbar'>
      <AnimatePresence>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            layout
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`flex my-2 message-item ${msg.name === name ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-sm max-w-xs sm:max-w-sm md:max-w-md break-words border-2 border-[#1A1A2E] ${
                msg.name === name ? 'bg-[#FF6B35] text-white shadow-[2px_2px_0px_#1A1A2E]' : 'bg-[#FFE156] text-[#1A1A2E] shadow-[2px_2px_0px_#1A1A2E]'
              }`}
            >
              <div className="font-bold text-sm font-montserrat">{msg.name}</div>
              <div className="font-montserrat">{msg.message}</div>
              <div className={`text-xs mt-1 text-right font-montserrat font-medium ${msg.name === name ? 'text-white/70' : 'text-[#1A1A2E]/50'}`}>
                {msg.timestamp?.toDate().toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </ScrollArea>
  );
};

export default MessageList;
