import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';

import { ButtonTheme } from '../../enums';

import { HeroBanner } from './heroBanner.component';
import { HeroBannerProps } from './heroBanner.types';
import ExampleImage from './images/hero.example.png';

const meta: Meta<HeroBannerProps> = {
  component: HeroBanner,
  title: 'Components/HeroBanner',
  argTypes: {
    headline: { control: 'text' },
    supportingText: { control: 'text' },
    buttonData: { control: 'object' },
    image: { control: 'text' },
  },
};
export default meta;

const defaultProps: HeroBannerProps = {
  headline: 'Example header',
  supportingText: 'Write here about your product short description.',
  buttonData: {
    label: 'Order Now',
    onClick: () => {},
    theme: ButtonTheme.PrimaryBlue,
  },
  image: ExampleImage,
}

const Template: StoryFn<HeroBannerProps> = (args: HeroBannerProps): JSX.Element => <HeroBanner {...args} />;

export const Example: StoryObj<HeroBannerProps> = Template.bind({});
Example.args = {
  ...defaultProps,
};
