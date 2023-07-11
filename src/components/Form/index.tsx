import React from 'react';
import { forwardRef, FormEventHandler, ReactNode, FormHTMLAttributes } from 'react';
import { BaseProps } from './types';

export interface Props extends BaseProps, FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form = forwardRef<HTMLFormElement, Props>(function Form(
  { onSubmit, className, style, children, ...rest },
  ref,
) {
  return (
    <form {...rest} ref={ref} onSubmit={onSubmit} className={className} style={style}>
      {children}
    </form>
  );
});

export default Form;
