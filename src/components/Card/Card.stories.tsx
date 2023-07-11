import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Card from './index';
import Text from '../Text';
import Image from '../Image';
import { Button } from '../Button';
import { lightTheme } from '../../styles/theme';

export default {
  title: 'Components/Card',
  argTypes: {
    textAlign: {
      options: ['Left', 'Center', 'Right'],
      control: { type: 'radio' },
    },
    fontfamily: {
      control: {
        type: 'select',
        options: [
          'display_md',
          'heading_xxl',
          'heading_xl',
          'heading_lg',
          'heading_md',
          'heading_sm',
          'rocBlack',
          'rocBold',
          'rocExtraBold',
          'rocExtraLight',
          'rocHeavy',
          'rocLight',
          'rocMedium',
          'rocRegular',
          'rocThin',
          'heading_med_xl',
          'heading_med_lg',
          'heading_med_md',
          'body_lg',
          'body_md',
          'body_sm',
          'body_lg_bold',
          'body_md_bold',
          'body_sm_bold',
          'caption_md',
          'button_md',
          'eyebrow_md',
          'text_cta',
          'heading_mobile_lg',
          'heading_mobile_xl',
          'price_cut',
        ],
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Hello World!',
  fontSize: 20,
  textAlign: 'Left',
  fontfamily: 'bodySmall',
  padding: 20,
};

export const Story = () => (
  <ThemeProvider theme={lightTheme}>
    <Column>
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Text font="bodyLargeBold" color="textPrimary">
          Default Card
        </Text>
      </Card>
    </Column>

    <Column>
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Image
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Avatar"
          style={{ marginBottom: '20px', objectFit: 'cover', width: '100%', height: '100%' }}
        />

        <Text font="bodySmall" color="textPrimary">
          Card with image
        </Text>
        <Text font="bodySmall" color="textPrimary">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
        <Text font="bodySmall" color="textPrimary">
          laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Button isGhost size="Small" style={{ marginTop: 20 }}>
          Button
        </Button>
      </Card>
    </Column>
  </ThemeProvider>
);

const Column = styled.div`
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 41.66vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 34.72vw;
  }
`;
