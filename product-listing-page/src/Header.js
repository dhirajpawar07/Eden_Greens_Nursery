import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsCount }) => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Product Listing</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="cart-icon">
        🛒 <span>{cartItemsCount}</span>
      </div>
    </header>
  );
};

export default Header;
