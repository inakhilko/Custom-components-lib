import React, { type ComponentProps } from 'react';
import './Modal.styles.scss';
interface ModalProps extends ComponentProps<'div'> {
    open: boolean;
    onClose: (event?: Event) => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
