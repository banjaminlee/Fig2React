import React from 'react';
import {
  Table,
  TableTitle,
  TableHeader,
  TableBody,
  CustomTable,
  CustomTableBody,
  CustomTableHeader,
} from './';
import Text from '../Text';
import {
  discussionsHeaderData,
  discussionData,
  customContentData,
  customHeaderData,
  widthrateData,
} from '../../@utils/data';
import styled from 'styled-components';

export default {
  title: 'Components/Table',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 15px 10px 15px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const CustomTd = styled.div`
  border-bottom: 1px solid #000000;
  display: table-cell;
  padding: 12px;
`;

export const Default: React.FC = () => {
  const column =
    'minmax(80px, 7%) minmax(300px, 39%) minmax(120px, 13%) minmax(120px, 12%) minmax(176px, 16%) minmax(140px, 13%)';

  return (
    <>
      <CardDiv>
        <TableTitle>
          <Text font="bodySmall" mr="8px">
            Plain Table
          </Text>
        </TableTitle>
        <Table>
          <TableHeader column={column} headers={discussionsHeaderData} />
          {discussionData.map((element, id) => (
            <TableBody key={id} column={column}>
              <Text font="bodySmall" mx="24px">
                {id + 1}
              </Text>
              <div style={{ margin: '0 24px' }}>
                <Text font="bodySmall" mb="8px">
                  {element.title}
                </Text>
                <Text font="bodySmall" color="tdSecondary">
                  {element.content}
                </Text>
              </div>
              <Text font="bodySmall" mx="24px">
                {element.comments}
              </Text>
              <Text font="bodySmall" mx="24px">
                {element.changes}
              </Text>
              <Text font="bodySmall" mx="24px">
                {element.date}
              </Text>
              <Text font="bodySmall" mx="24px">
                {element.timeActive}
              </Text>
            </TableBody>
          ))}
        </Table>
      </CardDiv>
      <CardDiv>
        <TableTitle>
          <Text font="bodySmall" mr="8px">
            Custom Default Layout
          </Text>
        </TableTitle>
        <CustomTable>
          <CustomTableHeader headers={customHeaderData} />
        </CustomTable>
        <CustomTable>
          {customContentData.map((element, id) => (
            <CustomTableBody data={element.content} key={id}></CustomTableBody>
          ))}
        </CustomTable>
        <TableTitle>
          <Text font="bodySmall" mr="8px">
            Custom All Layout
          </Text>
        </TableTitle>
        <CustomTable>
          <CustomTableHeader headers={customHeaderData} width={widthrateData} />
        </CustomTable>
        <CustomTable>
          {customContentData.map((element, id) => (
            <CustomTableBody
              data={element.content}
              width={widthrateData}
              key={id}
            ></CustomTableBody>
          ))}
        </CustomTable>
      </CardDiv>
    </>
  );
};
