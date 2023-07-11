import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'components/Svgs';
import styled, { ThemeProvider } from 'styled-components';
import { CarouselProps, ArrowButtonProps } from './types';
import { lightTheme } from 'styles/theme';

const PreviousArrowWrapper = styled.div<ArrowButtonProps>`
  border: ${({ theme }) => `1.5px solid ${theme.colors.icon_primary}`};
  background: ${({ theme, disabled }) => (disabled ? 'transparent' : theme.colors.icon_primary)};
  border-radius: 100px;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`;

const NextArrowWrapper = styled.div<ArrowButtonProps>`
  border: ${({ theme }) => `1.5px solid ${theme.colors.icon_primary}`};
  background: ${({ theme, disabled }) => (disabled ? 'transparent' : theme.colors.icon_primary)};
  border-radius: 100px;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`;

const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CarouselController = styled.span`
  margin: 10px 10px 10px;
`;

const ControllerWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Carousel: React.FC<CarouselProps> = ({ items, initialItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);
  const [carouselItems, setCarouselItems] = useState(items.slice(0, initialItems));

  useEffect(() => {
    setLength(items.length);
  }, [items]);

  const traverseItem = (_: string) => {
    const carouselArray = [...carouselItems];
    if (_ === 'next') {
      if (currentIndex < length - initialItems) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    }
    setCarouselItems([...carouselArray]);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <ControllerWrapper>
          <CarouselController>
            <PreviousArrowWrapper
              data-testid={'previousBtn'}
              disabled={currentIndex <= 0}
              onClick={() => currentIndex > 0 && traverseItem('previous')}
            >
              <ArrowLeft color={currentIndex <= 0 ? '#c94403' : 'white'} />
            </PreviousArrowWrapper>
          </CarouselController>
          <CarouselController>
            <NextArrowWrapper
              data-testid={'nextBtn'}
              disabled={currentIndex >= length - initialItems}
              onClick={() => currentIndex < length - initialItems && traverseItem('next')}
            >
              <ArrowRight color={currentIndex >= length - initialItems ? '#c94403' : 'white'} />
            </NextArrowWrapper>
          </CarouselController>
        </ControllerWrapper>
        <CarouselContentWrapper>
          <Content
            style={{ transform: `translateX(-${currentIndex * (100 / initialItems)}%)` }}
            data-testid={`slide-${currentIndex}`}
          >
            {items}
          </Content>
        </CarouselContentWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Carousel;
