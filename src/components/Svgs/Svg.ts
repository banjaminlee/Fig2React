import styled from 'styled-components';
import { SvgProps } from './types';

const Svg = styled.svg<SvgProps>`
  flex-shrink: 0;
`;

Svg.defaultProps = {
  color: 'text',
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg',
};

export default Svg;
