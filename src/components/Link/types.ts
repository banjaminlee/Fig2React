import React from 'react';

export type LinkProps = {
  href: string;
  color?: string;
  size?: 'Small' | 'Medium' | 'Large';
  varient?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};

export type RouteLinkProps = {
  color?: string;
  size?: 'Small' | 'Medium' | 'Large';
  style?: React.CSSProperties;
  path?: string;
};
