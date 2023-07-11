import React, { useEffect, useMemo, useRef } from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';
import { DrawerProps, IsCheckedProps, DirectionalStyleProps } from './types';

const getDirectionStyle = ({ dir, size }: DirectionalStyleProps) => {
  switch (dir) {
    case 'left':
      return {
        top: 0,
        left: 0,
        transform: 'translate3d(-100%, 0, 0)',
        width: size,
        height: '100vh',
      };
    case 'right':
      return {
        top: 0,
        right: 0,
        transform: 'translate3d(100%, 0, 0)',
        width: size,
        height: '100vh',
      };
    case 'bottom':
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'translate3d(0, 100%, 0)',
        width: '100%',
        height: size,
      };
    case 'top':
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: 'translate3d(0, -100%, 0)',
        width: '100%',
        height: size,
      };

    default:
      return {};
  }
};

const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    open,
    onClose,
    children,
    style,
    enableOverlay = true,
    overlayColor = '#000',
    overlayOpacity = 0.4,
    zIndex = 100,
    duration = 500,
    direction,
    size = 250,
    className,
    customIdSuffix,
    lockBackgroundScroll = false,
  } = props;

  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current = window.document.querySelector('body');

      if (bodyRef.current && lockBackgroundScroll) {
        if (open) {
          bodyRef.current.style.overflow = 'hidden';
        } else {
          bodyRef.current.style.overflow = '';
        }
      }
    };

    updatePageScroll();
  }, [open]);

  const idSuffix = useMemo(() => {
    return customIdSuffix || (Math.random() + 1).toString(36).substring(7);
  }, [customIdSuffix]);

  const overlayStyles: CSSProperties = {
    backgroundColor: `${overlayColor}`,
    opacity: `${overlayOpacity}`,
    zIndex: zIndex,
  };

  const drawerStyles: CSSProperties = {
    zIndex: zIndex + 1,
    transitionDuration: `${duration}ms`,
    ...getDirectionStyle({ dir: direction, size }),
    ...style,
  };

  return (
    <div id={'Drawer' + idSuffix}>
      <CheckboxContainer
        type="checkbox"
        id={'Drawer__checkbox' + idSuffix}
        onChange={onClose}
        checked={open}
      />
      <Container
        role="navigation"
        id={'Drawer__container' + idSuffix}
        style={drawerStyles}
        className={className}
        open={open}
      >
        {children}
      </Container>
      {enableOverlay && (
        <OverlayLabel
          htmlFor={'Drawer__checkbox' + idSuffix}
          id={'Drawer__overlay' + idSuffix}
          style={overlayStyles}
          open={open}
        />
      )}
    </div>
  );
};

export default Drawer;

const OverlayLabel = styled.label<IsCheckedProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? 1 : 'initial')};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Container = styled.nav<IsCheckedProps>`
  position: fixed;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transform: ${({ open }) => (open ? 'translate3d(0, 0, 0) !important' : '')};
  background: white;
  transition: all;
  box-shadow: 0 0 10px 5px rgba($color: #000000, $alpha: 0.1);
`;

const CheckboxContainer = styled.input`
  display: none;
`;
