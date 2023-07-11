import React, { FC, useState, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightColors } from 'styles/colors';
import { lightTheme } from 'styles/theme';
import { ToggleButtonProps, Option, ContainerProps, ToggleProps, ToggleLabelProps } from './types';

const ToggleButton: FC<ToggleButtonProps> = ({
  status = false,
  cbHandler,
  primaryColor = lightColors.periwinkle,
  secondaryColor = lightColors.selected_secondary_toggle_background,
  type = 'simple',
  options,
  onToggleChange,
  value,
}) => {
  const [isToggled, setIsToggled] = useState(status);

  const onToggle = useCallback(() => {
    setIsToggled(!isToggled);
    if (cbHandler) cbHandler(!isToggled);
  }, [cbHandler, isToggled]);

  const toggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggleChange) {
      onToggleChange(event);
    }
    const input = event.target;
    const slider = document.getElementById('hdnBox');

    if (slider) {
      slider.style.transform = `translateX(${input.dataset.location})`;
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      {type == 'simple' ? (
        <Container secondaryColor={secondaryColor} isToggled={isToggled} onClick={onToggle}>
          <Toggle primaryColor={primaryColor} isToggled={isToggled} />
        </Container>
      ) : (
        <ToggleContainer>
          <ToggleForm>
            <ToggleHiddenBox id="hdnBox"></ToggleHiddenBox>
            {options &&
              options.map((option: Option, index: number) => (
                <ToggleLabel key={index} id={option.title} isSelected={value === option.title}>
                  <ToggleInput
                    type="radio"
                    name="searchtype"
                    onChange={toggle}
                    data-location={
                      index === 0 ? 0 : `calc(${option.fullLength}% - ${option.location}px)`
                    }
                    value={option.title}
                  />
                  <ToggleTitle>{option.titleTemplate}</ToggleTitle>
                </ToggleLabel>
              ))}
          </ToggleForm>
        </ToggleContainer>
      )}
    </ThemeProvider>
  );
};

export default ToggleButton;

const Container = styled.div<ContainerProps>`
  width: 32px;
  height: 14px;
  position: relative;
  background: ${({ secondaryColor, isToggled, theme }) =>
    isToggled ? secondaryColor : theme.colors.secondary_toggle};
  border-radius: 16px;
  cursor: pointer;
`;

const Toggle = styled.div<ToggleProps>`
  position: absolute;
  top: -2px;
  left: ${({ isToggled }) => (isToggled ? 'auto' : '0px')};
  right: ${({ isToggled }) => (isToggled ? '0px' : 'auto')};
  width: 18px;
  height: 18px;
  background: ${({ primaryColor, isToggled, theme }) =>
    isToggled ? primaryColor : theme.colors.primary_toggle};
  box-shadow: ${({ theme }) => theme.shadows.shadow01};
  border-radius: 50%;
`;

const ToggleContainer = styled.div`
  height: 100%;
  padding: 10px;
  margin: 0;
`;

const ToggleForm = styled.form`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  border-radius: 30px;
  border: ${({ theme }) => `1px solid ${theme.colors.selected_toggle_background}`};
  color: ${({ theme }) => theme.colors.selected_toggle_background};

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ToggleHiddenBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding-top: 24px;
  display: block;
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: 0px;
  width: calc(33.33% + 8px);
  background-color: ${({ theme }) => theme.colors.selected_toggle_background};
  border-radius: 30px;
  z-index: 1;
  pointer-events: none;
  transition: transform 0.3s;
`;

const ToggleLabel = styled.label<ToggleLabelProps>`
  float: left;
  width: calc(33.333% - 1px);
  position: relative;
  padding: 16px 0px 30px;
  overflow: hidden;
  transition: color 0.3s;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.selected_toggle_background};
`;

const ToggleInput = styled.input`
  position: absolute;
  top: -200%;
`;

const ToggleTitle = styled.div`
  z-index: 5;
  position: absolute;
  width: 100%;
`;
