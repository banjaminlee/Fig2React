export type DrawerProps = {
  open: boolean;
  onClose?: () => void;
  direction: 'left' | 'right' | 'top' | 'bottom';
  lockBackgroundScroll?: boolean;
  children?: React.ReactNode;
  duration?: number;
  overlayOpacity?: number;
  overlayColor?: String;
  enableOverlay?: boolean;
  style?: React.CSSProperties;
  zIndex?: number;
  size?: number | string;
  className?: string | undefined;
  customIdSuffix?: string | undefined;
};

export type IsCheckedProps = {
  open: boolean;
};

export type DirectionalStyleProps = {
  dir: string;
  size?: number | string;
};
