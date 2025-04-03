import React from "react";
import "./Profile.css";
import SideNav from "../../components/sideNav/sideNav";

function Profile() {
  return (
    <div className="user-profile-container">
      <SideNav />
      {/* Page Title */}
      <div className="user-profile-header">
        <h2 className="user-profile-title">Profile</h2>
        <hr className="divider" />
      </div>
      {/* Profile Component */}
      <div className="user-profile-item-container">
        {/* Profile Component goes here */}
      </div>
    </div>
  );
  }
  
  export default Profile;