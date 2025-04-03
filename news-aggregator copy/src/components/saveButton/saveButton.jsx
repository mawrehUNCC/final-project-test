import React, { useState } from "react";
import "./saveButton.css";
import invertedPocketIcon from "../../assets/pocket-icon_inverted.svg";
import pocketIcon from "../../assets/pocket-icon.svg";
import goodIcon from "../../assets/good.svg";
import badIcon from "../../assets/bad.svg";

function SaveButton() {
  const [isSaved, setIsSaved] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="save-button-container">
      <button
        className={`save-button ${isSaved ? "saved" : ""}`}
        onClick={handleClick}
      >
        <img
          src={isSaved ? invertedPocketIcon : pocketIcon}
          alt="Pocket Icon"
          className="icon"
        />
        <span className="text">{isSaved ? "Saved" : "Save"}</span>
      </button>
      {showNotification && (
        <div
          className={`notification ${isSaved ? "notification-saved" : "notification-deleted"}`}
        >
          <span className="notification-text">
            {isSaved ? "Item saved for later" : "Item deleted from saves"}
          </span>
          <img
            src={isSaved ? goodIcon : badIcon}
            alt="Notification Icon"
            className="notification-icon"
          />
        </div>
      )}
    </div>
  );
}

export default SaveButton;