import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, IconButton, GeneralButton, CarouselButton } from '.';
import Text from '../Text';
import { ArrowRight } from '../Svgs';

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors?.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

export default {
  title: 'Components/Button',
  argTypes: {
    variant: {
      options: ['Primary', 'Secondary', 'Custom'],
      control: { type: 'radio' },
    },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'radio' },
    },
    backgroundColor: { control: 'color' },
  },
};

const PageTemplate = (args) => <GeneralButton {...args} />;

export const Template = PageTemplate.bind({});
Template.args = {
  variant: 'Primary',
  label: 'Button',
  size: 'Small',
};

export const Story = () => {
  const [isPrimaryHovering, setIsPrimaryHovering] = useState(false);
  const [iconPrimaryColor, setIconPrimaryColor] = useState('#FFFFFF');

  const [isPrimaryGhostHovering, setIsPrimaryGhostHovering] = useState(false);
  const [iconPrimaryGhostColor, setIconPrimaryGhostColor] = useState('#5870FF');

  const [isSecondaryHovering, setIsSecondaryHovering] = useState(false);
  const [iconSecondaryColor, setIconSecondaryColor] = useState('#FFFFFF');

  const [isSecondaryGhostHovering, setIsSecondaryGhostHovering] = useState(false);
  const [iconSecondaryGhostColor, setIconSecondaryGhostColor] = useState('#C94403');

  const handleMouseOver = (index: number) => {
    if (index == 1) {
      setIsPrimaryHovering(true);
    } else if (index == 2) {
      setIsPrimaryGhostHovering(true);
    } else if (index == 3) {
      setIsSecondaryHovering(true);
    } else if (index == 4) {
      setIsSecondaryGhostHovering(true);
    }
  };

  const handleMouseOut = (index: number) => {
    if (index == 1) {
      setIsPrimaryHovering(false);
    } else if (index == 2) {
      setIsPrimaryGhostHovering(false);
    } else if (index == 3) {
      setIsSecondaryHovering(false);
    } else if (index == 4) {
      setIsSecondaryGhostHovering(false);
    }
  };

  useEffect(() => {
    if (isPrimaryHovering == true) {
      setIconPrimaryColor('#5870FF');
    } else if (isPrimaryHovering == false) {
      setIconPrimaryColor('#FFFFFF');
    }
    if (isPrimaryGhostHovering == true) {
      setIconPrimaryGhostColor('#F3EEE4');
    } else if (isPrimaryGhostHovering == false) {
      setIconPrimaryGhostColor('#5870FF');
    }
    if (isSecondaryHovering == true) {
      setIconSecondaryColor('#C94403');
    } else if (isSecondaryHovering == false) {
      setIconSecondaryColor('#FFFFFF');
    }
    if (isSecondaryGhostHovering == true) {
      setIconSecondaryGhostColor('#F3EEE4');
    } else if (isSecondaryGhostHovering == false) {
      setIconSecondaryGhostColor('#C94403');
    }
  }, [isPrimaryHovering, isPrimaryGhostHovering, isSecondaryHovering, isSecondaryGhostHovering]);

  return (
    <>
      <Section>
        <Text font="heading_md" color="text_primary" mt="10px" mb="10px">
          Primary Buttons
        </Text>
        <Text font="body_md" color="text_primary" my="10px">
          The primary button is used for the most important action on a page or in a view.
        </Text>
        <CardDiv>
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Button
          </Button>
          <Button
            size="Small"
            isGhost
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Ghost Button
          </Button>
          <IconButton
            onMouseOver={(e) => handleMouseOver(1)}
            onMouseOut={(e) => handleMouseOut(1)}
            size="Small"
            Icon={isPrimaryHovering ? <ArrowRight color={iconPrimaryColor} /> : <ArrowRight />}
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Icon Button
          </IconButton>
          <IconButton
            onMouseOver={(e) => handleMouseOver(2)}
            onMouseOut={(e) => handleMouseOut(2)}
            size="Small"
            isGhost
            Icon={
              isPrimaryGhostHovering ? (
                <ArrowRight color={iconPrimaryGhostColor} />
              ) : (
                <ArrowRight color="#5870FF" />
              )
            }
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Ghost Icon Button
          </IconButton>
        </CardDiv>

        <Text font="body_lg_bold" color="text_primary" mt="20px" mb="10px">
          States
        </Text>
        <Text font="body_md" color="text_primary" my="10px">
          Primary buttons have idle, disabled, hover, active and focus states.
        </Text>
        <CardDiv>
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Idle Button
          </Button>
          <Button
            disabled
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Disabled Button
          </Button>
          <Button
            size="Small"
            isGhost
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Idle Ghost Button
          </Button>
          <Button
            size="Small"
            isGhost
            disabled
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Primary Ghost Disabled Button
          </Button>
        </CardDiv>

        <Text font="body_lg_bold" color="text_primary" mt="20px" mb="10px">
          Sizes
        </Text>
        <Text font="body_lg_bold" color="text_primary" my="10px">
          The size of the primary button depends on the base font size used which can be adapted to
          the viewport width.
        </Text>
        <CardDiv>
          <Button
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Small Button
          </Button>
          <Button
            size="Medium"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Medium Button
          </Button>
          <Button
            size="Large"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Large Button
          </Button>
        </CardDiv>
      </Section>
      <Section>
        <Text font="heading_md" color="text_primary" mt="10px" mb="10px">
          Secondary Buttons
        </Text>
        <Text font="body_lg_bold" color="text_primary" my="10px">
          The Secondary button is used for the most important action on a page or in a view.
        </Text>
        <CardDiv>
          <Button
            size="Small"
            Secondary
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Button
          </Button>
          <Button
            size="Small"
            Secondary
            isGhost
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Ghost Button
          </Button>
          <IconButton
            Secondary
            onMouseOver={(e) => handleMouseOver(3)}
            onMouseOut={(e) => handleMouseOut(3)}
            size="Small"
            Icon={
              isSecondaryHovering ? (
                <ArrowRight color={iconSecondaryColor} />
              ) : (
                <ArrowRight color="#FFFFFF" />
              )
            }
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Icon Button
          </IconButton>
          <IconButton
            Secondary
            onMouseOver={(e) => handleMouseOver(4)}
            onMouseOut={(e) => handleMouseOut(4)}
            size="Small"
            isGhost
            Icon={
              isSecondaryGhostHovering ? (
                <ArrowRight color={iconSecondaryGhostColor} />
              ) : (
                <ArrowRight color="#C94403" />
              )
            }
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Ghost Icon Button
          </IconButton>
        </CardDiv>

        <Text font="body_lg_bold" color="text_primary" mt="20px" mb="10px">
          States
        </Text>
        <Text font="body_md" color="text_primary" my="10px">
          Secondary buttons have idle, disabled, hover, active and focus states.
        </Text>
        <CardDiv>
          <Button
            Secondary
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Idle Button
          </Button>
          <Button
            disabled
            Secondary
            size="Small"
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Disabled Button
          </Button>
          <Button
            size="Small"
            Secondary
            isGhost
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Idle Ghost Button
          </Button>
          <Button
            size="Small"
            Secondary
            isGhost
            disabled
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Secondary Ghost Disabled Button
          </Button>
        </CardDiv>

        <Text font="body_lg_bold" color="text_primary" mt="20px" mb="10px">
          Sizes
        </Text>
        <Text font="body_md" color="text_primary" my="10px">
          The size of the primary button depends on the base font size used which can be adapted to
          the viewport width.
        </Text>
        <CardDiv>
          <Button
            size="Small"
            Secondary
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Small Button
          </Button>
          <Button
            size="Medium"
            Secondary
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Medium Button
          </Button>
          <Button
            size="Large"
            Secondary
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          >
            Large Button
          </Button>
        </CardDiv>
      </Section>
      <Section>
        <Text font="heading2" color="text_primary" mt="10px" mb="10px">
          Carousel Buttons
        </Text>
        <Text font="rocRegular" color="text_primary" my="10px">
          The Carousel button is used for the most important action on a page or in a view.
        </Text>
        <CardDiv>
          <CarouselButton
            direction="Left"
            types={0}
            size="Small"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Right"
            types={0}
            size="Small"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Left"
            types={1}
            isGhost
            size="Medium"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Right"
            types={1}
            isGhost
            size="Medium"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Left"
            types={2}
            Secondary
            size="Medium"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Right"
            types={2}
            Secondary
            size="Medium"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Left"
            types={3}
            isGhost
            Secondary
            size="Large"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
          <CarouselButton
            direction="Right"
            types={3}
            isGhost
            Secondary
            size="Large"
            Carousel
            style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
          ></CarouselButton>
        </CardDiv>
      </Section>
    </>
  );
};

Story.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/jTPjcxOweQa0ju4uSgFZok/Flipr-Design-System?node-id=487%3A8140&t=qw1cd0BXLwwgHrpk-1',
  },
};
