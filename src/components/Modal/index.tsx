import React, { type ComponentProps, type MouseEvent, useEffect } from 'react';
import './Modal.styles.scss';

interface ModalProps extends ComponentProps<'div'> {
  open: boolean;
  onClose?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { open, onClose, children, ...otherProps } = props;

  const modalClassesList = ['modal', open && 'modal--opened']
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={modalClassesList} data-testid="modal">
      <div
        className="modal__backdrop"
        data-testid="modal-backdrop"
        onClick={(event) => {
          onClose?.(event);
        }}
      ></div>
      <div className="modal__content" {...otherProps}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
