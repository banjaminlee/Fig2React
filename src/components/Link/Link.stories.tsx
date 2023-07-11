import React from 'react';
import Text from '../Text';
import Link, { RouteLink } from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Link',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const Section = styled.div`
  display: flex;
`;

export const Story = () => {
  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Link href={window.parent.location.href + '#'}>Link</Link>
      </CardDiv>

      <Text font="heading_md" color="text_primary" mt={30}>
        Action
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Link href={window.parent.location.href + '#'} varient="action">
          This is an action link!
        </Link>
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        Color
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Link href={window.parent.location.href + '#'} color="#ff0000">
          Red link
        </Link>
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        Size
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Section>
          <Link href={window.parent.location.href + '#'} size="Small">
            Small link
          </Link>
          <Link href={window.parent.location.href + '#'} size="Medium" style={{ marginLeft: 20 }}>
            Medium link
          </Link>
          <Link href={window.parent.location.href + '#'} size="Large" style={{ marginLeft: 20 }}>
            Large link
          </Link>
        </Section>
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        Routing
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <RouteLink size="Medium" path="/about">
          About
        </RouteLink>
      </CardDiv>
      <Text font="heading_md" color="text_primary" mt={30}>
        Disabled
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Link href={window.parent.location.href + '#'} disabled size="Small">
          Disabled link
        </Link>
      </CardDiv>
    </>
  );
};
