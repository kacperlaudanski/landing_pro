import { JSX } from 'react';

import { HeroBanner } from '../../components';
import { ButtonTheme } from '../../enums';

import HeroImage from './images/hero.png';
import { Wrapper } from './main.styled';

export const Main: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <HeroBanner
        buttonData={{
          label: 'ORDER NOW',
          onClick: () => console.log(),
          theme: ButtonTheme.PrimaryBlue,
        }}
        headline='Your product landing page'
        image={HeroImage}
        supportingText='Write here about your product short description.'
      />
    </Wrapper>
  )
}
