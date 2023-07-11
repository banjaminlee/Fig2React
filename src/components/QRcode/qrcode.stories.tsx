import React, { useEffect, useState, useCallback } from 'react';
import Text from '../Text';
import QRCode from './index';
import styled from 'styled-components';
import { Button } from '../Button';
import { Input } from '../Input';

export default {
  title: 'Components/QRcode',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

export const Story = () => {
  const [value, setValue] = useState('');
  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const generateNewCode = () => {
    setValue(makeid(5));
  };

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
        QR code
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 40 }}>
        <Input
          id="text"
          label="Tradein code"
          name={input.name}
          value={input.value}
          cbHandler={changeHandler}
          style={{ marginBottom: 20, maxWidth: 200 }}
        />
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '200px', width: '200px' }}
          value={value}
        />
        <Button
          size="Small"
          style={{ marginRight: 0, marginLeft: 0, marginTop: 20, marginBottom: 0 }}
          onClick={() => generateNewCode()}
        >
          Generate
        </Button>
      </CardDiv>
    </>
  );
};
