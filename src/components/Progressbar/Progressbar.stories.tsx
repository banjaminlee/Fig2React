import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import Text from '../Text';
import { lightColors } from '../../styles/colors';
import Progressbar from './index';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const Container = styled.div`
  margin-top: 1rem;
  box-sizing: inherit;
`;

export default {
  title: 'Components/Progressbar',
  argTypes: {},
};

export const Default: React.FC = () => {
  const [percentage, setPercentage] = useState(10);

  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Default Value
        </Text>
        <Container>
          <Progressbar progress={0} bgcolor={lightColors.ui_primary} />
        </Container>
        <Container>
          <Progressbar progress={10} bgcolor={lightColors.ui_primary} />
        </Container>
        <Container>
          <Progressbar progress={20} bgcolor={lightColors.ui_primary} />
        </Container>
        <Container>
          <Progressbar progress={30} bgcolor={lightColors.ui_primary} />
        </Container>
        <Container>
          <Progressbar progress={40} bgcolor={lightColors.ui_primary} />
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          With percentage
        </Text>
        <Container>
          <Progressbar progress={0} bgcolor={lightColors.ui_primary} showPercentage />
        </Container>
        <Container>
          <Progressbar progress={10} bgcolor={lightColors.ui_primary} showPercentage />
        </Container>
        <Container>
          <Progressbar progress={20} bgcolor={lightColors.ui_primary} showPercentage />
        </Container>
        <Container>
          <Progressbar progress={30} bgcolor={lightColors.ui_primary} showPercentage />
        </Container>
        <Container>
          <Progressbar progress={40} bgcolor={lightColors.ui_primary} showPercentage />
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Progress change
        </Text>
        <Container>
          <Progressbar progress={percentage} bgcolor={lightColors.ui_primary} showPercentage />
          <Button
            size="Small"
            onClick={() => percentage > 0 && setPercentage(percentage - 10)}
            style={{ marginRight: 5, marginTop: 10, marginBottom: 30 }}
          >
            Decrease
          </Button>
          <Button
            size="Small"
            onClick={() => percentage < 100 && setPercentage(percentage + 10)}
            style={{ marginRight: 5, marginTop: 10, marginBottom: 30 }}
          >
            Increase
          </Button>
        </Container>
      </CardDiv>
    </>
  );
};
