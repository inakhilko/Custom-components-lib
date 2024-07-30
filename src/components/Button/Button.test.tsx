import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  it('renders the correct element', () => {
    render(
      <Button variant="text" size="medium">
        Hello, World!
      </Button>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the correct content', () => {
    render(
      <Button variant="text" size="medium">
        Hello, World!
      </Button>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Hello, World!');
  });

  it('renders the correct variant and size', () => {
    render(
      <Button variant="text" size="medium">
        Hello, World!
      </Button>
    );
    expect(screen.getByText('Hello, World!')).toHaveClass(
      'button-variant--text',
      'button-size--medium'
    );
  });

  it('renders a disabled button', () => {
    const onClickMock = jest.fn();

    render(
      <Button
        variant="text"
        size="medium"
        disabled={true}
        onClick={onClickMock}
      >
        Hello, World!
      </Button>
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass('button--disabled');
    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('renders a button that is clicked', () => {
    const onClick = jest.fn();
    render(
      <Button variant="text" size="medium" onClick={onClick}>
        Hello, World!
      </Button>
    );
    const buttonElement = screen.getByText('Hello, World!');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
