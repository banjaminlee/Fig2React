import Timeline from '.';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Timeline component unit tests', () => {
  it('Component renders without crashing', () => {
    const { getByTestId } = render(<Timeline type={'dot'} data-testid={'timelineContainer'} />);
    expect(getByTestId('timelineContainer')).toBeInTheDocument();
  });
  it('Test type and children props', () => {
    const { getByTestId } = render(
      <Timeline
        type={'mark'}
        data-testid={'timelineContainer'}
        style={{ marginTop: 4, marginBottom: 4 }}
      >
        <p>Timeline Component</p>
      </Timeline>,
    );
    //test children is being passed correctly
    const timelineContainer = getByTestId('timelineContainer');
    expect(getByTestId('timelineContainer')).toHaveTextContent('Timeline Component');
    //test if type prop is being passed correctly
    expect(timelineContainer.getElementsByTagName('svg')).toBeTruthy();
    //test style prop is being passed correctly
    expect(timelineContainer.querySelector('svg')).toHaveStyle({ marginTop: 4, marginBottom: 4 });
  });
});
