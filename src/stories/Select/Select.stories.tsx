import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Select',
  component: Example,
};

export default meta;
type Story = StoryObj<Parameters<typeof Example>[0]>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    selectOptions: ['first option', 'second option', 'third option'],
    label: 'Choose option',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    selectOptions: ['first option', 'second option', 'third option'],
    label: 'Choose option',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    selectOptions: ['first option', 'second option', 'third option'],
    label: 'Choose option',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    selectOptions: ['first option', 'second option', 'third option'],
    label: 'Choose option',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    selectOptions: ['first option', 'second option', 'third option'],
    label: 'Choose option',
    error: true,
  },
};
