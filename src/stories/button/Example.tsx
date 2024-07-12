import React, { FC } from 'react';
import { ButtonProps } from '../../components/Button/Button';
import { Button } from '../../components/Button';

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  size,
  variant,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onClick}
      >
        Test
      </Button>
    </div>
  );
};

export default Example;
