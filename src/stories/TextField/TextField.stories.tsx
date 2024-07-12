import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'TextField',
  component: Example,
};

export default meta;
type Story = StoryObj<Parameters<typeof Example>[0]>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};
