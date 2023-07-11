import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Image from './index';
import '@testing-library/jest-dom';

describe('Image component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Image src="https://www.w3schools.com/images/w3schools_green.jpg" />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies width prop correctly', () => {
    const { container } = render(
      <Image src="https://www.w3schools.com/images/w3schools_green.jpg" width={200} />,
    );
    waitFor(() => expect(container.firstChild).toHaveStyleRule('width', '200px'));
  });

  it('applies height prop correctly', () => {
    const { container } = render(
      <Image src="https://www.w3schools.com/images/w3schools_green.jpg" height={150} />,
    );
    waitFor(() => expect(container.firstChild).toHaveStyleRule('height', '150px'));
  });

  it('applies space and layout props correctly', () => {
    const { container } = render(
      <Image src="https://www.w3schools.com/images/w3schools_green.jpg" mt={2} ml={3} />,
    );
    waitFor(() => expect(container.firstChild).toHaveStyleRule('margin-top', '8px'));
    waitFor(() => expect(container.firstChild).toHaveStyleRule('margin-left', '4px'));
  });
});
