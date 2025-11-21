
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, doc, setDoc, deleteDoc } from 'firebase/firestore';

export const useTypingStatus = (name, nameSet, message) => {
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    if (nameSet) {
      const typingQuery = query(collection(db, 'typing'));
      const unsubscribeTyping = onSnapshot(typingQuery, (querySnapshot) => {
        const typing = [];
        querySnapshot.forEach((doc) => {
          typing.push(doc.id);
        });
        setTypingUsers(typing.filter((user) => user !== name));
      });

      return () => unsubscribeTyping();
    }
  }, [nameSet, name]);

  const handleTyping = async (isTyping) => {
    if (name) {
      if (isTyping && message.length > 0) {
        await setDoc(doc(db, 'typing', name), { a: 1 });
      } else {
        await deleteDoc(doc(db, 'typing', name));
      }
    }
  };

  useEffect(() => {
    handleTyping(message.length > 0);
  }, [message]);

  return typingUsers;
};
