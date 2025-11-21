
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export const useMessages = (nameSet) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (nameSet) {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messages);
      });

      return () => unsubscribe();
    }
  }, [nameSet]);

  return messages;
};
