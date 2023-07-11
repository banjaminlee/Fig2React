import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import Text from '../Text';
import Drawer from './index';

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
  title: 'Components/Drawer',
  argTypes: {},
};

export const Default: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);

  const [enableOverlay, setEnableOverlay] = useState(true);

  const toggleLeft = () => {
    setIsLeftOpen((prev) => !prev);
  };

  const toggleRight = () => {
    setIsRightOpen((prev) => !prev);
  };

  const toggleBottom = () => {
    setIsBottomOpen((prev) => !prev);
  };

  const toggleTop = () => {
    setIsTopOpen((prev) => !prev);
  };

  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Open Drawer from left
        </Text>
        <Container>
          <Button size="Small" onClick={toggleLeft}>
            Open
          </Button>
          <Drawer
            open={isLeftOpen}
            onClose={toggleLeft}
            direction="left"
            size={300}
            enableOverlay={enableOverlay}
          >
            <DrawerBody direction="left" />
          </Drawer>
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Open Drawer from right
        </Text>
        <Container>
          <Button size="Small" onClick={toggleRight}>
            Open
          </Button>
          <Drawer
            open={isRightOpen}
            onClose={toggleRight}
            direction="right"
            size={300}
            enableOverlay={enableOverlay}
          >
            <DrawerBody direction="right" />
          </Drawer>
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Open Drawer from top
        </Text>
        <Container>
          <Button size="Small" onClick={toggleTop}>
            Open
          </Button>
          <Drawer
            open={isTopOpen}
            onClose={toggleTop}
            direction="top"
            size={300}
            enableOverlay={enableOverlay}
          >
            <DrawerBody direction="top" />
          </Drawer>
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Open Drawer from bottom
        </Text>
        <Container>
          <Button size="Small" onClick={toggleBottom}>
            Open
          </Button>
          <Drawer
            open={isBottomOpen}
            onClose={toggleBottom}
            direction="bottom"
            size={300}
            enableOverlay={enableOverlay}
          >
            <DrawerBody direction="bottom" />
          </Drawer>
        </Container>
      </CardDiv>
    </>
  );
};

const DrawerBody = ({ direction }) => {
  return (
    <div style={{ padding: 20 }}>
      <Text font="body_md" color="text_primary">
        Open from {direction}!
      </Text>
    </div>
  );
};
