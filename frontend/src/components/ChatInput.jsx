import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import "../styles/chatInput.scss";

function ChatInput({ handleSendMsg, setShowTyping }) {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmoji = (emoji) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
      setShowTyping(false);
    }
  };

  return (
    <div className="input-container">
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={() => setEmojiPicker(!emojiPicker)} />
          {emojiPicker && (
            <EmojiPicker
              height={350}
              width={250}
              onEmojiClick={(emoji) => handleEmoji(emoji)}
            />
          )}
        </div>
      </div>
      <div className="chat-input">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Write your message here.."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button type="submit">
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatInput;
