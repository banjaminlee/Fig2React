import React from 'react';
import styled from 'styled-components';
import { Text } from '../components';
import Image from '../components/Image';
import CustomField from '../@shared/CustomField/CustomField';
import Card from '../components/Card/index';
import GridLayout from '../components/GridLayout';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ContentFirst = () => {
  return (
    <>
      <Section>
        <Text font="body_md" color="text_primary" mb="15px">
          The responsive Flipr Layout System guides designers to create consistent user interfaces
          and to better communicate Flipr&apos;s brand identity. The following guidelines should
          help help help designers to bring align into their layouts and even across whole
          touchpoints axises and metrics. At Flipr we use the following terminology to describe our
          system.
        </Text>
      </Section>
      <Section></Section>
      <Section>
        <GridLayout rowGap={0} colGap={3}>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              padding: 25,
            }}
          >
            <Image
              src="./assets/img/overview_content_area.png"
              alt="Content Area"
              style={{
                marginBottom: '20px',
                paddingTop: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <Text font="body_md" color="text_primary" textAlign="left">
              The content area is defined by the size of the page margin, which separates it from it
              it from the left and right side of the page.
            </Text>
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              padding: 25,
            }}
          >
            <Image
              src="./assets/img/overview_layout_regions.png"
              alt="Layout Regions"
              style={{
                marginBottom: '20px',
                paddingTop: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <Text font="body_md" color="text_primary" textAlign="left">
              Most components are placed inside a layout region, which usually stretches to the full
              to the full width of the content area.
            </Text>
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              padding: 25,
            }}
          >
            <Image
              src="./assets/img/overview_spacing_system.png"
              alt="Spacing System"
              style={{
                marginBottom: '20px',
                paddingTop: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />{' '}
            <Text font="body_md" color="text_primary" textAlign="left">
              Inside a layout region you can place elements using the spacing system to define
              define distances between them.
            </Text>
          </Card>
        </GridLayout>
      </Section>
    </>
  );
};
const MetaData = [
  {
    title: 'Layout System',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Layout',
  argTypes: {},
};

export const LayoutSystem: React.FC = () => {
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
