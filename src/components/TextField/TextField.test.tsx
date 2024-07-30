import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './index';

describe('TextField component', () => {
  it('renders the correct element', () => {
    render(<TextField variant={'outlined'} label="Test textfield" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders a disabled input', () => {
    render(
      <TextField variant={'outlined'} label="Test textfield" disabled={true} />
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.getByTestId('tested-textfield')).toHaveClass(
      'custom-text-field--disabled'
    );
  });

  it('renders the correct label', () => {
    render(<TextField variant={'outlined'} label="Test textfield" />);
    expect(screen.getByTestId('tested-textfield')).toHaveTextContent(
      'Test textfield'
    );
  });

  it('renders the correct variant', () => {
    render(<TextField variant={'filled'} label="Test textfield" />);
    expect(screen.getByTestId('tested-textfield')).toHaveClass(
      'custom-text-field--filled'
    );
  });

  it('is able to change value', () => {
    render(<TextField variant="standard" />);
    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(inputElement.value).toBe('Hello');
  });

  it('renders the outlined text field with fieldset', () => {
    render(<TextField variant={'outlined'} label="Test textfield" />);
    expect(screen.getByTestId('tested-textfield')).toContainHTML('fieldset');
  });

  it('renders a text field with an error', () => {
    render(
      <TextField
        variant={'outlined'}
        label="Test textfield"
        error={{ message: 'Invalid input' }}
      />
    );
    expect(screen.getByTestId('tested-textfield')).toHaveClass(
      'custom-text-field--error'
    );
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });

  it('changes class if the input is entered', () => {
    render(<TextField variant={'outlined'} label="Test textfield" />);
    const textFieldElement = screen.getByTestId('tested-textfield');
    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Changed value' } });
    expect(inputElement.value).toBe('Changed value');
    expect(textFieldElement).toHaveClass('custom-text-field--entered');
  });
});
