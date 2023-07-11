import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Input, InputByRef, PhoneInput, EmailInput, PasswordInput } from './index';

import { ThemeProvider } from 'styled-components';

import { lightTheme } from 'styles/theme';

describe('Input', () => {
  const defaultProps = {
    id: 'input-1',
    name: 'input-1',
    label: 'Input 1',
    value: '',
    placeholder: 'Enter text',
    cbHandler: jest.fn(),
  };

  it('renders the input with the correct label', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <Input {...defaultProps} />
      </ThemeProvider>,
    );
    const inputElement = waitFor(() => getByLabelText('Input 1'));
    waitFor(() => {
      expect(inputElement).toBeInTheDocument();
    });
  });

  it('calls the onChange callback handler on input change', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <Input {...defaultProps} />
      </ThemeProvider>,
    );

    waitFor(() => fireEvent.change(getByLabelText('Input 1'), { target: { value: 'hello' } }));
    waitFor(() => expect(defaultProps.cbHandler).toHaveBeenCalled());
  });

  it('displays the error message when there is an error', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Input {...defaultProps} />
      </ThemeProvider>,
    );

    waitFor(() => expect(getByText('Invalid input')).toBeInTheDocument());
  });

  it('does not display the error message when there is no error', () => {
    const { queryByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Input {...defaultProps} />
      </ThemeProvider>,
    );
    const errorElement = queryByText('Invalid input');
    waitFor(() => expect(errorElement).not.toBeInTheDocument());
  });

  it('applies the "disabled" attribute when the input is disabled', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <Input {...defaultProps} disabled={true} />
      </ThemeProvider>,
    );

    waitFor(() => expect(getByLabelText('Input 1')).toBeDisabled());
  });

  it('does not apply the "disabled" attribute when the input is enabled', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <Input {...defaultProps} />
      </ThemeProvider>,
    );
    waitFor(() => {
      expect(getByLabelText('Input 1')).not.toBeDisabled();
    });
  });
});

describe('InputByRef', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <InputByRef id="input" label="Input Label" />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onChange when the input is changed', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <InputByRef id="input" label="Input Label" onChange={handleChange} />
      </ThemeProvider>,
    );

    waitFor(() =>
      fireEvent.change(getByLabelText('Input Label') as HTMLInputElement, {
        target: { value: 'new value' },
      }),
    );
    waitFor(() => expect(handleChange).toHaveBeenCalled());
  });

  it('should have an error state when isError prop is true', () => {
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <InputByRef id="input" label="Input Label" isError error="Input is required" />
      </ThemeProvider>,
    );

    const errorMessage = getByText('Input is required');
    waitFor(() => expect(getByLabelText('Input Label').classList.contains('error')).toBe(true));
    waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});

describe('PhoneInput', () => {
  it('renders a label and input element', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <PhoneInput label="Phone Number" />
      </ThemeProvider>,
    );
    waitFor(() => expect(screen.getByText(/phone number/i)).toBeInTheDocument());
    waitFor(() => expect(screen.getByRole('textbox')).toBeInTheDocument());
  });

  it('displays an error message when passed an error prop', () => {
    const errorMessage = 'Please enter a valid phone number';
    render(
      <ThemeProvider theme={lightTheme}>
        <PhoneInput label="Phone Number" error={errorMessage} />
      </ThemeProvider>,
    );
    waitFor(() => expect(screen.getByText(errorMessage)).toBeInTheDocument());
  });

  it('applies the disabled style when passed the disabled prop', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <PhoneInput label="Phone Number" disabled />
      </ThemeProvider>,
    );
    waitFor(() => expect(screen.getByRole('textbox')).toBeDisabled());
    waitFor(() => expect(screen.getByText(/phone number/i)).toHaveStyle({ color: '#B1B5B9' }));
  });
});

describe('EmailInput', () => {
  const props = {
    id: 'email-input',
    label: 'Email',
    placeholder: 'Enter your email address',
    hint: 'We will never share your email with anyone.',
  };

  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <EmailInput {...props} />
      </ThemeProvider>,
    );
    waitFor(() => expect(getByLabelText(props.label)).toBeInTheDocument());
  });
  it('shows the label when the input is focused', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <EmailInput {...props} />
      </ThemeProvider>,
    );

    waitFor(() => fireEvent.focus(getByLabelText(props.label)));

    waitFor(() => expect(screen.getByText(props.label)).toHaveStyle('opacity: 1'));
  });
  it('shows the hint when the input is focused', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <EmailInput {...props} />
      </ThemeProvider>,
    );
    waitFor(() => fireEvent.focus(getByLabelText(props.label)));
    waitFor(() => expect(screen.getByText(props.hint)).toBeInTheDocument());
  });
});

describe('PasswordInput', () => {
  it('renders with label and placeholder', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <PasswordInput id="test" label="Test" placeholder="Test Placeholder" />
      </ThemeProvider>,
    );
    waitFor(() => expect(getByLabelText('Test')).toBeInTheDocument());
    waitFor(() => expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument());
  });

  it('shows password on click', () => {
    const { getByLabelText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <PasswordInput id="test" label="Test" />
      </ThemeProvider>,
    );
    const passwordInput = waitFor(() => getByLabelText('Test') as HTMLInputElement);

    waitFor(() => expect(getByLabelText('Test')).toBe('password'));
    waitFor(() => fireEvent.click(getByTestId('show-hide-button')));
    waitFor(() => expect(passwordInput).toBe('text'));
    waitFor(() => fireEvent.click(getByTestId('show-hide-button')));

    waitFor(() => expect(passwordInput).toBe('password'));
  });
});
