import React, { forwardRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Image from '../Image';
import Datepicker from './index';
import { DatepickerProps } from './types';
import '@testing-library/jest-dom';

describe('Datepicker', () => {
  const ExampleCustomInput = forwardRef(
    (
      {
        value,
        onClick,
      }: {
        value?: string;
        onClick?: () => void;
      },
      ref: React.ForwardedRef<null>,
    ) => (
      <button className="example-custom-input">
        {value}
        <Image
          className="example-custom-input"
          src={'./assets/img/svg/calendar-days.svg'}
          width={10}
          alt="calendar"
          onClick={onClick}
          style={{ cursor: 'pointer', marginLeft: 5, marginRight: 5 }}
          ref={ref}
        />
      </button>
    ),
  );
  const defaultProps: DatepickerProps = {
    isClearable: true,
    placeholderText: 'Select a date',
    customInput: ExampleCustomInput,
    className: 'custom-class',
    dateFormat: 'dd/MM/yyyy',
    disabled: true,
    inline: true,
    timeInputLabel: 'Time:',
    showTimeInput: true,
    showMonthYearPicker: true,
    showYearPicker: true,
    withPortal: true,
  };

  test('renders with default date', () => {
    render(<Datepicker />);
    const today = new Date();
    const defaultDate = waitFor(() => screen.getByLabelText('datepicker'));
    waitFor(() => expect(defaultDate).toHaveValue(today.toLocaleDateString()));
  });

  test('updates date correctly', async () => {
    render(<Datepicker />);
    const newDate = new Date(2023, 3, 23);
    waitFor(() => userEvent.click(screen.getByLabelText('datepicker')));
    waitFor(() => screen.getByText('23'));
    waitFor(() =>
      expect(screen.getByLabelText('datepicker')).toHaveValue(newDate.toLocaleDateString()),
    );
  });

  test('clears date correctly', async () => {
    render(<Datepicker isClearable />);
    waitFor(() => userEvent.click(screen.getByLabelText('datepicker')));
    waitFor(() => userEvent.click(screen.getByLabelText('clear date')));
    waitFor(() => expect(screen.getByLabelText('datepicker')).toHaveValue(''));
  });

  test('renders with all props', () => {
    render(<Datepicker {...defaultProps} />);
    waitFor(() => expect(screen.getByLabelText('datepicker')).toBeDisabled());
    waitFor(() => expect(screen.getByLabelText('datepicker')).toHaveClass('custom-class'));
    waitFor(() =>
      expect(screen.getByLabelText('datepicker')).toHaveAttribute('placeholder', 'Select a date'),
    );
    waitFor(() => expect(screen.getByTestId('custom-input')).toBeInTheDocument());
    waitFor(() => expect(screen.getByLabelText('Time:')).toBeInTheDocument());
    waitFor(() =>
      expect(screen.getByLabelText('datepicker')).toHaveAttribute('aria-label', 'datepicker'),
    );
  });
});
