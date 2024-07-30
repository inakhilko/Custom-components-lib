import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './index';

describe('Select component', () => {
  it('renders the correct element', () => {
    render(
      <Select
        variant="standard"
        selectOptions={[1, 2, 3]}
        label="Test select"
      />
    );
    expect(screen.getByTestId('tested-select')).toBeInTheDocument();
  });

  it('renders a disabled select', () => {
    render(
      <Select
        variant="standard"
        selectOptions={['one', 'two', 'three']}
        label="Test select"
        disabled={true}
      />
    );
    const select = screen.getByTestId('tested-select');

    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(select).toHaveClass('custom-select--disabled');
    const dropdownElement = screen.getByRole('listbox');
    expect(dropdownElement).not.toHaveClass('custom-select__dropdown--opened');

    fireEvent.click(select);

    expect(dropdownElement).toHaveClass('custom-select__dropdown--opened');
  });

  it('opens dropdown on click and selects an option', () => {
    render(
      <Select
        variant="standard"
        selectOptions={['one', 'two', 'three']}
        label="Test select"
        disabled={false}
      />
    );
    const dropdownElement = screen.getByRole('listbox');
    expect(dropdownElement).not.toHaveClass('custom-select__dropdown--opened');

    const select = screen.getByTestId('tested-select');
    fireEvent.click(select);

    expect(dropdownElement).toHaveClass('custom-select__dropdown--opened');

    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input?.value).toBe('');

    // const option = screen.getByText('one');
    // fireEvent.click(select, {
    //   bubbles: true,
    //   currentTarget: option,
    //   target: select,
    // });
    //
    // expect(input?.value).toBe('one');
  });

  it('renders the correct variant', () => {
    render(
      <Select
        variant={'filled'}
        label="Test variant"
        selectOptions={['one', 'two', 'three']}
      />
    );
    expect(screen.getByTestId('tested-select')).toHaveClass(
      'custom-select--filled'
    );
  });

  it('has other class if there is an error', () => {
    render(
      <Select
        variant={'outlined'}
        label="Test variant"
        selectOptions={['one', 'two', 'three']}
        error={true}
      />
    );
    expect(screen.getByTestId('tested-select')).toHaveClass(
      'custom-select--error'
    );
  });
});
