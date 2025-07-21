import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';
import { BrowserRouter } from 'react-router';
import { Path } from '../../enums';
import { NavbarOption } from '../interfaces';

import ExampleLogo from './images/logo.svg';
import { Navbar } from './navbar.component';
import { NavbarProps } from './navbar.types';

const meta: Meta<NavbarProps> = {
  component: Navbar,
  title: 'Components/Navbar',
  argTypes: {
    logo: { control: 'text' },
    options: { control: 'object' },
  },
};
export default meta;

const exampleOptions: NavbarOption[] = [
  {
    label: 'Home',
    path: Path.Main,
    isActive: true,
  },
  {
    label: 'About',
    path: Path.Main,
    isActive: false,
  },
];

const defaultArgs: NavbarProps = {
  logo: ExampleLogo,
  options: exampleOptions,
};

const Template: StoryFn<NavbarProps> = (args: NavbarProps): JSX.Element => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
);

export const Example: StoryObj<NavbarProps> = Template.bind({});
Example.args = {
  ...defaultArgs,
};
