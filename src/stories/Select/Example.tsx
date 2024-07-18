import React, { FC } from 'react';
import Select, { SelectProps } from '../../components/Select';

const Example: FC<SelectProps> = ({
  selectOptions,
  label,
  variant,
  disabled = false,
  error = false,
}) => {
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
      <Select
        label={label}
        variant={variant}
        selectOptions={selectOptions}
        disabled={disabled}
        error={error}
      />
    </div>
  );
};

export default Example;
