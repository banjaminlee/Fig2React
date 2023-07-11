import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Career: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.8335 28.3327H34.1668V24.9993C34.1668 23.9602 33.8429 22.947 33.2404 22.1004C32.6378 21.2538 31.7865 20.616 30.8047 20.2756C29.823 19.9352 28.7595 19.9091 27.7623 20.201C26.765 20.4929 25.8834 21.0883 25.2402 21.9043M25.8335 28.3327H9.16683M25.8335 28.3327V24.9993C25.8335 23.906 25.6235 22.861 25.2402 21.9043M25.2402 21.9043C24.6212 20.3576 23.5531 19.0318 22.1735 18.0979C20.7939 17.164 19.1661 16.6648 17.5002 16.6648C15.8342 16.6648 14.2064 17.164 12.8268 18.0979C11.4472 19.0318 10.3791 20.3576 9.76016 21.9043M9.16683 28.3327H0.833496V24.9993C0.833572 23.9602 1.15739 22.947 1.75993 22.1004C2.36247 21.2538 3.21381 20.616 4.19558 20.2756C5.17735 19.9352 6.24079 19.9091 7.23806 20.201C8.23533 20.4929 9.11688 21.0883 9.76016 21.9043M9.16683 28.3327V24.9993C9.16683 23.906 9.37683 22.861 9.76016 21.9043M22.5002 6.66602C22.5002 7.9921 21.9734 9.26387 21.0357 10.2015C20.098 11.1392 18.8262 11.666 17.5002 11.666C16.1741 11.666 14.9023 11.1392 13.9646 10.2015C13.0269 9.26387 12.5002 7.9921 12.5002 6.66602C12.5002 5.33993 13.0269 4.06816 13.9646 3.13048C14.9023 2.1928 16.1741 1.66602 17.5002 1.66602C18.8262 1.66602 20.098 2.1928 21.0357 3.13048C21.9734 4.06816 22.5002 5.33993 22.5002 6.66602ZM32.5002 11.666C32.5002 12.5501 32.149 13.3979 31.5239 14.023C30.8987 14.6482 30.0509 14.9993 29.1668 14.9993C28.2828 14.9993 27.4349 14.6482 26.8098 14.023C26.1847 13.3979 25.8335 12.5501 25.8335 11.666C25.8335 10.782 26.1847 9.93411 26.8098 9.30899C27.4349 8.68387 28.2828 8.33268 29.1668 8.33268C30.0509 8.33268 30.8987 8.68387 31.5239 9.30899C32.149 9.93411 32.5002 10.782 32.5002 11.666ZM9.16683 11.666C9.16683 12.5501 8.81564 13.3979 8.19052 14.023C7.5654 14.6482 6.71755 14.9993 5.8335 14.9993C4.94944 14.9993 4.10159 14.6482 3.47647 14.023C2.85135 13.3979 2.50016 12.5501 2.50016 11.666C2.50016 10.782 2.85135 9.93411 3.47647 9.30899C4.10159 8.68387 4.94944 8.33268 5.8335 8.33268C6.71755 8.33268 7.5654 8.68387 8.19052 9.30899C8.81564 9.93411 9.16683 10.782 9.16683 11.666Z"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Career;
