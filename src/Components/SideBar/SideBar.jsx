import React from 'react';
import './sidebar.css';

function SideBar() {
  return (
    <div className="Header">
      <h2 className="Logo">FoOdY</h2>
      <div className="Options">
        <h3>HOME</h3>
        <h3>My Bookings</h3>
        <h3>Restaurants</h3>
        <h3>Shop Owner Register</h3>
        <h3>Login</h3>
      </div>
    </div>
  );
}

export default SideBar;
