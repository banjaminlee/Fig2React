import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonType, IconButtonType, GeneralButtonType, CarouselButtonType } from './types';
import Flex from '../Flex';
import { ArrowLeft, ArrowRight } from '../Svgs';

export const Button = styled.button<ButtonType>`
  font-family: 'Roc Grotesk Medium';
  padding: ${({ size, Carousel }) =>
    Carousel
      ? size === 'Small'
        ? '7px 2px 7px 0px'
        : size === 'Medium'
        ? '13px 13px 13px 1px'
        : '16px 16px 16px 4px'
      : size === 'Small'
      ? '8px 16px'
      : size === 'Medium'
      ? '12px 24px'
      : '16px 26px'};
  background: ${({ theme, isGhost, Carousel, Secondary }) =>
    Carousel
      ? Secondary
        ? isGhost
          ? `${theme.colors?.ui_secondary}`
          : `linear-gradient(0deg, rgba(201, 68, 3, 0), rgba(0, 0, 0, 0.)), ${theme.colors?.ui_tertiary}`
        : isGhost
        ? `${theme.colors?.ui_secondary}`
        : `linear-gradient(0deg, rgba(88, 112, 255, 0), rgba(117, 148, 25, 0)), ${theme.colors?.ui_primary}`
      : Secondary
      ? isGhost
        ? 'transparent'
        : `linear-gradient(45deg, rgba(201, 68, 3, 0), rgba(0, 0, 0, 0)), ${theme.colors?.ui_tertiary}`
      : isGhost
      ? 'transparent'
      : `linear-gradient(45deg, rgba(88, 112, 255, 0), rgba(117, 148, 25, 0)), ${theme.colors?.ui_primary}`};
  color: ${({ isGhost, Secondary, theme }) =>
    Secondary
      ? isGhost
        ? theme.colors?.ui_tertiary
        : theme.colors?.white
      : isGhost
      ? theme.colors?.ui_primary
      : theme.colors?.white};
  border: ${({ isGhost, Secondary, theme }) =>
    Secondary
      ? isGhost
        ? `1px solid ${theme.colors?.ui_tertiary}`
        : '1px solid white'
      : isGhost
      ? `1px solid ${theme.colors?.ui_primary}`
      : '1px solid white'};
  border-radius: ${({ Carousel }) => (Carousel ? `100%` : `100px`)};
  font-weight: 700;
  font-size: ${({ size }) => (size === 'Small' ? '12px' : size === 'Medium' ? '14px' : '16px')};
  line-height: ${({ size }) => (size === 'Small' ? '16px' : size === 'Medium' ? '16px' : '20px')};
  letter-spacing: ${({ size }) => (size === 'Small' ? '0.03em' : '0.04em')};
  text-align: center;
  cursor: pointer;
  min-width: fit-content;

  &:hover:not(:active):not(:disabled) {
    background: ${({ isGhost, Secondary, theme }) =>
      Secondary
        ? isGhost
          ? theme.colors?.ui_tertiary
          : theme.colors?.ui_secondary
        : isGhost
        ? theme.colors?.ui_primary
        : theme.colors?.sand_dark};
    border: ${({ isGhost, Secondary, theme }) =>
      Secondary
        ? isGhost
          ? `1px solid ${theme.colors?.ui_secondary}`
          : `1px solid ${theme.colors?.clay_dark}`
        : isGhost
        ? `1px solid ${theme.colors?.sand_dark}`
        : `1px solid ${theme.colors?.ui_primary}`};
    color: ${({ isGhost, Secondary, theme }) =>
      Secondary
        ? isGhost
          ? `${theme.colors?.sand_dark}`
          : `${theme.colors?.ui_tertiary}`
        : isGhost
        ? `${theme.colors?.sand_dark}`
        : `${theme.colors?.ui_primary}`};
  }

  &:active,
  &:focus {
    background: ${({ isGhost, Secondary, theme }) =>
      Secondary
        ? isGhost
          ? 'transparent'
          : theme.colors?.ui_tertiary
        : isGhost
        ? 'transparent'
        : theme.colors?.ui_primary};
    border: ${({ isGhost, Secondary, Carousel, theme }) =>
      Carousel
        ? Secondary
          ? isGhost
            ? `1px solid ${theme.colors?.ui_secondary}`
            : 'none'
          : isGhost
          ? `1px solid ${theme.colors?.ui_primary}`
          : 'none'
        : Secondary
        ? isGhost
          ? `1px solid ${theme.colors?.ui_tertiary}`
          : 'none'
        : isGhost
        ? `1px solid ${theme.colors?.ui_primary}`
        : 'none'};
  }

  @supports selector(:focus-visible) {
    &:focus {
      background: ${({ theme, Secondary, Carousel, isGhost }) =>
        Carousel
          ? Secondary
            ? isGhost
              ? theme.colors?.ui_secondary
              : `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${theme.colors?.ui_tertiary}`
            : isGhost
            ? 'transparent'
            : `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${theme.colors?.ui_primary}`
          : Secondary
          ? isGhost
            ? 'transparent'
            : `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${theme.colors?.ui_tertiary}`
          : isGhost
          ? 'transparent'
          : `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${theme.colors?.ui_primary}`};
      box-shadow: none;
    }
    &:active,
    &:focus-visible {
      background: ${({ isGhost, theme }) => (isGhost ? 'transparent' : theme.colors?.ui_primary)};
      border: ${({ isGhost, Secondary, theme }) =>
        Secondary
          ? isGhost
            ? `1px solid ${theme.colors?.ui_tertiary}`
            : 'none'
          : isGhost
          ? `1px solid ${theme.colors?.ui_primary}`
          : 'none'};
    }
  }

  &:disabled {
    background: ${({ theme, isGhost, Secondary }) =>
      Secondary
        ? isGhost
          ? '#E0E0E0'
          : '#fbb592'
        : isGhost
        ? '#E0E0E0'
        : theme.colors?.ui_primary};
    color: ${({ theme }) => theme.colors?.white};
    border: ${({ isGhost, Secondary, theme }) =>
      Secondary
        ? isGhost
          ? `1px solid '#fbb592'`
          : 'none'
        : isGhost
        ? `1px solid ${theme.colors?.ui_primary}`
        : 'none'};
    cursor: not-allowed;
  }
`;

const IconWrapper = styled(Flex)<{ size?: string }>`
  margin-left: ${({ size }) => (size === 'Small' ? '8px' : '12px')};
  margin-right: ${({ size }) => (size === 'Small' ? '4px' : '0px')};
`;

export const GeneralButton: FC<GeneralButtonType> = ({
  size = 'Small',
  backgroundColor,
  label,
  variant,
  ...props
}) => (
  <>
    {variant == 'Custom' ? (
      <>
        {backgroundColor && (
          <Button
            Secondary
            style={{ background: backgroundColor }}
            size={size}
            {...props}
            data-testid="customBtn"
          >
            <Flex direction="row" width="max-content">
              {label}
            </Flex>
          </Button>
        )}
      </>
    ) : (
      <>
        {variant == 'Primary' && (
          <Button size={size} {...props} data-testid="primaryBtn">
            <Flex direction="row" width="max-content">
              {label}
            </Flex>
          </Button>
        )}
        {variant == 'Secondary' && (
          <Button Secondary size={size} {...props}>
            <Flex direction="row" width="max-content">
              {label}
            </Flex>
          </Button>
        )}
      </>
    )}
  </>
);

export const IconButton = ({
  size = 'Small',
  isGhost,
  Icon,
  disabled,
  children,
  ...props
}: IconButtonType) => {
  return (
    <>
      <Button
        size={size}
        isGhost={isGhost}
        disabled={disabled}
        {...props}
        data-testid="ghostIconBtn"
      >
        <Flex direction="row" width="max-content">
          {children}
          <IconWrapper size={size} style={{ color: 'red' }}>
            {Icon}
          </IconWrapper>
        </Flex>
      </Button>
    </>
  );
};

export const CarouselButton = ({ direction, types, ...props }: CarouselButtonType) => {
  const initialColor = ['#FFFFFF', '#5870FF', '#FFFFFF', '#C94403'];
  const finalColor = ['#5870FF', '#FFFFFF', '#C94403', '#FCF7ED'];
  const [isHovering, setHovering] = useState(false);
  const [iconColor, setIconColor] = useState(initialColor[types]);

  const newFinialColor = finalColor[types];
  const newInitialColor = initialColor[types];

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  useEffect(() => {
    if (isHovering) setIconColor(newFinialColor);
    else setIconColor(newInitialColor);
  }, [isHovering, newFinialColor, newInitialColor]);

  return (
    <>
      {direction == 'Left' && (
        <IconButton
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          Icon={
            isHovering ? <ArrowLeft color={iconColor} /> : <ArrowLeft color={initialColor[types]} />
          }
          {...props}
        ></IconButton>
      )}
      {direction == 'Right' && (
        <IconButton
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          Icon={
            isHovering ? (
              <ArrowRight color={iconColor} />
            ) : (
              <ArrowRight color={initialColor[types]} />
            )
          }
          {...props}
        ></IconButton>
      )}
    </>
  );
};
