import React from 'react';
import ThemeProvider from './ThemeProvider';
import TemplateChildren from './TemplateChildren';

export default {
  title: 'Components/ThemeProvider',
  argTypes: {},
  component: ThemeProvider,
};

const PageTemplate = (args) =>
  <ThemeProvider {...args}>
    <TemplateChildren></TemplateChildren>
  </ThemeProvider>;

export const Template = PageTemplate.bind({});
