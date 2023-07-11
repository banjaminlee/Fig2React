import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import RichTextEditor from './index';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  position: relative;
`;

const Container = styled.div`
  margin-top: 1rem;
  box-sizing: inherit;
`;

const Description = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.ui_rich_text_editor_preview_box};
  box-sizing: inherit;
`;

export default {
  title: 'Components/RichTextEditor',
  argTypes: {},
};

export const Default: React.FC = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };
  const [value, setValue] = React.useState('<p>Hello</p>');
  const [defaultValue, setDefaultValue] = React.useState(
    '<h3>Position Description</h3><p>We’re looking for hardworking, self-starting Designers for our <strong>Product Design</strong> team to help us define how talent interacts with Toptal.</p><p>You’ll build beautiful and inspiring design experiences that help users discover and connect with resources they need in truly innovative ways.</p><h3>Requirements</h3><ol><li>Collaborate with PMs and other designers to ship your first product features.</li><li>Learn about our design system.</li></ol><h3>Requirements</h3><ul><li>Proficiency with various design and prototyping tools (such as Sketch, Abstract, Marvel, Principle, Figma), as well as knowledge of HTML and CSS.</li><li>An understanding that phenomenal experiences come from collaborative decision-making with front-end developers, engineers, researchers, content strategists, and other disciplines.</li></ul>',
  );
  console.log(value);
  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Default
        </Text>
        <Container>
          <RichTextEditor modules={modules} onChangeValue={setValue} value={value} />
        </Container>
        <Description>{value}</Description>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Default Value
        </Text>
        <Container>
          <RichTextEditor modules={modules} onChangeValue={setDefaultValue} value={defaultValue} />
        </Container>
        <Description>{defaultValue}</Description>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Disabled
        </Text>
        <Container>
          <RichTextEditor modules={modules} onChangeValue={setValue} value={value} disabled />
        </Container>
      </CardDiv>
    </>
  );
};
