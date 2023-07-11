import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './index';
import { FieldInput, Input } from '../Input';
import '@testing-library/jest-dom';

describe('Form component', () => {
  const changeHandler = jest.fn();
  it('renders children', () => {
    const { getByText } = render(<Form>Hello, world!</Form>);
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={handleSubmit} data-testid="form" />);
    fireEvent.submit(getByTestId('form'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('applies className and style props', () => {
    const { container } = render(<Form className="my-form" style={{ background: 'red' }} />);
    expect(container.firstChild).toHaveClass('my-form');
    expect(container.firstChild).toHaveStyle('background: red');
  });
});
