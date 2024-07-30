import React, { type ComponentProps } from 'react';
import './Button.styles.scss';

export interface ButtonProps extends ComponentProps<'button'> {
  variant: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'contained',
    disabled,
    size = 'medium',
    ...otherProps
  } = props;

  const buttonClasses = [
    'button',
    `button-variant--${variant}`,
    `button-size--${size}`,
    disabled === true ? 'button--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      type="button"
      disabled={disabled}
      {...otherProps}
    />
  );
};

export default Button;
