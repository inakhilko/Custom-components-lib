import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const NotChecked: Story = {
  args: {
    checked: false,
    onChange: () => { console.log('Hello checkbox'); },
    label: 'Click here',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => { console.log('Hello checkbox'); },
    label: 'Click here',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    onChange: () => { console.log('Hello checkbox'); },
    label: 'Click here',
    disabled: true,
  },
};
