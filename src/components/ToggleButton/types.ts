import { ReactNode } from "react";

export type Option = {
  title: string;
  location: number;
  fullLength: number;
  titleTemplate: ReactNode;
};

export type ToggleLabelProps = {
  isSelected: boolean;
};

export interface ToggleButtonProps {
  status?: boolean;
  cbHandler?: (state: boolean) => void;
  primaryColor?: string;
  secondaryColor?: string;
  type?: 'simple' | 'button';
  options?: Option[];
  onToggleChange?: Function;
  value?: string;
}

export interface ContainerProps {
  isToggled: boolean;
  secondaryColor?: string;
}

export interface ToggleProps {
  isToggled: boolean;
  primaryColor?: string;
}
