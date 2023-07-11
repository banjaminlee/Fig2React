import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Tooltip from './index';
import '@testing-library/jest-dom';

describe('Tooltip component', () => {
  it('renders content prop correctly', () => {
    const content = 'This is a tooltip';
    const { getByText } = render(<Tooltip content={content}>Hover me</Tooltip>);
    waitFor(() => expect(getByText(content)).toBeInTheDocument());
  });

  it('renders direction prop correctly', () => {
    const { getByTestId } = render(
      <Tooltip content="This is a tooltip" direction="bottom">
        Hover me
      </Tooltip>,
    );
    waitFor(() => expect(getByTestId('tooltip')).toHaveClass('Tooltip-Tip bottom'));
  });

  it('renders type prop correctly', () => {
    const { getByTestId } = render(
      <Tooltip content="This is a tooltip" type="large">
        Hover me
      </Tooltip>,
    );
    waitFor(() => expect(getByTestId('tooltip')).toHaveClass('Tooltip-Tip large'));
  });

  test('renders tooltip content when hovering over trigger element', () => {
    const tooltipContent = 'This is the tooltip content';
    render(
      <Tooltip content={tooltipContent}>
        <span>Hover me</span>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByText('Hover me'));
    waitFor(() => expect(screen.getByText(tooltipContent)).toBeInTheDocument());
  });

  test('hides tooltip content when mouse leaves trigger element', () => {
    const tooltipContent = 'This is the tooltip content';
    render(
      <Tooltip content={tooltipContent}>
        <span>Hover me</span>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByText('Hover me'));
    fireEvent.mouseLeave(screen.getByText('Hover me'));
    waitFor(() => expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument());
  });
});
