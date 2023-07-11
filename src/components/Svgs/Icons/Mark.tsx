import React from 'react';
import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Mark: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="m3.5 3.793 3-3 .707.707-3 3-.707.707L1.793 3.5l.707-.707 1 1ZM3 1v1H1v4h4V5h1v2H0V1h3ZM0 9h6v6H0V9Zm1 1v4h4v-4H1Zm7-7h8v1H8V3Zm0 8h8v1H8v-1Z"
        fill={color || theme.colors.white}
      ></path>
    </Svg>
  );
};

export default Mark;
