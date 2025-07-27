import { styled } from 'styled-components';
import { Color, FontWeight } from '../../enums';

import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${Color.Gray100};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const ContentWrapper: StyledComponent = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const LogoWrapper: StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo: StyledComponent = styled.img`
  width: 172px;
  height: 69px;
`;

export const SupportingText: StyledComponent = styled.p`
  color: ${Color.Gray600};
  font-size: 16px;
  line-height: 188%;
`;

export const SocialsContainer: StyledComponent = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialItem: StyledComponent = styled.a`
  width: 40px;
  height: 40px;
  color: ${Color.Gray300};
  fill: ${Color.Gray300};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Color.Gray300};
  border-radius: 15px;
`;

export const SocialIcon: StyledComponent = styled.img``;

export const BottomBar: StyledComponent = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid ${Color.Gray300};
`;

export const BottomBarText: StyledComponent = styled.p`
  font-size: 16px;
  line-height: 188%;
`;

// TODO: change it to Markdown
export const HighlightedText: StyledComponent = styled.span`
  font-weight: ${FontWeight.Bold};
`;
