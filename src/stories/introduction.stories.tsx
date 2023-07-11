import React from 'react';
import styled from 'styled-components';
import { Text } from '../components';
import CustomField from '../@shared/CustomField/CustomField';
import InnerContent from '../@shared/InnerContent/InnerContent';
import InnerMetaData from '../@utils/intro';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MainContent = () => {
  return (
    <>
      <Section>
        <Text font="body_md" color="text_secondary">
          The Flipr Design System was created to help us build products for our team members more
          efficiently. Established to be the single source of truth for product teams working on
          Flipr products across the globe, the Flipr Design System contains everything from Getting
          Started guides through to Core Components intended for adoption within each product. It
          enables product teams to design and develop with speed, consistency, and quality. Our
          dedicated Design Operations team works with the individual product teams across Flipr to
          ensure the system continues to evolve to meet the needs of our designers, developers, and
          customers.
        </Text>
      </Section>
      {InnerMetaData.map((item, index) => {
        return (
          <InnerContent
            mainTitle={item.mainTitle}
            mainContent={item.mainContent}
            seconTitle={item.seconTitle}
            seconContent={item.seconContent}
            key={index}
          />
        );
      })}
    </>
  );
};

const MetaData = [
  {
    title: 'Introduction to the Flipr Design System',
    header: '',
    content: <MainContent />,
  },
];

export default {
  title: 'Introduction',
  argTypes: {},
};

export const FliprDesignSystem: React.FC = () => {
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
