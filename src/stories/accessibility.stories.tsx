import React from 'react';
import styled from 'styled-components';
import { Text } from '../components';
import Image from '../components/Image';
import CustomField from '../@shared/CustomField/CustomField';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Items = styled.span`
  padding: 0.3em 0.7em;
  font-size: 0.8em;
  font-weight: 400;
  border-radius: 0.4em;
  background-color: rgb(236, 236, 236, 0.5);
`;
const Code = styled.div`
  background-color: rgb(236, 236, 236, 0.5);
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ContentFirst = () => {
  return (
    <>
      <Section>
        <Text font="body_md" color="text_primary">
          This page provides an overview of accessibility within the Flipr Design System. For more
          detailed information, each component has an Accessibility page that outlines the
          implementation approach and best practices.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Accessibility statement
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Flipr is committed to providing websites, mobile applications, and other digital content
          that is accessible to all our customers, including those with disabilities. Using the Web
          Content Accessibility Guidelines (WCAG) 2.1 Level AA, we are continually working to
          provide excellent service and the best user experience for everyone.
        </Text>
        <Text font="body_md" color="text_primary">
          The Flipr Design System was created to support Flipr’s commitment to accessibility by
          providing its product teams with components, patterns, resources, and guidelines that
          enable product teams to deliver accessible products for all users and usage contexts.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Our approach to accessibility
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          The Flipr Design System team considers accessibility requirements throughout the product
          development lifecycle and is dedicated to ensuring its components, resources, and
          documentation support the creation of accessible products across Flipr’s ecosystem.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          The team works to adhere to level AA of the WCAG 2.1 through a combination of research,
          implementation techniques, tools, and testing. Testing is conducted with a range of users
          and technologies, including screen magnifiers, readers, and speech recognition tools.
        </Text>
        <Text font="body_md" color="text_primary" mb="25px">
          Below are some of the key areas we focus on from an accessibility standpoint:
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Color contrast and color blindness
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          The W3C provides different levels of compliance for minimum color contrast. Flipr’s Design
          System meets level AA of the WCAG 2.1 guidelines, meaning a contrast ratio of 4.5:1 is
          achieved throughout all approved color combinations (and taking into account the changes
          that can occur with different font sizes). The Flipr Design System team uses Stark and
          Google’s Color Contrast Analyzer to check the contrast ratio between text and background.
        </Text>
        <Image
          src="./branding/svg/accessibility-matrix.svg"
          alt="Avatar"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Markup
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Component markup follows best practices, using the correct semantic elements of the{' '}
          <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer">
            HTML Living Standard{' '}
          </a>
          and providing users of the system a way to do the same.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Where possible, the components will render the correct HTML element to avoid suboptimal
          decisions being made by developers that are new to accessibility.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          ARIA
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          When appropriate, ARIA is implemented, paying special attention to
          <a
            href="https://www.w3.org/WAI/ARIA/apg/#no_aria_better_bad_aria"
            target="_blank"
            rel="noreferrer"
          >
            its guidance
          </a>
        </Text>
        <Text font="body_sm_bold" color="text_primary" mb="15px">
          Functionally, ARIA roles, states, and properties are analogous to a CSS for assistive
          technologies. For screen reader users, ARIA controls the rendering of their non-visual
          experience. Incorrect ARIA misrepresents visual experiences, with potentially devastating
          effects on their corresponding non-visual experiences.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          If a component can be matched to one of the ARIA design patterns and widgets, our
          implementation follows theirs closely. We take an extra step to verify if the practices
          have been improved since the example pattern implementation was provided.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Keyboard compatibility
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Components are tested with a keyboard to ensure they are compatible with{' '}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard-accessible"
            target="_blank"
            rel="noreferrer"
          >
            keyboard keyboard accessibility
          </a>
          guidelines and to provide an additional layer of functionality to reduce Following these
          guidelines enables users with low vision or using a keyboard and/or mouse alternative can
          still interact with the components.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Text alternatives
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Where appropriate, we ensure a text alternative is provided to our components to make
          non-text based content, such as images and videos, accessible for all users. In the cases
          where these are embedded into the components a mechanism to make the text localisable is
          provided.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Apple in its Human Interface Guidelines recommends setting the minimum size for Body text
          to be 17pt.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Google in Material Design guidelines recommends setting the minimum size for Body text to
          be 16sp (equal to 16pt in iOs){' '}
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          WCAG 2.0 standards recommend following the minimum font size of 18pt and 14pt for Bold
          text.
        </Text>
      </Section>
    </>
  );
};

const MetaData = [
  {
    title: 'Accessibility',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Guidelines',
  argTypes: {},
};

export const Accessibility: React.FC = () => {
  return (
    <Section>
      {MetaData.map((item, index) => {
        return (
          <CustomField title={item.title} header={item.header} content={item.content} key={index} />
        );
      })}
    </Section>
  );
};
