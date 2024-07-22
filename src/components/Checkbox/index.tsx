import React, { ChangeEvent, useState } from 'react';
import './Checkbox.styles.scss';

export type CheckboxProps = {
  checked: boolean;
  onChange: (event: ChangeEvent) => void;
  disabled: boolean;
  label: string;
};

function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <>
      <label
        onClick={() => {
          setIsChecked((prev) => !prev);
        }}
        className={`custom-checkbox ${disabled && 'custom-checkbox--disabled'} ${isChecked && 'custom-checkbox--checked'}`}
      >
        <span className="custom-checkbox__block">
          {isChecked ? (
            <svg
              className="custom-checkbox__icon"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckBoxIcon"
            >
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </svg>
          ) : (
            <svg
              className="custom-checkbox__icon"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckBoxOutlineBlankIcon"
            >
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
            </svg>
          )}
          <input
            className="custom-checkbox__input"
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            disabled={disabled}
            onChange={(event) => {
              onChange(event);
            }}
          />
        </span>
        <span>{label}</span>
      </label>

      <label className="checkbox">
        {isChecked ? (
          <svg
            className="custom-checkbox__icon"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CheckBoxIcon"
          >
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
        ) : (
          <svg
            className="custom-checkbox__icon"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CheckBoxOutlineBlankIcon"
          >
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          </svg>
        )}
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </>
  );
}

export default Checkbox;
