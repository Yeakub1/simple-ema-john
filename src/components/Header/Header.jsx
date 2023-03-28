import React from 'react';
import './Header.css'
import logo from '../Header/../../images/Logo.svg'

const Header = () => {
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div className="nav-items">
          <a href="/Order">Order</a>
          <a href="/OrderReview">Order Review</a>
          <a href="/ManageInventory">Manage Inventory</a>
          <a href="/Login">Login</a>
        </div>
      </nav>
    );
};

export default Header;