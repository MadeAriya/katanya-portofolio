"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
  const [name, setName] = useState("");
  const [nameSet, setNameSet] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    const savedName = localStorage.getItem("chat_name");
    if (savedName) {
      setName(savedName);
      setNameSet(true);
    }
  }, []);

  useEffect(() => {
    if (nameSet) {
      const q = query(collection(db, "messages"), orderBy("timestamp"));
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

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name) {
      localStorage.setItem("chat_name", name);
      setNameSet(true);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() && name) {
      try {
        await addDoc(collection(db, "messages"), {
          name,
          message,
          timestamp: serverTimestamp(),
        });
        setMessage("");
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  const changeName = () => {
    localStorage.removeItem("chat_name");
    setName("");
    setNameSet(false);
  };

  if (!nameSet) {
    return (
      <>
        <Navbar />
        <section className='mx-4 md:mx-8 lg:mx-24 pb-20 relative z-[99] h-screen flex flex-col items-center justify-center text-center'>
          <h1 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl'>Enter your name to join the chat</h1>
          <form onSubmit={handleNameSubmit} className="flex flex-col sm:flex-row w-full max-w-md p-4 bg-transparent mt-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-grow p-3 border rounded-lg bg-transparent border-1 border-[#B9A1E0] text-foreground focus:outline-none focus:ring-2 focus:ring-[#B9A1E0] mb-2 sm:mb-0 sm:mr-2"
              placeholder="Your name..."
            />
            <button type="submit" className="p-3 text-white bg-[#B9A1E0] rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#B9A1E0]">
              Join Chat
            </button>
          </form>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className='mx-4 mt-10 md:mx-8 md:mt-10 lg:mx-24 pb-20 relative z-[99]'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl'>Live Chat</h1>
            <p className='text-sm md:text-base text-gray-400'>Feel free to leave a message, share your thoughts, or just say hello.</p>
          </div>
          <button onClick={changeName} className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 self-start md:self-center">
            Change Name
          </button>
        </div>
        <div className='chat-section bg-[#1F2127] h-[70vh] rounded-lg flex flex-col'>
          <ScrollArea ref={scrollAreaRef} className='flex-grow p-4'>
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`flex my-2 ${msg.name === name ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`p-3 rounded-lg max-w-sm ${msg.name === name ? 'bg-purple-600 text-white' : 'bg-[#38383C] text-white'}`}>
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
          <form onSubmit={sendMessage} className="flex p-4 border-t border-gray-700">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-3 border rounded-lg bg-transparent border-1 border-[#B9A1E0] text-foreground focus:outline-none focus:ring-2 focus:ring-[#B9A1E0]"
              placeholder="Type a message..."
            />
            <button type="submit" className="p-3 ml-2 text-white bg-[#B9A1E0] rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#B9A1E0]">
              Send
            </button>
          </form>
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
}
