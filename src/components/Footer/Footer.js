import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: elee6278@gmail.com</li>
              <li>Phone: +1 224 716 0614</li>
            </ul>
          </div>
          <div className="column">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/estherlee99/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
