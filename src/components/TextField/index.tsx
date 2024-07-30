import React, { type ComponentProps, useState } from 'react';
import './TextField.styles.scss';

export interface TextFieldProps extends ComponentProps<'input'> {
  error?: { message: string };
  variant: 'standard' | 'filled' | 'outlined';
  label?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    variant = 'standard',
    label,
    disabled,
    error,
    value,
    onChange,
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState('');
  const textFieldElementClasses = [
    'custom-text-field',
    `custom-text-field--${variant}`,
    disabled === true && 'custom-text-field--disabled',
    error != null && 'custom-text-field--error',
    inputValue !== '' && 'custom-text-field--entered',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <label className={textFieldElementClasses} data-testid="tested-textfield">
      <span className="custom-text-field__label">{label}</span>
      <div className="custom-text-field__wrapper">
        <input
          className="custom-text-field__input"
          type="text"
          disabled={disabled}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange?.(e);
          }}
          {...otherProps}
        />
        {variant === 'outlined' && (
          <fieldset className="custom-text-field__set">
            <legend className="custom-text-field__legend">{label}</legend>
          </fieldset>
        )}
      </div>
      {error?.message !== undefined && (
        <span className="custom-text-field__error">{error.message}</span>
      )}
    </label>
  );
};

export default TextField;
