import React from "react";
import Robot from "../assets/robot.gif";

import "../styles/welcome.scss";

function Welcome({ currentUser }) {
  return (
    <div className="container">
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Select a contact to start messaging.</h3>
    </div>
  );
}

export default Welcome;
