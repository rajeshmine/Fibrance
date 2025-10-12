import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-col">
          <h3 className="footer-logo">SareeElegance</h3>
          <p className="footer-about">
            Discover timeless sarees crafted with love and tradition. 
            From festive silks to everyday cottons, we bring elegance to your wardrobe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/new">New Arrivals</a></li>
            <li><a href="/sale">Sale</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="footer-col">
          <h4>Stay Connected</h4>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SareeElegance. All rights reserved.</p>
      </div>
    </footer>
  );
}