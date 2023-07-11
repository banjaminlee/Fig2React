import Carousel from '.';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../Text';

describe('Card component tests', () => {
  const carouselItems = Array(3)
    .fill('v')
    .map((_, index) => <Text key={index}>Carousel item {index} </Text>);

  test('Component renders without crashing', () => {
    const { getByTestId } = render(<Carousel items={carouselItems} initialItems={1} />);
    expect(getByTestId('slide-0')).toBeInTheDocument();
  });
  test('testing the previous button is disabled when current index is 0', () => {
    const { getByTestId } = render(<Carousel items={carouselItems} initialItems={1} />);
    const previousBtn = getByTestId('previousBtn');
    expect(previousBtn).toHaveAttribute('disabled', '');
  });
  test('testing traversing the carousel', () => {
    const { getByTestId } = render(<Carousel items={carouselItems} initialItems={1} />);
    const previousBtn = getByTestId('previousBtn');
    const nextBtn = getByTestId('nextBtn');
    //on click next button
    fireEvent.click(nextBtn);
    expect(getByTestId('slide-1')).toBeInTheDocument();
    //on clicking next button ensure the previous button is not disabled
    expect(previousBtn).not.toHaveAttribute('disabled', '');
    //on clicking previous button
    fireEvent.click(previousBtn);
    expect(getByTestId('slide-0')).toBeInTheDocument();
  });
  test('testing the next button is disabled on the last slide', () => {
    const { getByTestId } = render(<Carousel items={carouselItems} initialItems={1} />);
    const nextBtn = getByTestId('nextBtn');
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    expect(nextBtn).toHaveAttribute('disabled', '');
  });
});
