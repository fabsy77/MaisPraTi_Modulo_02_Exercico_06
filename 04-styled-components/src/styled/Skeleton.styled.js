import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const SkeletonBase = styled.div`
  background-color: ${props => props.theme.skeleton.bg};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 2s infinite;
  }
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
`;

export const SkeletonTitle = styled(SkeletonBase)`
  height: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const SkeletonText = styled(SkeletonBase)`
  height: 1rem;
  margin-bottom: 0.5rem;
  width: 70%;
`;

export const SkeletonPrice = styled(SkeletonBase)`
  height: 1.5rem;
  margin-bottom: 0.5rem;
  width: 50%;
`;

export const SkeletonRating = styled(SkeletonBase)`
  height: 1rem;
  margin-bottom: 1rem;
  width: 40%;
`;

export const SkeletonButton = styled(SkeletonBase)`
  height: 2.25rem;
`;