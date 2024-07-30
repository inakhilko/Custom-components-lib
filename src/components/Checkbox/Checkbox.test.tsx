import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './index';

describe('Checkbox component', () => {
  it('renders the correct element', () => {
    render(<Checkbox label="Test checkbox" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders a disabled input', () => {
    render(<Checkbox label="Test checkbox" disabled={true} />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(screen.getByTestId('tested-checkbox')).toHaveClass(
      'custom-checkbox--disabled'
    );
  });

  it('renders the correct label', () => {
    render(<Checkbox label="Test checkbox" />);
    expect(screen.getByTestId('tested-checkbox')).toHaveTextContent(
      'Test checkbox'
    );
  });

  it('renders the correct initial value', () => {
    render(<Checkbox label="Test checkbox" checked={true} />);
    const checkboxInput: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkboxInput.checked).toBeTruthy();
  });

  it('is able to change value', () => {
    render(<Checkbox label="Test checkbox" />);
    const checkboxElement: HTMLInputElement = screen.getByRole('checkbox');
    fireEvent.change(checkboxElement, { target: { checked: true } });
    expect(checkboxElement.value).toBeTruthy();
  });

  it('calls onChange when checkbox is clicked', () => {
    const onChangeMock = jest.fn();

    render(<Checkbox label="Test checkbox" onChange={onChangeMock} />);
    const checkboxInput = screen.getByRole('checkbox');

    expect(checkboxInput).not.toBeChecked();

    fireEvent.click(checkboxInput);

    expect(onChangeMock).toHaveBeenCalled();
    expect(checkboxInput).toBeChecked();
  });
});
