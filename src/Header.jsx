import React from 'react';
import './App.css';
import logo from './assets/react.svg'; // You can replace with your own logo

function Header() {
  return (
    <header className="textile-header sticky-header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <span className="header-title">Fibrance Textiles</span>
      </div>
    </header>
  );
}

export default Header;
