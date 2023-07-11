import React from 'react';
import styled from 'styled-components';
import { ArrowRight, ArrowLeft } from './';
import Flex from '../Flex';
import Text from '../Text';

export default {
  title: 'Components/Icons',
  argTypes: {},
};

const Container = styled.div`
  padding: 25px;
`;

export const Default: React.FC = () => (
  <Container>
    <Flex my="10px" align="flex-start">
      <ArrowRight color="#5870FF" />
      <Text font="rocHeavy" ml="10px">
        ArrowRight Icon
      </Text>
    </Flex>
    <Flex my="10px" align="flex-start">
      <ArrowLeft color="#5870FF" />
      <Text font="rocHeavy" ml="10px">
        ArrowLeft Icon
      </Text>
    </Flex>
  </Container>
);
