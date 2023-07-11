import React from 'react';
import styled from 'styled-components';
import { lightShadows } from '../styles/shadows';
import { Flex } from '../components';

const Container = styled.div`
  padding: 50px;
`;

const Card = styled(Flex)`
  justify-content: flex-start;
  height: 120px;
  width: 300px;
  background-color: #f5f5f5;
  box-shadow: -1px 1px 2px rgba(188, 189, 196, 0.2), 1px -1px 2px rgba(188, 189, 196, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(188, 189, 196, 0.9),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(188, 189, 196, 0.5);
  border-radius: 12px;
  margin: 10px;
`;

const ColorSquare = styled.div<{ shadow: string }>`
  background-color: #fff;
  width: 80px;
  height: 80px;
  margin: 25px;
  border-radius: 15px;
  box-shadow: ${({ shadow }) => shadow};
`;

const Title = styled.h2`
  margin: 5px 0;
`;

export default {
  title: 'Components/Shadows',
  argTypes: {},
};

export const Default: React.FC = () => {
  const Light = Object.keys(lightShadows);
  const LightValues = Object.values(lightShadows);

  return (
    <Container>
      {Light.map((key, id) => (
        <Card key={key}>
          <ColorSquare shadow={LightValues[id]} />
          <Title>{key}</Title>
        </Card>
      ))}
    </Container>
  );
};
