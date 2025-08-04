import { useMediaQuery } from '@mui/material';
import { JSX } from 'react';

import { Breakpoint, ButtonType } from '../../enums';
import { Button } from '../button/button.component';

import { ContentWrapper, Headline, Image, SupportingText, TextContainer, Wrapper } from './heroBanner.styled';
import { HeroBannerProps } from './heroBanner.types';

export const HeroBanner: React.FC<HeroBannerProps> = (props: HeroBannerProps): JSX.Element => {
  const { buttonData, headline, image, supportingText }: HeroBannerProps = props;
  const isSmallDesktop: boolean = useMediaQuery(Breakpoint.SmallDesktop);

  return (
    <Wrapper>
      <ContentWrapper>
        <TextContainer>
          <Headline>
            {headline}
          </Headline>
          <SupportingText>
            {supportingText}
          </SupportingText>
        </TextContainer>
        <Button
          fullWidth={!isSmallDesktop}
          label={buttonData.label}
          onClick={buttonData.onClick}
          theme={buttonData.theme}
          type={ButtonType.Button}
        />
      </ContentWrapper>
      <Image alt='hero-image' src={image} />
    </Wrapper>
  )
}
