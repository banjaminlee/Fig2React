import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Envelop: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M1.768 3 8 8.342 14.232 3H1.768ZM15 3.659l-7 6-7-6V13h14V3.659ZM0 2h16v12H0V2Z"
        fill={color || theme.colors.white}
      ></path>
    </Svg>
  );
};

export default Envelop;
