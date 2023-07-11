import React from 'react';
import { VideoControlProps } from './types';

const VideoControl: React.FC<VideoControlProps> = ({
  srcLink,
  height = 400,
  width = 400,
  allowControls = false,
  allowAutoPlay = false,
}) => {
  return (
    <div data-testid={'videoControlContainer'}>
      <video
        src={srcLink}
        height={height}
        width={width}
        controls={allowControls}
        autoPlay={allowAutoPlay}
      />
    </div>
  );
};

export default VideoControl;
