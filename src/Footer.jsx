import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="textile-footer">
      &copy; {new Date().getFullYear()} Fibrance Textiles. All rights reserved.
    </footer>
  );
}

export default Footer;
