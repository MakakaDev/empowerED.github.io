import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const socialIconStyle = {
    color: '#fff',
    margin: '0 15px',
    fontSize: '24px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const hoverStyle = {
    color: '#ff6b6b',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#ff6b6b';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#fff';
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 EmpowerED. All rights reserved.</p>
      
      {/* Social Media Links */}
      <div style={socialLinksStyle}>
        <a
          href="https://instagram.com/empowered"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com/empowered"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:contact@empowered.com"
          style={socialIconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


