import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import User from "../assets/user.svg";

import "../styles/contact.scss";
import Logout from "./Logout";

function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUsername, setCurrentUsername] = useState();
  const [currentSelected, setCurrentSelected] = useState();

  useEffect(() => {
    if (currentUser) {
      setCurrentUsername(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (contact, index) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUsername && (
        <div className="contact-container">
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Snappy!</h1>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(contact, index)}
                >
                  <div className="avatar">
                    <img src={User} alt="user-logo" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="current-user-details">
              <div className="avatar">
                <img src={User} alt="user-logo" />
              </div>
              <div className="username">
                <h2>{currentUsername}</h2>
              </div>
            </div>
            <Logout />
          </div>
        </div>
      )}
    </>
  );
}

export default Contacts;
