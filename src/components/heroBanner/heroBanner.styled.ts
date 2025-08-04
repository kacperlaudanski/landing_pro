import { styled } from 'styled-components';

import { Breakpoint, Color, FontWeight } from '../../enums';
import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media ${Breakpoint.SmallDesktop} {
    flex-direction: row;
  }
`;
  
export const ContentWrapper: StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 60px;
  padding: 20px 16px;

  @media ${Breakpoint.SmallDesktop} {
    padding: 20px 40px;
    max-width: 50%;
  }
`;

export const Image: StyledComponent = styled.img`
  width: 100%;
  max-width: 660px;
  max-height: 549px;

  @media ${Breakpoint.SmallDesktop} {
    width: 50%;
  }
`;

export const TextContainer: StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Headline: StyledComponent = styled.p`
  font-size: 64px;
  font-weight: ${FontWeight.Bold};
  font-family: 'Poppins', sans-serif;
  margin: 0;

  @media ${Breakpoint.SmallDesktop} {
    font-size: 84px;
  }
`;

export const SupportingText: StyledComponent = styled.p`
  font-size: 20px;
  color: ${Color.Gray600};
  font-family: 'Poppins', sans-serif;
  margin: 0;
`;
