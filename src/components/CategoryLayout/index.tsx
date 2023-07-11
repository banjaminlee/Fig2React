import React from 'react';
import { CategoryLayoutProps } from './types';
import styled, { ThemeProvider } from 'styled-components';
import ToggleButton from '../ToggleButton';
import KeyFeaturesLayout from './KeyFeatures';
import SpecsLayout from './Specs';
import Reviews from './Reviews';
import { lightTheme } from 'styles/theme';

const Container = styled.div`
  & .desktop {
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
    }
  }
`;

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  keyFeaturesData,
  specsData,
  reviewsData,
  options,
  style,
}) => {
  const [selectedValue, setSelectedValue] = React.useState('Key Features');
  const onToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <ToggleButton
          status
          onToggleChange={onToggleChange}
          type="button"
          value={selectedValue}
          options={options}
        />

        {selectedValue == 'Key Features' && keyFeaturesData && (
          <KeyFeaturesLayout data={keyFeaturesData} style={style} />
        )}
        {selectedValue == 'Specs' && <SpecsLayout data={specsData} style={style} />}
        {selectedValue == 'Reviews' && <Reviews data={reviewsData} style={style} />}
      </Container>
    </ThemeProvider>
  );
};

export default CategoryLayout;
