import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Tabs from './index';

export default {
  title: 'Components/Tabs',
  argTypes: {},
};

const Section = styled.div`
  font-family: 'Roc Grotesk regular';
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledDiv = styled.div<any>`
  padding: 6px;
  font-family: 'Roc Grotesk regular';
  font-size: 11px;
`;

export const TabsStory: React.FC = () => {
  return (
    <Section>
      <Text font="heading2" color="text_primary" mt="10px" mb="10px">
        Simple Tabs
      </Text>
      <Text font="bodySmall" color="text_primary" my="10px">
        The simple tabs is used for the most important action on a page or in a view.
      </Text>
      <Tabs tabs={[{ label: 'Key Features' }, { label: 'Specs' }]}>
        <StyledDiv>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </StyledDiv>
        <StyledDiv>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </StyledDiv>
      </Tabs>

      <Text font="heading2" color="text_primary" mt="10px" mb="10px">
        Numbered Tabs
      </Text>
      <Text font="bodySmall" color="text_primary" my="10px">
        The numbered tabs is used for the most important action on a page or in a view.
      </Text>
      <Tabs
        tabs={[
          { label: 'Key Features', badge: '10' },
          { label: 'Specs', badge: '263' },
        ]}
      >
        <StyledDiv>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </StyledDiv>
        <StyledDiv>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </StyledDiv>
      </Tabs>

      <Text font="heading2" color="text_primary" mt="10px" mb="10px">
        Vertical Tabs
      </Text>
      <Text font="bodySmall" color="text_primary" my="10px">
        The vertical tabs is used for the most important action on a page or in a view.
      </Text>
      <Tabs
        vertical={true}
        tabs={[
          { label: 'Key Features', badge: '263' },
          { label: 'Specs (Disabled)', badge: '263', disabled: true },
        ]}
      >
        <StyledDiv>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </StyledDiv>
        <StyledDiv>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </StyledDiv>
      </Tabs>
    </Section>
  );
};
