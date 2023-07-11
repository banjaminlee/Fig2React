import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';
import Card from '../components/Card/index';
import { Text } from '../components';
import CustomField from '../@shared/CustomField/CustomField';
import GridLayout from '../components/GridLayout';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ContentFirst = () => {
  return (
    <>
      <Section>
        <Text font="heading_md_med" color="text_primary">
          Breakpoints
        </Text>
        <Text font="body_md" color="text_primary">
          For optimal user experience, we need to be able to adapt layout at various breakpoints.
          Each breakpoint matches with a fixed screen width.
        </Text>
      </Section>
      <Section>
        <Text font="body_lg_bold" color="text_primary">
          Media queries
        </Text>
        <Text font="body_md" color="text_primary" mb={20}>
          Flipr provides a function &apos;screens&apos; to be able to easily create media queries
          based on the given breakpoints. The list of breakpoint names and pixel-values we use while
          we design and do layouts
        </Text>
        <GridLayout rowGap={0} colGap={4}>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text font="body_sm_bold" color="text_primary" textAlign="center" mt={10}>
              Small
            </Text>
            <Text font="body_sm" color="text_primary" textAlign="center">
              ~ 375 px
            </Text>
            <Image
              src="./branding/svg/ico-breakpoint-small.svg"
              alt="Avatar"
              width={113}
              height={112}
              style={{ marginBottom: '20px' }}
            />
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text font="body_sm_bold" color="text_primary" textAlign="center" mt={10}>
              medium
            </Text>
            <Text font="body_sm" color="text_primary" textAlign="center">
              376 px ~ 768 px
            </Text>
            <Image
              src="./branding/svg/ico-breakpoint-medium.svg"
              alt="Avatar"
              width={113}
              height={112}
              style={{ marginBottom: '20px' }}
            />
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text font="body_sm_bold" color="text_primary" textAlign="center" mt={10}>
              large
            </Text>
            <Text font="body_sm" color="text_primary" textAlign="center">
              768 ~ 1200 px
            </Text>
            <Image
              src="./branding/svg/ico-breakpoint-large.svg"
              alt="Avatar"
              width={113}
              height={112}
              style={{ marginBottom: '20px' }}
            />
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text font="body_sm_bold" color="text_primary" textAlign="center" mt={10}>
              extra-large
            </Text>
            <Text font="body_sm" color="text_primary" textAlign="center">
              1200 px ~ 1920 px
            </Text>
            <Image
              src="./branding/svg/ico-breakpoint-extra-large.svg"
              alt="Avatar"
              width={113}
              height={112}
              style={{ marginBottom: '20px' }}
            />
          </Card>
        </GridLayout>
      </Section>
      <Section>
        <Text font="heading_md_med" color="text_primary">
          Supported Browsers
        </Text>
        <Text font="body_md" color="text_primary">
          The following table contains the browsers that must be supported. The listed versions are
          the earliest that must be supported through to the latest.
        </Text>
      </Section>
      <Section>
        <Text font="body_lg_bold" color="text_primary">
          Mobile
        </Text>
        <GridLayout rowGap={1} colGap={2}>
          <Text font="body_sm_bold" color="text_primary">
            Browsers
          </Text>
          <Text font="body_sm_bold" color="text_primary">
            Oldest version
          </Text>
          <Text font="body_sm" color="text_primary">
            Google Chrome
          </Text>
          <Text font="body_sm" color="text_primary">
            87.04280.14
          </Text>
          <Text font="body_sm" color="text_primary">
            Mozilla Firefox
          </Text>
          <Text font="body_sm" color="text_primary">
            89.0
          </Text>
          <Text font="body_sm" color="text_primary">
            Apple Safari
          </Text>
          <Text font="body_sm" color="text_primary">
            14.12
          </Text>
          <Text font="body_sm" color="text_primary">
            Microsoft Edge
          </Text>
          <Text font="body_sm" color="text_primary">
            78
          </Text>
        </GridLayout>
      </Section>
      <Section>
        <Text font="body_lg_bold" color="text_primary">
          Desktop
        </Text>
        <GridLayout rowGap={1} colGap={2}>
          <Text font="body_sm_bold" color="text_primary">
            Browsers
          </Text>
          <Text font="body_sm_bold" color="text_primary">
            Oldest version
          </Text>
          <Text font="body_sm" color="text_primary">
            Google Chrome
          </Text>
          <Text font="body_sm" color="text_primary">
            87
          </Text>
          <Text font="body_sm" color="text_primary">
            Mozilla Firefox
          </Text>
          <Text font="body_sm" color="text_primary">
            89.0
          </Text>
          <Text font="body_sm" color="text_primary">
            Apple Safari
          </Text>
          <Text font="body_sm" color="text_primary">
            14.12
          </Text>
          <Text font="body_sm" color="text_primary">
            Microsoft Edge
          </Text>
          <Text font="body_sm" color="text_primary">
            78
          </Text>
        </GridLayout>
      </Section>
    </>
  );
};

const MetaData = [
  {
    title: 'Browser Support Matrix',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Guidelines',
  argTypes: {},
};

export const BrowserSupport: React.FC = () => {
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
