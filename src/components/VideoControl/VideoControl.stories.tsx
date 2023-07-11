import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import VideoControl from './index';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  position: relative;
`;

const Container = styled.div`
  margin-top: 1rem;
  box-sizing: inherit;
`;

export default {
  title: 'Components/VideoControl',
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Default
        </Text>
        <Container>
          <VideoControl srcLink="./assets/video/phone 1.mp4" />
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Height and Width Control
        </Text>
        <Container>
          <VideoControl srcLink="./assets/video/phone 2.mp4" height={400} width={900} />
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Auto Play Control
        </Text>
        <Container>
          <VideoControl srcLink="./assets/video/phone 6.mp4" allowAutoPlay={true} />
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Allow Full Control
        </Text>
        <Container>
          <VideoControl srcLink="./assets/video/phone 6.mp4" allowControls={true} />
        </Container>
      </CardDiv>
    </>
  );
};
