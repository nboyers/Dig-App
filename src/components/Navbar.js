import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Dig</div>
      <button className="menuButton" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`links ${isMenuOpen ? 'mobile' : ''}`}>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/blog" className="link">Blog</Link>
        <Link to="/faq" className="link">FAQ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
