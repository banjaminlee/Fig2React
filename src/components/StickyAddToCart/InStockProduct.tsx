import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Heart } from '../Svgs/Icons';

const InStockProduct: React.FC = () => {
  return (
    <ProductContainer>
      <ProductDetails>
        <ProductInfo>
          <Title>Product Title</Title>
          <ProductTypes>Carrier</ProductTypes>
          <ProductTypes>Color</ProductTypes>
          <ProductTypes>Storage</ProductTypes>
          <ProductTypes>Condition</ProductTypes>
        </ProductInfo>
        <ProductPrice>
          <DiscountPrice>$1,000.00</DiscountPrice>
          <Price>$1,001</Price>
          <YouSave>You save $1.00!</YouSave>
          <ProductPriceWrapper>
            <OtherOption>Or as low as $30.29/mo for 24 mo. or 0% APR.</OtherOption>
            <FinancingOption>See financing options</FinancingOption>
          </ProductPriceWrapper>
        </ProductPrice>
      </ProductDetails>
      <ProductActions>
        <ActionContainer>
          <Actions>
            <NotifyMe>
              <Heart color={'#c94403'} />
            </NotifyMe>
            <Button Secondary size="Small">
              Add to cart
            </Button>
          </Actions>
        </ActionContainer>
      </ProductActions>
    </ProductContainer>
  );
};

export default InStockProduct;

const ProductContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 20px 50px 20px 50px;
  @media (max-width: 840px) {
    padding: 10px 50px 10px 30px;
  }
  @media (max-width: 720px) {
    padding: 10px;
  }
`;

const ProductDetails = styled.div`
  flex: 3;
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
      display: flex;
    }
  }
`;

const ProductPrice = styled.div`
  flex: 1;
`;

const ProductPriceWrapper = styled.div`
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

const DiscountPrice = styled.span`
  font-size: 16px;
  color: #5870ff;
  font-weight: 700;
  @media (max-width: 840px) {
    font-size: 12px;
    padding-left: 5px;
  }
`;

const Price = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-decoration: line-through;
  padding-left: 10px;
  @media (max-width: 840px) {
    font-size: 10px;
  }
`;

const YouSave = styled.span`
  font-size: 12px;
  font-weight: 400;
  padding-left: 20px;
  display: initial;
  @media (max-width: 840px) {
    font-size: 10px;
    display: initial;
  }
  @media (max-width: 720px) {
    font-size: 10px;
    display: none;
  }
`;

const OtherOption = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: initial;
  @media (max-width: 840px) {
    font-size: 10px;
    display: initial;
  }
  @media (max-width: 720px) {
    font-size: 10px;
    display: none;
  }
`;

const FinancingOption = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #c94403;
  text-decoration: underline;
  padding-left: 4px;
  display: initial;
  @media (max-width: 840px) {
    font-size: 10px;
    display: initial;
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
`;

const NotifyMe = styled.button`
  margin-right: 10px;
  outline: none;
  background: none;
  border: none;
  @media (max-width: 720px) {
    margin-right: 0px;
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
