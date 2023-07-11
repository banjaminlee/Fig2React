import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../../components';
import { HowToUseProps } from './types';

const Container = styled.div`
  padding: 50px;
`;

export const HowToUse = ({ storyname, content, children }: HowToUseProps) => {
  return (
    <Container>
      <Text font="heading_md" color="text_primary" pb="10px">
        {storyname}
      </Text>
      <Text font="body_md" color="text_primary">
        {content}
      </Text>
      <Text font="body_md" color="text_primary" mt="5px" mb="10px">
        Example:
      </Text>
      {children}
    </Container>
  );
};

export default HowToUse;
