import React, { FC } from 'react';
import { ButtonProps } from '../../components/Button/Button';
import { Button } from '../../components/Button';
import TextField, { TextFieldProps } from '../../components/TextField';

const Example: FC<TextFieldProps> = ({ disabled = false, error = false }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TextField disabled={disabled} error={error}>
        Test
      </TextField>
    </div>
  );
};

export default Example;
