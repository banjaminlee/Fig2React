// @ts-ignore
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Card } from './types';
import Text from 'components/Text';
import Image from '../Image';
import { lightTheme } from 'styles/theme';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
`;

const CardComponent: React.FC<Card> = ({
  label,
  fontSize,
  textAlign,
  fontfamily,
  children,
  padding,
  style = { padding: padding },
}) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CardDiv style={style} data-testid="cardContainer">
        {label && (
          <Text
            font={fontfamily ? fontfamily : 'body_small'}
            color="text_primary"
            style={{
              fontSize: fontSize ? fontSize : 10,
              textAlign: textAlign ? textAlign : 'left',
              lineHeight: 1.5,
            }}
          >
            {label}
          </Text>
        )}
        {children}
      </CardDiv>
    </ThemeProvider>
  );
};

export default CardComponent;
