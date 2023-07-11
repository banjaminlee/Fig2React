import React from 'react';
import Loader from '.';
import Text from '../Text';

export default {
  title: 'Components/Loader',
  argTypes: {},
};

export const Default: React.FC = () => (
  <>
    <Text font="rocBold" color="textPrimary" mb="30px">
      Small
    </Text>
    <Loader />
    <br />
    <Text font="rocBold" color="textPrimary" mb="30px">
      Large
    </Text>
    <Loader isLarge />
    <br />
    <Text font="rocBold" color="textPrimary" mb="30px">
      Add background color
    </Text>
    <Loader isLarge color="#D7F5FF" />
  </>
);
