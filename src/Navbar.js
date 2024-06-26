import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <h1>CR Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
        <button onClick={toggleTheme} style={{
          marginLeft: '16px',
          padding: '6px 12px',
          backgroundColor: theme === 'light' ? '#333' : '#f1356d',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
