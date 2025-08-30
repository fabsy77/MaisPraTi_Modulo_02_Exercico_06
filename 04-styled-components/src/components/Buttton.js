import React from 'react';
import { Button as StyledButton } from './styled/Button.styled';

const Button = ({ 
  variant = 'solid', 
  children, 
  disabled = false, 
  onClick, 
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;