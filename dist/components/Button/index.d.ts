import React, { type ComponentProps } from 'react';
import './Button.styles.scss';
export interface ButtonProps extends ComponentProps<'button'> {
    variant: 'text' | 'contained' | 'outlined';
    size: 'small' | 'medium' | 'large';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
