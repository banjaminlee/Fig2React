import React, { useState } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { RadioInputProps } from './types';
import Text from 'components/Text';

const MainWrapper = styled.div`
  display: flex;
`;

const RadioWrapper = styled.input<{ customsize?: string; disabled?: boolean }>`
  z-index: 1;
  border-radius: 50%;
  width: ${({ customsize }) => (customsize == 'Large' ? '24px' : '18px')};
  height: ${({ customsize }) => (customsize == 'Large' ? '24px' : '18px')};
  margin-right: 10px;
  &:hover {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: ${({ customsize }) => (customsize == 'Large' ? '18px' : '12px')};
      height: ${({ customsize }) => (customsize == 'Large' ? '18px' : '12px')};
      margin: 3px;
      background: #eeeeee;
    }
  }
  &:checked {
    background: #475bcc;
    border: 1px solid #73706c;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: ${({ customsize }) => (customsize == 'Large' ? '18px' : '12px')};
      height: ${({ customsize }) => (customsize == 'Large' ? '18px' : '12px')};
      margin: 3px;
      background: #7594ff;
    }
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
`;

export const RadioInput: FunctionComponent<RadioInputProps> = ({
  label,
  value,
  customsize,
  checked,
  setter,
  style,
  disabled,
  ...props
}) => {
  return (
    <MainWrapper {...props} style={style}>
      <RadioWrapper
        customsize={customsize}
        disabled={disabled}
        type="radio"
        checked={checked == value}
        onChange={() => setter(value)}
        {...props}
      />
      <Text
        font="bodyMain"
        color={disabled ? 'grays5' : '"grays10"'}
        style={{
          fontSize: customsize == 'Large' ? '18px' : '14px',
          marginTop: customsize == 'Large' ? '8px' : '5px',
          cursor: disabled ? 'not-allowed' : 'allowed',
        }}
      >
        {label}
      </Text>
    </MainWrapper>
  );
};

export default RadioInput;
