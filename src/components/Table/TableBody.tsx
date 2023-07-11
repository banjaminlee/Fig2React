import React, { FC } from 'react';
import styled from 'styled-components';
import { TableBodyProps, CustomTableBodyProps } from './types';
import Text from 'components/Text';

const TbContainer = styled.div<{ column?: string }>`
  display: grid;
  grid-template-columns: ${({ column }) => column ?? '20% 50% 30%'};
  align-items: flex-start;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid rgba(224, 224, 224, 1);

  &:nth-child(2n) {
    background: ${({ theme }) => theme.colors.background_secondary};
  }

  &:nth-child(2n + 1) {
    background: ${({ theme }) => theme.colors.background_primary};
  }

  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`;

const CustomTbContainer = styled.div`
  display: table-row;
`;

const CustomTd = styled.div<{ width?: string }>`
  border-bottom: 1px solid #000000;
  display: table-cell;
  padding: 10px;
  width: ${({ width }) => width};
`;

export const TableBody: FC<TableBodyProps> = ({ column, children, cbHandler, ...props }) => (
  <TbContainer column={column} {...props} onClick={cbHandler} data-testid={'tableBody'}>
    {children}
  </TbContainer>
);

export const CustomTableBody: FC<CustomTableBodyProps> = ({ width, data, children, ...props }) => (
  <CustomTbContainer {...props} data-testid={'customTableBody'}>
    {data && (
      <>
        {width ? (
          <>
            {data.map((element, id) => (
              <CustomTd key={id} width={width[id]}>
                <Text font="body_sm" mx="24px">
                  {element}
                </Text>
              </CustomTd>
            ))}
          </>
        ) : (
          <>
            {data.map((element, id) => (
              <CustomTd key={id}>
                <Text font="body_sm" mx="24px">
                  {element}
                </Text>
              </CustomTd>
            ))}
          </>
        )}
      </>
    )}
  </CustomTbContainer>
);
