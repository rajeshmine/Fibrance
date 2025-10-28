import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Fibrance</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Your destination for quality fashion and accessories. We bring you the latest trends at affordable prices.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
            Subscribe to get special offers and updates
          </p>
          <input 
            type="email" 
            className="search-input" 
            placeholder="Your email" 
            style={{ marginBottom: '12px', width: '100%' }} 
          />
          <button className="btn btn-primary" style={{ width: '100%' }}>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Flone E-Commerce. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
