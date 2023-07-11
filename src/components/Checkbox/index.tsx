import * as React from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { CheckboxProps } from './types';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<{ disabled?: boolean }>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
`;

const StyledCheckbox = styled.div<{ checked?: boolean; size?: string; disabled?: boolean }>`
  display: inline-block;
  width: ${({ size }) => (size === 'Small' ? '12px' : '16px')};
  height: ${({ size }) => (size === 'Small' ? '12px' : '16px')};
  background: ${({ disabled, checked, theme }) =>
    disabled
      ? 'white'
      : checked == true || checked
      ? theme.colors.background_primary
      : 'transparent'};
  border: ${({ disabled, theme }) =>
    disabled ? `2px solid #b3b3b3` : `2px solid ${theme.colors.selected_toggle_background}`};
  border-radius: 4px;
  background-color: #c94403;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px grey;
  }

  ${Icon} {
    visibility: ${({ checked, disabled }) =>
      disabled ? 'hidden' : checked == true || checked ? 'visible' : 'hidden'};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
`;

const Checkbox: FunctionComponent<CheckboxProps> = ({
  onClick,
  size,
  disabled,
  checked,
  children,
  ...props
}) => {
  return (
    <>
      <CheckboxContainer>
        <HiddenCheckbox disabled={disabled} checked={checked} readOnly {...props} />
        <StyledCheckbox
          size={size}
          disabled={disabled}
          checked={checked}
          {...props}
          onClick={onClick}
          data-testid="styledcheckbox"
        >
          {size == 'Small' ? (
            <Icon viewBox="0 5 24 24" style={{ marginTop: 2 }}>
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          ) : (
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          )}
        </StyledCheckbox>
      </CheckboxContainer>
      {children}
    </>
  );
};

export default Checkbox;
