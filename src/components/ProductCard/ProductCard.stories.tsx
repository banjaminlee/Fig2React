import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import ProductCard from './index';

const Container = styled.div`
  margin-top: 16px;
  max-width: 350px;
`;

export default {
  title: 'Components/ProductCard',
  argTypes: {},
};

export const Default: React.FC = () => {
  const mainInfo = [
    {
      title: 'iPhone 12',
      image: './branding/svg/bestselleriPhone.svg',
      bestSellerBtn: [
        {
          title: 'Best Seller',
          image: './branding/svg/bestsellerstar.svg',
        },
      ],
      favoriteImage: './branding/svg/bestsellerheart.svg',
      capacity: '256GB',
      price: '$78.00',
      previousPrice: '$324.99',
      color: 'Green / Excellent',
      innerContent: 'As low as $14/mo or 0% APR with',
      footerlink: 'Prequalify now.',
    },
  ];

  const actionColor = [
    {
      id: 1,
      color: '#FFFFFF',
    },
    {
      id: 2,
      color: '#000000',
    },
    {
      id: 3,
      color: '#4BC189',
    },
    {
      id: 4,
      color: '#2C88FF',
    },
    {
      id: 5,
      color: '#8F00FF',
    },
    {
      id: 6,
      color: '#C94403',
    },
  ];

  return (
    <>
      <Text font="body_md" color="text_primary" pt={20} pb={15}>
        Product Card
      </Text>
      <Container>
        {mainInfo.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard
                title={item.title}
                image={item.image}
                bestSellerBtn={item.bestSellerBtn}
                favoriteImage={item.favoriteImage}
                capacity={item.capacity}
                price={item.price}
                previousPrice={item.previousPrice}
                innerContent={item.innerContent}
                color={item.color}
                actionColor={actionColor}
                footerlink={item.footerlink}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
};
