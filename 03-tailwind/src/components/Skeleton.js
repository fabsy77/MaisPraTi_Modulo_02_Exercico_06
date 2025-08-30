import React from 'react';

const Skeleton = ({ type }) => {
  if (type === 'image') {
    return <div className="skeleton w-full pt-[100%]"></div>;
  }
  
  if (type === 'title') {
    return <div className="skeleton h-5 mb-2"></div>;
  }
  
  if (type === 'text') {
    return <div className="skeleton h-4 mb-2 w-3/4"></div>;
  }
  
  if (type === 'price') {
    return <div className="skeleton h-6 mb-2 w-1/2"></div>;
  }
  
  if (type === 'rating') {
    return <div className="skeleton h-4 mb-4 w-2/5"></div>;
  }
  
  if (type === 'button') {
    return <div className="skeleton h-9"></div>;
  }
  
  return <div className="skeleton"></div>;
};

export default Skeleton;