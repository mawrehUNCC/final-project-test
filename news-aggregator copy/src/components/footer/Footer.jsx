import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Must-read articles</a></li>
            <li><a href="#">Daily newsletter</a></li>
            <li><a href="#">Pocket Premium</a></li>
            <li><a href="#">Save to Pocket Extensions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Info</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get the App</h3>
          <div className="footer-buttons">
            <button>Placeholder Button 1</button>
            <button>Placeholder Button 2</button>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Pocket. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
