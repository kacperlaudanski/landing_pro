import { JSX } from 'react'

import { Header, SupportingText, Wrapper } from './featureCard.styled';
import { FeatureCardProps } from './featureCard.types'

export const FeatureCard: React.FC<FeatureCardProps> = (props: FeatureCardProps): JSX.Element => {
  const { className, headline, icon: Icon, supportingText }: FeatureCardProps = props;

  return (
    <Wrapper className={className}>
      <Icon size={50} />
      <Header>
        {headline}
      </Header>
      <SupportingText>
        {supportingText}
      </SupportingText>
    </Wrapper>
  );
};
