import React from "react";
import SideNav from "../../components/sideNav/sideNav";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <SideNav />
      {/* Page Title */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <hr className="divider" />
      </div>
      {/* Dashboard Component */}
      <div className="dashboard-stats-container">
        {/* Dashboard Component goes here */}

      </div>
    </div>
  );
}

export default Dashboard;
