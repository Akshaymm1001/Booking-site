import React from "react";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">🍽️ FoOdY</h2>
          <p>Experience the best flavors with fresh ingredients and exquisite dishes.</p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p>📍 123 Food Street, City, Country</p>
          <p>📞 +123 456 7890</p>
          <p>✉️ contact@tastybites.com</p>
          <div className="footer-social">
            <a href="#" className="social-icon">🌐</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Tasty Bites. All Rights Reserved.
      </div>
    </footer>
  );
}
