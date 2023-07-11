import { createContext } from 'react';

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: (state: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  toggleTheme: () => {
    null;
  },
});

export default ThemeContext;
