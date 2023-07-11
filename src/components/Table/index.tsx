import React, { FC } from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
`;

const CustomTableWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
`;

const TableWrap = styled.div`
  display: table;
  width: 100%;
`;

const CustomTableWrap = styled.div`
  border-spacing: 8px 0;
  display: table;
  width: 100%;
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 48px);
  margin: 24px 24px 16px;
`;

export { TableHeader } from './TableHeader';
export { TableBody } from './TableBody';

export const Table: FC = ({ children }) => (
  <TableWrapper data-testid={'tableContainer'}>
    <TableWrap>{children}</TableWrap>
  </TableWrapper>
);

export { CustomTableHeader } from './TableHeader';
export { CustomTableBody } from './TableBody';

export const CustomTable: FC = ({ children }) => (
  <CustomTableWrapper data-testid={'customTableContainer'}>
    <CustomTableWrap>{children}</CustomTableWrap>
  </CustomTableWrapper>
);
