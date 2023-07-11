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
const Items = styled.span`
  padding: 0.3em 0.7em;
  font-size: 0.8em;
  font-weight: 400;
  border-radius: 0.4em;
  background-color: rgb(236, 236, 236, 0.5);
`;
const Code = styled.div`
  background-color: rgb(236, 236, 236, 0.5);
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ContentFirst = () => {
  return (
    <>
      <Section>
        <Text font="body_lg_bold" color="text_primary">
          The Logo
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          The &quot;i&quot; in Flipr is represented by two offset phone shapes, to convey the act of
          exchange exchange and movement. These shapes come to life as our brand mark whether in
          isolation from the wordmark, as an animated story telling device, or tucked into the
          wordmark. Exchange is what Flipr does. Our single color logo can be used in 3 variations.
          Primary: Periwinkle, Secondary: Black or Sand Use the logo color that stands out best on
          the background you are placing it.
        </Text>
        <Text font="body_lg" color="text_primary"></Text>
      </Section>
      <Section>
        <GridLayout rowGap={0} colGap={4}>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              padding: 25,
            }}
          >
            <Text font="body_sm" color="text_primary" textAlign="center">
              PRIMARY
            </Text>
            <Image
              src="./branding/svg/PrimaryLogo.svg"
              alt="Primary Logo"
              style={{
                marginBottom: '20px',
                paddingTop: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              padding: 25,
            }}
          >
            <Text font="body_sm" color="text_primary" textAlign="center">
              SECONDARY
            </Text>
            <Image
              src="./branding/svg/SecondaryLogowBackground.svg"
              alt="Secondary Logo"
              style={{ marginBottom: '20px', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              textAlign: 'center',
              padding: 25,
            }}
          >
            <Text font="body_sm" color="text_primary" textAlign="center">
              SECONDARY
            </Text>
            <Image
              src="./branding/svg/SecondaryLogo.svg"
              alt="Secondary Logo"
              style={{
                marginBottom: '20px',
                paddingTop: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Card>
        </GridLayout>
      </Section>
    </>
  );
};
const MetaData = [
  {
    title: 'Our Logo',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Brand Identity',
  argTypes: {},
};

export const TheLogo: React.FC = () => {
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
