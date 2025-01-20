import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-link">
          Home
        </Link>

        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
