import React from 'react';
import {
  NavbarContainer,
  NavbarLogo,
  NavbarActions,
  ThemeToggle,
  CartBadge,
  Badge
} from './styled/Navbar.styled';

const Navbar = ({ theme, toggleTheme, cartItemsCount }) => {
  return (
    <NavbarContainer>
      <NavbarLogo>E-commerce</NavbarLogo>
      <NavbarActions>
        <ThemeToggle
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </ThemeToggle>
        <CartBadge aria-label="Carrinho de compras">
          🛒
          {cartItemsCount > 0 && (
            <Badge>{cartItemsCount}</Badge>
          )}
        </CartBadge>
      </NavbarActions>
    </NavbarContainer>
  );
};

export default Navbar;