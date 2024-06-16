import React, { useEffect, useRef, useState } from "react";
import User from "../assets/user.svg";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import "../styles/chatContainer.scss";
import ChatInput from "./ChatInput";
import { getMsgRoute, sendMsgRoute } from "../utils/APIRoutes";

function ChatContainer({ currentChat, currentUser, socket }) {
  const scrollRef = useRef();
  const [messages, setMesssages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState([]);

  const getAllMessages = async () => {
    if (currentChat && currentUser) {
      const data = await axios.post(getMsgRoute, {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMesssages(data.data);
    }
  };
  useEffect(() => {
    getAllMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMsgRoute, {
      message: msg,
      from: currentUser._id,
      to: currentChat._id,
    });
    socket.current.emit("send-msg", {
      message: msg,
      from: currentUser._id,
      to: currentChat._id,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMesssages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({
          fromSelf: false,
          message: msg,
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMesssages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <>
      {currentChat && (
        <div className="chat-container">
          <div className="chat-header">
            <div className="avatar">
              <img src={User} alt="user" />
            </div>
            <div className="username">
              <h2>{currentChat.username}</h2>
              {showTyping && (
                <p>
                  <em>typing...</em>
                </p>
              )}
            </div>
          </div>
          <div className="chat-msg">
            {messages.map((message, index) => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div
                    className={`message ${
                      message.fromSelf ? "sended" : "recieved"
                    }`}
                    key={`m_${index}`}
                  >
                    <div className="content">
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
}

export default ChatContainer;
