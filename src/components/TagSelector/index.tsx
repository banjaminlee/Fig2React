import React, { useState } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { TagSelectorProps } from './types';
import Multiselect from 'multiselect-react-dropdown';

const Container = styled.div`
  display: flex;
  & .highlightOption {
    background: none;
    color: unset;
  }
`;

const TagSelector: FunctionComponent<TagSelectorProps> = ({
  options,
  selectedValues,
  onSelect,
  onRemove,
  displayValue,
  customCloseIcon,
  onKeyPressFn,
  onSearch,
  style,
  className,
  ...props
}) => {
  return (
    <Container data-testid={'tagSelector'}>
      <Multiselect
        options={options}
        selectedValues={selectedValues}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue={displayValue}
        customCloseIcon={customCloseIcon}
        onKeyPressFn={onKeyPressFn}
        onSearch={onSearch}
        style={style}
        className={className}
      />
    </Container>
  );
};

export default TagSelector;
