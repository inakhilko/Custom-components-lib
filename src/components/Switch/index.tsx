import React, { type ComponentProps, useState } from 'react';
import './Switch.styles.scss';

const Switch: React.FC<ComponentProps<'input'>> = (
  props: ComponentProps<'input'>
) => {
  const { checked = false, disabled = false, type, ...otherProps } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const onCheckboxClick = (): void => {
    setIsChecked((prev) => !prev);
  };

  const checkboxElementClasses = [
    'switch',
    disabled && 'switch--disabled',
    isChecked && 'switch--checked',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={checkboxElementClasses} data-testid="tested-switch">
      <div className="switch__block" onClick={onCheckboxClick}>
        <input
          className="switch__block-input"
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          {...otherProps}
        />
        <div className="switch__block-circle"></div>
        <div className="switch__block-circle--hovered"></div>
      </div>
      <div className="switch__ellipsis"></div>
    </label>
  );
};

export default Switch;
