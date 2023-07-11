import React, { useEffect, useState } from 'react';
import Text from '../Text';
import Checkbox from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    size: {
      options: ['Small', 'Large'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;

  & .otheractive {
    color: rgba(0, 0, 0, 0.25);
  }
  & .normal {
    color: rgba(0, 0, 0);
  }
`;

const Wrapper = styled.span`
  margin-left: 20px;
  font-family: 'Roc Grotesk Regular';
`;

const WrapperDisabled = styled.span`
  margin-left: 20px;
  cursor: not-allowed;
  color: #b3b3b3;
`;

const Template = ({ checked, onClick, ...args }) => {
  const [value, setValue] = useState(false);
  const [updatedChecked, setUpdatedChecked] = useState(false);
  const handleClose = () => {
    setValue(!value);
  };

  useEffect(() => {
    if (value == true) {
      setUpdatedChecked(true);
    } else setUpdatedChecked(false);
  }, [value]);
  return (
    <>
      <Checkbox checked={updatedChecked} onClick={handleClose} {...args}>
        <Wrapper>Label Text</Wrapper>
      </Checkbox>
    </>
  );
};

export const Main = Template.bind({});
Main.args = {
  size: 'Small',
  onClick: undefined,
};

export const Story = () => {
  const [checkedStyleOne, setCheckedStyleOne] = useState(false);
  const [checkedStyleTwo, setCheckedStyleTwo] = useState(false);
  const [value, setValue] = useState(false);
  const [valueOne, setValueOne] = useState(false);
  const [valueTwo, setValueTwo] = useState(false);
  const [valueThree, setValueThree] = useState(false);

  useEffect(() => {
    if (valueOne == true) {
      setCheckedStyleTwo(false);
      if (valueTwo == false) {
        setCheckedStyleTwo(true);
      }
    } else setCheckedStyleTwo(false);
    if (valueTwo == true) {
      setCheckedStyleOne(false);
      if (valueOne == false) {
        setCheckedStyleOne(true);
      }
    } else setCheckedStyleOne(false);
  }, [valueOne, valueTwo]);

  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Checkbox
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a checkbox when the user can select one option, several options, or no option from a
        list of possible options.
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Checkbox checked={value} onClick={() => setValue(!value)}>
          <Wrapper>Label Text</Wrapper>
        </Checkbox>
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        Sizes
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Checkboxes have two sizes: Small and Large. The default size is large.
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Checkbox checked={valueOne} onClick={() => setValueOne(!valueOne)}>
          <Wrapper className={checkedStyleOne ? 'otheractive' : 'normal'}>Label Text</Wrapper>
        </Checkbox>
        <Text font="body_md" color="text_primary" mt={10}></Text>
        <Checkbox size="Small" checked={valueTwo} onClick={() => setValueTwo(!valueTwo)}>
          <Wrapper
            className={checkedStyleTwo ? 'otheractive' : 'normal'}
            style={{ marginLeft: 25 }}
          >
            Label Text
          </Wrapper>
        </Checkbox>
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        States
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Checkboxes can be checked or unchecked. Checkboxes have idle and disabled states.
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Checkbox checked={valueThree} onClick={() => setValueThree(!valueThree)}>
          <Wrapper>Label Text</Wrapper>
        </Checkbox>
        <Text font="body_md" color="text_primary" mt={10}></Text>
        <Checkbox disabled={true} checked={valueThree}>
          <WrapperDisabled>Label Text</WrapperDisabled>
        </Checkbox>
      </CardDiv>
    </>
  );
};
