export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  size?: 'Small' | 'Large';
};
