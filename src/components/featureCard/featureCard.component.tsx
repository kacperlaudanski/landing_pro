import { JSX } from 'react'

import { Wrapper } from './featureCard.styled';
import { FeatureCardProps } from './featureCard.types'

export const FeatureCard: React.FC<FeatureCardProps> = (props: FeatureCardProps): JSX.Element => {
  const { className, headline, icon, supportingText }: FeatureCardProps = props;

  return (
    <Wrapper className={className}>

    </Wrapper>
  );
};
