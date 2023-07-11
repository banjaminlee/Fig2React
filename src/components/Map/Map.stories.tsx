import React from 'react';
import styled from 'styled-components';
import Map from './index';
import { ViewportProps } from './types';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  position: relative;
`;

export default {
  title: 'Components/Map',
  argTypes: {},
};

export const Default: React.FC = () => {
  const viewport: ViewportProps = {
    latitude: 32.8295576,
    longitude: -117.2349526,
    zoom: 11,
    transitionDuration: 100,
  };

  return (
    <CardDiv style={{ padding: 20 }}>
      <Map viewport={viewport} />
    </CardDiv>
  );
};
