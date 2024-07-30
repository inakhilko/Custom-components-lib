import React, { type ChangeEvent, type ComponentProps, useState } from 'react';
import './Checkbox.styles.scss';

export interface CheckboxProps extends ComponentProps<'input'> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const {
    checked = false,
    disabled = false,
    label,
    type,
    onChange,
    ...otherProps
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked((prev) => !prev);
    onChange?.(event);
  };

  const checkboxElementClasses = ['custom-checkbox'];

  if (disabled) {
    checkboxElementClasses.push('custom-checkbox--disabled');
  }
  if (isChecked) {
    checkboxElementClasses.push('custom-checkbox--checked');
  }

  return (
    <label
      className={checkboxElementClasses.join(' ')}
      data-testid="tested-checkbox"
    >
      <span className="custom-checkbox__block">
        {isChecked ? (
          <svg
            className="custom-checkbox__icon custom-checkbox__icon--checked"
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
          onChange={onInputChange}
          {...otherProps}
        />
      </span>

      <span className="custom-checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
