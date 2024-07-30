import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './index';

describe('Switch component', () => {
  it('renders the correct element', () => {
    render(<Switch />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders a disabled input', () => {
    render(<Switch disabled={true} />);
    const switchElement = screen.getByTestId('tested-switch');
    const switchInputElement: HTMLInputElement = screen.getByRole('checkbox');

    expect(switchInputElement).toBeDisabled();
    expect(switchElement).toHaveClass('switch--disabled');

    expect(switchInputElement).not.toBeChecked();
    fireEvent.click(switchElement);
    expect(switchInputElement).not.toBeChecked();
  });

  it('renders the correct initial value', () => {
    render(<Switch checked={true} />);
    const switchInput: HTMLInputElement = screen.getByRole('checkbox');
    expect(switchInput.checked).toBeTruthy();
  });

  it('is able to change value', () => {
    render(<Switch />);
    const switchElement: HTMLInputElement = screen.getByRole('checkbox');
    fireEvent.change(switchElement, { target: { checked: true } });
    expect(switchElement.checked).toBeTruthy();
  });

  it('is able to do something on change', () => {
    render(<Switch />);

    const switchElement = screen.getByTestId('tested-switch');
    const switchInputElement: HTMLInputElement = screen.getByRole('checkbox');

    expect(switchInputElement).not.toBeChecked();
    fireEvent.click(switchElement);
    expect(switchInputElement).toBeChecked();
  });
});
