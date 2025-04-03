import React from "react";
import Blockquote from "../../assets/collections-blockquote.svg";
import "./Collections.css";

function Collections() {
  return (
    <div className="collections-container">
      {/* Pagination goes here */}
      {/* Collections For Your Pocket */}
      <div className="for-your-pocket-header">
        <h1>Collections For Your Pocket</h1>
        <hr className="divider" />
        <div className="for-your-pocket-container">
          {/* Collections Component 1 goes here */}
        </div>
      </div>
      <hr className="divider" />
      {/* Fascinating Stories and Discover More Topics */}
      <div className="collections-grid">
        {/* Left Column: Fascinating Stories */}
        <div className="collections-left">
          <div className="horiz-collections-container">
            {/* Collections Component 2 goes here */}
          </div>
        </div>
        {/* Right Column: Blockquote Container */}
        <div className="collections-right">
          <div className="blockquote-container">
          <img src={Blockquote} alt="Blockquote" className="blockquote-image" />
          </div>
        </div>
      </div>
      {/* Bottom Container */}
      <div className="btm-for-your-pocket-container">
        {/* Collections Component 3 goes here */}
      </div>
      {/* Pagination Component goes here */}
    </div>
  );
}

export default Collections;