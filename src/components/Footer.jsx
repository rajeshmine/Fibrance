import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Neidhal. All rights reserved.
        </p>
        <p>
          <a href="#privacy" className="footer-link">Privacy Policy</a> |{" "}
          <a href="#terms" className="footer-link">Terms & Conditions</a> |{" "}
          <a href="#contact" className="footer-link">Contact Us</a>
        </p>
        <p>
          Follow us on{" "}
          <a href="#facebook" className="footer-link">Facebook</a>,{" "}
          <a href="#instagram" className="footer-link">Instagram</a>, and{" "}
          <a href="#twitter" className="footer-link">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
