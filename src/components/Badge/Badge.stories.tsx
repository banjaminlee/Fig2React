import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Card from '../Card';
import Badge from './index';
import { AvatarProps, AvatarContainerProps } from './types';

export default {
  title: 'Components/Badge',
  argTypes: {},
};

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 1;
`;

const AvatarContainer = styled.img<AvatarContainerProps>`
  width: ${({ size }) =>
    size == 'large' ? '96px' : size == 'medium' ? '64px' : size == 'small' ? '32px' : 'auto'};
  height: ${({ size }) =>
    size == 'large' ? '96px' : size == 'medium' ? '64px' : size == 'small' ? '32px' : 'auto'};
  border-radius: ${({ shape }) => (shape == 'circle' ? '100px' : '4px')};
  object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Avatar: React.FC<AvatarProps> = ({ src, size = 'small', shape = 'circle' }) => {
  return <AvatarContainer src={src} size={size} shape={shape} />;
};

export const BadgeStory: React.FC = () => {
  return (
    <Section>
      <Text font="heading_md" color="text_primary" mt="10px" mb="10px">
        Simple Badge
      </Text>
      <Text font="body_md" color="text_primary" my="10px">
        The simple badge is used for the most important action on a page or in a view.
      </Text>
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Badge count={10}>
          <img src="./branding/svg/modalclose.svg" />
        </Badge>
      </Card>

      <Text font="heading_md" color="text_primary" mt="10px" mb="10px">
        Badge with max limit
      </Text>
      <Text font="body_md" color="text_primary" my="10px">
        The badge with max limit is used for the most important action on a page or in a view.
      </Text>
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Badge count={1000} max={999}>
          <img src="./branding/svg/modalclose.svg" />
        </Badge>
      </Card>

      <Text font="heading_md" color="text_primary" mt="10px" mb="10px">
        Badge with color variant
      </Text>
      <Text font="body_md" color="text_primary" my="10px">
        The badge with color variant is used for the most important action on a page or in a view.
      </Text>
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Badge count={10} textColor="#fff" bgColor="#5870ff">
          <img src="./branding/svg/modalclose.svg" />
        </Badge>
      </Card>

      <Text font="heading_md" color="sand2" mt="10px" mb="10px">
        Badge with Square/Cirle shape, multiple sies and count
      </Text>
      <Text font="body_md" color="sand2" my="10px">
        The badge with color variant is used for the most important action on a page or in a view.
      </Text>
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Row>
          <Section>
            <Badge>
              <Avatar src="./branding/user.png" size="large" shape="circle" />
            </Badge>
            <Text font="body_sm" color="text_primary" my="10px">
              Large: 96 x 96
            </Text>
          </Section>
          <Section>
            <Badge count={30}>
              <Avatar src="./branding/user.png" size="medium" shape="circle" />
            </Badge>
            <Text font="body_sm" color="text_primary" my="10px">
              Medium: 64 x 64
            </Text>
          </Section>
          <Section>
            <Badge>
              <Avatar src="./branding/user.png" size="small" shape="circle" />
            </Badge>
            <Text font="body_sm" color="text_primary" my="10px">
              Small: 32 x 32
            </Text>
          </Section>
        </Row>
        <Row>
          <Section>
            <Badge count={1000} max={999}>
              <Avatar src="./branding/user.png" size="large" shape="square" />
            </Badge>
            <Text font="body_sm" color="text_primary" my="10px">
              Large: 96 x 96
            </Text>
          </Section>
          <Section>
            <Badge count={10}>
              <Avatar src="./branding/user.png" size="medium" shape="square" />
            </Badge>
            <Text font="body_sm" color="text_primary" my="10px">
              Medium: 64 x 64
            </Text>
          </Section>
          <Section>
            <Badge count={10}>
              <Avatar src="./branding/user.png" size="small" shape="square" />
            </Badge>
            <Text font="body_sm" color="text_primary" my="10px">
              Small: 32 x 32
            </Text>
          </Section>
        </Row>
      </Card>
    </Section>
  );
};
