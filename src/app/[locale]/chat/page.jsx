"use client";
"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area"

const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:3001");

export default function Chat() {
  const [name, setName] = useState("");
  const [nameSet, setNameSet] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("chat_name");
    if (savedName) {
      setName(savedName);
      setNameSet(true);
    } else {
      setNameSet(false);
    }

    socket.on("history", (history) => {
      setMessages(history);
    });

    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on("chat_cleared", () => {
      setMessages([]);
    });

    return () => {
      socket.off("history");
      socket.off("message");
      socket.off("chat_cleared");
    };
  }, [nameSet]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name) {
      localStorage.setItem("chat_name", name);
      setNameSet(true);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message && name) {
      socket.emit("message", { name, message });
      setMessage("");
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
          <form onSubmit={handleNameSubmit} className="flex flex-col sm:flex-row w-full max-w-md p-4 bg-transparent">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-grow p-2 border rounded-lg bg-transparent border-1 border-[#B9A1E0] text-foreground focus:outline-none focus:ring-2 focus:ring-ring mb-2 sm:mb-0 sm:mr-2"
              placeholder="Your name..."
            />
            <button type="submit" className="p-2 text-black bg-[#B9A1E0] rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring">
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
    <Navbar/>
    <section className='mx-4 mt-10 md:mx-8 md:mt-10 lg:mx-24 lg:mt-24 pb-20 relative z-[99]'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h1 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl'>Feel free to leave a message on my website</h1>
            <p className='text-sm md:text-base'>You can share your thoughts, feedback, or just say hello by typing in the box below.</p>
            <p className='my-3 text-sm md:text-base'>Please avoid using negative or offensive words. Let’s keep it respectful.</p>
          </div>
          <button onClick={changeName} className="p-2 text-black bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-ring self-start md:self-center">
            Change Name
          </button>
        </div>
        <div className='chat-section bg-[#1F2127] h-[80vh] md:h-[90vh] p-4 z-[99]'>
          <ScrollArea className='h-[calc(80vh-80px)] md:h-[calc(90vh-80px)] max-w-full rounded-md'>
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 my-2 rounded-lg max-w-xs ${index % 2 === 0 ? 'bg-primary text-primary-foreground self-end' : 'bg-secondary text-secondary-foreground self-start'}`}>
                <strong>{msg.name}:</strong> {msg.message}
              </div>
            ))}
          </ScrollArea>
          <form onSubmit={sendMessage} className="flex p-4 bg-transparent">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-2 border rounded-lg bg-transparent border-1 border-[#B9A1E0] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Type a message..."
              />
              <button type="submit" className="p-2 ml-2 text-black bg-[#B9A1E0] rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring">
                Send
              </button>
          </form>
        </div>
    </section>
    <Cta/>
    <Footer/>
    </>
  );
}
