import React from 'react';
import Text from '../Text';
import { List } from './index';
import styled from 'styled-components';

export default {
  title: 'Components/List',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

export const Story = () => {
  const posts = [
    { id: 1, title: 'Hello World' },
    { id: 2, title: 'Installation' },
  ];

  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Ordered
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <List postsData={posts} varient="Ordered" />
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30} mb={10}>
        Ordered with custom start
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <List postsData={posts} varient="Ordered" start={5} />
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30} mb={10}>
        Unordered
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <List postsData={posts} />
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30} mb={10}>
        Custom
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <List postsData={posts} custom note={'./branding/svg/attached.svg'} />
      </CardDiv>
    </>
  );
};
