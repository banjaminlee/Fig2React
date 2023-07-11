import { SpaceProps, TypographyProps, ColorProps, BorderProps } from 'styled-system';
import typography from '../../styles/typography';

const fontObj: {
  [key: string]: string;
} = {};

Object.keys(typography).forEach((font) => {
  fontObj[font] = font;
});

type Font = typeof fontObj[keyof typeof fontObj];

export interface TextProps extends SpaceProps, TypographyProps, ColorProps, BorderProps {
  font: Font;
  color?: string;
  breakWords?: boolean;
  align?: 'left' | 'center' | 'right';
  isUnderline?: boolean;
}
