
import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center space-x-2"
    >
      <motion.div
        className="h-2.5 w-2.5 bg-[#FF6B35] rounded-sm border border-[#1A1A2E]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <motion.div
        className="h-2.5 w-2.5 bg-[#FFE156] rounded-sm border border-[#1A1A2E]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
      />
      <motion.div
        className="h-2.5 w-2.5 bg-[#7B2FF2] rounded-sm border border-[#1A1A2E]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, delay: 0.4, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default TypingIndicator;
