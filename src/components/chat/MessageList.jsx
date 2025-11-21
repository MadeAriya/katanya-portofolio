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
    <ScrollArea ref={scrollAreaRef} className='flex-grow p-4 message-list-scrollbar'>
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
              className={`p-3 rounded-lg max-w-xs sm:max-w-sm md:max-w-md break-words ${
                msg.name === name ? 'bg-purple-600 text-white' : 'bg-[#38383C] text-white'
              }`}
            >
              <div className="font-bold text-sm">{msg.name}</div>
              <div>{msg.message}</div>
              <div className="text-xs text-gray-300 mt-1 text-right">
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
