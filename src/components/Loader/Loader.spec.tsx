import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Loader from './index';

import { ThemeProvider } from 'styled-components';

import { lightTheme } from 'styles/theme';

describe('Loader component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Loader />
      </ThemeProvider>,
    );
    const loaderElement = container.querySelector('.loader');
    const spinnerElement = container.querySelector('.loading-spinner');
    waitFor(() => {
      expect(loaderElement).toBeInTheDocument();
      expect(spinnerElement).toBeInTheDocument();
    });
  });

  it('should render a large spinner when isLarge prop is passed', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Loader isLarge />
      </ThemeProvider>,
    );
    const spinnerElement = container.querySelector('.loading-spinner');
    waitFor(() => {
      expect(spinnerElement).toHaveStyle('width: 32px;');
      expect(spinnerElement).toHaveStyle('height: 32px;');
    });
  });

  it('should render a spinner with a custom color when color prop is passed', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Loader color="red" />
      </ThemeProvider>,
    );
    const spinnerElement = container.querySelector('.loading-spinner');
    waitFor(() => expect(spinnerElement).toHaveStyle('border-color: red;'));
  });
});
