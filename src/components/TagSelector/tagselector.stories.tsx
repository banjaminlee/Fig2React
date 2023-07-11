import React, { useEffect, useState, useCallback } from 'react';
import Text from '../Text';
import TagSelector from './index';
import styled from 'styled-components';
import Image from '../../components/Image';

export default {
  title: 'Components/TagSelector',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  & .multiSelection {
    & span {
      align-items: center;
      padding: 6px 12px 6px 16px;
      gap: 8px;
      width: fit-content;
      background: #ffffff;
      border: 1.5px solid #f3eee4;
      border-radius: 100px;
      flex: none;
      order: 0;
      flex-grow: 0;
      color: black;
    }
  }
`;

const CloseIcon = styled.div`
  background: #c94403;
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  & img {
    padding-top: 3px;
  }
`;

export const Story = () => {
  const selectOption = [
    {
      cat: 'Group 1',
      key: 'Apple',
    },
    {
      cat: 'Group 1',
      key: 'Peach',
    },
    {
      cat: 'Group 1',
      key: 'Banana',
    },
    {
      cat: 'Group 2',
      key: 'Pear',
    },
    {
      cat: 'Group 2',
      key: 'Strawberries',
    },
    {
      cat: 'Group 2',
      key: 'Watermelon',
    },
    {
      cat: 'Group 2',
      key: 'Cherry',
    },
  ];

  const initialValues = [
    {
      cat: 'Group 1',
      key: 'Apple',
    },
    {
      cat: 'Group 1',
      key: 'Peach',
    },
  ];

  const noRefCheck = () => {};

  const onSelected = () => {};

  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Tag Selector
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 40 }}>
        <TagSelector
          customCloseIcon={
            <CloseIcon>
              <Image
                src={'./branding/svg/bestsellerclose.svg'}
                width={10}
                height={10}
                alt="bestsellerclose"
              />
            </CloseIcon>
          }
          displayValue="key"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={onSelected}
          options={selectOption}
          className="multiSelection"
        />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={20}>
        Initially set value
      </Text>
      <CardDiv style={{ padding: 40 }}>
        <TagSelector
          customCloseIcon={
            <CloseIcon>
              <Image
                src={'./branding/svg/bestsellerclose.svg'}
                width={10}
                height={10}
                alt="bestsellerclose"
              />
            </CloseIcon>
          }
          displayValue="key"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={onSelected}
          options={selectOption}
          selectedValues={initialValues}
          className="multiSelection"
        />
      </CardDiv>
    </>
  );
};
