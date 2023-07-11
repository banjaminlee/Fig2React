import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Progress_bar from './index';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';

describe('Progress_bar', () => {
  it('renders the progress bar without percentage', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Progress_bar bgcolor="blue" progress={50} />
      </ThemeProvider>,
    );
    waitFor(() => {
      const progressBar = screen.getByTestId('progress-bar');
      const childContainer = screen.getByTestId('child-container');
      const parentContainer = screen.getByTestId('parent-container');

      expect(progressBar).toBeInTheDocument();
      expect(childContainer).toBeInTheDocument();
      expect(parentContainer).toBeInTheDocument();
      expect(parentContainer).toHaveStyle({ height: '0.5rem', minWidth: '5rem' });
      expect(childContainer).toHaveStyle({
        width: '50%',
        backgroundColor: 'blue',
        height: '0.5rem',
      });
    });
  });

  it('renders the progress bar with percentage', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Progress_bar bgcolor="red" progress={25} showPercentage={true} />
      </ThemeProvider>,
    );
    waitFor(() => {
      const progressBar = screen.getByTestId('progress-bar');
      const childContainer = screen.getByTestId('child-container');
      const parentContainer = screen.getByTestId('parent-container');
      const progress = screen.getByText('25%');

      expect(progressBar).toBeInTheDocument();
      expect(childContainer).toBeInTheDocument();
      expect(parentContainer).toBeInTheDocument();
      expect(progress).toBeInTheDocument();
      expect(progress).toHaveTextContent('25%');
      expect(parentContainer).toHaveStyle({ height: '0.5rem', minWidth: '5rem' });
      expect(childContainer).toHaveStyle({
        width: '25%',
        backgroundColor: 'red',
        height: '0.5rem',
      });
    });
  });
  it('renders progress bar with correct width', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Progress_bar bgcolor="#f00" progress={50} />
      </ThemeProvider>,
    );
    waitFor(() => {
      const childContainer = screen.getByTestId('child-container');

      expect(childContainer).toHaveStyle('width: 50%');
      expect(childContainer).toHaveStyle('background-color: #f00');
    });
  });
});
