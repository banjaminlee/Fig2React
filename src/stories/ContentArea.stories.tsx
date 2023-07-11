import React from 'react';
import { TableTitle, CustomTable, CustomTableBody, CustomTableHeader } from '../components/Table';
import Text from '../components/Text';
import { contentAreaData, contentAreaHeaderData, tblAreaData } from '../@utils/data';
import styled from 'styled-components';
import GridLayout from '../components/GridLayout';
import CustomField from '../@shared/CustomField/CustomField';
import Image from '../components/Image';

export default {
  title: 'Layout',
  argTypes: {},
};
const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 15px 10px 15px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ContentFirst = () => {
  return (
    <>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="body_md" color="text_primary">
            The content area is defined by the page margin which separates it from the left an right
            side of the page. It is different for every viewport.
          </Text>
          <Image
            src="./assets/img/content_area.png"
            alt="Content Area"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
      <CardDiv>
        <TableTitle>
          <Text font="body_sm" mr="8px">
            As a starting point we recommend using the template for the viewport you are designing
            for.
          </Text>
        </TableTitle>
        <CustomTable>
          <CustomTableHeader headers={contentAreaHeaderData} width={tblAreaData} />
        </CustomTable>
        <CustomTable>
          {contentAreaData.map((element, id) => (
            <CustomTableBody data={element.content} width={tblAreaData} key={id}></CustomTableBody>
          ))}
        </CustomTable>
      </CardDiv>
    </>
  );
};
const MetaData = [
  {
    title: 'Content Area',
    header: '',
    content: <ContentFirst />,
  },
];
export const ContentArea: React.FC = () => {
  return (
    <Section>
      {MetaData.map((item, index) => {
        return (
          <CustomField title={item.title} header={item.header} content={item.content} key={index} />
        );
      })}
    </Section>
  );
};
