import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Charger: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.16663 1V5.66667H11.8333L5.83329 13V8.33333H1.16663L7.16663 1Z"
        stroke={color || theme.colors.white}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Charger;
