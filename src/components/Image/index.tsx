import styled from 'styled-components';
import { space, layout } from 'styled-system';
import ImageProps from './types';

const Image = styled.img<ImageProps>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};

  ${layout}
  ${space}
`;

export default Image;
