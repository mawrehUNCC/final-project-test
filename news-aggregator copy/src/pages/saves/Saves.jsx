import React from "react";
import SideNav from "../../components/sideNav/sideNav";
import PocketSaves from "../../assets/pocket-saves.svg";
import "./Saves.css";

function Saves() {
  return (
    <div className="saves-container">
      <SideNav />
      {/* Page Title */}
      <div className="saves-header">
        <h2 className="saves-title">Saves</h2>
        <hr className="divider" />
        <img src={PocketSaves} alt="Pocket Saves" className="no-saves-image" />
        <p className="no-saves">Start saving to your Pocket</p>
      </div>
      {/* Saves Component */}
      <div className="saves-article-container">
        {/* Saves Component goes here */}

      </div>
    </div>
  );
}

export default Saves;
