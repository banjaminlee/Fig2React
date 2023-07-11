import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import DesktopMenu, { Menu } from './index';
import Text from '../Text';

export default {
  title: 'Components/Menu',
  argTypes: {},
};

export const Story = () => {
  const [isWidth, setIsWidth] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 678) {
      setIsWidth(true);
    } else {
      setIsWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return <> {isWidth ? <Menu /> : <DesktopMenu />}</>;
};
