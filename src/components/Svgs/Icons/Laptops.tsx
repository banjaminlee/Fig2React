import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Laptops: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="30" height="30" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.7308 22.5972H35.6752C36.0118 22.5972 36.2798 22.156 36.2798 21.8194L36.2863 2.21828C36.2863 1.45685 35.6883 0.835938 34.9562 0.835938H4.7996C4.06758 0.835938 3.46955 1.45685 3.46955 2.21828L3.46301 21.8194C3.46301 22.156 3.73752 22.5972 4.07412 22.5972H17.0185M4.44993 1.68887H34.9562C35.2373 1.68887 35.2994 1.85554 35.2994 1.85554L35.1883 21.5842H4.44667V21.2149L4.4532 1.68887H4.44993Z"
        fill={color || theme.colors.white}
      />
      <path
        d="M37.809 24.8361C39.041 24.8361 39.0051 24.3035 39.0051 24.3035H39.0149V23.4473H23.2143C23.2143 23.6826 22.9823 23.8754 22.698 23.8754H17.0183C16.734 23.8754 16.502 23.6826 16.502 23.4473H1.00209V24.3035H0.992289C0.992289 24.3035 0.828891 24.8361 2.06091 24.8361H37.809Z"
        fill={color || theme.colors.white}
      />
    </Svg>
  );
};

export default Laptops;
