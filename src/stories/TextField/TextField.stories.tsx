import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../../components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Enter your variant',
  },
};

export const Standard: Story = {
  args: {
    ...Default.args,
    variant: 'standard',
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: 'Input is not valid',
  },
};
