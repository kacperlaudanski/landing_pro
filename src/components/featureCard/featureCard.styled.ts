import { styled } from 'styled-components';
import { Color } from '../../enums';

import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.div`
  width: fit-content;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${Color.Gray100};
  border-radius: 10px;
  border: 1px solid ${Color.Gray600};
  padding: 80px 40px;
`;

export const Header: StyledComponent = styled.p`
  font-size: 28px;
  color: ${Color.Gray800};
`;

export const SupportingText: StyledComponent = styled.p`
  font-size: 16px;
  color: ${Color.Gray600};
`;
