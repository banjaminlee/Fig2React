import React from 'react';
import { Provider } from 'react-redux';

// Bring the redux store too
import store from '../src/redux/store';
import ThemeProvider from '../src/provider/ThemeProvider';
import GlobalStyles from '../src/styles/global';

const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

const globalDecorator = (StoryFn) => (
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyles />
      <StoryFn />
    </ThemeProvider>
  </Provider>
);

export const decorators = [globalDecorator];

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Introduction', 'Getting Started', 'Brand Identity', 'Layout', 'Components', 'Guidelines', 'API', 'FAQ', 'Change Log', 'Legal Notice'],
      locales: '',
    },
  },
  designToken: {
    defaultTab: 'Colors',
    files: tokenFiles,
    styleInjection:
    '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'
  }
}