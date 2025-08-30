import React, { useState, useEffect } from 'react';
import Button from './Button';
import Skeleton from './Skeleton';
import styles from './styles/ProductCard.module.css';

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
      <div className={styles.productCard}>
        <Skeleton type="image" />
        <div className={styles.productInfo}>
          <Skeleton type="title" />
          <Skeleton type="price" />
          <Skeleton type="rating" />
          <div className={styles.productActions}>
            <Skeleton type="button" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {product.tag && (
          <span className={`${styles.productTag} ${product.tag === 'Novo' ? styles.tagNew : styles.tagPromo}`}>
            {product.tag}
          </span>
        )}
        {!imageLoaded ? (
          <Skeleton type="image" />
        ) : (
          <img 
            src={product.image} 
            alt={product.title} 
            className={styles.productImage}
            loading="lazy"
          />
        )}
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
        <div className={styles.productRating}>
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            ({product.rating.toFixed(1)})
          </span>
        </div>
        <div className={styles.productActions}>
          <Button variant="solid">Adicionar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;