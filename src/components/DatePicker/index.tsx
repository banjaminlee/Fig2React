import React, { useState } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { DatepickerProps } from './types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Container = styled.div`
  & .react-datepicker__triangle {
    display: none;
  }
`;

const Datepicker: FunctionComponent<DatepickerProps> = ({
  isClearable,
  placeholderText,
  customInput,
  className,
  dateFormat,
  disabled,
  inline,
  timeInputLabel,
  showTimeInput,
  showMonthYearPicker,
  showYearPicker,
  withPortal,
  children,
  ...props
}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        isClearable={isClearable}
        placeholderText={placeholderText}
        customInput={customInput}
        className={className}
        dateFormat={dateFormat}
        disabled={disabled}
        inline={inline}
        timeInputLabel={timeInputLabel}
        showTimeInput={showTimeInput}
        showMonthYearPicker={showMonthYearPicker}
        showYearPicker={showYearPicker}
        withPortal={withPortal}
      />
    </Container>
  );
};

export default Datepicker;
