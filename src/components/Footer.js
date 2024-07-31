import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="legalLinks">
        <a href="/privacy" className="link">Privacy Policy</a>
        <a href="/terms" className="link">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
