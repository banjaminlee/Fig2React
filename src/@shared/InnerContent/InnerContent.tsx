import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../../components';
import { InnerContentProps } from './types';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InnerContent = ({ mainTitle, mainContent, seconTitle, seconContent }: InnerContentProps) => {
  return (
    <Section>
      {mainTitle && (
        <Text font="body_lg_bold" color="text_secondary">
          {mainTitle}
        </Text>
      )}
      {mainContent && (
        <Text font="body_md" color="text_secondary">
          {mainContent}
        </Text>
      )}
      {seconTitle && (
        <Text font="body_lg_bold" color="text_secondary" mt="20px">
          {seconTitle}
        </Text>
      )}
      {seconContent && (
        <>
          {seconContent.map((content, index) => {
            return (
              <Text font="body_sm" color="text_secondary" key={index}>
                &#x2022; {content}
              </Text>
            );
          })}
        </>
      )}
    </Section>
  );
};

export default InnerContent;
