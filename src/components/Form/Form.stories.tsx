import React, { useState, useCallback } from 'react';
import Text from '../Text';
import { FieldInput, Input } from '../Input';
import { Form } from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Form',
  argTypes: {},
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

const Container = styled.div`
  margin-top: calc(var(--spacer) / 3);
  margin-bottom: calc(var(--spacer) / 3);
`;

const InputBox = styled.div`
  margin-bottom: 20px;
`;

export const Story = () => {
  const [input, setInput] = useState({
    name: '',
    value: '',
  });

  const [stateInput, setStateInput] = useState({
    name: '',
    value: '',
  });

  const [inputRequired, setRequiredInput] = useState({
    name: '',
    value: '',
  });

  const [inputOnSubmit, setInputOnSubmit] = useState({
    name: '',
    value: '',
  });

  const changeHandler = useCallback(({ name, value }) => {
    setInput({
      name,
      value,
    });
  }, []);

  const changeStateHandler = useCallback(({ name, value }) => {
    setStateInput({
      name,
      value,
    });
  }, []);

  const changeRequiredHandler = useCallback(({ name, value }) => {
    setRequiredInput({
      name,
      value,
    });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };
  return (
    <Container>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Form
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Form>
          <InputBox>
            <Input
              id="text"
              label="City"
              name="city"
              value={input.value}
              cbHandler={changeHandler}
            />
          </InputBox>
          <InputBox>
            <Input
              id="text"
              label="State"
              name="state"
              value={stateInput.value}
              cbHandler={changeStateHandler}
            />
          </InputBox>
        </Form>
      </CardDiv>

      <Text font="body_md" color="text_primary" pb={10} pt={10}>
        Required
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Form>
          <InputBox>
            <FieldInput
              id="field"
              label="Required Field"
              cbHandler={changeRequiredHandler}
              name={inputRequired.name}
              value={inputRequired.value}
            />
          </InputBox>
        </Form>
      </CardDiv>

      <Text font="body_md" color="text_primary" pb={10} pt={10}>
        Form on submit
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Form onSubmit={submitForm}>
          <InputBox>
            <Input
              id="field"
              label="Field"
              hint="Hit enter after changing input value"
              cbHandler={changeRequiredHandler}
              name={inputOnSubmit.name}
              value={inputOnSubmit.value}
            />
          </InputBox>
        </Form>
      </CardDiv>
    </Container>
  );
};
