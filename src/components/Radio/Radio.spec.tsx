import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RadioInput from './index';

describe('RadioInput', () => {
  const mockSetter = jest.fn();

  it('renders with the provided label', () => {
    const { getByLabelText } = render(
      <RadioInput label="Test Label" value="test" checked="" setter={mockSetter} />,
    );
    waitFor(() => expect(getByLabelText('Test Label')).toBeInTheDocument());
  });

  it('calls the setter function with the provided value when clicked', () => {
    const { getByLabelText } = render(
      <RadioInput label="Test Label" value="test" checked="" setter={mockSetter} />,
    );
    waitFor(() => {
      fireEvent.click(getByLabelText('Test Label'));
      expect(mockSetter).toHaveBeenCalledWith('test');
    });
  });

  it('is disabled when disabled prop is true', () => {
    const { getByLabelText } = render(
      <RadioInput label="Test Label" value="test" checked="" setter={mockSetter} disabled={true} />,
    );
    waitFor(() => expect(getByLabelText('Test Label')).toBeDisabled());
  });
});
