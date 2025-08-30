import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.bg.secondary};
  border-bottom: 1px solid ${props => props.theme.border};
  z-index: 1000;
  height: 70px;
`;

export const NavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.accent};
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text.primary};
  background-color: ${props => props.theme.bg.primary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.accent};
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.accent};
    outline-offset: 2px;
  }
`;

export const CartBadge = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text.primary};
  background-color: ${props => props.theme.bg.primary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.accent};
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.accent};
    outline-offset: 2px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.badge.bg};
  color: ${props => props.theme.badge.text};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;