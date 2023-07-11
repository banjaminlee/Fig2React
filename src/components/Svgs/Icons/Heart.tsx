import React from 'react';
import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Heart: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.28546 3.48097C1.47391 3.026 1.75014 2.6126 2.09837 2.26438C2.44659 1.91616 2.85998 1.63993 3.31496 1.45147C3.76993 1.26301 4.25757 1.16602 4.75003 1.16602C5.24249 1.16602 5.73013 1.26301 6.18511 1.45147C6.64008 1.63993 7.05348 1.91616 7.4017 2.26438L8.50003 3.36272L9.59837 2.26438C10.3016 1.56112 11.2555 1.16603 12.25 1.16603C13.2446 1.16603 14.1984 1.56112 14.9017 2.26438C15.605 2.96765 16.0001 3.92148 16.0001 4.91605C16.0001 5.91062 15.605 6.86445 14.9017 7.56772L8.50003 13.9694L2.09837 7.56772C1.75014 7.2195 1.47391 6.8061 1.28546 6.35112C1.097 5.89615 1 5.40851 1 4.91605C1 4.42359 1.097 3.93595 1.28546 3.48097Z"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Heart;
