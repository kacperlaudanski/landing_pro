import { styled } from 'styled-components';
import { Color } from '../../enums';

import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  text-align: center;
`;

export const ReviewDetailContainer: StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Review: StyledComponent = styled.p`
  color: ${Color.Gray600};
  font-size: 16px;
`;

export const Details: StyledComponent = styled.p`
  font-size: 18px;
`;