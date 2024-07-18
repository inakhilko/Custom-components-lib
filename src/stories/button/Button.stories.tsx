import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;
type Story = StoryObj<Parameters<typeof Example>[0]>;

export const Text: Story = {
  args: {
    variant: 'text',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Text Index');
    },
  },
};

export const TextHovered: Story = {
  args: {
    variant: 'text',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Text Index');
    },
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Contained Outlined Index');
    },
  },
};

export const ContainedHovered: Story = {
  args: {
    variant: 'contained',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Contained Outlined Index');
    },
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Outlined Index');
    },
  },
};

export const OutlinedHovered: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Outlined Index');
    },
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Small: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Outlined Index');
    },
  },
};

export const Medium: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'medium',
    onClick: () => {
      console.log('Medium Outlined Index');
    },
  },
};

export const Large: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'large',
    onClick: () => {
      console.log('Large Outlined Index');
    },
  },
};
