import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
import loader from "../assets/loader.gif";
import { Buffer } from "buffer";
import { createAvatar } from "@dicebear/core";
import { personas } from "@dicebear/collection";

import "../styles/setAvatar.scss";

function SetAvatar() {
  const navigate = useNavigate();

  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    theme: "dark",
  };

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    }
  }, []);

  const generateAvatars = async () => {
    const newAvatars = [];
    const avatar = createAvatar(personas, {
      seed: Math.random().toString(36).substring(7),
      // ... other options
    });

    const svg = avatar.toString();
    newAvatars.push(svg);
    const base64Avatars = newAvatars.map((svg) => convertToBase64(svg));
    setAvatars(base64Avatars);

    // Simulate storing in a database
    console.log("Base64 Avatars:", base64Avatars);
  };
  console.log(avatars);

  useEffect(() => {
    generateAvatars();
  }, []);
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Pick an Avatar as an Profile Picture.</h1>
        </div>
        <div className="avatars-container">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
              onClick={() => setSelectedAvatar(index)}
            >
              <img src={avatar} alt="" />
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SetAvatar;
