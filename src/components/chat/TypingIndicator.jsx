
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
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
      />
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, delay: 0.4, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default TypingIndicator;
