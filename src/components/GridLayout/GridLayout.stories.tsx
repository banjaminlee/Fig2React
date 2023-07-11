import React from 'react';
import GridLayout from './';
import Text from '../Text';

export default {
  title: 'Components/Grid',
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <GridLayout>
      <Text font="body_md" mb="10px">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        industries for previewing layouts and visual mockups.
      </Text>
      <Text font="body_md" mb="10px">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        industries for previewing layouts and visual mockups.
      </Text>
    </GridLayout>
  );
};
