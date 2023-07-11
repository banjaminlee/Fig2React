import React, { useState } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { ReactShowMoreTextProps, ReadMoreTextProps } from './types';
import ShowMoreText from 'react-show-more-text';

const Container = styled.div``;

const Showmore: FunctionComponent<ReactShowMoreTextProps> = ({
  anchorClass,
  className,
  expanded,
  keepNewLines,
  less,
  lines,
  more,
  onClick,
  width,
  truncatedEndingComponent,
  children,
  ...props
}) => {
  return (
    <Container>
      <ShowMoreText
        anchorClass={anchorClass}
        className={className}
        expanded={expanded}
        keepNewLines={keepNewLines}
        less={less}
        lines={lines}
        more={more}
        onClick={onClick}
        width={width}
        truncatedEndingComponent={truncatedEndingComponent}
      >
        {children}
      </ShowMoreText>
    </Container>
  );
};

export default Showmore;

const MainContainer = styled.div`
  position: relative;
`;

const Collapse = styled.div`
  & .readmore-body {
    height: 120px;
    overflow: hidden;
  }
  & .readmore-body.open {
    overflow: unset;
  }
`;

const ReadmoreLink = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 60px;
  text-align: center;
  color: blue;
  font-weight: bold;
  font-size: 16px;
  padding-top: 40px;
  background-image: linear-gradient(to bottom, transparent, white);
`;

const ReadmoreText = styled.div`
  margin-top: 45px;
  cursor: pointer;
`;

const ReadlessText = styled.div`
  text-align: center;
  color: blue;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 45px;
`;

export const Readmore: FunctionComponent<ReadMoreTextProps> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainContainer>
      <Collapse>
        <div className={`readmore-body ${isOpen && 'open'}`}>{children}</div>
      </Collapse>
      {isOpen ? (
        <ReadlessText onClick={onToggle}>Read less</ReadlessText>
      ) : (
        <ReadmoreLink>
          <ReadmoreText onClick={onToggle}>Read more</ReadmoreText>
        </ReadmoreLink>
      )}
    </MainContainer>
  );
};
