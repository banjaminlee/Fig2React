import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quotecom from './index';

describe('Quotecom', () => {
  it('renders the children', () => {
    const { getByText } = render(
      <Quotecom>
        <p>Some quote text</p>
      </Quotecom>,
    );
    waitFor(() => expect(getByText('Some quote text')).toBeInTheDocument());
  });

  it('uses the provided color', () => {
    const { getByTestId } = render(<Quotecom color="#ABCDEF" />);
    waitFor(() => {
      const quoteIcon = getByTestId('quote-icon');
      expect(quoteIcon).toHaveAttribute('color', '#ABCDEF');
    });
  });

  it('uses the default color if no color is provided', () => {
    const { getByTestId } = render(<Quotecom />);
    waitFor(() => {
      const quoteIcon = getByTestId('quote-icon');
      expect(quoteIcon).toHaveAttribute('color', '#5870FF');
    });
  });
});
