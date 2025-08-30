import React, { useState, useEffect } from 'react';
import Button from './Button';
import {
  ProductCardContainer,
  ProductImageContainer,
  ProductImage,
  ProductTag,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRating,
  ProductActions
} from './styled/ProductCard.styled';
import {
  SkeletonImage,
  SkeletonTitle,
  SkeletonPrice,
  SkeletonRating,
  SkeletonButton
} from './styled/Skeleton.styled';

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    if (product && product.image) {
      const img = new Image();
      img.src = product.image;
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [product]);
  
  if (loading) {
    return (
      <ProductCardContainer>
        <SkeletonImage />
        <ProductInfo>
          <SkeletonTitle />
          <SkeletonPrice />
          <SkeletonRating />
          <ProductActions>
            <SkeletonButton />
          </ProductActions>
        </ProductInfo>
      </ProductCardContainer>
    );
  }
  
  return (
    <ProductCardContainer>
      <ProductImageContainer>
        {product.tag && (
          <ProductTag variant={product.tag === 'Novo' ? 'new' : 'promo'}>
            {product.tag}
          </ProductTag>
        )}
        {!imageLoaded ? (
          <SkeletonImage />
        ) : (
          <ProductImage 
            src={product.image} 
            alt={product.title}
            loading="lazy"
          />
        )}
      </ProductImageContainer>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        <ProductRating>
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span style={{ marginLeft: '0.5rem', color: 'inherit', fontSize: '0.875rem' }}>
            ({product.rating.toFixed(1)})
          </span>
        </ProductRating>
        <ProductActions>
          <Button variant="solid">Adicionar</Button>
        </ProductActions>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;