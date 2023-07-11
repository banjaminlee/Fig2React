import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Notepen: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M11.5.793 15.207 4.5 4.707 15H1v-3.707L8.793 3.5V3.5l.707-.707 2-2Zm-2 3.415-7.5 7.5V14h2.293l7.499-7.5L9.5 4.208Zm2-2L10.207 3.5l2.292 2.293L13.793 4.5 11.5 2.207Z"
        fill={color || theme.colors.white}
      ></path>
    </Svg>
  );
};

export default Notepen;
