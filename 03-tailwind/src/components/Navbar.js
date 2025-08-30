import React from 'react';

const Navbar = ({ theme, toggleTheme, cartItemsCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-light-secondary dark:bg-dark-secondary border-b border-light-border dark:border-dark-border z-50 h-[70px]">
      <div className="text-xl font-bold text-light-accent dark:text-dark-accent">E-commerce</div>
      <div className="flex items-center gap-4">
        <button 
          className="p-2 rounded-full bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-2"
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button 
          className="relative p-2 rounded-full bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-2"
          aria-label="Carrinho de compras"
        >
          🛒
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-light-badge-bg dark:bg-dark-badge-bg text-light-badge-text dark:text-dark-badge-text rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;