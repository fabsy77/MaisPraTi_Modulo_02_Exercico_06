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
      <div className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-card-light dark:shadow-card-dark transition-all duration-300 flex flex-col h-full">
        <Skeleton type="image" />
        <div className="p-4 flex flex-col flex-grow">
          <Skeleton type="title" />
          <Skeleton type="price" />
          <Skeleton type="rating" />
          <div className="flex gap-2 mt-auto">
            <Skeleton type="button" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-card-light dark:shadow-card-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark flex flex-col h-full">
      <div className="relative w-full pt-[100%] overflow-hidden">
        {product.tag && (
          <span className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold text-white z-10 ${
            product.tag === 'Novo' 
              ? 'bg-light-tagNew dark:bg-dark-tagNew' 
              : 'bg-light-tagPromo dark:bg-dark-tagPromo'
          }`}>
            {product.tag}
          </span>
        )}
        {!imageLoaded ? (
          <Skeleton type="image" />
        ) : (
          <img 
            src={product.image} 
            alt={product.title} 
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-medium mb-2 text-light-text-primary dark:text-dark-text-primary line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>
        <p className="text-xl font-bold mb-2 text-light-text-primary dark:text-dark-text-primary">
          R$ {product.price.toFixed(2)}
        </p>
        <div className="flex items-center mb-4 text-light-rating dark:text-dark-rating">
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span className="ml-2 text-light-text-secondary dark:text-dark-text-secondary text-sm">
            ({product.rating.toFixed(1)})
          </span>
        </div>
        <div className="flex gap-2 mt-auto">
          <Button variant="solid">Adicionar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;