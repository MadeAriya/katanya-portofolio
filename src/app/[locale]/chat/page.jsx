"use client";
import { useEffect, useState, memo } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, doc, deleteDoc } from "firebase/firestore";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import MessageInput from "@/components/chat/MessageInput";
import NameInput from "@/components/chat/NameInput";
import TypingIndicator from "@/components/chat/TypingIndicator";
import { useMessages } from "@/hooks/useMessages";
import { useTypingStatus } from "@/hooks/useTypingStatus";

const MemoizedNavbar = memo(Navbar);
const MemoizedNameInput = memo(NameInput);
const MemoizedChatHeader = memo(ChatHeader);
const MemoizedMessageList = memo(MessageList);
const MemoizedMessageInput = memo(MessageInput);
const MemoizedTypingIndicator = memo(TypingIndicator);
const MemoizedCta = memo(Cta);
const MemoizedFooter = memo(Footer);

export default function Chat() {
  const [name, setName] = useState("");
  const [nameSet, setNameSet] = useState(false);
  const [message, setMessage] = useState("");
  const messages = useMessages(nameSet);
  const typingUsers = useTypingStatus(name, nameSet, message);

  useEffect(() => {
    const savedName = localStorage.getItem("chat_name");
    if (savedName) {
      setName(savedName);
      setNameSet(true);
    }

    return () => {
      if (name) {
        const deleteTypingStatus = async () => {
          try {
            await deleteDoc(doc(db, "typing", name));
          } catch (error) {
            console.error("Error deleting typing status: ", error);
          }
        };
        deleteTypingStatus();
      }
    };
  }, [name]);

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
        await deleteDoc(doc(db, "typing", name));
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  const changeName = async () => {
    try {
      await deleteDoc(doc(db, "typing", name));
    } catch (error) {
      console.error("Error deleting typing status: ", error);
    }
    localStorage.removeItem("chat_name");
    setName("");
    setNameSet(false);
  };

  if (!nameSet) {
    return (
      <>
        <MemoizedNavbar />
        <MemoizedNameInput name={name} setName={setName} handleNameSubmit={handleNameSubmit} />
        <MemoizedFooter />
      </>
    );
  }

  return (
    <>
      <MemoizedNavbar />
      <section className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:mb-10'>
        <MemoizedChatHeader changeName={changeName} />
        <div className='chat-section bg-[#1A1A1A] h-[70vh] rounded-lg flex flex-col shadow-lg'>
          <MemoizedMessageList messages={messages} name={name} />
          {typingUsers.length > 0 && (
            <div className="p-4">
              <MemoizedTypingIndicator />
            </div>
          )}
          <MemoizedMessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </section>
      <div className='my-14'>‎</div>
      <MemoizedCta className="mt-14" />
      <MemoizedFooter />
    </>
  );
}

