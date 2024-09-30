import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
          <li><Link to="/assignment-3" className="nav-item assignment3">Assignment 3</Link></li> {/* Flashing link */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
