import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      {/* 🔹 Hero Section with Gradient Background */}
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Foody</h1>
          <p>Reserve Your Favorite Table & Enjoy Delicious Meals</p>
          <Link to="/booking">
            <button className="cta-button">Book Your Table Now</button>
          </Link>
        </div>
      </div>

      {/* 🔹 Features Section */}
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-boxes">
          <div className="feature">
            <h3>🍽️ Premium Dining</h3>
            <p>Experience the best flavors with top-class service.</p>
          </div>
          <div className="feature">
            <h3>📅 Easy Reservations</h3>
            <p>Book your seats online within seconds.</p>
          </div>
          <div className="feature">
            <h3>🌟 Exclusive Discounts</h3>
            <p>Enjoy special offers for our loyal customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
