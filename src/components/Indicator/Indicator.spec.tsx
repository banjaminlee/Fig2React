import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { IndicatorProps } from './types';
import Indicator from './index';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from 'styles/theme';

describe('Indicator', () => {
  const defaultProps: IndicatorProps = {
    className: 'custom-class',
  };

  it('renders the Indicator component with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Indicator {...defaultProps}>Content</Indicator>
      </ThemeProvider>,
    );
    waitFor(() => {
      const container = getByTestId('indicator-container');
      const modalBody = getByTestId('modal-body');

      expect(container).toBeInTheDocument();
      expect(modalBody).toBeInTheDocument();
      expect(modalBody).toHaveClass('custom-class');
    });
  });
});
