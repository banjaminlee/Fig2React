import styled from 'styled-components';
import { space, layout, LayoutProps, SpaceProps } from 'styled-system';

interface FlexProps extends LayoutProps, SpaceProps {
  direction?: string;
  align?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: ${({ align }) => (align ? align : 'center')};
  align-items: center;

  ${layout}
  ${space}
`;

export default Flex;
