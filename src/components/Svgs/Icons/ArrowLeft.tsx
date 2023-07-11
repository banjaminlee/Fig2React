import React from 'react';
import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const ArrowLeft: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M6.99099 13.5L8.6748 11.8289L5.02211 8.17945L13.5 8.17945L13.5 5.82054L5.02211 5.82054L8.6748 2.17109L6.99099 0.499999L0.500001 7L6.99099 13.5Z"
        fill={color || theme?.colors.white}
      />
    </Svg>
  );
};

export default ArrowLeft;
