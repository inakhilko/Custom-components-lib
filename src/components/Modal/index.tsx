import React, { type ComponentProps, useState } from 'react';
import './Modal.styles.scss';
import useOutsideClick from '../../hooks/onClickOutside';

const Modal: React.FC<ComponentProps<'dialog'>> = (
  props: ComponentProps<'dialog'>
) => {
  const { open = false, children, ...otherProps } = props;

  const [isModalOpen, setIsModalOpen] = useState(open);

  const onOutsideModalContentClick = (): void => {
    setIsModalOpen(false);
  };

  const ref = useOutsideClick(onOutsideModalContentClick);

  return (
    <dialog className="modal" open={isModalOpen} {...otherProps}>
      <div className="modal-wrapper" ref={ref}>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
