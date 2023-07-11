import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export type TooltipProps = {
  delay?: number;
  direction?: string;
  content?: React.ReactNode;
  type?: string;
}

export type CustomTooltipProps = {
  direction?: string;
  content?: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
}

