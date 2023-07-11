import { DefaultTheme } from 'styled-components';
import { mediaQueries } from './base';
import { lightColors, darkColors } from './colors';
import { lightShadows, darkShadows } from './shadows';

export const lightTheme: DefaultTheme = {
  colors: lightColors,
  mediaQueries,
  shadows: lightShadows,
};

export const darkTheme: DefaultTheme = {
  colors: darkColors,
  mediaQueries,
  shadows: darkShadows,
};
