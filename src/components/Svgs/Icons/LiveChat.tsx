import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const LiveChat: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H17V22L13 18H9C8.73733 18.0003 8.47719 17.9486 8.23453 17.8481C7.99187 17.7475 7.77148 17.6 7.586 17.414M7.586 17.414L11 14H15C15.5304 14 16.0391 13.7893 16.4142 13.4142C16.7893 13.0391 17 12.5304 17 12V6C17 5.46957 16.7893 4.96086 16.4142 4.58579C16.0391 4.21071 15.5304 4 15 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V12C3 12.5304 3.21071 13.0391 3.58579 13.4142C3.96086 13.7893 4.46957 14 5 14H7V18L7.586 17.414Z"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LiveChat;
