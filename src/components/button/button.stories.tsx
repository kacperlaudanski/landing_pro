import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';

import { ButtonTheme, ButtonType } from '../../enums';

import { Button } from './button.component';
import { ButtonProps } from './button.types';

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    theme: { control: 'select', options: Object.values(ButtonTheme) },
    type: { control: 'select', options: Object.values(ButtonType) },
  },
};
export default meta;

const defaultProps: ButtonProps = {
  label: 'Example',
  // TODO add action handling when available
  onClick: () => {},
  theme: ButtonTheme.PrimaryBlue,
  type: ButtonType.Button,
}

const Template: StoryFn<ButtonProps> = (args: ButtonProps): JSX.Element => <Button {...args} />;

export const PrimaryBlue: StoryObj<ButtonProps> = Template.bind({});
PrimaryBlue.args = {
  ...defaultProps,
};

export const SecondaryBlue: StoryObj<ButtonProps> = Template.bind({});
SecondaryBlue.args = {
  ...defaultProps,
  theme: ButtonTheme.SecondaryBlue,
};

export const FullWidth: StoryObj<ButtonProps> = Template.bind({});
FullWidth.args = {
  ...defaultProps,
  fullWidth: true,
};
