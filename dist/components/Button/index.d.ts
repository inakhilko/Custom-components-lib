import React, { MouseEventHandler, ReactNode } from 'react';
import './Button.styles.scss';
export type ButtonProps = {
  variant: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size: 'small' | 'medium' | 'large';
};
type PropsWithChildren<P> = P & {
  children?: ReactNode;
};
declare const Button: React.FC<PropsWithChildren<ButtonProps>>;
export default Button;
