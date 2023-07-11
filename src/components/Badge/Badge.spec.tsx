import { BadgeStory } from './Badge.stories';
import Badge from './index';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Badge Component Test', () => {
  const renderBadgeComponent = () => {
    render(<BadgeStory />);
  };
  const renderSimpleBadge = () => {
    render(<Badge count={10} />);
  };
  const renderMaxBadge = () => {
    render(<Badge count={10} max={5} />);
  };
  const renderPropsBadge = () => {
    render(<Badge count={10} bgColor={'rgb(88, 112, 255)'} textColor={'#fff'} />);
  };

  test('Component renders without crashing', () => {
    renderBadgeComponent();
    expect(screen.getByText('Simple Badge')).toBeInTheDocument();
  });
  test('Test simple badge', () => {
    renderSimpleBadge();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('Test max limit passed in a badge', () => {
    renderMaxBadge();
    expect(screen.getByText('5+')).toBeInTheDocument();
  });

  test('Ensure color variant prop and display count are passed correctly', () => {
    renderPropsBadge();
    const badge = screen.getByTestId('badge');
    const style = window.getComputedStyle(badge);
    expect(style.backgroundColor).toBe('rgb(88, 112, 255)');
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
