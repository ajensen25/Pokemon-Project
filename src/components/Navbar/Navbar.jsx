function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>
          Pokemon<b>Info</b>
        </h2>
      </div>
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <button>
          <i className="uil uil-setting"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
