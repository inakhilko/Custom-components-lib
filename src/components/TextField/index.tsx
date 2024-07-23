import React, { type ComponentProps, useState } from 'react';
import './TextField.styles.scss';

export interface TextFieldProps extends ComponentProps<'input'> {
  error: string;
  variant: 'standard' | 'filled' | 'outlined';
  label: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    variant = 'standard',
    label,
    disabled,
    error = '',
    value,
    onChange,
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState('');
  const textFieldElementClasses = [
    'custom-text-field',
    `custom-text-field--${variant}`,
  ];
  if (disabled === true) {
    textFieldElementClasses.push('custom-text-field--disabled');
  }
  if (error !== '') {
    textFieldElementClasses.push('custom-text-field--error');
  }
  if (inputValue !== '') {
    textFieldElementClasses.push('custom-text-field--entered');
  }
  return (
    <div className={textFieldElementClasses.join(' ')}>
      <label className="custom-text-field__label">{label}</label>
      <div className="custom-text-field__wrapper">
        <input
          className="custom-text-field__input"
          type="text"
          disabled={disabled}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (onChange !== undefined) {
              onChange(e);
            }
          }}
          {...otherProps}
        />
        {variant === 'outlined' && (
          <fieldset className="custom-text-field__set">
            <legend className="custom-text-field__legend">{label}</legend>
          </fieldset>
        )}
        {/* {error !== '' && <span className="error">{error}</span>} */}
      </div>
    </div>
  );
};

export default TextField;
