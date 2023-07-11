import { AlertStory } from './Alert.stories';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Component renders without crashing', () => {
  render(<AlertStory />);
  expect(screen.getByText('Default Alerts')).toBeInTheDocument();
});

test('All alerts are present', () => {
  render(<AlertStory />);
  const alerts = screen.queryAllByTestId('alert');
  expect(alerts).toHaveLength(12);
});

test('On close event', () => {
  render(<AlertStory />);
  const closeBtns = screen.queryAllByTestId('closeBtn');
  closeBtns.map((btn) => {
    fireEvent.click(btn);
    waitFor(() => expect(btn).toBeNull());
  });
});
