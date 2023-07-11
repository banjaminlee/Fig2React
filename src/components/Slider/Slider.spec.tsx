import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SliderComponent from './index';

describe('SliderComponent', () => {
  it('renders the component with the given props', () => {
    const handleChange = jest.fn();
    const props = {
      value: 50,
      handleChange,
      min: 0,
      max: 100,
      step: 10,
    };

    render(<SliderComponent data-testid="slider" {...props} tooltip="on" />);
    waitFor(() => {
      const slider = screen.getByTestId('slider');
      expect(slider).toBeInTheDocument();
      expect(slider).toHaveAttribute('value', '50');
      expect(slider).toHaveAttribute('min', '0');
      expect(slider).toHaveAttribute('max', '100');
      expect(slider).toHaveAttribute('step', '10');

      const tooltip = screen.getByText('50');
      expect(tooltip).toBeInTheDocument();

      fireEvent.change(slider, { target: { value: '60' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ target: { name: '', value: '60' } });
    });
  });

  it('does not render tooltip if tooltip prop is off', () => {
    const handleChange = jest.fn();
    const props = {
      value: 50,
      handleChange,
      min: 0,
      max: 100,
    };

    render(<SliderComponent data-testid="slider" {...props} tooltip="off" />);
    waitFor(() => {
      const tooltip = screen.queryByText('50');
      expect(tooltip).not.toBeInTheDocument();
    });
  });
});
