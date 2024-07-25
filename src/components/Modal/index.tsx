import React, { type ComponentProps, useState } from 'react';
import './Modal.styles.scss';
import useOutsideClick from '../../hooks/onClickOutside';

interface ModalProps extends ComponentProps<'div'> {
  open: boolean;
  onClose: (event?: Event) => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { open, onClose, children, ...otherProps } = props;

  // const [isModalOpen, setIsModalOpen] = useState(open);

  // const onOutsideModalContentClick = (event: Event): void => {
  //   // setIsModalOpen(false);
  //   onClose(event);
  // };

  // const ref = useOutsideClick(onOutsideModalContentClick);

  const modalClassesList = ['modal'];

  if (open) {
    modalClassesList.push('modal--opened');
  }

  return (
    <div className={modalClassesList.join(' ')}>
      <div
        className="modal__backdrop"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className="modal__content" {...otherProps}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
