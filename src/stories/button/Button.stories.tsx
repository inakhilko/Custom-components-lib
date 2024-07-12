import type  { Meta, StoryObj } from '@storybook/react';
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
      console.log('Small Text Button');
    },
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Contained Outlined Button');
    },
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Outlined Button');
    },
  },
};

export const Small: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'small',
    onClick: () => {
      console.log('Small Outlined Button');
    },
  },
};

export const Medium: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'medium',
    onClick: () => {
      console.log('Medium Outlined Button');
    },
  },
};

export const Large: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    size: 'large',
    onClick: () => {
      console.log('Large Outlined Button');
    },
  },
};
// export const Contained: Story = {
//   args: {
//     text: 'Button',
//     primary: false,
//     disabled: false,
//     size: 'small',
//     onClick: () => { console.log('Button'); },
//   },
// };
