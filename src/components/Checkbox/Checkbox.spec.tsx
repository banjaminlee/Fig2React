import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Checkbox from './index';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';

describe('Checkbox', () => {
  it('renders the checkbox with the correct attributes', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Checkbox checked={true} size="Small" />
      </ThemeProvider>,
    );
    const checkbox = getByTestId('styledcheckbox');
    waitFor(() => expect(checkbox).toHaveAttribute('type', 'checkbox'));
    waitFor(() => expect(checkbox).toHaveAttribute('checked'));
    waitFor(() => expect(checkbox).toHaveStyle('width: 12px'));
    waitFor(() => expect(checkbox).toHaveStyle('height: 12px'));
  });

  it('handles onClick events', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Checkbox onClick={handleClick} />
      </ThemeProvider>,
    );
    const checkbox = getByTestId('styledcheckbox');
    fireEvent.click(checkbox);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the checkbox when the disabled prop is set to true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Checkbox disabled={true} />
      </ThemeProvider>,
    );
    const checkbox = getByTestId('styledcheckbox');
    waitFor(() => expect(checkbox).toHaveAttribute('disabled'));
    waitFor(() => expect(checkbox).toHaveStyle('cursor: not-allowed'));
  });
});
