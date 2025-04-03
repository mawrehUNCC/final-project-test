import React from 'react';
import SideNav from "../../components/sideNav/sideNav";
import "./Friends.css";

function Friends() {
  return (
    <div className="friends-container">
      <SideNav />
      {/* Page Title */}
      <div className="friends-header">
        <h2 className="friends-title">Friends</h2>
        <hr className="divider" />
      </div>
      {/* Friends Component */}
      <div className="friends-content-container">
        {/* Friends Component goes here */}

      </div>
    </div>
  );
}

export default Friends;