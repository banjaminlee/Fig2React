import React, { useEffect, useState } from 'react';
import Text from '../Text';
import Timeline from './index';
import styled from 'styled-components';
import Flex from '../Flex';

export default {
  title: 'Components/Timeline',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const InnerBox = styled.div`
  border: 1px solid #ebeced;
  padding: 24px 24px 24px 28px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  &:before {
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    background: #e59c01;
  }
`;

export const Story = () => {
  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Timeline
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Timeline when the user wants to display his timeline.
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Timeline type="dot">
          <Text font="body_md_bold" color="text_primary" mb={10} mt={10}>
            Founder
          </Text>
          <Text font="caption_md" color="text_primary" mb={10} mt={5} style={{ marginTop: -5 }}>
            Brutalism 2019 - PRESENT
          </Text>
          <Text font="body_sm" color="text_primary" mb={10} mt={10}>
            Founded a private practice focusing on computational design and art.
          </Text>
        </Timeline>
        <Timeline type="dot">
          <Text font="body_md_bold" color="text_primary" mb={10} mt={10}>
            Computational Geometry Engineer
          </Text>
          <Text font="caption_md" color="text_primary" mb={10} mt={5} style={{ marginTop: -5 }}>
            Arkio 2018 - 2019
          </Text>
          <Text font="body_sm" color="text_primary" mb={10} mt={10}>
            Worked on the core engine supporting Arkio's computational geometry operations in VR.
          </Text>
        </Timeline>
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Date
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Timeline type="mark">
          <Flex direction="row" style={{ alignItems: 'unset' }}>
            <Text font="body_md_bold" color="text_primary" mb={10} mt={15}>
              Jun 24, 2020
            </Text>
            <Text
              font="body_md"
              color="text_primary"
              mb={10}
              mt={10}
              ml={20}
              style={{ width: 350 }}
            >
              System marked job Principal Solutions Product Manager (203875) → Cleo O'Connell as
              inactive
            </Text>
          </Flex>
        </Timeline>
        <Timeline type="note">
          <Flex direction="row" style={{ alignItems: 'unset' }}>
            <Text font="body_md_bold" color="text_primary" mb={10} mt={15}>
              Jun 23, 2020
            </Text>
            <Text
              font="body_md"
              color="text_primary"
              mb={10}
              mt={10}
              ml={20}
              style={{ width: 350 }}
            >
              Bettina Barreto added a note
              <InnerBox>
                <Text font="body_md" color="text_primary" mb={10} mt={10}>
                  New TOP
                </Text>
                <Text font="body_sm" color="text_primary" mb={10} mt={10}>
                  This part was obfuscated, some content was here.
                </Text>
              </InnerBox>
            </Text>
          </Flex>
        </Timeline>
        <Timeline type="mark">
          <Flex direction="row" style={{ alignItems: 'unset' }}>
            <Text font="body_md_bold" color="text_primary" mb={10} mt={15}>
              Jun 23, 2020
            </Text>
            <Text
              font="body_md"
              color="text_primary"
              mb={10}
              mt={10}
              ml={20}
              style={{ width: 350 }}
            >
              Carolina Della Corte changed commitment of Principal Solutions Product Manager
              (203875) → Cleo O'Connell from part-time to hourly
            </Text>
          </Flex>
        </Timeline>
        <Timeline type="envelop">
          <Flex direction="row" style={{ alignItems: 'unset' }}>
            <Text font="body_md_bold" color="text_primary" mb={10} mt={15} mr={20}>
              Jun 22, 2020
            </Text>
            <InnerBox>
              <Text font="body_md" color="text_primary" mb={10} mt={10}>
                Review of your Toptal coding exercize
              </Text>
              <Text font="body_sm" color="text_primary" mb={10} mt={10}>
                This part was obfuscated, some content was here.
              </Text>
            </InnerBox>
          </Flex>
        </Timeline>
      </CardDiv>
    </>
  );
};
