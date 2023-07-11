import React from 'react';
import styled from 'styled-components';
import OutOfStockProduct from './OutOfStockProduct';
import InStockProduct from './InStockProduct';
import StickyAddToCart from './index';

const Container = styled.div`
  min-height: 150vh;
`;

export default {
  title: 'Components/StickyAddToCart',
  argTypes: {},
};

const InStock: React.FC = () => {
  return (
    <Container>
      <StickyAddToCart>
        <InStockProduct />
      </StickyAddToCart>
    </Container>
  );
};

export const InStockProductStory = () => <InStock />;

const OutOfStock: React.FC = () => {
  return (
    <Container>
      <StickyAddToCart>
        <OutOfStockProduct />
      </StickyAddToCart>
    </Container>
  );
};

export const OutOfStockProductStory = () => <OutOfStock />;
