import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const settingsList = useRef(null);

  const toggleSettings = () => {
    settingsList.current.classList.toggle("visible");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>
          Pokemon<b>Info</b>
        </h2>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/search" className="navbar-link">
          Search
        </Link>
        <button onClick={toggleSettings}>
          <i className="uil uil-setting"></i>
        </button>
        <ul className="settings-list" ref={settingsList}>
          <li>
            <i className="uil uil-sun"></i>Theme
          </li>
          <li>
            <i className="uil uil-letter-english-a"></i>Font
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
