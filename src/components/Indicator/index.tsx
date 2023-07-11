import React, { FC, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import { IndicatorProps } from './types';

const Container = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1100;
`;

const ModalBody = styled(Flex)`
  flex-direction: column;
  width: 300px;
  height: auto;
  margin: 60px auto;
  padding: 10px;
  transition: transform 0.3s ease-out;
  transform: none;
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: ${({ theme }) => theme.shadows.shadow08};
  border-radius: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: auto;
    min-width: 300px;
    max-width: 75%;
    padding: 2.5rem 3rem 0 3rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 55%;
  }
`;

const Indicator: FC<IndicatorProps> = ({ className = 'modal-body', children, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Container className="modal">
      <ModalBody {...props} className={className}>
        {children}
      </ModalBody>
    </Container>
  );
};

export default Indicator;
