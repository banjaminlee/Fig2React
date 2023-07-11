import React from "react";
import { IDiagramInitState, ISettings } from 'react-easy-diagram';

export type TreeviewProps = {
  initState: IDiagramInitState | undefined;
  settings?: ISettings | undefined;
  style?: React.CSSProperties;
};
