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
            We use layout regions to structure components that make up our page.
          </Text>
          <Image
            src="./assets/img/layout_region.png"
            alt="Layout region"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="heading_md" color="text_primary">
            Layout region width
          </Text>
          <Text font="body_md" color="text_primary">
            Each component has its own layout region and spans across the whole width of the content
            area.
          </Text>
          <Image
            src="./assets/img/layout_region_width.png"
            alt="Layout region"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="body_md" color="text_primary">
            Some components (like the navigation or full width images) are allowed to take up the
            full width of a page. Elements inside these full width components should be aligned with
            the page margins again.
          </Text>
          <Image
            src="./assets/img/layout_region_width_exception.png"
            alt="Layout region"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="body_md" color="text_primary">
            A layout region can be taller than the viewport, but it should contain just one
            logically connected component.
          </Text>
          <Image
            src="./assets/img/layout_region_height.png"
            alt="Layout region"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
    </>
  );
};
const MetaData = [
  {
    title: 'Layout Region',
    header: '',
    content: <ContentFirst />,
  },
];
export const LayoutRegion: React.FC = () => {
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
