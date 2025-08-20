import { JSX } from 'react';

import { FeatureCard, HeroBanner } from '../../components';
import { ButtonTheme } from '../../enums';
import { FeatureCardData } from '../../interfaces';

import HeroImage from './images/hero.png';
import { benefitsData } from './main.consts';
import { BenefitsHeader, BenefitsHeaderContainer, BenefitsSectionWrapper, BenefitsSubheader, BenefitsWrapper, Wrapper } from './main.styled';

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
      <BenefitsSectionWrapper>
        <BenefitsHeaderContainer>
          <BenefitsHeader>
            Why is lander ?
          </BenefitsHeader>
          <BenefitsSubheader>
            Lander is simply product landing page template for any products. If you are searching for product landing page to create sales, lander is perfect.
          </BenefitsSubheader>
        </BenefitsHeaderContainer>
        <BenefitsWrapper>
          {benefitsData.map((benefit: FeatureCardData, index: number): JSX.Element => (
            <FeatureCard
              headline={benefit.headline}
              icon={benefit.icon}
              key={`${benefit.headline}_${index}`}
              supportingText={benefit.supportingText}
            />
          ))}
        </BenefitsWrapper>
      </BenefitsSectionWrapper>
    </Wrapper>
  )
}
