import React from 'react';
import Button from './Button';

const Navbar = ({ theme, toggleTheme, cartItemsCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">E-commerce</div>
      <div className="navbar-actions">
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button className="cart-badge" aria-label="Carrinho de compras">
          🛒
          {cartItemsCount > 0 && (
            <span className="badge">{cartItemsCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;