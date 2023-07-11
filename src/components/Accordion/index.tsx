import React, { useState } from 'react';
import styled from 'styled-components';
import { AccordionProps } from './types';
import Image from '../Image';

const MainWrapper = styled.div`
  width: 100%;
  & .dropdown-body {
    padding: 5px;
    display: none;
  }
  & .dropdown-body.open {
    display: block;
  }
`;

const HeaderWrapper = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 400;
  padding: 15px 0px 15px 0px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .icon {
    font-size: 13px;
    color: #5870ff;
    transform: rotate(90deg);
    transition: all 0.2s ease-in-out;
  }
  & .icon.open {
    transform: rotate(0deg);
  }
`;

const InnerHeader = styled.div`
  display: flex;
`;

const Accordion = ({ headerTitle, children, ...props }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  const toggleAccordion = () => setOpen(!isOpen);

  return (
    <MainWrapper className={props.className}>
      {props.mainTitle && <div className="mainTitle">{props.mainTitle}</div>}
      <HeaderWrapper onClick={toggleAccordion} className="headerWrapper">
        <InnerHeader>
          {props.headerImage && (
            <Image src={props.headerImage} className="headerImage" alt="headerImage" />
          )}
          <div className="headerTitle">{headerTitle}</div>
        </InnerHeader>
        <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
      </HeaderWrapper>
      <div className={`dropdown-body ${isOpen && 'open'}`}>{children}</div>
    </MainWrapper>
  );
};

export default Accordion;
