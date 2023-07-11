import React, { useState } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { QRcodeProps } from './types';
import QRCode from 'react-qr-code';

const Container = styled.div`
  display: flex;
`;

const QRcodecom: FunctionComponent<QRcodeProps> = ({
  value,
  size,
  level,
  fgColor,
  bgColor,
  style,
  children,
  ...props
}) => {
  return (
    <Container>
      <QRCode
        value={value}
        size={size}
        level={level}
        fgColor={fgColor}
        bgColor={bgColor}
        style={style}
        data-testid="qrcode"
      />
    </Container>
  );
};

export default QRcodecom;
