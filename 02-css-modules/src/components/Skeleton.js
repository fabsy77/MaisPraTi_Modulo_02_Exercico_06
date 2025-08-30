import React from 'react';
import styles from './styles/Skeleton.module.css';

const Skeleton = ({ type }) => {
  if (type === 'image') {
    return <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>;
  }
  
  if (type === 'title') {
    return <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>;
  }
  
  if (type === 'text') {
    return <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>;
  }
  
  if (type === 'price') {
    return <div className={`${styles.skeleton} ${styles.skeletonPrice}`}></div>;
  }
  
  if (type === 'rating') {
    return <div className={`${styles.skeleton} ${styles.skeletonRating}`}></div>;
  }
  
  if (type === 'button') {
    return <div className={`${styles.skeleton} ${styles.skeletonButton}`}></div>;
  }
  
  return <div className={styles.skeleton}></div>;
};

export default Skeleton;