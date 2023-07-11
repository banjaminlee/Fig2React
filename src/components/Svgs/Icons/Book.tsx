import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Book: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 3.42232V25.089M16.5 3.42232C14.5533 2.12898 11.91 1.33398 9 1.33398C6.09 1.33398 3.44667 2.12898 1.5 3.42232V25.089C3.44667 23.7957 6.09 23.0007 9 23.0007C11.91 23.0007 14.5533 23.7957 16.5 25.089M16.5 3.42232C18.4467 2.12898 21.09 1.33398 24 1.33398C26.9117 1.33398 29.5533 2.12898 31.5 3.42232V25.089C29.5533 23.7957 26.9117 23.0007 24 23.0007C21.09 23.0007 18.4467 23.7957 16.5 25.089"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Book;
