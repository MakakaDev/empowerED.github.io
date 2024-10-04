import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    backgroundColor: '#007bff',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const menuToggleStyle = {
    cursor: 'pointer',
    fontSize: '24px',
    color: 'white',
  };

  const linksContainerStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column', // Change to column for vertical layout
    position: 'absolute',
    top: '60px',
    right: '0', // Positioning it on the right side
    backgroundColor: '#007bff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
    opacity: isMenuOpen ? 1 : 0,
    maxHeight: isMenuOpen ? '300px' : '0',
    overflow: 'hidden',
    zIndex: 1000,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#ff6b6b';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'white';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav style={navbarStyle}>
        <Link to="/" style={logoStyle}>EmpowerED</Link>
        {/* Toggle button for mobile */}
        <div onClick={toggleMenu} style={menuToggleStyle}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        {/* Links Container */}
        <div style={linksContainerStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsMenuOpen(false)} // Close the menu on link click
          >
            Home
          </Link>
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/forum"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsMenuOpen(false)}
          >
            Forum
          </Link>
          <Link
            to="/contact"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
      {isMenuOpen && <div style={backdropStyle} onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
};

// Backdrop style for dimming background when menu is open
const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 900,
};

export default Navbar;


