import React from 'react';
import styled from 'styled-components';
import { SliderProps } from './types';

const SliderComponent: React.FC<SliderProps> = ({
  value,
  handleChange,
  min = 0,
  max,
  step = 1,
  tooltip = 'off',
}) => {
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / max}% 100%`,
    };
  };

  const getStyle = () => {
    const newVal = Number(((value - min) * 100) / (max - min));
    return {
      left: `calc(${newVal}% + (${-10 - newVal * 0.15}px))`,
    };
  };

  return (
    <Container>
      {tooltip == 'on' && <Tooltip style={getStyle()}>{value}</Tooltip>}
      <Slider
        type="range"
        min={min}
        max={max}
        onChange={handleChange}
        style={getBackgroundSize()}
        value={value}
        step={step}
      />
    </Container>
  );
};

export default SliderComponent;
const Container = styled.div`
  display: grid;
  place-items: center;
  margin-left: 10px;
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -2.5em;
  left: -20%;
  width: fit-content;
  height: 1em;
  text-align: center;
  color: #fff;
  font-weight: bold;
  white-space: nowrap;
  background-color: #000;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 6px;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Roc Grotesk Regular';
`;

const Slider = styled.input`
  -webkit-appearance: none;
  height: 0.0625rem;
  background: transparent;
  border-radius: 5px;
  background-image: linear-gradient(#204ecf, #204ecf);
  background-repeat: no-repeat;
  width: 100%;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.75rem;
    width: 1.75rem;
    position: relative;
    top: -0.75rem;
    left: 0rem;
    border-radius: 50%;
    cursor: pointer;
    background: linear-gradient(0, #d6d6d6, #ffffff);
    box-shadow: 0 4px 2px darken(#444444, 10%);
    border: solid 1px #e0e0e0;
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    height: 0.5rem;
    background: #eeeeee;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
`;
