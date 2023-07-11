import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Flex from './index';
import '@testing-library/jest-dom';

describe('Flex component', () => {
  it('renders correctly', () => {
    const { container } = render(<Flex />);
    waitFor(() => expect(container.firstChild).toHaveStyleRule('display', 'flex'));
  });

  it('applies direction prop correctly', () => {
    const { container } = render(<Flex direction="column" />);
    waitFor(() => expect(container.firstChild).toHaveStyleRule('flex-direction', 'column'));
  });

  it('applies align prop correctly', () => {
    const { container } = render(<Flex align="flex-start" />);
    waitFor(() => expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-start'));
  });

  it('applies space and layout props correctly', () => {
    const { container } = render(<Flex width="50%" height="200px" ml={3} pt={2} />);
    waitFor(() => expect(container.firstChild).toHaveStyleRule('width', '50%'));
    waitFor(() => expect(container.firstChild).toHaveStyleRule('height', '200px'));
    waitFor(() => expect(container.firstChild).toHaveStyleRule('margin-left', '4px'));
    waitFor(() => expect(container.firstChild).toHaveStyleRule('padding-top', '8px'));
  });
});
