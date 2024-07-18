import React, { FC } from 'react';
import TextField, { TextFieldProps } from '../../components/TextField';

const Example: FC<TextFieldProps> = ({ disabled = false, error = false }) => {
  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TextField disabled={disabled} error={error} />
    </div>
  );
};

export default Example;
