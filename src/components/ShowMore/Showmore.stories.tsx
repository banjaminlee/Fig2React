import React, { useEffect, useState } from 'react';
import Text from '../Text';
import Showmore, { Readmore } from './index';
import styled from 'styled-components';

export default {
  title: 'Components/ShowMore',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  & .show-more-less-clickable {
    color: ${({ theme }) => theme.colors.periwinkle};
  }
`;

export const Story = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const executeOnClick = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Show More
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Show More when the user wants to see more description.
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Showmore>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
          deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
          doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi?
        </Showmore>
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Line Breaks
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Showmore lines={5} width={430}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
          deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
          doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi?
        </Showmore>
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Expanded
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Showmore
          onClick={() => executeOnClick()}
          expanded={true}
          width={430}
          truncatedEndingComponent={'... '}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
          deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
          doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi?
        </Showmore>
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Custom
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Showmore
          lines={2}
          more="Read more"
          less="Read less"
          className="content-css"
          anchorClass="show-more-less-clickable"
          onClick={() => executeOnClick()}
          expanded={false}
          width={330}
          truncatedEndingComponent={'..... '}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
          deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
          doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi?
        </Showmore>
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Fade
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Readmore>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos earum vitae quam odit omnis quod in voluptates est doloremque nulla sequi, illum
          deleniti, beatae quo? Eaque similique nemo omnis quasi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos earum vitae quam odit omnis quod in voluptates est
          doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique nemo omnis quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae quam odit omnis
          quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo? Eaque similique
          nemo omnis quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum vitae
          quam odit omnis quod in voluptates est doloremque nulla sequi, illum deleniti, beatae quo?
          Eaque similique nemo omnis quasi?
        </Readmore>
      </CardDiv>
    </>
  );
};
