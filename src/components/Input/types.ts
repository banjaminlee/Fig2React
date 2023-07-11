import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  hint?: string;
  isError?: boolean;
  error?: string;
  cbHandler?: (data: { name: string; value: string }) => void;
  width?: number;
  height?: number;
  bg?: string;
  radius?: number;
  isIcon?: boolean;
  class?: string;
}

export interface InputWithIconProps extends InputProps {
  name?: string;
  value?: string;
  placeholder?: string;
  icon: string;
  cbHandler: (data: { name: string; value: string }) => void;
}
