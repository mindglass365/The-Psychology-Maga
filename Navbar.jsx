// File: /src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🧠 The Psychology Journal</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Recent Articles</Link></li>
        <li><Link to="/submit">Submit</Link></li>
        <li><Link to="/guidelines">Guidelines</Link></li>
        <li><Link to="/ethics">Ethics</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/terms">Terms</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
