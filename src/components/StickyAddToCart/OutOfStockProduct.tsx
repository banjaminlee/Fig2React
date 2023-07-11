import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Heart } from '../Svgs/Icons';

const OutOfStock: React.FC = () => {
  return (
    <ProductContainer>
      <OutOfStockProductDetails>
        <ProductInfo>
          <Title>Uh oh! Looks like this device is out of stock</Title>
          <ProductTypes>Carrier</ProductTypes>
          <ProductTypes>Color</ProductTypes>
          <ProductTypes>Storage</ProductTypes>
          <ProductTypes>Condition</ProductTypes>
        </ProductInfo>
        <ProductPrice>
          <OtherOption>
            We can let you when the device you want is back in stock with the customizations you're
            looking for.
          </OtherOption>
        </ProductPrice>
      </OutOfStockProductDetails>
      <ProductActions>
        <ActionContainer>
          <Actions>
            <NotifyMe>
              <Heart color={'#c94403'} />
            </NotifyMe>
            <Button isGhost Secondary size={'Small'} style={{ marginRight: 5 }}>
              Notify me
            </Button>
            <Button Secondary size={'Small'}>
              See similar devices
            </Button>
          </Actions>
        </ActionContainer>
      </ProductActions>
    </ProductContainer>
  );
};

export default OutOfStock;

const ProductContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 20px 50px 20px 50px;
  @media (max-width: 840px) {
    display: flex;
    padding: 10px 50px 10px 30px;
  }
  @media (max-width: 720px) {
    display: block;
    padding: 10px;
    text-align: center;
  }
`;

const OutOfStockProductDetails = styled.div`
  flex: 2;
  display: flex;
  @media (max-width: 720px) {
    flex: 1;
    flex-wrap: wrap;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  & span:nth-child(5) {
    border: none;
  }
  @media (max-width: 840px) {
    flex: 1.5;
  }
  @media (max-width: 720px) {
    & span:nth-child(5) {
      display: initial;
    }
  }
`;

const ProductPrice = styled.div`
  flex: 1;
  display: block;
  @media (max-width: 720px) {
    display: none;
  }
`;

const ProductActions = styled.div`
  flex: 1;
  @media (max-width: 840px) {
    flex: 1.5;
  }
  @media (max-width: 720px) {
    flex: 2;
  }
`;

const Title = styled.div`
  font-size: 16px;
  color: #5870ff;
  font-weight: 700;
  padding-left: 5px;
  @media (max-width: 840px) {
    font-size: 12px;
  }
`;

const OtherOption = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: block;
  @media (max-width: 840px) {
    font-size: 10px;
    display: block;
  }
  @media (max-width: 720px) {
    font-size: 10px;
    display: none;
  }
`;

const ActionContainer = styled.div`
  width: 100%;
  text-align: end;
`;

const Actions = styled.div`
  display: flex;
  float: right;
  @media (max-width: 720px) {
    display: block;
    button {
      float: unset;
      text-align: center;
      width: 90vw;
      margin-top: 10px;
    }
  }
`;

const NotifyMe = styled.button`
  margin-right: 10px;
  outline: none;
  background: none;
  border: none;
  display: block;
  @media (max-width: 720px) {
    margin-right: 0px;
    display: none;
  }
`;

const ProductTypes = styled.span`
  font-size: 12px;
  font-weight: 400;
  padding-right: 5px;
  border-right: 1px solid #5870ff;
  padding-left: 5px;
  @media (max-width: 840px) {
    font-size: 10px;
  }
`;
