import React from 'react';
import DarkMode from './Darkmode';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <a href="/" className="Header-title">
        Example Name
      </a>
      <DarkMode />
    </div>
  );
}

export default Header;
