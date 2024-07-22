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
  return (
    <button
      className={[
        'button',
        `button-variant--${variant}`,
        `button-size--${size}`,
        disabled === true ? `button--disabled` : '',
      ].join(' ')}
      type="button"
      {...otherProps}
    />
  );
};

export default Button;
