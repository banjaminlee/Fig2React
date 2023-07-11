import React from 'react';
import Text from '../Text';
import Flex from './';

export default {
  title: 'Components/Flex',
  argTypes: {},
};

export const Default: React.FC = () => (
  <>
    <Text font="heading_sm" color="text_primary" mb="30px">
      Align Props: center
    </Text>
    <Flex>
      <Text font="body_md_bold" color="text_primary" mr="20px">
        Text1
      </Text>
      <Text font="body_md_bold" color="text_primary">
        Text2
      </Text>
    </Flex>
    <br />
    <Text font="heading_sm" color="text_primary" mb="30px">
      Align Props: flex-end
    </Text>
    <Flex align="flex-end">
      <Text font="body_md_bold" color="text_primary" mr="20px">
        Text1
      </Text>
      <Text font="body_md_bold" color="text_primary">
        Text2
      </Text>
    </Flex>
    <br />
    <Text font="heading_sm" color="text_primary" mb="30px">
      Direction: row
    </Text>
    <Flex direction="row">
      <Text font="body_md_bold" color="text_primary" mr="20px">
        Text1
      </Text>
      <Text font="body_md_bold" color="text_primary">
        Text2
      </Text>
    </Flex>
    <br />
    <Text font="heading_sm" color="text_primary" mb="30px">
      Direction: column
    </Text>
    <Flex direction="column">
      <Text font="body_md_bold" color="text_primary">
        Text1
      </Text>
      <Text font="body_md_bold" color="text_primary">
        Text2
      </Text>
    </Flex>
  </>
);
