import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
declare const meta: Meta<typeof Example>;
export default meta;
type Story = StoryObj<Parameters<typeof Example>[0]>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Error: Story;
