import React, {ReactNode} from 'react';

export type CustomFieldProps = {
  title: string,
  header?: string,
  image?: string,
  content?: ReactNode,
  children?: ReactNode,
}