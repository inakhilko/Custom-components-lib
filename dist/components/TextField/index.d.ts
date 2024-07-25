import React, { type ComponentProps } from 'react';
import './TextField.styles.scss';
export interface TextFieldProps extends ComponentProps<'input'> {
    error?: {
        message: string;
    };
    variant: 'standard' | 'filled' | 'outlined';
    label?: string;
}
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
