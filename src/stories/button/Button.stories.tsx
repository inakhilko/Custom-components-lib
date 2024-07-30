import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Test',
  },
};

export const Text: Story = {
  args: {
    ...Default.args,
    variant: 'text',
    size: 'small',
    onClick: () => {
      console.log('Small Text');
    },
  },
};

export const Contained: Story = {
  args: {
    ...Default.args,
    variant: 'contained',
    size: 'small',
    onClick: () => {
      console.log('Small Contained');
    },
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
    size: 'small',
    onClick: () => {
      console.log('Small Outlined');
    },
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
    size: 'small',
    onClick: () => {
      console.log('Small Outlined');
    },
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
    size: 'medium',
    onClick: () => {
      console.log('Medium Outlined');
    },
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
    size: 'large',
    onClick: () => {
      console.log('Large Outlined');
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
    disabled: true,
    size: 'large',
    onClick: () => {
      console.log('Large Outlined Disabled');
    },
  },
};
