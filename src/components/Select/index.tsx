import React, { useCallback, useState } from 'react';
import './Select.styles.scss';
import useOutsideClick from '../../hooks/onClickOutside';

export interface SelectProps {
  variant: 'standard' | 'filled' | 'outlined';
  selectOptions: number[] | string[];
  label: string;
  disabled?: boolean;
  error?: boolean;
}

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

  const customSelectElementClasses = [
    'custom-select',
    `custom-select--${variant}`,
    selectedOption !== '' && 'custom-select--selected',
    isSelectMenuOpened && 'custom-select--opened',
    disabled && 'custom-select--disabled',
    error && 'custom-select--error',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={customSelectElementClasses}
      onClick={onCustomSelectClick}
      data-testid="tested-select"
    >
      <label className="custom-select__label" htmlFor="custom-select-input">
        {label}
      </label>
      <div className="custom-select__wrapper">
        <input
          className="custom-select__input"
          value={selectedOption}
          disabled={disabled}
          type={'text'}
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
        {selectOptions?.map((option) => {
          return (
            <li
              className={`custom-select__dropdown-option ${option === selectedOption && 'custom-select__dropdown-option--selected'}`}
              role="option"
              tabIndex={0}
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
