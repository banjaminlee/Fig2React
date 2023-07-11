import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import ToggleButton from './index';
import { ToggleButtonProps, Option, ContainerProps, ToggleProps, ToggleLabelProps } from './types';

describe('ToggleButton', () => {
  const options = [
    { title: 'Option 1', location: 0, fullLength: 2, titleTemplate: null },
    { title: 'Option 2', location: 1, fullLength: 2, titleTemplate: null },
  ];

  const defaultProps: ToggleButtonProps = {
    options,
  };

  it('should render without errors', () => {
    const { container } = render(<ToggleButton {...defaultProps} />);
    expect(container.firstChild).toBeDefined();
  });

  it('should call onToggleChange prop when toggled', () => {
    const onToggleChange = jest.fn();
    const { getByTestId } = render(
      <ToggleButton data-testid="toggle" {...defaultProps} onToggleChange={onToggleChange} />,
    );
    waitFor(() => {
      const toggle = getByTestId('toggle');
      fireEvent.click(toggle);

      expect(onToggleChange).toHaveBeenCalledTimes(1);
      expect(onToggleChange).toHaveBeenCalledWith(true);
    });
  });

  it('should render the correct number of options', () => {
    const { getByTestId } = render(<ToggleButton data-testid="option-group" {...defaultProps} />);
    waitFor(() => {
      const optionGroup = getByTestId('option-group');

      expect(optionGroup.children).toHaveLength(options.length);
    });
  });
});
