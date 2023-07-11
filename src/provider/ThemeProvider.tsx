import { FC } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

const ThemeProvider: FC = ({ children, theme: { theme } }: any) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};

// Get state to props
const mapStateToProps = (state: any) => ({
  theme: state.theme,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeProvider);
