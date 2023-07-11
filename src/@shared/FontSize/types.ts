import React, { ReactNode } from 'react';

interface PropertiesType {
  Font: string;
  Weight: string;
  Size: string;
  LineHeight: string;
  CharSpacing: string;
}

export type FontSizeProps = {
  mainTitle?: string;
  order?: number;
  properties?: PropertiesType;
  example?: string;
  children?: ReactNode;
};
