import React, { ReactNode, useRef, useState } from 'react';
import './TextField.styles.scss';

export type TextFieldProps = {
  disabled: boolean;
  error: boolean;
};

const TextField: React.FC<TextFieldProps> = ({ disabled, error, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div
      className={`custom-text-field ${disabled && 'custom-text-field--disabled'} ${error && 'custom-text-field--error'} ${inputValue && 'custom-text-field--entered'}`}
    >
      <label className="text-field__label" htmlFor="">
        Do you agree?
      </label>
      <div className={`text-field`}>
        <input
          className="text-field__input"
          type="text"
          id=""
          name="agree"
          disabled={disabled}
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
        />
        <fieldset className="text-field__set">
          <legend className="text-field__legend">Do you agree?</legend>
        </fieldset>
      </div>
    </div>
  );
};

export default TextField;
