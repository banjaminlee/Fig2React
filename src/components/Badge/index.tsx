// @ts-ignore
import React from 'react';
import styled from 'styled-components';
import { BadgeProps, BadgeRootProps } from './types';

const BadgeContainer = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
`;

const BadgeRoot = styled.span<BadgeRootProps>`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  place-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 0.75rem;
  min-width: 20px;
  line-height: 1;
  padding: 0px 6px;
  height: 20px;
  border-radius: 10px;
  z-index: 1;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'black')};
  color: ${({ textColor }) => (textColor ? textColor : 'white')};
  top: 3px;
  right: 5px;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
`;

const BadgeComponent: React.FC<BadgeProps> = ({ children, count, max, bgColor, textColor }) => {
  const [displayCount, setDisplayCount] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (count && max) {
      if (count > max) {
        setDisplayCount(max + '+');
      } else {
        setDisplayCount(count.toString());
      }
    } else if (count) {
      setDisplayCount(count.toString());
    }
  }, [count, max]);
  return (
    <BadgeContainer>
      {children}
      {count && count > 0 && (
        <BadgeRoot bgColor={bgColor} textColor={textColor} data-testid="badge">
          {displayCount}
        </BadgeRoot>
      )}
    </BadgeContainer>
  );
};

export default BadgeComponent;
