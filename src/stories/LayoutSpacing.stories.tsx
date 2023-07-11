import React from 'react';
import Text from '../components/Text';
import styled from 'styled-components';
import GridLayout from '../components/GridLayout';
import CustomField from '../@shared/CustomField/CustomField';
import Image from '../components/Image';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ContentFirst = () => {
  return (
    <>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="body_md" color="text_primary">
            Spacing helps page components breathe. The Flipr spacing system utilizes a system of
            responsive spacers that are dynamic across different breakpoints. This allows the
            information on the page to adapt to any screen size.
          </Text>
          <Image
            src="./assets/img/spacing_system.png"
            alt="Spacing"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Spacing guide
        </Text>
        <Text font="body_md" color="text_primary">
          These guidelines represent all spacers and how they change across breakpoints. They are
          multifunctional and can be used for both stack and inline measurements, or combined to
          create inset measurements. Note how each spacer adapts as the viewport size changes.
        </Text>
      </Section>
      <Section>
        <Text font="heading_sm" color="text_primary">
          Spacing Matrix
        </Text>
        <Image
          src="./assets/img/spacing_matrix.png"
          alt="Spacing Matrix"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Section>
      <Section>
        <Text font="heading_sm" color="text_primary">
          Spacing Curve
        </Text>
        <Image
          src="./assets/img/spacing_curve.png"
          alt="Spacing Curve"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Section>
      <Section>
        <Text font="heading_sm" color="text_primary">
          Applying the system
        </Text>
      </Section>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="body_md" color="text_primary">
            These guidelines represent all spacers and how they change across breakpoints. They are
            multifunctional and can be used for both stack and inline measurements, or combined to
            create inset measurements. Note how each spacer adapts as the viewport size changes.
          </Text>
          <Image
            src="./assets/img/spacing_system_example.png"
            alt="Applying the system"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
      <Section>
        <Text font="heading_sm" color="text_primary">
          Adding more space
        </Text>
      </Section>
      <Section>
        <GridLayout rowGap={0} colGap={2}>
          <Text font="body_md" color="text_primary">
            You can use higher values than specified. But it is important that each value is a
            multiple of four, to be consitent.
          </Text>
          <Image
            src="./assets/img/more_space_example.png"
            alt="adding more space"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </GridLayout>
      </Section>
    </>
  );
};
const MetaData = [
  {
    title: 'Spacing System',
    header: '',
    content: <ContentFirst />,
  },
];
export default {
  title: 'Layout',
  argTypes: {},
};
export const SpacingSystem: React.FC = () => {
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
