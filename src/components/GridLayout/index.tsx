import React, { FC } from 'react';
import styled from 'styled-components';
import GridLayoutProps from './types';

const Container = styled.div<GridLayoutProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: ${({ colGap }) => (colGap ? `${colGap}px` : '48px')};
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '16px')};
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(${({ colGap }) => (colGap ? `${colGap}` : '2')}, 1fr);
  }
`;

const GridLayout: FC<GridLayoutProps> = ({ rowGap, colGap, children, ...props }) => (
  <Container rowGap={rowGap} colGap={colGap} {...props}>
    {children}
  </Container>
);

export default GridLayout;
