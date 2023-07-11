import { SET_THEME } from '../actions/theme-actions';

import { lightTheme, darkTheme } from '../../styles/theme';

// Define your state here
const initialState = {
  loading: false,
  theme: lightTheme,
  themeName: 'light',
  themes: {
    dark: darkTheme,
    light: lightTheme,
  },
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload.theme,
        themeName: payload.name,
      };
    // Return default state if you didn't match any case
    default:
      return state;
  }
};
