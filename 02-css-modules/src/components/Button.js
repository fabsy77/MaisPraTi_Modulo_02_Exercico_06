import React from 'react';
import styles from './styles/Button.module.css';

const Button = ({ 
  variant = 'solid', 
  children, 
  disabled = false, 
  onClick, 
  type = 'button',
  ...props 
}) => {
  const buttonClass = `${styles.btn} ${styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;