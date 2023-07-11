import React, { useState } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { Timelineprops } from './types';
import { Mark, Notepen, Envelop } from '../Svgs/index';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 1.5rem;
`;

const Notedirection = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  box-sizing: inherit;
`;

const Dot = styled.div`
  width: 9px;
  height: 9px;
  margin: 4px 0;
  content: '';
  background: #84888e;
  line-height: 20px;
  border-radius: 50%;
`;

const Customline = styled.div`
  flex: 1;
  width: 0;
  border-left: 1px dashed #84888e;
`;

const Timeline: FunctionComponent<Timelineprops> = ({ type, style, children, ...props }) => {
  return (
    <Container data-testid={'timelineContainer'}>
      <Notedirection>
        {type == 'dot' && <Dot></Dot>}
        {type == 'mark' && <Mark color="#84888e" style={{ marginTop: 4, marginBottom: 4 }} />}
        {type == 'note' && <Notepen color="#84888e" style={{ marginTop: 4, marginBottom: 4 }} />}
        {type == 'envelop' && <Envelop color="#84888e" style={{ marginTop: 4, marginBottom: 4 }} />}
        <Customline></Customline>
      </Notedirection>
      <Content style={style}>{children}</Content>
    </Container>
  );
};

export default Timeline;
