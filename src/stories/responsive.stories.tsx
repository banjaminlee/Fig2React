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
const SpanBold = styled.span`
  font-family: 'Roc Grotesk Bold';
  font-weight: 400;
`;
const ContentFirst = () => {
  return (
    <>
      <Section>
        <Text font="body_md" color="text_primary">
          Responsive design adapts the flow and layout of information to respond to a user’s
          behavior and environment based on screen size, platform and orientation. Adapting the flow
          of information and visual elements may sometimes require an optimized user experience to
          help fit content within certain parameters of a particular display or device. It may also
          require limiting the layout of the design to only include necessary modules, depending on
          a device’s parameters and resolution.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Breakpoints
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          Breakpoints are the values at which content included on a webpage is resized and reflowed
          to fit a screen size on a particular device. Designing for different breakpoints allows
          designers and developers to optimize the display of information for mobile, tablet and
          desktop users alike.
        </Text>
        <Text font="body_md" color="text_primary">
          Flipr uses a set of common breakpoints in which information displayed on the screen can be
          adjusted. For full documentation on the token names and values for these breakpoints, go
          to Breakpoints in the Token section.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Breakpoint sizes
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          These tokens roughly translate to the following sizes:
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          <SpanBold>XS</SpanBold> to <SpanBold>S</SpanBold>: Average Mobile size.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          <SpanBold>S</SpanBold> to <SpanBold>M</SpanBold>: Portrait Tablet.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          <SpanBold>M</SpanBold> to <SpanBold>L</SpanBold>: Landscape Tablet, or a Small Desktop.
        </Text>
        <Text font="body_md" color="text_primary" mb="15px">
          <SpanBold>L</SpanBold> to <SpanBold>XL</SpanBold>: Standard Desktop size.
        </Text>
        <Text font="body_md" color="text_primary" mb="25px">
          <SpanBold>XL</SpanBold> to <SpanBold>XXL</SpanBold>: Large desktop.
        </Text>
        <Text font="body_md" color="text_primary" mb="25px">
          One thing to remember is that when designing over a breakpoint that the flow of
          information has to stay roughly the same. For example on a desktop you could have a row
          with three blocks of text in it, but on mobile they will need to collapse on top of each
          other, staying in the same order (left to right).
        </Text>
        <Text font="body_md" color="text_primary" mb="25px">
          Bear in mind how components change when designing for different screen sizes and how this
          affects Spacing and Page Margins.
        </Text>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary">
          Designing with breakpoints
        </Text>
        <Text font="body_md" color="text_primary" mb="25px">
          In order to ensure that a design will be compatible on mobile devices, it is important
          that user experience and user interface designers execute layouts for mobile devices
          first. A mobile-first approach prioritizes smaller screens, allowing designers to ensure a
          design is scalable and accessible, while maintaining a consistent flow of information
          across all devices.
        </Text>
        <Text font="body_md" color="text_primary" mb="25px">
          Designers should be mindful of how components change and resize when designing for
          different screen sizes, as well as how the Spacing and Page Margins are affected.
        </Text>
      </Section>
    </>
  );
};

const MetaData = [
  {
    title: 'Responsive Design',
    header: '',
    content: <ContentFirst />,
  },
];

export default {
  title: 'Guidelines',
  argTypes: {},
};

export const ResponsiveDesign: React.FC = () => {
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
