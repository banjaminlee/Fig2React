export type BadgeProps = {
  children?: React.ReactNode;
  count?: number;
  max?: number;
  bgColor?: string;
  textColor?: string;
};

export type BadgeRootProps = {
  textColor?: string;
  bgColor?: string;
};

export type AvatarProps = {
  src: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
};

export type AvatarContainerProps = {
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
};
