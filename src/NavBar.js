// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Namma Schemes</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-button">Signup/Login</Link> {/* Use Link to navigate to login */}
        <button className="nav-button">Translate</button>
      </div>
    </nav>
  );
};

export default NavBar;
