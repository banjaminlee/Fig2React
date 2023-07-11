import React from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { lightTheme } from 'styles/theme';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Accessories: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={lightTheme}>
      <Svg
        data-testid={'accessoriesIcon'}
        width="20"
        height="20"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          data-testid={'accessoriesPath'}
          d="M16 10.8359V15.8359M16 15.8359V20.8359M16 15.8359H21M16 15.8359H11M31 15.8359C31 17.8058 30.612 19.7563 29.8582 21.5762C29.1044 23.3961 27.9995 25.0497 26.6066 26.4425C25.2137 27.8354 23.5601 28.9403 21.7403 29.6941C19.9204 30.448 17.9698 30.8359 16 30.8359C14.0302 30.8359 12.0796 30.448 10.2597 29.6941C8.43986 28.9403 6.78628 27.8354 5.3934 26.4425C4.00052 25.0497 2.89563 23.3961 2.14181 21.5762C1.38799 19.7563 1 17.8058 1 15.8359C1 11.8577 2.58035 8.04238 5.3934 5.22934C8.20644 2.41629 12.0218 0.835937 16 0.835938C19.9782 0.835938 23.7936 2.41629 26.6066 5.22934C29.4196 8.04238 31 11.8577 31 15.8359Z"
          stroke={color || theme?.colors?.white}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </ThemeProvider>
  );
};

export default Accessories;
