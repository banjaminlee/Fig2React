import React from 'react';
import Tooltip, { CustomTooltip } from '.';
import Text from '../Text';
import styled from 'styled-components';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
};

const Template = (args) => (
  <TestWrapper>
    <CustomTooltip {...args} />
  </TestWrapper>
);

export const Main = Template.bind({});
Main.args = {
  content: 'This is content!',
  direction: 'top',
};

const TestWrapper = styled.div`
  padding: 30px 150px;
`;

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MainWrapper = styled.div`
  padding: 16px 150px;
`;

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 30px 10px 30px 10px;
`;

export const Story = () => (
  <Section>
    <Text font="heading_sm" color="text_primary" mt="10px" mb="10px" style={{ fontSize: 20 }}>
      Tooltip
    </Text>
    <Text font="body_lg" color="text_primary" my="10px">
      Tooltips display informative text when users hover over, focus on, or tap an element
    </Text>
    <Text
      font="heading_med_sm"
      color="text_primary"
      mt="20px"
      mb="10px"
      style={{ fontSize: 16, fontWeight: 200 }}
    >
      Default
    </Text>
    <CardDiv>
      <MainWrapper>
        <Tooltip content="Contents go here...">
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
          >
            Test me
          </Button>
        </Tooltip>
      </MainWrapper>
    </CardDiv>
    <Text
      font="heading_med_sm"
      color="text_primary"
      mt="20px"
      mb="10px"
      style={{ fontSize: 16, fontWeight: 200 }}
    >
      Placement
    </Text>
    <CardDiv>
      <Text font="body_md" color="text_primary" my="10px" ml="20px">
        Top:
      </Text>
      <MainWrapper>
        <Tooltip content="Contents go here..." direction="top">
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
          >
            Test me
          </Button>
        </Tooltip>
      </MainWrapper>
      <Text font="body_md" color="text_primary" my="10px" ml="20px">
        Right:
      </Text>
      <MainWrapper>
        <Tooltip content="Quick!" direction="right">
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
          >
            Test me
          </Button>
        </Tooltip>
      </MainWrapper>
      <Text font="body_md" color="text_primary" my="10px" ml="20px">
        Left:
      </Text>
      <MainWrapper>
        <Tooltip
          content={
            <>
              Thank you
              <br />
              for your time!
            </>
          }
          direction="left"
          delay={0}
        >
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
          >
            Test me
          </Button>
        </Tooltip>
      </MainWrapper>
      <Text font="body_md" color="text_primary" my="10px" ml="20px">
        Bottom:
      </Text>
      <MainWrapper>
        <Tooltip content="This is successful text!" direction="bottom" delay={0}>
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
          >
            Test me
          </Button>
        </Tooltip>
      </MainWrapper>
    </CardDiv>
    <Text
      font="heading_med_sm"
      color="text_primary"
      mt="20px"
      mb="10px"
      style={{ fontSize: 16, fontWeight: 200 }}
    >
      Large Tooltip
    </Text>
    <CardDiv>
      <MainWrapper>
        <Tooltip
          content={
            <>
              Interactive tooltip with heading. Hide in the layer panel to remove the heading.
              Interactive tooltips may contain rich text and other interactive elements like buttons
              or links.
            </>
          }
          direction="right"
          type="large"
        >
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
          >
            Test me
          </Button>
        </Tooltip>
      </MainWrapper>
    </CardDiv>
  </Section>
);
