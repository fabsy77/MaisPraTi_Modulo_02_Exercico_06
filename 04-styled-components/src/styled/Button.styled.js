import styled from 'styled-components';

const getButtonStyles = (props) => {
  const { variant, theme } = props;
  
  switch (variant) {
    case 'outline':
      return `
        background-color: transparent;
        color: ${theme.accent};
        border: 1px solid ${theme.accent};
        
        &:hover:not(:disabled) {
          background-color: ${theme.accent};
          color: white;
        }
        
        &:focus-visible {
          outline: 2px solid ${theme.accent};
          outline-offset: 2px;
        }
      `;
      
    case 'ghost':
      return `
        background-color: transparent;
        color: ${theme.accent};
        
        &:hover:not(:disabled) {
          background-color: rgba(0, 123, 255, 0.1);
        }
        
        &:focus-visible {
          outline: 2px solid ${theme.accent};
          outline-offset: 2px;
        }
      `;
      
    case 'solid':
    default:
      return `
        background-color: ${theme.accent};
        color: white;
        
        &:hover:not(:disabled) {
          background-color: ${theme.accentHover};
        }
        
        &:focus-visible {
          outline: 2px solid ${theme.accent};
          outline-offset: 2px;
        }
      `;
  }
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-grow: 1;
  
  ${props => getButtonStyles(props)}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;