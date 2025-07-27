import { JSX } from 'react';

import { SocialMediaItem } from '../../interfaces';

import {
  BottomBar,
  BottomBarText,
  ContentWrapper,
  HighlightedText,
  Logo,
  LogoWrapper,
  SocialIcon,
  SocialItem,
  SocialsContainer,
  SupportingText,
  Wrapper,
} from './footer.styled';
import { FooterProps } from './footer.types';

export const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const { className, logo, socials, supportingText, bottomBarText, highlightedText }: FooterProps = props;

  return (
    <Wrapper className={className}>
      <ContentWrapper>
        <LogoWrapper>
          <Logo alt='logo' src={logo} />
          <SupportingText>
            {supportingText}
          </SupportingText>
        </LogoWrapper>
        <SocialsContainer>
          {/* TODO: Move brand icon to separate component */}
          {socials.map((item: SocialMediaItem): JSX.Element => (
            <SocialItem href={item.path} key={item.path}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  fill={`#${item.logo.hex}`}
                >
                  <path d={item.logo.path} />
                </svg>
            </SocialItem>
          ))}
        </SocialsContainer>
      </ContentWrapper>
      <BottomBar>
        <BottomBarText>
          {bottomBarText}
          <HighlightedText>{highlightedText}</HighlightedText>
        </BottomBarText>
      </BottomBar>
    </Wrapper>
  );
};
