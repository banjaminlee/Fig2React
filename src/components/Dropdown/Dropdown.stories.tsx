import React from 'react';
import Text from '../Text';
import Dropdown from './index';
import { DropdownProps } from './types';
import styled from 'styled-components';

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

const Wrapper = styled.span`
  margin-left: 20px;
  font-family: 'Roc Grotesk Regular';
`;

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Dropdown',
  children: 'Dropdown content',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Dropdown',
  image: 'https://www.w3schools.com/images/w3schools_green.jpg',
  children: 'Dropdown content',
};

export const Story = () => {
  return (
    <div>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Dropdown Example
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Dropdown when the user can select one option from a list of possible options.
      </Text>

      <CardDiv style={{ padding: 20 }}>
        <Container>
          <Dropdown title="Dropdown">
            <p>Dropdown content 1</p>
            <p>Dropdown content 2</p>
            <p>Dropdown content 3</p>
          </Dropdown>
        </Container>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Container>
          <Dropdown
            title="Dropdown with Image"
            image="https://www.w3schools.com/images/w3schools_green.jpg"
          >
            <p>Dropdown content 1</p>
            <p>Dropdown content 2</p>
            <p>Dropdown content 3</p>
          </Dropdown>
        </Container>
      </CardDiv>
    </div>
  );
};
