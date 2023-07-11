/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Changelog from './index';

export default {
  title: 'Change Log',
  argTypes: {},
};

const LogContent = styled.p`
  font-family: 'Roc Grotesk Regular';
  a {
    text-decoration: none;
    color: #4078c0;
  }
`;

const LogId = styled.a`
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  color: #4078c0;
  code {
    margin: 0;
    border-radius: 3px;
    padding: 0.2em 0.4em;
    font-size: 85%;
    background-color: rgba(175, 184, 193, 0.2);
  }
`;

const LogTitle = styled.h3`
  font-family: 'Roc Grotesk Regular';
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.25em;
`;

const LogSubTitle = styled.h4`
  font-family: 'Roc Grotesk Regular';
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1em;
`;

const LogDescription = styled.li`
  font-family: 'Roc Grotesk Regular';
`;

const LogChanges = styled.pre`
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  border-radius: 3px;
  margin-bottom: 16px;
  background-color: #f6f8fa;
  padding: 1rem;
  code {
    display: inline;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
    word-break: normal;
    white-space: pre;
    border-radius: 3px;
  }
`;

const Logs = () => {
  return (
    <>
      <ul>
        <LogDescription>
          <LogContent>
            <a href="#">#3282</a>
            <LogId href="#">
              <code>24c1be48</code>
            </LogId>{' '}
            Thanks <a href="#">@DevName</a>! - ---
          </LogContent>
          <LogTitle>PageSidebar</LogTitle>
          <LogSubTitle>BREAKING CHANGE</LogSubTitle>
          <ul>
            <li>sidebar sticks to TopBar on scroll</li>
            <li>you can opt-out by setting:</li>
          </ul>
          <LogChanges>
            <code>
              &lt;Page.Sidebar disableSticky&gt; &lt;Page.Sidebar.Menu&gt; ...
              &lt;/Page.Sidebar.Menu&gt; &lt;/Page.Sidebar&gt;
            </code>
          </LogChanges>
        </LogDescription>
      </ul>
    </>
  );
};

const props = [
  {
    version: '30.0.0',
    title: 'Major Changes',
    description: Logs(),
  },
  {
    version: '29.2.3',
    title: 'Patch Changes',
    description: Logs(),
  },
  {
    version: '29.2.2',
    title: 'Patch Changes',
    description: Logs(),
  },
  {
    version: '29.2.1',
    title: 'Patch Changes',
    description: Logs(),
  },
  {
    version: '29.2.0',
    title: 'Patch Changes',
    description: Logs(),
  },
];

export const ChangelogStory: React.FC = () => {
  return <Changelog logs={props} />;
};
