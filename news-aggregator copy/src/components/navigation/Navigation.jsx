import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/pocket-logo_text.svg";
import Diamond from "../../assets/diamond.svg";
import UserPic from "../../assets/profile-pic.png";
import Search from "../../assets/search.svg";
import ProfileDropdown from "./ProfileDropdown";
import "./Navigation.css";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navigation">
      {/* Section 1: Logo */}
      <div className="nav-section nav-section-1">
        <NavLink to="/">
          <img src={Logo} alt="Pocket Logo" className="nav-logo-image" />
        </NavLink>
      </div>

      {/* Section 2: Navigation Links */}
      <div className="nav-section nav-section-2">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saves"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              Saves
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              Friends
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Section 3: Search, Upgrade, and Profile */}
      <div className="nav-section nav-section-3">
        <button className="search-button">
          <img src={Search} alt="Search Icon" className="search-icon" />
        </button>
        <span className="vertical-separator">|</span>
        <button className="upgrade-button">
          <img src={Diamond} alt="Upgrade Icon" className="upgrade-icon" />
          <span>Upgrade</span>
        </button>
        <div className="profile-container" ref={dropdownRef}>
          <button 
            className="profile-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={UserPic} alt="Profile" className="profile-img" />
          </button>
          <ProfileDropdown 
            isOpen={isDropdownOpen} 
            onClose={() => setIsDropdownOpen(false)} 
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
