import styled from 'styled-components';

export const ProductsContainer = styled.div`
  padding: 5rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  /* Responsive grid */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductCardContainer = styled.div`
  background-color: ${props => props.theme.card.bg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.card.shadow};
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.card.hoverShadow};
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
`;

export const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductTag = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  z-index: 10;
  background-color: ${props => 
    props.variant === 'new' 
      ? props.theme.tag.new 
      : props.theme.tag.promo
  };
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.5rem;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.rating};
`;

export const ProductActions = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;