import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const FeaturedPromotion: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.0002C14.1217 21.0002 16.1566 20.1573 17.657 18.657C18.4009 17.9149 18.9909 17.0331 19.393 16.0623C19.7951 15.0915 20.0014 14.0508 20 13C20.0012 11.9491 19.7948 10.9084 19.3925 9.93756C18.9903 8.96674 18.4001 8.08499 17.656 7.343C16.09 5.777 14 5 11.986 3C9.49996 5 8.99996 8 8.99996 10C6.99996 9 6.34296 7.343 6.34296 7.343C4.84263 8.84333 3.99976 10.8782 3.99976 13C3.99976 15.1218 4.84263 17.1567 6.34296 18.657C7.84329 20.1573 9.87818 21.0002 12 21.0002Z"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1277 16.8702C10.6563 16.7268 10.2274 16.4695 9.879 16.121C9.293 15.536 9 14.768 9 14H11L12.015 11C12.5078 11.0024 12.9923 11.1261 13.4259 11.3602C13.8595 11.5943 14.2288 11.9316 14.5011 12.3423C14.7733 12.753 14.9402 13.2245 14.987 13.715C15.0338 14.2056 14.9591 14.7001 14.7694 15.1548C14.5797 15.6096 14.2809 16.0107 13.8994 16.3226C13.5179 16.6345 13.0655 16.8476 12.5821 16.9431C12.0986 17.0386 11.5991 17.0135 11.1277 16.8702Z"
        stroke={color || theme.colors.white}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FeaturedPromotion;
