import React, { forwardRef } from 'react';
import Text from '../Text';
import Datepicker from './index';
import styled from 'styled-components';
import Image from '../Image';

export default {
  title: 'Components/DatePicker',
  argTypes: {},
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
  & .red-border {
    border-color: #5870ff;
    background: #fcf7ed;
  }
  & .disabled {
    cursor: not-allowed;
  }
`;

export const Story = () => {
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

  return (
    <>
      <Text font="heading_md" color="text_primary" pt={20} pb={15}>
        Date Picker
      </Text>
      <Text font="body_md" color="text_primary" pb={10}>
        Use a Date Picker when the user wants to select date from calendar.
      </Text>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Default
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Clear datepicker input
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker isClearable placeholderText="I have been cleared!" />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Datepicker input with Calendar icon
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker customInput={<ExampleCustomInput />} />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Inline version
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker inline />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Clear datepicker input with Calendar icon
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker
          customInput={<ExampleCustomInput />}
          isClearable
          placeholderText="I have been cleared!"
        />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Custom Style
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker className="red-border" />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Custom date format
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker dateFormat="yyyy/MM/dd" />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Disable datepicker
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker disabled className="disabled" />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Input time
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Month Picker
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker dateFormat="MM/yyyy" showMonthYearPicker />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Year Picker
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker showYearPicker dateFormat="yyyy" />
      </CardDiv>
      <Text font="body_md" color="text_primary" style={{ fontWeight: 'bold' }} mb={10} mt={10}>
        Portal version
      </Text>
      <CardDiv style={{ padding: 20 }}>
        <Datepicker withPortal />
      </CardDiv>
    </>
  );
};
