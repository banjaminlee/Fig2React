import { ButtonHTMLAttributes } from 'react';

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'Small' | 'Medium' | 'Large';
  isGhost?: boolean;
  Secondary?: boolean;
  Carousel?: boolean;
}

export interface IconButtonType extends ButtonType {
  Icon: JSX.Element;
  disabled?: boolean;
}

export interface CarouselButtonType extends ButtonType {
  direction: string;
  types: number;
}

export interface GeneralButtonType extends ButtonType {
  backgroundColor?: string;
  label?: string;
  variant?: string;
  size: 'Small' | 'Medium' | 'Large';
}
