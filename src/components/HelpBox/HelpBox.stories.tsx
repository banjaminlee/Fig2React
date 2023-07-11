import React from 'react';
import Text from '../Text';
import HelpBox from './index';

export default {
  title: 'Components/HelpBox',
  argTypes: {},
};

export const Story = () => {
  return (
    <>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <HelpBox>
        <Text
          font="bodyMain"
          style={{
            fontWeight: 400,
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 14 is the
          “it” phone for 2022 for a reason. This model houses a revamped A15 chip that is certain to
          knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster
          than its competition, the iPhone 14 is a no-brainer if you’re looking to upgrade to an
          all-around top tier smartphone. It also features incredible battery life with up to 17
          hours of video playback and wireless charging capabilities.
        </Text>
      </HelpBox>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Variant
      </Text>
      <HelpBox variant="#D4D8DB">
        <Text
          font="bodyMain"
          style={{
            fontWeight: 400,
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 14 is the
          “it” phone for 2022 for a reason. This model houses a revamped A15 chip that is certain to
          knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster
          than its competition, the iPhone 14 is a no-brainer if you’re looking to upgrade to an
          all-around top tier smartphone. It also features incredible battery life with up to 17
          hours of video playback and wireless charging capabilities.
        </Text>
      </HelpBox>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Closable
      </Text>
      <HelpBox closable>
        <Text
          font="bodyMain"
          style={{
            fontWeight: 400,
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 14 is the
          “it” phone for 2022 for a reason. This model houses a revamped A15 chip that is certain to
          knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster
          than its competition, the iPhone 14 is a no-brainer if you’re looking to upgrade to an
          all-around top tier smartphone. It also features incredible battery life with up to 17
          hours of video playback and wireless charging capabilities.
        </Text>
      </HelpBox>
    </>
  );
};
