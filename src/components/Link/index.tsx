import React from 'react';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { LinkProps, RouteLinkProps } from './types';

const Container = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
`;

const Wrapper = styled.a<{ size?: string; color?: string; disabled?: boolean }>`
  font-family: 'Roc Grotesk Medium';
  text-decoration: none;
  font-size: ${({ size }) => (size == 'Small' ? '0.8rem' : size === 'Medium' ? '1rem' : '16px')};
  text-decoration: ${({ disabled }) => (disabled ? 'underline' : 'unset')};
  &:hover {
    text-decoration: underline;
  }
  color: ${({ color, disabled }) => (disabled ? '#cbcbcb' : color ? color : '#c94503')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'allowed')};
`;

const Link: FC<LinkProps> = ({
  href,
  color,
  size = 'Small',
  varient,
  style,
  disabled,
  children,
}) => {
  const handleClick = () => {
    window.alert('Action is invoked!');
  };

  return (
    <Container disabled={disabled}>
      {varient == 'action' ? (
        <Wrapper
          href={href}
          color={color}
          size={size}
          disabled={disabled}
          onClick={handleClick}
          style={style}
        >
          {children}
        </Wrapper>
      ) : (
        <Wrapper href={href} color={color} disabled={disabled} size={size} style={style}>
          {children}
        </Wrapper>
      )}
    </Container>
  );
};

export default Link;

export const RouteLink: FC<RouteLinkProps> = ({
  color,
  size = 'Medium',
  style,
  path,
  children,
}) => {
  return (
    <>
      <Wrapper color={color} size={size} style={style} href={path}>
        {children}
      </Wrapper>
    </>
  );
};
