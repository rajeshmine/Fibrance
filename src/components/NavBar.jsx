import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar()  {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">ShopEase</div>

      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/products/salwar">Salwar Materials</a></li>
        <li><a href="/products/new-arrivals">New Arrivals</a></li>
        <li><a href="/products/best-sellrs">Best Sellers</a></li>
        <li><a href="/products/saree">Sarees</a></li>
      </ul>

      <div className="navbar-icons">
        <FaSearch />
        <FaUser />
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">2</span>
        </div>
      </div>
    </nav>
  );
};
