import React, { FC } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { TableHeaderProps, CustomTableHeaderProps } from './types';

const ThContainer = styled.div<{ column?: string }>`
  display: grid;
  grid-template-columns: ${({ column }) => column ?? '20% 50% 30%'};
  width: 100%;
  padding: 8px 0;
  background: ${({ theme }) => theme.colors.background_primary};
  border-top: 1px solid rgba(224, 224, 224, 1);
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

const TableColumnHeadingCell = styled.div<{ width?: string }>`
  border-top: 2px solid #000000;
  border-bottom: 1px solid #000000;
  display: table-cell;
  padding: 12px;
  width: ${({ width }) => width};
`;

export const TableHeader: FC<TableHeaderProps> = ({
  column,
  headers,
  ml = '24px',
  mr = '24px',
}) => (
  <ThContainer column={column} data-testid={'tableHeader'}>
    {headers.map((header, id) => (
      <Text key={id} font="body_sm_bold" color="black" ml={ml} mr={mr}>
        {header}
      </Text>
    ))}
  </ThContainer>
);

export const CustomTableHeader: FC<CustomTableHeaderProps> = ({ headers, width }) => (
  <>
    {width ? (
      <div data-testid={'customTableHeader'}>
        {headers.map((header, id) => (
          <TableColumnHeadingCell key={id} width={width[id]}>
            <Text font="body_sm_bold" color="black">
              {header}
            </Text>
          </TableColumnHeadingCell>
        ))}
      </div>
    ) : (
      <>
        {headers.map((header, id) => (
          <TableColumnHeadingCell key={id}>
            <Text font="bodySmallBold" color="black">
              {header}
            </Text>
          </TableColumnHeadingCell>
        ))}
      </>
    )}
  </>
);
