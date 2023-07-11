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
        <Text font="body_md" color="text_primary" mb="15px">
          The badge is just a fun extra element for the Flipr brand.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          It does not explicitly need to be used, but can add a fun &quot;sticker&quot;s like
          element to layouts & collateral with additional messaging.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Since this badge does not include a wordmark logo, it should always be on a piece of
          collateral that includes the logo.
        </Text>
      </Section>
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              PERIWINKLE
            </Text>
            <Image
              src="./branding/svg/BadgePerwinkle.svg"
              alt="Avatar"
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              PERIWINKLE
            </Text>
            <Image
              src="./branding/svg/BadgePerwinkleFilled.svg"
              alt="Avatar"
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              PERIWINKLE
            </Text>
            <Image
              src="./branding/svg/BadgePerwinkleSquare.svg"
              alt="Avatar"
              style={{ marginBottom: '20px', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Card>
        </GridLayout>
      </Section>
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              CLAY
            </Text>
            <Image
              src="./branding/svg/ClayTransparent.svg"
              alt="Avatar"
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              CLAY
            </Text>
            <Image
              src="./branding/svg/ClayFilled.svg"
              alt="Avatar"
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              SAND
            </Text>
            <Image
              src="./branding/svg/SandTransparent.svg"
              alt="Avatar"
              style={{ marginBottom: '20px', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Card>
        </GridLayout>
      </Section>
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              BLACK
            </Text>
            <Image
              src="./branding/svg/BlackTransparent.svg"
              alt="Avatar"
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              BLACK
            </Text>
            <Image
              src="./branding/svg/BlackFilled.svg"
              alt="Avatar"
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
            <Text
              font="body_sm"
              color="text_primary"
              textAlign="center"
              style={{ paddingBottom: 20 }}
            >
              SAND
            </Text>
            <Image
              src="./branding/svg/SandFilled.svg"
              alt="Avatar"
              style={{ marginBottom: '20px', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Card>
        </GridLayout>
      </Section>
    </>
  );
};
const Column = styled.div`
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 41.66vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 34.72vw;
  }
`;

const MetaData = [
  {
    title: 'The Badge',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Brand Identity',
  argTypes: {},
};

export const TheBadge: React.FC = () => {
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
