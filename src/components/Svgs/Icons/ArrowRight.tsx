import React from 'react';
import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const ArrowRight: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M7.00901 0.5L5.3252 2.17109L8.97789 5.82055H0.5V8.17946H8.97789L5.3252 11.8289L7.00901 13.5L13.5 7L7.00901 0.5Z"
        fill={color || theme?.colors.white}
      />
    </Svg>
  );
};

export default ArrowRight;
