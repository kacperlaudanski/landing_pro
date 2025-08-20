import { styled } from 'styled-components';

import { Breakpoint, Color, FontWeight } from '../../enums';
import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.main``;

export const BenefitsSectionWrapper: StyledComponent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 46px;
  flex-wrap: wrap;
  margin-top: 80px;

  @media ${Breakpoint.SmallDesktop} {
    margin-top: 160px;
  }
`;

export const BenefitsHeaderContainer: StyledComponent = styled.header`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const BenefitsHeader: StyledComponent = styled.p`
  font-size: 64px;
  font-weight: ${FontWeight.SemiBold};
`;

export const BenefitsSubheader: StyledComponent = styled.p`
  font-size: 16px;
  color: ${Color.Gray600};
`;

export const BenefitsWrapper: StyledComponent = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
