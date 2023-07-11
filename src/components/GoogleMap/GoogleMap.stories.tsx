import React from 'react';
import styled from 'styled-components';
import Map from './index';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  position: relative;
`;

export default {
  title: 'Components/GoogleMap',
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Map
          initialPosition={{
            lat: 32.8295576,
            lng: -117.2349526,
          }}
        />
      </CardDiv>
    </>
  );
};
