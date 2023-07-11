import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Text from './index';

describe('Text Component', () => {
  it('should render without errors', () => {
    const { container } = render(<Text font="Roboto">Hello World</Text>);
    waitFor(() => expect(container).toBeInTheDocument());
  });

  it('should render the correct text', () => {
    const { getByText } = render(<Text font="Roboto">Hello World</Text>);
    waitFor(() => expect(getByText('Hello World')).toBeInTheDocument());
  });

  it('should apply default props correctly', () => {
    const { getByText } = render(<Text font="Roboto">Default Props</Text>);
    const textElement = getByText('Default Props');
    waitFor(() =>
      expect(textElement).toHaveStyle({ color: '#333333', fontFamily: 'Roc Grotesk Regular' }),
    );
  });

  it('should apply custom props correctly', () => {
    const { getByText } = render(
      <Text font="Roboto" color="red" align="center">
        Custom Props
      </Text>,
    );
    const textElement = getByText('Custom Props');
    waitFor(() =>
      expect(textElement).toHaveStyle({ color: 'red', fontFamily: ' Roboto', textAlign: 'center' }),
    );
  });
});
