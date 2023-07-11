import React from 'react';
import styled from 'styled-components';
import { ChangelogProps } from './types';

const Changelog: React.FC<ChangelogProps> = ({ logs }) => {
  return (
    <>
      <Title>Change Log</Title>
      {logs.map((log, index) => (
        <React.Fragment key={index}>
          <Version>{log.version}</Version>
          <LogTitle>{log.title}</LogTitle>
          {log.description && log.description}
        </React.Fragment>
      ))}
    </>
  );
};

export default Changelog;

const Version = styled.h2`
  font-family: 'Roc Grotesk Regular';
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.5em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #ddd;
`;

const LogTitle = styled.h3`
  font-family: 'Roc Grotesk Regular';
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.25em;
`;

const Title = styled.h1`
  margin: 0px 0px 16px;
  padding: 0px 0px 9px;
  color: #333;
  margin-top: 0px;
  font-size: 2em;
  font-family: 'Roc Grotesk Regular';
  padding-bottom: 0.3em;
  border-bottom: 1px solid #ddd;
`;
