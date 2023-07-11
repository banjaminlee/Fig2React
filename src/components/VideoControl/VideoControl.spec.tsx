import VideoControl from './index';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('VideoControl component unit test', () => {
  it('Component renders without crashing', () => {
    const { getByTestId } = render(
      <VideoControl srcLink="./assets/video/phone 6.mp4" data-testid={'videoControlContainer'} />,
    );
    expect(getByTestId('videoControlContainer')).toBeInTheDocument();
  });
  it('Test srcLink, height and width props', () => {
    const { getByTestId } = render(
      <VideoControl
        srcLink="./assets/video/phone 6.mp4"
        data-testid={'videoControlContainer'}
        height={300}
        width={800}
        allowControls={true}
        allowAutoPlay={true}
      />,
    );
    const videoControlContainer = getByTestId('videoControlContainer');
    expect(videoControlContainer.querySelector('video')?.getAttribute('height')).toBe('300');
    expect(videoControlContainer.querySelector('video')?.getAttribute('width')).toBe('800');
    expect(videoControlContainer.querySelector('video')?.getAttribute('src')).toBe(
      './assets/video/phone 6.mp4',
    );
  });
  it('Allow autoplay and controls props', () => {
    const { getByTestId } = render(
      <VideoControl
        srcLink="./assets/video/phone 6.mp4"
        data-testid={'videoControlContainer'}
        allowControls={true}
        allowAutoPlay={true}
      />,
    );
    const videoControlContainer = getByTestId('videoControlContainer');
    expect(videoControlContainer.querySelector('video')?.getAttribute('autoplay')).toBe('');
    expect(videoControlContainer.querySelector('video')?.getAttribute('controls')).toBe('');
  });
});
