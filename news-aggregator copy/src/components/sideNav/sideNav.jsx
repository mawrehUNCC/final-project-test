import { NavLink } from "react-router-dom";
import "./sideNav.css";
import Dashboard from "../../assets/dashboard.svg";
import User from "../../assets/user.svg";
import Friends from "../../assets/friends.svg";
import Likes from "../../assets/thumbs-up.svg";
import Dislikes from "../../assets/thumbs-down.svg";
import Saves from "../../assets/pocket-icon_inverted.svg";

const SideNav = () => {
  return (
    <>
        <div className="side-nav">
        <ul className="sidenav-links">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `sidenav-link ${isActive ? "active" : ""}`
              }
              end
            >
              <img src={Dashboard} alt="Dashboard" className="icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `sidenav-link ${isActive ? "active" : ""}`
              }
              end
            >
              <img src={User} alt="Profile" className="icon" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                `sidenav-link ${isActive ? "active" : ""}`
              }
              end
            >
              <img src={Friends} alt="Friends" className="icon" />
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/likes"
              className={({ isActive }) =>
                `sidenav-link ${isActive ? "active" : ""}`
              }
              end
            >
              <img src={Likes} alt="Likes" className="icon" />
              Likes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dislikes"
              className={({ isActive }) =>
                `sidenav-link ${isActive ? "active" : ""}`
              }
              end
            >
              <img src={Dislikes} alt="Dislikes" className="icon" />
              Dislikes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saves"
              className={({ isActive }) =>
                `sidenav-link ${isActive ? "active" : ""}`
              }
              end
            >
              <img src={Saves} alt="Saves" className="icon" />
              Saves
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;