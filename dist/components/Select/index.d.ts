import React from 'react';
import './Select.styles.scss';
export interface SelectProps {
    variant: 'standard' | 'filled' | 'outlined';
    selectOptions: number[] | string[];
    label: string;
    disabled: boolean;
    error: boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
