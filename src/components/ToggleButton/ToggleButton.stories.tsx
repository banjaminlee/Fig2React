import React, { useCallback } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import ToggleButton from '.';
import Rating from '../Rating';

export default {
  title: 'Components/ToggleButton',
  argTypes: {},
};

const Section = styled.div`
  background: whitesmoke;
  padding: 20px;
`;

const ReviewToggleContainer = styled.div`
  display: inline-flex;
  margin: auto;
`;

const RatingBox = styled.div`
  margin: -8px;
`;

const TotalCount = styled.div`
  font-size: 0.8rem;
`;

export const Default: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState('Key Features');
  const onToggle = useCallback(() => {}, []);

  const onToggleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Section>
      <Text font="rocRegular">Status: false</Text>
      <ToggleButton />
      <Text font="rocRegular" mt="20px">
        Status: True
      </Text>
      <ToggleButton status />
      <Text font="rocRegular" mt="20px">
        Callback
      </Text>
      <ToggleButton status cbHandler={onToggle} />

      <Text font="rocRegular" mt="20px" align="center">
        Toggle button
      </Text>
      <ToggleButton
        status
        onToggleChange={onToggleChange}
        type="button"
        value={selectedValue}
        options={[
          {
            title: 'Key Features',
            location: 0,
            fullLength: 100,
            titleTemplate: <div>Key Features</div>,
          },
          { title: 'Specs', location: 8, fullLength: 100, titleTemplate: <div>Specs</div> },
          {
            title: 'Reviews',
            location: 12,
            fullLength: 197.5,
            titleTemplate: (
              <ReviewToggleContainer>
                <div>Reviews</div>
                <RatingBox>
                  <Rating size={0.5} disabled={true} />
                </RatingBox>
                <TotalCount>125 Reviews</TotalCount>
              </ReviewToggleContainer>
            ),
          },
        ]}
      />
    </Section>
  );
};
