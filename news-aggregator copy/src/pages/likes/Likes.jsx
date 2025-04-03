import React from "react";
import SideNav from "../../components/sideNav/sideNav";
import "./Likes.css";

function Likes() {
  return (
    <div className="likes-container">
      <SideNav />
      {/* Page Title */}
      <div className="likes-header">
        <h2 className="likes-title">Likes</h2>
        <hr className="divider" />
      </div>
      {/* Likes Component */}
      <div className="likes-item-container">
        {/* Likes Component goes here */}
      </div>
    </div>
  );
}

export default Likes;