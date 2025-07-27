import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';
import { siFacebook, siInstagram, siX, siYoutube } from 'simple-icons';

import { SocialMediaItem } from '../../interfaces';

import { Footer } from './footer.component';
import { FooterProps } from './footer.types';
import ExampleLogo from './images/logo.svg';

const meta: Meta<FooterProps> = {
  component: Footer,
  title: 'Components/Footer',
  argTypes: {
    bottomBarText: { control: 'text' },
    highlightedText: { control: 'text' },
    supportingText: { control: 'text' },
    logo: { control: 'text' },
    socials: { control: 'object' },
  },
};
export default meta;

const exampleSocials: SocialMediaItem[] = [
  { logo: siYoutube, path: '/' },
  { logo: siInstagram, path: '/' },
  { logo: siX, path: '/' },
  { logo: siFacebook, path: '/' },
];

const Template: StoryFn<FooterProps> = (args: FooterProps): JSX.Element => <Footer {...args} />;

export const Example: StoryObj<FooterProps> = Template.bind({});
Example.args = {
  bottomBarText: '© 2023 Lander. Designed by',
  highlightedText: ' TemplatesJungle',
  supportingText: 'Lander best multi-purpose product landing page.',
  logo: ExampleLogo,
  socials: exampleSocials,
};
