import React from 'react';

const Skeleton = ({ type }) => {
  if (type === 'image') {
    return <div className="skeleton skeleton-image"></div>;
  }
  
  if (type === 'title') {
    return <div className="skeleton skeleton-title"></div>;
  }
  
  if (type === 'text') {
    return <div className="skeleton skeleton-text"></div>;
  }
  
  if (type === 'price') {
    return <div className="skeleton skeleton-price"></div>;
  }
  
  if (type === 'rating') {
    return <div className="skeleton skeleton-rating"></div>;
  }
  
  if (type === 'button') {
    return <div className="skeleton skeleton-button"></div>;
  }
  
  return <div className="skeleton"></div>;
};

export default Skeleton;