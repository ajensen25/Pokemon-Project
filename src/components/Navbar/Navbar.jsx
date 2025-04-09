import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const settingsList = useRef(null);
  const themeIcon = useRef(null);

  const toggleSettings = () => {
    settingsList.current.classList.toggle("visible");
  };

  const toggleTheme = () => {
    if (themeIcon.current.classList.contains("uil-sun")) {
      themeIcon.current.classList.remove("uil-sun");
      themeIcon.current.classList.add("uil-moon");
      document.documentElement.style.setProperty("--primary-color", "white");
      document.documentElement.style.setProperty(
        "--primary-color-hover",
        "rgb(240, 240, 240"
      );
      document.documentElement.style.setProperty("--border-color", "black");
      document.documentElement.style.setProperty("--black-color", "black");
    } else {
      themeIcon.current.classList.remove("uil-moon");
      themeIcon.current.classList.add("uil-sun");
      document.documentElement.style.setProperty(
        "--primary-color",
        "rgb(45, 45, 45)"
      );
      document.documentElement.style.setProperty(
        "--primary-color-hover",
        "rgb(60, 60, 60)"
      );
      document.documentElement.style.setProperty("--border-color", "white");
      document.documentElement.style.setProperty("--black-color", "white");
    }
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
          <li onClick={toggleTheme}>
            <i className="uil uil-sun" ref={themeIcon}></i>Theme
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
