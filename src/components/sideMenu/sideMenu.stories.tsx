import { Meta, ReactRenderer, StoryFn, StoryObj } from '@storybook/react-vite';
import { Home, PersonStanding } from 'lucide-react';
import { JSX } from 'react';
import { MemoryRouter } from 'react-router';
import { PartialStoryFn } from 'storybook/internal/csf';

import { Path } from '../../enums';
import { MenuOption } from '../../interfaces';

import { SideMenu } from './sideMenu.component';
import { SideMenuProps } from './sideMenu.types';

const meta: Meta<SideMenuProps> = {
  component: SideMenu,
  title: 'Components/SideMenu',
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, SideMenuProps>): JSX.Element => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  argTypes: {
    options: { control: 'object' },
  },
};
export default meta;

const exampleOptions: MenuOption[] = [
  {
    label: 'Home',
    path: Path.Main,
    isActive: true,
    icon: Home,
  },
  {
    label: 'About',
    path: Path.Main,
    isActive: false,
    icon: PersonStanding,
  },
];

const Template: StoryFn<SideMenuProps> = (args: SideMenuProps): JSX.Element => <SideMenu {...args} />;

export const Example: StoryObj<SideMenuProps> = Template.bind({});
Example.args = {
  isOpen: true,
  options: exampleOptions,
};
