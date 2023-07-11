import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const DownVector: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="14" height="14" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 1.5L8 8.5L1 1.5"
        stroke={color || theme.colors.white}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownVector;
