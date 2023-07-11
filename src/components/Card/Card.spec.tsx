import React from 'react';
import CardComponent from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../Text';

describe('Card component tests', () => {
  test('Component renders without crashing', () => {
    render(<CardComponent label="Card component" />);
    expect(screen.getByText('Card component')).toBeInTheDocument();
  });
  test('Card component testing label and padding props', () => {
    render(<CardComponent label="I am card content label" padding="20px" />);
    expect(screen.getByText('I am card content label')).toBeInTheDocument();
    const cardContainer = screen.getByTestId('cardContainer');
    const cardStyle = window.getComputedStyle(cardContainer);
    expect(cardStyle.padding).toBe('20px');
  });
  test('testing children in card', () => {
    render(
      <CardComponent>
        <Text>Hello</Text>
      </CardComponent>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
