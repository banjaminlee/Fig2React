import React from 'react';
import styled from 'styled-components';
import { Text } from '../components';
import Image from '../components/Image';
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
          Mood Board
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          A moodboard is a collection of visual materials that evoke a certain style or concept.
          Designers, illustrators, photographers, filmmakers and all types of creative professionals
          create moodboards to communicate the &quot;feel&quot; of an idea.
        </Text>
        <GridLayout rowGap={0} colGap={2}>
          <Image
            src="./branding/svg/sample.svg"
            alt="Sample Images"
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            src="./branding/svg/mood.svg"
            alt="Mood Board"
            style={{ width: '100%', height: '100%' }}
          />
        </GridLayout>
      </Section>
    </>
  );
};
const MetaData = [
  {
    title: 'Mood Board',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Brand Identity',
  argTypes: {},
};

export const MoodBoard: React.FC = () => {
  return (
    <Section>
      {MetaData.map((item, index) => {
					return <CustomField title={item.title} header={item.header} content={item.content}key={index} />
			})}
    </Section>
  );
};
