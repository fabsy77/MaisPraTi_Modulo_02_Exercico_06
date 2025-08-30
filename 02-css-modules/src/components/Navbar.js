import React from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = ({ theme, toggleTheme, cartItemsCount }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>E-commerce</div>
      <div className={styles.navbarActions}>
        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button className={styles.cartBadge} aria-label="Carrinho de compras">
          🛒
          {cartItemsCount > 0 && (
            <span className={styles.badge}>{cartItemsCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;