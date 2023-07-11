import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Awards: React.FC<SvgProps> = ({ color, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 25.5039C15.3976 25.5039 11.6666 21.7729 11.6666 17.1706V5.60341C11.6666 5.54846 11.7112 5.50391 11.7661 5.50391H28.2338C28.2887 5.50391 28.3333 5.54846 28.3333 5.60341V17.1706C28.3333 21.7729 24.6023 25.5039 20 25.5039ZM20 25.5039V35.5039M20 35.5039H15M20 35.5039H25"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5003 8.83789H5.83369C5.37345 8.83789 4.99895 9.2107 5.01 9.67081C5.1185 14.1869 6.22533 19.6712 12.5003 19.6712M27.5003 8.83789H34.167C34.6272 8.83789 35.0017 9.2107 34.9907 9.67081C34.8822 14.1869 33.7754 19.6712 27.5003 19.6712"
        stroke={color || theme.colors.white}
        strokeWidth="1.25"
      />
    </Svg>
  );
};

export default Awards;
