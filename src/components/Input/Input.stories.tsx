import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Input, PhoneInput, EmailInput, FieldInput, PasswordInput } from './index';
import Text from '../Text';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

export default {
  title: 'Components/Input',
  argTypes: {},
};

export const Default: React.FC = () => {
  const [input, setInput] = useState({
    name: '',
    value: '',
  });

  const changeHandler = useCallback(({ name, value }) => {
    setInput({
      name,
      value,
    });
  }, []);

  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Input
          id="text"
          label="Text"
          name={input.name}
          value={input.value}
          cbHandler={changeHandler}
        />
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        States
      </Text>
      <Text font="body_md" color="text_primary" pb={10} mt={10}>
        Input with hint
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Input
          id="text"
          label="Text"
          name={input.name}
          value={input.value}
          hint="Detail information"
          cbHandler={changeHandler}
        />
      </CardDiv>
      <Text font="heading_md" color="text_primary" pb={10} mt={10}>
        Input with required Field
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <FieldInput id="field" label="Field" name={input.name} value={input.value} />
      </CardDiv>
      <Text font="heading_md" color="text_primary" pb={10} mt={10}>
        Disabled Input
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Input id="text" name={input.name} value="Disabled Text" disabled />
      </CardDiv>
      <Text font="heading_md" color="text_primary" pb={10} mt={10}>
        Phone Input
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <PhoneInput id="phonenumber" label="Phone Number" name={input.name} value={input.value} />
      </CardDiv>
      <Text font="heading_md" color="text_primary" pb={10} mt={10}>
        Email Input
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <EmailInput id="email" label="Email" hint="yourname@fig2react.com" value={input.value} />
      </CardDiv>
      <Text font="heading_md" color="text_primary" pb={10} mt={10}>
        Password Input
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <PasswordInput
          id="Password"
          label="Password"
          hint="Use 8 or more characters of letters, numbers, and symbols."
          value={input.value}
        />
      </CardDiv>
    </>
  );
};
