import React from 'react';
import Image from './';
import Text from '../Text';

export default {
  title: 'Components/Image',
  argTypes: {},
};

export const Default: React.FC = () => (
  <>
    <Text font="heading_md" color="nb5" mb="30px">
      Image with auto width and height
    </Text>
    <Image src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Avatar" />
    <br />
    <Text font="heading_md" color="nb5" mb="30px">
      Image with predefined width and height (120 * 120)
    </Text>
    <Image
      src="https://www.w3schools.com/images/w3schools_green.jpg"
      width={120}
      height={120}
      alt="Avatar"
    />
  </>
);
