import React from 'react';
import './TextField.styles.scss';
export type TextFieldProps = {
  disabled: boolean;
  error: boolean;
};
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
