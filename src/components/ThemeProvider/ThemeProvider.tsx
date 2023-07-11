import { FC } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

const ThemeProvider: FC = ({ children, theme: { theme } }: any) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};

const mapStateToProps = (state: any) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, null)(ThemeProvider);
