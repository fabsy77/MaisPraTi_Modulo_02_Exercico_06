import React from 'react';
import {
  SkeletonImage,
  SkeletonTitle,
  SkeletonText,
  SkeletonPrice,
  SkeletonRating,
  SkeletonButton
} from './styled/Skeleton.styled';

const Skeleton = ({ type }) => {
  if (type === 'image') {
    return <SkeletonImage />;
  }
  
  if (type === 'title') {
    return <SkeletonTitle />;
  }
  
  if (type === 'text') {
    return <SkeletonText />;
  }
  
  if (type === 'price') {
    return <SkeletonPrice />;
  }
  
  if (type === 'rating') {
    return <SkeletonRating />;
  }
  
  if (type === 'button') {
    return <SkeletonButton />;
  }
  
  return <div />;
};

export default Skeleton;