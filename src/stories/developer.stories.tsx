import React from 'react';
import styled from 'styled-components';
import { Text } from '../components';
import CustomField from '../@shared/CustomField/CustomField';
import InnerContent from '../@shared/InnerContent/InnerContent';
import InnerMetaData from '../@utils/developers';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MainContent = () => {
  return (
    <>
      <Section>
        <Text font="body_md" color="text_secondary">
          The Flipr Design System contains a collection of React components that can be used to
          build accessible and performant React applications consistent with Flipr brand guidelines.
          This getting started guide provides the basic instructions to install the Flipr Design
          System components as a dependency in your application and begin using those components.
          The documentation for each individual component provides more detailed information
          including:{' '}
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
    title: 'Getting Started Guide for Developer',
    header: '',
    content: <MainContent />,
  },
];

export default {
  title: 'Getting Started',
  argTypes: {},
};

export const Developers: React.FC = () => {
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
