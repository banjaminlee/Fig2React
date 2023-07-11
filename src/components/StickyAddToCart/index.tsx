import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FixedAddToCart = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && <FixedContainer>{children}</FixedContainer>}
      <FixedMobileContainer>{children}</FixedMobileContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FixedContainer = styled.div`
  width: 100vw;
  height: 6rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.18);
  position: fixed;
  top: 0rem;
  z-index: 999;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 720px) {
    display: none;
  }
`;

const FixedMobileContainer = styled.div`
  width: 100vw;
  height: auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.18);
  position: fixed;
  bottom: 0rem;
  z-index: 999;
  display: none;
  align-items: center;
  cursor: pointer;
  @media (max-width: 720px) {
    display: flex;
  }
`;

export default FixedAddToCart;
