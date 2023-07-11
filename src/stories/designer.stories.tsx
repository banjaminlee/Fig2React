import React from 'react';
import styled from 'styled-components';
import { Text } from '../components';
import CustomField from '../@shared/CustomField/CustomField';
import InnerContent from '../@shared/InnerContent/InnerContent';
import InnerMetaData from '../@utils/designer';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ContentFirst = () => {
  return (
    <>
      <Section>
        <Text font="body_md" color="text_secondary">
          The Flipr Design System is used to communicate Flipr&apos;s brand identity and user
          interface components. Flipr user interfaces are as varied as their uses, ranging from
          inspiring websites to applications for a particular service. The aim is to create
          solutions that provide a well-balanced, system-wide user experience that seamlessly
          transitions from the app to the vehicle using a core set of components, modules, and
          animations. The Flipr Design Kit acts as the foundation, containing the core components
          and tokens that can be applied to all user interface designs created for Flipr&apos;s
          digital suite of products. The Getting Started Guide outlined on this page provides
          instructions on how to install the Flipr Design Kit and implement it within your project.
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
    title: 'Getting Started Guide for Designers',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Getting Started',
  argTypes: {},
};

export const Designer: React.FC = () => {
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
