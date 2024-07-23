import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../../components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const NotChecked: Story = {
  args: {
    onChange: () => {
      console.log('Switched');
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {
      console.log('Switched');
    },
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    onChange: () => {
      console.log('Hello checkbox');
    },
    disabled: true,
  },
};
