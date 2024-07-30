import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  it('renders the correct element', () => {
    render(
      <Modal open={false}>
        <p>This is modal</p>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Modal open={false}>
        <p>This is modal</p>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toContainHTML('p');
  });

  it('renders open', () => {
    render(
      <Modal open={true}>
        <p>This is modal</p>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toHaveClass('modal--opened');
  });

  it('does something on close', () => {
    const onModalClose = jest.fn();
    render(
      <Modal open={false} onClose={onModalClose}>
        <p>This is modal</p>
      </Modal>
    );
    fireEvent.click(screen.getByTestId('modal-backdrop'));
    expect(onModalClose).toHaveBeenCalled();
  });
});
