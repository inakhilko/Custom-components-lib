import React, { ReactNode } from 'react';
import './TextField.styles.scss';

export type TextFieldProps = {
  disabled: boolean;
  error: boolean;
};

type PropsWithChildren<P> = P & { children?: ReactNode };

const TextField: React.FC<PropsWithChildren<TextFieldProps>> = ({
  disabled,
  error,
  children,
  ...props
}) => {
  return (
    <fieldset className="text-field">
      <legend className="text-field__name">Do you agree?</legend>
      <input className="text-field__input" type="text" id="" name="agree" value="Yes!" {...props} />
    </fieldset>
  );
};

export default TextField;
