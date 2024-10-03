import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ profileImage }) {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
          <li><Link to="/blog" className="nav-item">Blog</Link></li>
        </ul>
      </nav>
      <Link to="/profile" className="profile-icon">
        <img src={profileImage} alt="Profile Icon" />
      </Link>
    </header>
  );
}

export default Header;
