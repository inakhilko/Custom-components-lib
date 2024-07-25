import React, { type ComponentProps } from 'react';
import './Checkbox.styles.scss';
export interface CheckboxProps extends ComponentProps<'input'> {
    label: string;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
