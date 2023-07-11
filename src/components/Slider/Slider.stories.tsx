import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import Text from '../Text';
import SliderComponent from './index';

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;

const SliderContainer = styled.div`
  display: flex;
`;

export default {
  title: 'Components/Slider',
  argTypes: {},
};

export const Default: React.FC = () => {
  const [value, setValue] = useState(50);
  const [controlledValue, setControlChange] = useState(0);
  const [functionalValue, setFunctionalValue] = useState(0);
  const [controlledValueWithLabel, setControlledValueWithLabel] = useState(0);
  const [tooltipValue, setTooltip] = useState(0);
  const [controlledValueWithMinMaxLabel, setControlledValueWithMinMaxLabel] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleControlChange = (event) => {
    setControlChange(event.target.value);
  };

  const handleFunctionalChange = (event) => {
    setFunctionalValue(event.target.value);
  };

  const handleAdd = () => {
    functionalValue < 100 && setFunctionalValue(functionalValue + 1);
  };

  const handleSubstract = () => {
    functionalValue > 0 && setFunctionalValue(functionalValue - 1);
  };

  const handleControlledValueWithLabelChange = (event) => {
    setControlledValueWithLabel(event.target.value);
  };

  const handleTooltipChange = (event) => {
    setTooltip(event.target.value);
  };

  const handleControlledValueWithMinMaxLabelChange = (event) => {
    setControlledValueWithMinMaxLabel(event.target.value);
  };

  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Default Value
        </Text>
        <SliderComponent value={value} handleChange={handleChange} min={0} max={100} />
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Initial Value
        </Text>
        <SliderComponent
          value={controlledValue}
          handleChange={handleControlChange}
          min={0}
          max={100}
        />
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Controlled Value
        </Text>
        <Button
          size="Small"
          onClick={handleSubstract}
          style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 30 }}
        >
          -
        </Button>
        <Button
          size="Small"
          onClick={handleAdd}
          style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 30 }}
        >
          +
        </Button>
        <SliderComponent
          value={functionalValue}
          handleChange={handleFunctionalChange}
          min={0}
          max={100}
          step={1}
        />
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Controlled value with label
        </Text>
        <SliderContainer>
          <div style={{ flex: 3, marginTop: 'auto', marginBottom: 'auto' }}>
            <SliderComponent
              value={controlledValueWithLabel}
              handleChange={handleControlledValueWithLabelChange}
              min={0}
              max={100}
              step={5}
            />
          </div>
          <Text font="body_md" color="text_primary">
            {controlledValueWithLabel}
          </Text>
        </SliderContainer>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={15}>
          Minimum and Maximum value with label
        </Text>
        <SliderContainer>
          <Text font="body_md" color="text_primary">
            0
          </Text>
          <div style={{ flex: 3, marginTop: 'auto', marginBottom: 'auto' }}>
            <SliderComponent
              value={controlledValueWithMinMaxLabel}
              handleChange={handleControlledValueWithMinMaxLabelChange}
              min={0}
              max={100}
              step={5}
            />
          </div>
          <Text font="body_md" color="text_primary" align="center">
            100
          </Text>
        </SliderContainer>
      </CardDiv>

      <CardDiv style={{ padding: 20 }}>
        <Text font="body_md" color="text_primary" pt={20} pb={50}>
          Tooltip
        </Text>
        <SliderComponent
          value={tooltipValue}
          handleChange={handleTooltipChange}
          min={0}
          max={100}
          step={5}
          tooltip="on"
        />
      </CardDiv>
    </>
  );
};
