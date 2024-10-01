// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <Link to="/products">Home</Link>
      <Link to="/cart">
        <div className="cart-icon">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
