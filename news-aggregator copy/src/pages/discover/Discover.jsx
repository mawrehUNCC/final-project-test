import React from "react";
import TagMenu from "../../components/tagMenu/TagMenu";
import Blockquote from "../../assets/discover-blockquote.svg";
import "./Discover.css";

function Discover() {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="discover-container">
      {/* Discover the Best of the Web */}
      <div className="best-of-web-header">
        <h1>Discover the Best of the Web</h1>
        <div className="best-of-the-web-container">
          {/* Discover Component 1 goes here */}
        </div>
        <hr className="divider" />
      </div>
      {/* Blockquote Container */}
      <div className="blockquote-container">
        <img src={Blockquote} alt="Blockquote" className="blockquote-image" />
      </div>
      <hr className="divider" />
      {/* Fascinating Stories and Discover More Topics */}
      <div className="fascinating-stories-grid">
        {/* Left Column: Fascinating Stories */}
        <div className="fascinating-stories-left">
          <div className="fascinating-stories-header">
            <h1>Fascinating Stories</h1>
          </div>
          <div className="fascinating-stories-container">
            {/* Discover Component 2 goes here */}
          </div>
        </div>
        {/* Right Column: Discover More Topics */}
        <div className="fascinating-stories-right">
          <div className="tag-menu-header">
            <h2>Discover More Topics</h2>
          </div>
          <div className="tag-menu-container">
            <TagMenu />
          </div>
        </div>
      </div>
      {/* Today's Finest Discoveries */}
      <div className="finest-discoveries-header">
        <h1>Today's Finest Discoveries</h1>
        <p>{todayDate}</p>
      </div>
      <div className="finest-discoveries-container">
        {/* Discover Component 3 goes here */}
      </div>
      <hr className="divider" />
    </div>
  );
}

export default Discover;
