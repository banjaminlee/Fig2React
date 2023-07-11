import React from 'react';
import { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { TooltipProps, CustomTooltipProps, ButtonType } from './types';
import { Button } from '../Button';

const Wrapper = styled.div<{ backgroundColor?: string; fontColor?: string; type?: string }>`
  & .Tooltip-Wrapper {
    display: inline-block;
    position: relative;
  }
  & .Tooltip-Tip {
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    color: ${({ fontColor }) => (fontColor ? fontColor : 'white')};
    background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'black')};
    font-size: 12px;
    font-family: 'Roc Grotesk Light';
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
    min-width: ${({ type }) => (type == 'large' ? '202px' : 'none')};
    white-space: ${({ type }) => (type == 'large' ? 'pre-wrap' : 'none')};
  }
  & .Tooltip-Tip::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: -6px;
  }
  & .Tooltip-Tip.top {
    top: -35px;
  }

  & .Tooltip-Tip.top::before {
    top: 100%;
    border-top-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'black')};
  }

  & .Tooltip-Tip.right {
    left: calc(100% + 10px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  & .Tooltip-Tip.right::before {
    left: -6px;
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'black')};
  }

  & .Tooltip-Tip.bottom {
    bottom: -35px;
  }

  & .Tooltip-Tip.bottom::before {
    bottom: 100%;
    border-bottom-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'black')};
  }

  & .Tooltip-Tip.left {
    left: auto;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  & .Tooltip-Tip.left::before {
    left: auto;
    right: -12px;
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'black')};
  }
`;

const InnerWrapper = styled.div`
  text-align: right;
`;

const YesButton = styled.button<ButtonType>`
  width: 51px;
  height: 20px;
  border: unset;
  cursor: pointer;
  background: #00a5ec;
  border-radius: 2px;
  font-family: 'Roc Grotesk Medium';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 13px;
  color: #ffffff;
`;

const NoButton = styled.button<ButtonType>`
  width: 51px;
  height: 20px;
  border: unset;
  cursor: pointer;
  background: unset;
  border-radius: 2px;
  font-family: 'Roc Grotesk Medium';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 13px;
  color: #00a5ec;
`;

const Tooltip: React.FC<TooltipProps> = ({ type, delay, direction, content, children }) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <Wrapper type={type}>
      {type == 'large' ? (
        <div className="Tooltip-Wrapper" onMouseEnter={showTip}>
          {children}
          {active && (
            <div className={`Tooltip-Tip ${direction || 'top'}`}>
              {content}
              {type == 'large' && (
                <InnerWrapper>
                  <NoButton onClick={hideTip}>No</NoButton>
                  <YesButton onClick={hideTip}>Yes</YesButton>
                </InnerWrapper>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
          {children}
          {active && <div className={`Tooltip-Tip ${direction || 'top'}`}>{content}</div>}
        </div>
      )}
    </Wrapper>
  );
};

export default Tooltip;

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  backgroundColor,
  fontColor,
  direction,
  content,
  children,
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor} fontColor={fontColor}>
      <div className="Tooltip-Wrapper">
        <Button
          size="Small"
          style={{ marginRight: 5, marginLeft: 5, marginTop: 5, marginBottom: 5 }}
        >
          Test me
        </Button>
        {children}
        <div className={`Tooltip-Tip ${direction || 'top'}`}>{content}</div>
      </div>
    </Wrapper>
  );
};
