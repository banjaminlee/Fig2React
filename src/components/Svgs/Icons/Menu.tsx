import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Menu: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 18.5H20M4 6.5H20H4ZM4 12.5H20H4Z"
        stroke={color || theme.colors.white}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Menu;
