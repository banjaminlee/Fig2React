import React, { useEffect, useState } from 'react';
import Text from '../Text';
import Quote from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Quote',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

export const Story = () => {
  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Quote
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Quote when the user wants to note the quote.
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Quote>
          <Text font="body_md_bold" color="text_primary" mb={10} mt={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
            quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque
            similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
            deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
            doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
            quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque
            similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
            deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
            doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
          </Text>
        </Quote>
      </CardDiv>
    </>
  );
};
