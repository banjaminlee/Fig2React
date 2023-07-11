export type SliderProps = {
  value: number;
  handleChange?: (event: { target: { name: string; value: string } }) => void;
  min?: number;
  max: number;
  step?: number;
  tooltip?: 'on' | 'off';
};
