import React from 'react';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { LoaderProps } from './types';

const Spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div<{ isLarge?: boolean; color?: string }>`
  width: ${({ isLarge }) => (isLarge ? '32px' : '12px')};
  height: ${({ isLarge }) => (isLarge ? '32px' : '12px')};
  border: ${({ color }) => (color ? `3px solid ${color}` : '3px solid #fff')};
  border-top: 3px solid ${({ theme }) => theme.colors.periwinkle};
  border-radius: 50%;
  animation: ${Spinner} 1.5s linear infinite;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Loader: FC<LoaderProps> = ({ isLarge, color }) => (
  <Container className="loader">
    <LoadingSpinner isLarge={isLarge} color={color} className="loading-spinner" />
  </Container>
);

export default Loader;
