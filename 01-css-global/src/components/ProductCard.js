import React, { useState, useEffect } from 'react';
import Button from './Button';
import Skeleton from './Skeleton';

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
      <div className="product-card">
        <Skeleton type="image" />
        <div className="product-info">
          <Skeleton type="title" />
          <Skeleton type="price" />
          <Skeleton type="rating" />
          <div className="product-actions">
            <Skeleton type="button" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.tag && (
          <span className={`product-tag ${product.tag === 'Novo' ? 'tag-new' : 'tag-promo'}`}>
            {product.tag}
          </span>
        )}
        {!imageLoaded ? (
          <Skeleton type="image" />
        ) : (
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image"
            loading="lazy"
          />
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <div className="product-rating">
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            ({product.rating.toFixed(1)})
          </span>
        </div>
        <div className="product-actions">
          <Button variant="solid">Adicionar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;