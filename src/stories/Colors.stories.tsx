import React from 'react';
import styled from 'styled-components';
import { lightColors } from '../styles/colors';
import { Flex, Text } from '../components';
import Howtouse from '../@shared/HowToUse/Howtouse';

const Container = styled.div`
  padding: 50px;
`;

const Card = styled.div`
  justify-content: flex-start;
  height: 184px;
  width: 144px;
  background-color: #f3f4f5;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px rgba(0, 0, 0, 0.14),
    0px 0px 2px rgba(0, 0, 0, 0.14), 1px 1px 2px rgba(0, 0, 0, 0.14),
    inset 0px 0px 2px rgba(255, 255, 255, 0.3), inset 0px 0px 2px rgba(188, 189, 196, 0.5);
  border-radius: 6px;
  margin: 10px;
  padding-top: 1px;
  float: left;
`;

const ColorSquare = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 112px;
  height: 112px;
  margin: 15px 15px 0px 15px;
`;

const Title = styled.h2`
  font-family: 'Roc Grotesk regular';
  margin: 5px 0;
  font-size: 12px;
  margin-left: auto;
  margin-right: auto;
`;

const Value = styled.p`
  font-family: 'Roc Grotesk regular';
  font-size: 0.8em;
  margin: 5px 0;
  margin-left: auto;
  margin-right: auto;
`;

const Info = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;

const ColorSort = styled.div`
  display: flex;
  padding-top: 20px;
  width: 100%;
`;

const HowToCard = styled(Flex)`
  justify-content: flex-start;
  height: 90px;
  width: 300px;
  background-color: #f3f4f5;
  box-shadow: -1px 1px 2px rgba(188, 189, 196, 0.2), 1px -1px 2px rgba(188, 189, 196, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(188, 189, 196, 0.9),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(188, 189, 196, 0.5);
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HowToColorSquare = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 60px;
  height: 60px;
  margin: 16px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -4px #2f2f32;
`;

const HowToTitle = styled.h2`
  font-family: 'Roc Grotesk bold';
  margin: 5px 0;
`;

const HowToValue = styled.p`
  font-family: 'Roc Grotesk regular';
  font-size: 0.8em;
  margin: 5px 0;
`;

const HowToInfo = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;

const colorsMetaData = {
  title: 'colors',
  content:
    'Our color palette is earthy & bright. Its meant to reflect our tech background as well as bring forward aspects of our eco-friendly mission. The darker/lighter counterparts to the palette are used as accents and to soften graphics.',
};

export const FliprColors = () => {
  return (
    <Howtouse storyname={colorsMetaData.title} content={colorsMetaData.content}>
      <HowToCard>
        <HowToColorSquare color={lightColors.periwinkle} />
        <HowToInfo>
          <HowToTitle>Periwinkle</HowToTitle>
          <HowToValue>#5870FF</HowToValue>
        </HowToInfo>
      </HowToCard>
    </Howtouse>
  );
};

FliprColors.parameters = {
  docs: {
    source: {
      code: `import React from 'react'; 
import { Text } from './components';

<Text font='body_md_bold' color='periwinkle'>Hello World!</Text>
           `.trim(),
      language: 'jsx',
      type: 'code',
    },
  },
};

export default {
  title: 'Brand Identity',
  argTypes: {},
};
export const BaseColors: React.FC = () => {
  const Light = Object.keys(lightColors);
  const LightValues = Object.values(lightColors);

  return (
    <Container>
      {Light.map((key, id) => (
        <div key={key}>
          {id == 0 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                Primary Colors
              </Text>
            </ColorSort>
          )}
          {id == 4 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                Secondary Colors
              </Text>
            </ColorSort>
          )}
          {id == 10 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                Background
              </Text>
            </ColorSort>
          )}
          {id == 13 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                Text Color
              </Text>
            </ColorSort>
          )}
          {id == 16 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                Elements Colors
              </Text>
            </ColorSort>
          )}
          {id == 22 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                System Colors
              </Text>
            </ColorSort>
          )}
          {id == 26 && (
            <ColorSort>
              <Text font="body_md_bold" color="text_primary">
                UI Colors
              </Text>
            </ColorSort>
          )}

          <Card>
            <ColorSquare color={LightValues[id]} />
            <Info>
              <Title>{key}</Title>
              <Value>{LightValues[id]}</Value>
            </Info>
          </Card>
        </div>
      ))}
    </Container>
  );
};
