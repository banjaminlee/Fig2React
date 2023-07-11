import * as React from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { TreeviewProps } from './types';
import 'react-dropzone-uploader/dist/styles.css';
import { createNode, Diagram } from 'react-easy-diagram';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  & .react_fast_diagram_MiniControl_Default {
    display: none;
  }
`;

const Treeview: FunctionComponent<TreeviewProps> = ({
  initState,
  settings,
  style,
  children,
  ...props
}) => {
  return (
    <Wrapper style={style}>
      <Diagram initState={initState} settings={settings} />
    </Wrapper>
  );
};

export default Treeview;
