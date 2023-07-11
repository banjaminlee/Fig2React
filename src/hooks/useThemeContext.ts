import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const useThemeContext = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return { isDark, toggleTheme };
};

export default useThemeContext;
