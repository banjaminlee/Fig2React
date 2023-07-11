import { SVGAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  theme?: DefaultTheme;
  isSelected?: boolean;
  color?: string;
}
