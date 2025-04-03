import React from "react";
import SideNav from "../../components/sideNav/sideNav";
import "./Dislikes.css";

function Dislikes() {
  return (
    <div className="dislikes-container">
      <SideNav />
      {/* Page Title */}
      <div className="dislikes-header">
        <h2 className="dislikes-title">Dislikes</h2>
        <hr className="divider" />
      </div>
      {/* Dislikes Component */}
      <div className="dislikes-item-container">
        {/* Dislikes Component goes here */}
      </div>
    </div>
  );
}

export default Dislikes;