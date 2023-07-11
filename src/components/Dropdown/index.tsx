import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './types';
import Image from '../Image';

const MainWrapper = styled.div`
  width: 100%;
  background: #d7f5ff;
  border: 1px solid #d7f5ff;
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
  font-size: 20px;
  font-weight: 700;
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

const PanelWrapper = styled.div``;

const Dropdown = ({ className, headerTitle, headerImage, children }: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <MainWrapper className={className}>
      <HeaderWrapper onClick={toggleDropdown} className="headerWrapper">
        <InnerHeader>
          {headerImage && <Image src={headerImage} className="headerImage" alt="headerImage" />}
          <p>{headerTitle}</p>
        </InnerHeader>
        <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
      </HeaderWrapper>
      <PanelWrapper className={`dropdown-body ${isOpen && 'open'}`}>{children}</PanelWrapper>
    </MainWrapper>
  );
};

export default Dropdown;
