import React from 'react';
import typography from '../styles/typography';
import { Text } from '../components';
import Howtouse from '../@shared/HowToUse/Howtouse';
import FontSizeMetaData from '../@utils/typography';
import FontSize from '../@shared/FontSize/FontSize';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const InnerWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  min-width: 150px;
`;

const TitleWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;

const typographyMetaData = {
  title: 'Flipr typography',
  content:
    " Flipr is not a tech company that you use once and forget. Sure, functionally our service and tech exist to recycle mobile devices into cash, but we know we're bigger than that. Flipr is a lifestyle. It’s a brand that you’ll be in constant contact with.It might be through your relationship with the Triple Economy— aka the community, the planet, or money.Or it could be the fresh-take we have on the mobile industry. Or perhaps, it might because you’re sick of being subject to Big Telecom. Whatever it is, Flipr will have a newfound organic role in your life.",
};

export const HowToUseTypography = () => {
  return (
    <Howtouse storyname={typographyMetaData.title} content={typographyMetaData.content}>
      {FontSizeMetaData.map((item, index) => {
        return (
          <FontSize
            mainTitle={item.mainTitle}
            //     order={item.order}
            properties={item.properties}
            example={item.example}
            key={index}
          />
        );
      })}
    </Howtouse>
  );
};

HowToUseTypography.parameters = {
  docs: {
    source: {
      code: `import React from 'react'; 
        import { Text } from './components';
        <Text font='body_md' color='text_primary'>Hello World!</Text>
           `.trim(),
      language: 'jsx',
      type: 'code',
    },
  },
};

export default {
  title: 'Brand Identity/Typography',
  argTypes: {},
};

export const FontStyles: React.FC = () => {
  const typographies = Object.keys(typography);

  return (
    <>
      <Wrapper style={{ padding: '10px' }}>
        <Text font="heading_sm" style={{ minWidth: 380, textTransform: 'uppercase' }}>
          Type
        </Text>
        <TitleWrapper>
          <Text font="heading_sm" style={{ textTransform: 'uppercase', minWidth: 160 }}>
            Weight
          </Text>
        </TitleWrapper>
        <TitleWrapper>
          <Text font="heading_sm" style={{ textTransform: 'uppercase', minWidth: 125 }}>
            Size
          </Text>
        </TitleWrapper>
        <TitleWrapper>
          <Text font="heading_sm" style={{ textTransform: 'uppercase', minWidth: 135 }}>
            Line Height
          </Text>
        </TitleWrapper>
        <TitleWrapper>
          <Text font="heading_sm" style={{ textTransform: 'uppercase' }}>
            Letter Spacing
          </Text>
        </TitleWrapper>
      </Wrapper>
      {typographies.map((font, id) => (
        <Wrapper key={font} style={{ padding: '10px' }}>
          <Text key={id} font={font} style={{ minWidth: 330 }}>
            {font}
          </Text>
          <InnerWrapper>
            <Text font="body_md" style={{ textAlign: 'center' }}>
              {typography[font].fontWeight}
            </Text>
          </InnerWrapper>
          <InnerWrapper>
            <Text font="body_md" style={{ textAlign: 'center' }}>
              {typography[font].fontSize}
            </Text>
          </InnerWrapper>
          <InnerWrapper>
            <Text font="body_md" style={{ textAlign: 'center' }}>
              {typography[font].lineHeight}
            </Text>
          </InnerWrapper>
          <InnerWrapper>
            <Text font="body_md" style={{ textAlign: 'center' }}>
              {typography[font].letterSpacing}
            </Text>
          </InnerWrapper>
        </Wrapper>
      ))}
    </>
  );
};
FontStyles.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DVKmxdq3YoHYZujTFyClO6/Assets?node-id=3%3A48&t=KEi7MCipJI98Bv2D-1', // <-- paste here!
  },
};
