import React, { useState } from 'react';

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.menuContainer}>
      <button onClick={toggleMenu} style={styles.menuButton}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <ul style={styles.menuList}>
          <li><a href="#home" style={styles.menuItem}>Home</a></li>
          <li><a href="#merchandise" style={styles.menuItem}>Merchandise</a></li>
          <li><a href="#pictorials" style={styles.menuItem}>Pictorials</a></li>
          <li><a href="#contact" style={styles.menuItem}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

// Styles for ToggleMenu component
const styles = {
  menuContainer: {
    position: 'relative',
    textAlign: 'center',
    margin: '20px 0',
  },
  menuButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0',
  },
  menuItem: {
    display: 'block',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    margin: '5px 0',
    textDecoration: 'none',
    color: '#007bff',
    borderRadius: '5px',
  },
};

export default ToggleMenu;
