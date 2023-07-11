import React from 'react';

export type Card = {
  children: React.ReactNode;
  index?: number;
  style?: React.CSSProperties;
  label?: string;
  fontSize?: number;
  textAlign?: 'left';
  fontfamily?: string;
  padding?: number;
};
