import React, { useCallback, useState } from 'react';
import './Select.styles.scss';
import useOutsideClick from '../../hooks/onClickOutside';

export type SelectProps = {
  variant: 'standard' | 'filled' | 'outlined';
  selectOptions: number[] | string[];
  label: string;
  disabled: boolean;
  error: boolean;
};

const Select: React.FC<SelectProps> = ({
  variant,
  selectOptions,
  label,
  disabled = false,
  error = false,
  ...props
}) => {
  const [isSelectMenuOpened, setIsSelectMenuOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const onOptionSelection = useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      if (!(event.target === event.currentTarget)) {
        setSelectedOption((event.target as HTMLUListElement).innerText);
      }
    },
    [setSelectedOption]
  );

  const onCustomSelectClick = useCallback(() => {
    setIsSelectMenuOpened((prev) => !prev);
  }, []);

  const handleClickOutsideSelectDropdown = useCallback(() => {
    setIsSelectMenuOpened(false);
  }, [setIsSelectMenuOpened]);

  const ref = useOutsideClick(handleClickOutsideSelectDropdown);

  return (
    <div
      ref={ref}
      className={`custom-select ${'custom-select--' + variant} ${selectedOption && 'custom-select--selected'} ${isSelectMenuOpened && 'custom-select--opened'}  ${disabled && 'custom-select--disabled'}`}
      onClick={onCustomSelectClick}
    >
      <label className="custom-select__label" htmlFor="custom-select-input">
        {label}
      </label>
      <div className="custom-select__wrapper">
        <input
          aria-invalid="false"
          aria-hidden="true"
          tabIndex={-1}
          className="custom-select__input"
          id="custom-select-input"
          value={selectedOption}
          disabled={disabled}
          readOnly
        />
        <svg
          className="custom-select__arrow"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ArrowDropDownIcon"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
        {variant === 'outlined' && (
          <fieldset aria-hidden="true" className="custom-select__fieldset">
            <legend className="custom-select__legend">{label}</legend>
          </fieldset>
        )}
      </div>
      <ul
        className={`custom-select__dropdown ${isSelectMenuOpened && 'custom-select__dropdown--opened'}`}
        onClick={onOptionSelection}
        role="listbox"
        id="select-dropdown"
      >
        {selectOptions &&
          selectOptions.map((option) => {
            return (
              <li
                className={`custom-select__dropdown-option ${option === selectedOption && 'custom-select__dropdown-option--selected'}`}
                role="option"
                key={option}
              >
                {option}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;
