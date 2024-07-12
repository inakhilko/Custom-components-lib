import React, { MouseEventHandler, ReactNode } from 'react';
import './Button.styles.scss';

export type ButtonProps = {
  variant: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size: 'small' | 'medium' | 'large';
};

type PropsWithChildren<P> = P & { children?: ReactNode };

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'outlined',
  disabled,
  size,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={[
        'button',
        `button-variant--${variant}`,
        `button-size--${size}`,
        disabled && `button--disabled`,
      ].join(' ')}
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
