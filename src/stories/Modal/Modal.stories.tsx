import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../components/Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2 className="MuiTypography-root MuiTypography-h6 css-1anx036">
          Text in a modal
        </h2>
        <p className="MuiTypography-root MuiTypography-body1 css-zx0575">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </>
    ),
  },
};

export const Opened: Story = {
  args: {
    ...Default.args,
    open: true,
  },
};

// export const Checked: Story = {
//   args: {
//     checked: true,
//     onChange: () => {
//       console.log('Switched');
//     },
//   },
// };
//
// export const Disabled: Story = {
//   args: {
//     checked: false,
//     onChange: () => {
//       console.log('Hello checkbox');
//     },
//     disabled: true,
//   },
// };
